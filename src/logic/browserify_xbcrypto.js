import bs58check from 'bs58check'
import base58 from 'bs58'
import { blake3 } from '@noble/hashes/blake3'
import { utils, getPublicKey, sign, verify, getPublicKeyAsync, signAsync } from "@noble/ed25519"
import varint from 'varint'

export function varint_encode(data) {
  return varint.encode(data)
}

export function varint_decode(data) {
  return varint.decode(data)
}

export function hash_blake3(data) {
  return blake3(data)
}

export async function get_pubkey(privkey) {
  return await getPublicKey(privkey)
}

export function base58check_encode(data) {
  return bs58check.encode(data);
}

export function base58check_decode(data) {
  return bs58check.decode(data);
}

export function base58_decode(data) {
  return base58.decode(data);
}

export function generate_random_privkey() {
  let privkey = utils.randomPrivateKey();
  return privkey;
}

export function deduce_address(pubkey, version) {
  var version = Buffer.from(varint_encode(version));
  return 'A' + base58check_encode(Buffer.concat([version, hash_blake3(pubkey)]));
}

export function parse_address(address) {
  const pubkeyhash = base58check_decode(address.slice(1));
  if (pubkeyhash.length != 33)
    throw "Invalid address.";
  return { pubkeyhash: pubkeyhash.slice(1) };
}

var _appendBuffer = function(buffer1, buffer2) {
  console.log(buffer1.byteLength)
  console.log(buffer2.byteLength)
  var tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
  tmp.set(new Uint8Array(buffer1), 0);
  tmp.set(new Uint8Array(buffer2), buffer1.byteLength);
  return tmp;
};

export function deduce_private_base58check(privkey, version) {
  var version = Buffer.from(varint_encode(version));
  console.log(version.buffer)
  console.log(privkey.buffer)
  return 'S' + base58check_encode(Buffer.from(_appendBuffer(version, privkey)));
}

export function parse_private_base58check(privb58c) {
  const privkey = base58check_decode(privb58c.slice(1)).slice(1);
  return privkey;
}

export function deduce_public_base58check(pubkey) {
  return base58check_encode(pubkey);
}

export function parse_public_base58check(pubb58c) {
  const pubkey = base58check_decode(pubb58c);
  if (pubkey.length != 32)
    throw "Invalid base58check public key.";
  return { pubkey: pubkey };
}

export function get_address_thread(address) {
  return parse_address(address).pubkeyhash.readUInt8(0) >> 3;
}

export function compute_bytes_compact(fee, expire_period, type_id, recipient_address, amount) {
  var encoded_fee = Buffer.from(varint_encode(fee))
  var encoded_expire_periode = Buffer.from(varint_encode(expire_period))
  var encoded_type_id = Buffer.from(varint_encode(type_id))
  var encoded_amount = Buffer.from(varint_encode(amount))
  recipient_address = Buffer.concat([Buffer.from([0]), Buffer.from(base58_decode(recipient_address.slice(2)).slice(1))])
  return Buffer.concat([encoded_fee, encoded_expire_periode, encoded_type_id, recipient_address, encoded_amount])
}

export async function parse_textprivkey(txt) {
  var privkey = parse_private_base58check(txt);
  var pubkey = await getPublicKeyAsync(privkey);
  var version = Buffer.from(varint_encode(0));
  var b58cpubkey = 'P' + base58check_encode(Buffer.from(_appendBuffer(version, pubkey)));
  var version = Buffer.from(varint_encode(0));
  var addr = 'AU' + base58check_encode(Buffer.from(_appendBuffer(version, hash_blake3(pubkey))))
  var parsed_privkey = { address: addr, b58cprivkey: txt, privkey: privkey, b58cpubkey: b58cpubkey, pubkey: pubkey };
  return parsed_privkey
}

function JsonRPCRequest(resource, data, completion_callback, error_callback) {
  var data = JSON.stringify({
    "jsonrpc": "2.0",
    "method": resource,
    "params": data,
    "id": 0
  });
  fetch('https://proxy.tonana.org/https://buildnet.massa.net/api/v2', {
    'method': 'POST', "headers": {
      "Content-Type": "application/json"
    }, 'body': data
  }).then((response) => {
    return response.json()
  }).then((data) => {
    console.log(data)
    if (data.error) {
      error_callback(data.error)
      return
    }
    completion_callback(data)
  }).catch((error) => {
    error_callback(error)
  })
}

export function sign_content(bytesCompact, sender_public_key, privkey) {
  const byte_pubkey = parse_private_base58check(sender_public_key);
  const toSignData = Buffer.concat([Buffer.from(byte_pubkey), bytesCompact]);
  var hash_encoded_data = hash_blake3(Buffer.from(toSignData));
  signAsync(hash_encoded_data, privkey).then((signature) => {
    const data = {
      serialized_content: Array.prototype.slice.call(bytesCompact),
      creator_public_key: sender_public_key,
      signature: base58check_encode(signature),
    }
    JsonRPCRequest('send_operations', [[data]], console.log, console.log);
  });
}


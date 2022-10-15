/**
 * fork of /node_modules/near-api-js/lib/utils/format.js
 **/

import BN from "bn.js";
/**
 * Exponent for calculating how many indivisible units are there in one NEAR. See {@link NEAR_NOMINATION}.
 */
const USN_NOMINATION_EXP = 18;

// Pre-calculate offests used for rounding to different number of digits
const ROUNDING_OFFSETS = [];
const BN10 = new BN(10);
for (let i = 0, offset = new BN(5); i < USN_NOMINATION_EXP; i++, offset = offset.mul(BN10)) {
  ROUNDING_OFFSETS[i] = offset;
}
/**
 * Convert account balance value from internal indivisible units to NEAR. 1 NEAR is defined by {@link NEAR_NOMINATION}.
 * Effectively this divides given amount by {@link NEAR_NOMINATION}.
 *
 * @param balance decimal string representing balance in smallest non-divisible NEAR units (as specified by {@link NEAR_NOMINATION})
 * @param fracDigits number of fractional digits to preserve in formatted string. Balance is rounded to match given number of digits.
 * @returns Value in Ⓝ
 */
function formatUsnAmount(balance, fracDigits = USN_NOMINATION_EXP) {
  const balanceBN = new BN(balance, 10);
  if (fracDigits !== USN_NOMINATION_EXP) {
    // Adjust balance for rounding at given number of digits
    const roundingExp = USN_NOMINATION_EXP - fracDigits - 1;
    if (roundingExp > 0) {
      balanceBN.iadd(ROUNDING_OFFSETS[roundingExp]);
    }
  }
  balance = balanceBN.toString();
  const wholeStr = balance.substring(0, balance.length - USN_NOMINATION_EXP) || '0';
  const fractionStr = balance.substring(balance.length - USN_NOMINATION_EXP)
    .padStart(USN_NOMINATION_EXP, '0').substring(0, fracDigits);
  return trimTrailingZeroes(`${formatWithCommas(wholeStr)}.${fractionStr}`);
}

/**
 * Convert human readable USN amount to internal indivisible units.
 * Effectively this multiplies given amount by {@link NEAR_NOMINATION}.
 *
 * @param amt decimal string (potentially fractional) denominated in USN.
 * @returns The parsed yoctoⓃ amount or null if no amount was passed in
 */
function parseUsnAmount(amt) {
  if (!amt) {
    return null;
  }
  amt = cleanupAmount(amt);
  const split = amt.split('.');
  const wholePart = split[0];
  const fracPart = split[1] || '';
  if (split.length > 2 || fracPart.length > USN_NOMINATION_EXP) {
    throw new Error(`Cannot parse '${amt}' as USN amount`);
  }
  return trimLeadingZeroes(wholePart + fracPart.padEnd(USN_NOMINATION_EXP, '0'));
}
export { parseUsnAmount, formatUsnAmount, USN_NOMINATION_EXP };
/**
 * Removes commas from the input
 * @param amount A value or amount that may contain commas
 * @returns string The cleaned value
 */
function cleanupAmount(amount) {
  return amount.replace(/,/g, '').trim();
}
/**
 * Removes .000… from an input
 * @param value A value that may contain trailing zeroes in the decimals place
 * @returns string The value without the trailing zeros
 */
function trimTrailingZeroes(value) {
  return value.replace(/\.?0*$/, '');
}
/**
 * Removes leading zeroes from an input
 * @param value A value that may contain leading zeroes
 * @returns string The value without the leading zeroes
 */
function trimLeadingZeroes(value) {
  value = value.replace(/^0+/, '');
  if (value === '') {
    return '0';
  }
  return value;
}
/**
 * Returns a human-readable value with commas
 * @param value A value that may not contain commas
 * @returns string A value with commas
 */
function formatWithCommas(value) {
  const pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(value)) {
    value = value.replace(pattern, '$1,$2');
  }
  return value;
}

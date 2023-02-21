export default function capitalize(str) {
  if (typeof str !== 'string') {
    return str;
  }
  var ret = str.charAt(0).toUpperCase() + str.slice(1);
  return ret;
}
export function isLocalhost() {
  return (window.location.hostname.indexOf('localhost') !== -1 || window.location.hostname.indexOf('127.0.0.1') !== -1);
}

export function getFormattedCurrentDate() {
  let dateOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  let today  = new Date();
  return today.toLocaleString("en-US", dateOptions);
}

export function getFirstCapitalLetter(str) {
  return str ? str.substring(0, 1).toUpperCase() : '';
}

export function copyObject(obj) {
  return JSON.parse(JSON.stringify(obj));
}
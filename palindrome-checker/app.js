function isPal(item) {
  let first = item.charAt(0);
  let last = item.charAt(item.length - 1);
  if (item.length < 2) {
    // Assuming a single char is a palindrome
    return true;
  }
  if (first == last) {
    // Recursive function passing in the string without the
    // character from each end
    return isPal(item.slice(1, item.length - 1));
  } else {
    return false;
  }
}

console.log(isPal('HeleH'));

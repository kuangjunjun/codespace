var isPalindrome = function (s) {
    s = s.toUpperCase();
    let i = 0, j = s.length - 1;
  
    while (i < j) {
      if (!isValid(s[i])) {
        i++;
        continue;
      }
      if (!isValid(s[j])) {
        j--;
        continue;
      }
      if (s[i] != s[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  };
  
  var isValid = function (c) {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9');
  };
  
  
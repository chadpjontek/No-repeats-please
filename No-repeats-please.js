function permAlone(str) {
  // declare vars
  var strArr = str.split(''),
    count = 0,
    re = /(.)\1/,
    temp;
  // function to swap values in array
  function swap(iA, iB) {
    temp = strArr[iA];
    strArr[iA] = strArr[iB];
    strArr[iB] = temp;
  }
  // fuction to get permutations and check if they have repeating chars
  function getPerms(n) {
    if (n === 1 && !re.test(strArr.join(''))) {
      count++;
    } else {
      for (var i = 0; i < n; i++) {
        getPerms(n - 1);
        if (n % 2 === 0) {
          swap(i, n - 1);
        } else {
          swap(0, n - 1);
        }
      }
    }
  }
  getPerms(strArr.length);
  return count;
}
// Examples
permAlone('aab'); // returns 2
permAlone('aaa'); // returns 0
permAlone('aabb'); // returns 8
permAlone('abcdefa'); // returns 3600
permAlone('abfdefa'); // returns 2640
permAlone('zzzzzzzz'); // returns 0
permAlone('a'); // returns 1
permAlone('aaab'); // returns 0
permAlone('aaabb'); // returns 12
// 1.
function findSecondLargest(arrNum) {
  if (arrNum.length < 2) return "array length must be greater then 1";

  let max2 = -1;
  let max3 = -1;
  let idx = -1;

  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > max2) {
      max2 = arrNum[i];
      idx = i;
    }

    if (arrNum[i] > max3 && arrNum[i] !== max2) {
      max3 = arrNum[i];
    }
  }

  return max3;
}

// 3.
function palindrome(words) {
  if (typeof words !== "string") return "words must be string!";
  let newStr = "";
  if (words.length > 1) {
    let wordLen = words.length - 1;
    for (let i = wordLen; i >= 0; i--) {
      newStr += words[i];
    }

    if (newStr == words) {
      return "palindrom";
    } else {
      return "not palindrom";
    }
  } else {
    return "words must be more then 1 char";
  }
}

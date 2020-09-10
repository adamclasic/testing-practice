const numberiz = (str) => {
  const arr = [];
  str.split('').forEach(ele => {
    const charNum = ele.charCodeAt();

    arr.push(charNum);
  });
  return arr;
};

const encrypt = (arr, ratio) => {
  arr.forEach((charNum, index, theArr) => {
    if ((charNum >= 65 && charNum <= 90) || (charNum >= 97 && charNum <= 122)) {
      theArr[index] = charNum - ratio;
    } else if (charNum >= 33 || charNum <= 63) {
      theArr[index] = charNum - ratio;
    }
  });
  return arr;
};

const charizer = (numArr) => {
  const arr = [];
  numArr.forEach(ele => {
    arr.push(String.fromCharCode(ele));
  });
  return arr.join('');
};

const caesar = (str, ratio) => charizer(encrypt(numberiz(str), ratio));

module.exports = caesar;
const Aaverage = (arr) => {
  let total = 0;
  for(let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return (total / arr.length);
};

const analyze = (arrr) => {
  return {
    average: Aaverage(arrr),
    min: Math.min(...arrr),
    max: Math.max(...arrr),
    length: arrr.length
  };
}

module.exports = analyze;
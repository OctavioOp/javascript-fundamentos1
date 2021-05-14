const fromOneToOne = () => {
  for (let i = 1; i <= 255; i++) {
    console.log(i);
  }
};

const even = () => {
  for (let i = 0; i <= 1000; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
};

const odd = () => {
  let sum = 0;
  for (let i = 0; i < 5000; i++) {
    if (i % 2 != 0) {
      sum = sum + i;
    }
  }
  return sum;
};

const arrIterator = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};

const maxNumber = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

const average = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum / arr.length;
};

const oddArray = (arr) => {
  let odd = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      odd.push(arr[i]);
    }
  }
  return odd;
};
//revisar
const greaterThan = (arr, y) => {
  let greater = [];
  for (let i = 0; i < arr.length; i++) {
    if (y < arr[i]) {
      greater.push(arr[i]);
    }
  }
  for (let i = 0; i < greater.length; i++) {
    console.log(greater[i]);
  }
};

const square = (arr) => {
  let arrSquare = [];
  for (let i = 0; i < arr.length; i++) {
    arrSquare.push(arr[i] * arr[i]);
  }
  return arrSquare;
};

const negative = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= -1) {
      newArr.push(0);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const maxMinAvg = (arr) => {
  let max = arr[0];
  let min = arr[0];
  let avg = 0;
  let sum = 0;
  let results = [];

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
    sum = sum + arr[i];
  }

  avg = sum / arr.length;
  results.push(max);
  results.push(min);
  results.push(avg);

  return results;
};

const reverse = (arr) => {
  return arr.reverse();
};

const numberToString = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= -1) {
      newArr.push("Dojo");
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

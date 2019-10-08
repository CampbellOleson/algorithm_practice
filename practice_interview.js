// given an array of integers, sorted, and given a target number. find the index of the target, otherwise, return -1

// const arr = [1, 2, 4, 5, 7, 8];

function bSearch(arr, target) {
  if (arr.length === 0) {
    return -1;
  }

  const midIdx = Math.floor(arr.length / 2);

  if (arr[midIdx] === target) {
    return midIdx;
  }
  if (arr[midIdx] > target) {
    return bSearch(arr.slice(0, midIdx), target);
  } else {
    const result = bSearch(arr.slice(midIdx + 1), target);
    if (result === -1) {
      return -1;
    }
    return result + (midIdx + 1);
  }
}

// 0(logN)
// 0(logN)

// const arr = [1, 2, 4, 5, 7, 8];
// console.log(bSearch(arr, -3));

function bSearchIter(arr, target) {
  let right = arr.length - 1;
  let left = 0;

  while (right > left) {
    const midIdx = Math.floor((left + right) / 2);
    const midEle = arr[midIdx];

    if (midEle === target) {
      return midIdx;
    }

    if (midEle > target) {
      right = midIdx - 1;
    } else {
      left = midIdx + 1;
    }
  }
  return -1;
}

// 0(logN)
// constant memory complexity

const arr = [1, 2, 4, 5, 7, 8];
console.log(bSearch(arr, 12));

// ask clarifications
// like if there were duplicates
// make sure I fully understand the problem (test inputs)
// show them my thought process
// formulate idea - talk it through with the interviewer to figure it out
// write pseudo code - sketch it out
// code it once I have a plan
// walk through examples to test and debug
// talk about time and memory complexity
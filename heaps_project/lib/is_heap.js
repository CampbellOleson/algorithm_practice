// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx = 1) {
  if (array[idx] === undefined) return true;
  // if this is undefined we have gone off the edgw w/o returning false yet so true
  let leftIdx = idx * 2;
  let rightIdx = idx * 2 + 1;
  let leftVal = array[leftIdx] === undefined ? -Infinity : array[leftIdx];
  let rightVal = array[rightIdx] === undefined ? -Infinity : array[rightIdx];
  // idx and vals or -Infinity if gone off the edge of the tree
  return (
    rightVal < array[idx] &&
    leftVal < array[idx] &&
    isMaxHeap(array, leftIdx) &&
    isMaxHeap(array, rightIdx)
  );
  // make sure current stack frame accords with max heap properties
  // make sure sequential calls are the same/recursive call
}

module.exports = {
  isMaxHeap
};

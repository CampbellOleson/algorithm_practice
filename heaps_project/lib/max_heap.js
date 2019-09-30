class MaxHeap {
  constructor() {
    this.array = [null];
  }

  insert(val) {
    this.array.push(val);
    this.siftUp(this.array.length - 1);
  }

  deleteMax() {
    if (this.array.length === 1) return null;
    if (this.array.length === 2) return this.array.pop();
    let max = this.array[1];
    this.array[1] = this.array.pop();
    this.siftDown(1);
    return max;
  }

  getParent(idx) {
    return Math.floor(idx / 2);
  }

  getLeftChild(idx) {
    return idx * 2;
  }

  getRightChild(idx) {
    return idx * 2 + 1;
  }

  siftUp(idx) {
    if (idx === 1) return;

    let parent = this.getParent(idx);

    if (this.array[idx] > this.array[parent]) {
      [this.array[parent], this.array[idx]] = [
        this.array[idx],
        this.array[parent]
      ];
      this.siftUp(parent);
    }
  }

  siftDown(idx) {
    let ary = this.array;
    let leftIdx = this.getLeftChild(idx);
    let rightIdx = this.getRightChild(idx);
    let leftVal = ary[leftIdx];
    let rightVal = ary[rightIdx];

    if (leftVal === undefined) leftVal = -Infinity;
    if (rightVal === undefined) rightVal = -Infinity;

    if (ary[idx] > leftVal && ary[idx] > rightVal) return;

    if (leftVal < rightVal) {
      var swapIdx = rightIdx;
    } else {
      var swapIdx = leftIdx;
    }

    [ary[idx], ary[swapIdx]] = [ary[swapIdx], ary[idx]];
    this.siftDown(swapIdx);
  }
}

module.exports = {
  MaxHeap
};

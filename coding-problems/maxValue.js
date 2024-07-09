/*
Max Value
Given an array of N positive integers. The task is to find the maximum value of |arr[i] – arr[j]| + |i – j|, where 0 <= i, j <= N – 1 and arr[i], arr[j] belong to the array.

Example
Input : N = 4, arr[] = { 4, 5, 6, 8 }
Output: 4
Explanation:
Choose i = 0 and j = 2. This will result in |4-8|+|0-3| = 7 which is the maximum possible value.
*/

const findMax = (array, n) => {
  let ans = 0;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      ans = Math.max(ans, Math.abs(array[i] - array[j] + Math.abs(i - j)));
    }
  }
  return ans;
};

const result = findMax([4, 5, 6, 8], 4);
console.log(result);

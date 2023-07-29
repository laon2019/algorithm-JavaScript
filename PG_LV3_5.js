function solution(stones, k) {
  return algorithm(stones, k, 1, 200000000);
}
function algorithm(stones, k, start, end) {
  if (start === end) {
    return start;
  }
  let middle = Math.round((start + end) / 2);
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (count == k) {
      break;
    }
    let value = stones[i] - (middle - 1);
    value <= 0 ? count++ : count = 0;
  }

  return count == k
    ? algorithm(stones, k, start, middle - 1)
    : algorithm(stones, k, middle, end);
}

console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3));

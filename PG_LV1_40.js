//소수만들기
function solution(nums) {
  var answer = 0;
  let sum = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i+1; j < nums.length - 1; j++) {
      for (let k = j+1; k < nums.length; k++) {
        sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) {
          answer++;
        }
      }
    }
  }
  return answer;
}
function isPrime(s) {
    if (s < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(s); i++) {
      if (s % i === 0) {
        return false;
      }
    }
    return true;
  }

function solution(arr) {
  arr.sort((a, b)=> a- b);
  let lcm = arr[0]
  for(let i = 1;i<arr.length;i++){
    lcm = getLCM(lcm, arr[i]);
  }
  return lcm;
}
function getGCD(a, b) {
    if (b === 0) {
      return a;
    }
    return getGCD(b, a % b);
  }

  function getLCM(a, b) {
    const gcd = getGCD(a, b);
    return (a * b) / gcd;
  }

  console.log(solution([2,6,8,14]))
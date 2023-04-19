//최댓값과 최솟값
function solution(s) {
    let a = s.split(" ");
    return Math.min(...a)+" "+Math.max(...a);
}
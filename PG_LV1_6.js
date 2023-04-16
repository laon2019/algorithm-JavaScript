function solution(x, n) {
    let answer = [];
    for(let i = 1;i<=n;i++){
        answer[i-1] = x*i;
    }
    return answer;
}
function solution(n, s) {
    let a = Math.floor(s/n);
    let b = s%n;
    if(a<1){
        return [-1];
    }
    let answer = Array(n).fill(a);
    for(let i = 0;i<b;i++){
        answer[i]++
    }
    return answer.sort((a,b)=>a-b);
}
  console.log(solution(2, 9))
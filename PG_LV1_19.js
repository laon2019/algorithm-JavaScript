//정수 내림차순으로 배치하기
function solution(n) {
    n=String(n);
    n=n.split('')
    n=n.sort((a,b)=>b-a).join('')
    n=Number(n)
    return n;
}
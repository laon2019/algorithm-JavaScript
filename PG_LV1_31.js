//크기가 작은 부분문자열
function solution(t, p) {
    let a = 0;
    let count = 0;
    p = parseInt(p);
    for(let i =0;i<=t.length-p.toString().length;i++){
        a = parseInt(t.slice(i,i+p.toString().length));
        if(a <= p){
            count++;
        }
    }
    return count;
    
}

console.log(solution("3141592", "271"))
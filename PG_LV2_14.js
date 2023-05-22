function solution(n,a,b){
    let count = 1;
    while(Math.ceil(a/2)!== Math.ceil(b/2)){
        a=Math.ceil(a/2);
        b=Math.ceil(b/2);
        count++;
    }
    return count;
}
let n = 8;
let a = 4;
let b = 7;
console.log(solution(n,a,b))
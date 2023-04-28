//약수의 합
function solution(n) {
    let sum = 0;
    let a = 1;
    for(let i = 0;i<n;i++){
        if(n % a ===0){
            sum += a
        }
        a++
    }
    return sum;
}
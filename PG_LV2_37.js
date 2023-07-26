function solution(n, k) {
    var answer = 0;
    let num = n.toString(k).split("0");
    for(let i =0;i<num.length;i++){
            if(isPrime(Number(num[i]))){
                answer++;
            }
    }
    return answer;
}
function isPrime(num){
    if(num<2){
        return false
    }
    for(let i = 2;i<Math.sqrt(num);i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}
console.log(solution(437674,3))
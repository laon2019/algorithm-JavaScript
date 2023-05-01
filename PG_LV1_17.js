//정수 제곱근 판별
function solution(n) {
    for(let i=1;i*i<=n;i++){
        if(i*i ==n){
            return (i+1)**2;
        } 
    }
    return -1;
}
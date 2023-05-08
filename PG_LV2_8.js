//숫자의 표현
function solution(n) {
    let answer = 1;
     for(let i=1;i<=n/2;i++){
         let temp = 0;
         for(let j=i;j<=n/2+1;j++){
             temp += j;
             if(temp >= n){
                 if(temp ===n){
                     answer++;
                 } 
                 break;
             }
         }
     }
     return answer;
 }
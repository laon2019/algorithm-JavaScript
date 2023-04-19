//최솟값 만들기
function solution(A,B){
    let answer = 0;
    A.sort((a,b)=>a-b);
    console.log(A);
    B.sort((a,b)=>b-a);
    console.log(B);
    for( let i = 0 ; i < A.length; i++ ){
      answer += A[i]*B[i];
    }
    return answer;
}
console.log(solution([1, 4, 9, 10, 15, 12],[5, 4, 8, 14, 9, 10]));
//같은 숫자는 싫어
function solution(arr) {
    var answer = []; // 새로운 배열
    
    for(var i = 0; i < arr.length; i++) { // 처음부터 끝까지 반복
        arr[i] == arr[i+1] ? '' : answer.push(arr[i]); 
        // 현재와 다음의 문자가 같은문자인지 확인 후 다를경우에만 새 배열에 추가
    }
    return answer;
}
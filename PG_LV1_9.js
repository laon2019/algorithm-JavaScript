function solution(arr) {
    let answer = 0;
    for(let value of arr){
        answer += value;
    }
    return answer/arr.length;
}
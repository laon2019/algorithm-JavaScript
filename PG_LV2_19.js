// 기능개발
function solution(progresses, speeds) {
    var answer = [];
    let k = 0;
    while(k < progresses.length){
        for(let j =k;j<progresses.length;j++){
            progresses[j] += speeds[j]
        }
        let count = 0;
        while(progresses[k] >= 100){
            k++;
            count++;
        }
        if(count>0){
            answer.push(count);
        }
    } 
    return answer;
}
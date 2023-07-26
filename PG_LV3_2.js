function solution(operations) {
    var answer = [];
    let arr = [];
    for (let i = 0; i < operations.length; i++) {
        arr.push(operations[i].split(" "));
        if (arr[i][0] === "I") {
            answer.push(parseInt(arr[i][1])); // 문자열을 숫자로 변환하여 저장
        } else if (arr[i][0] === "D" && arr[i][1] === "1") {
            let max = Math.max(...answer);
            let maxIndex = answer.indexOf(max);
            if (maxIndex > -1) {
                answer.splice(maxIndex, 1);
            }
        } else if (arr[i][0] === "D" && arr[i][1] === "-1") {
            let min = Math.min(...answer);
            let minIndex = answer.indexOf(min);
            if (minIndex > -1) {
                answer.splice(minIndex, 1);
            }
        }
    }
    if(answer.length<1){
        return [0,0];
    }
    return [Math.max(...answer), Math.min(...answer)];
}

console.log(solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"]));
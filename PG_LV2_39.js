function solution(msg) {
    var answer = [];
    const arr = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));
    for(let i = 0;i<=msg.length;i++){
        let char = msg[i];
        for(let j = i+1;j<=msg.length;j++){
            index = char;
            if(i === msg.length){
                answer.push(arr.indexOf(index)+1)
            }
            char = char+msg[j];
            if(!arr.includes(char)){
                answer.push(arr.indexOf(index)+1)
                arr.push(char);
                break;
            }
            i++;
        }
    }
    return answer;
}

console.log(solution("TOBEORNOTTOBEORTOBEORNOT"))
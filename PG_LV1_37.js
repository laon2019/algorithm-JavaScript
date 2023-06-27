//숫자 문자열과 영단어

function solution(s) {
    let answer = s;
    const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
    for(let i =0;i<numbers.length;i++){
        let number = answer.split(numbers[i]);
        console.log(i+" : "+number);
        answer = number.join(i)
        console.log(i+" : "+answer)
    }
    return parseInt(answer);
}

console.log(solution("one4seveneight"))
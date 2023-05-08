//영어끝말잇기
function solution(n, words) {
    let usedWords = [words[0]];
    let answer = [0, 0];
    for(let i = 1; i < words.length; i++) {
        let prevWord = usedWords[usedWords.length-1];
        let curWord = words[i];
        if(prevWord.charAt(prevWord.length-1) !== curWord.charAt(0) || usedWords.includes(curWord)) {
            answer = [(i%n)+1, Math.floor(i/n)+1];
            break;
        }
        usedWords.push(curWord);
    }
    return answer;
}

let n = 3;
let words = ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"];
console.log(solution(n, words))
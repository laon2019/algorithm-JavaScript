function solution(dartResult) {
  var answer = dartResult.split("");
  let score = 0;
  let scores = [];
  let i = 0;
  while (i < dartResult.length) {
    if (!isNaN(answer[i])) {
        if (answer[i] === '1' && answer[i + 1] === '0') {
            score = 10; 
          i++;
        } else {
            score = Number(answer[i]);
        }
      } else {
      if (answer[i] === "S") {
        scores.push(score);
      } else if (answer[i] === "D") {
        scores.push(Math.pow(score, 2));
      } else if (answer[i] === "T") {
        scores.push(Math.pow(score, 3));
      } else if (answer[i] === "*") {
        scores[scores.length - 1] *= 2;
        if (scores.length > 1) {
          scores[scores.length - 2] *= 2;
        }
      } else if (answer[i] === "#") {
        scores[scores.length - 1] *= -1;
      }
    }
    
    i++;
  }
  return scores.reduce((acc, cur) => acc + cur, 0);
}

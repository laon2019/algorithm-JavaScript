function solution(expression) {
    // 경우의 수가 6개 뿐이다.
    const entries = [
        ['-', '*', '+'],
        ['-', '+', '*'],
        ['*', '-', '+'],
        ['*', '+', '-'],
        ['+', '-', '*'],
        ['+', '*', '-']
    ];
    let sum = [];
    // entries 배열 길이만큼 반복
    for(let i = 0; i < entries.length; i++){
        //expreessions에 숫자가 아닌거 기준으로 분리 ex)["100","-","200","*","300"...]
        let expressions = expression.split(/(\D)/);
        // entries[i]안에는 3가지 수식이 있다. 그리하여 3번 반복
        for(let j = 0; j < 3; j++){
                //만약 수식이 있다면
                while (expressions.includes(entries[i][j])) {
                    // 수식이 있는 index 찾아내기
                    const idx = expressions.indexOf(entries[i][j]);
                    // 수식이 있는 -1자리 부터 3가지를 짜르고 || 수식이 있는 -1자리 부터 3가지를 join하여 계산한 값을 추가
                    //splice : (시작, 몇개, 추가할 내용)  eval : 문자열로 된 코드를 계산 ex)"100-200" => -100
                    expressions.splice(idx - 1, 3, eval(expressions.slice(idx - 1, idx + 2).join('')));
                }
        }
        // 최종적으로 배열의 0번째에 값이 들어옴 이것의 절대값을 sum에 추가
        sum.push(Math.abs(expressions[0]));
    }
    //배열에서 가장 큰 값 return
    return Math.max(...sum);
}

console.log(solution("100-200*300-500+20"))



//K번째수

function solution(array, commands) {
    var answer = [];
    let a=[];
    for(let i = 0 ;i < commands.length;i++){
        a = array.slice(commands[i][0]-1, commands[i][1]).sort((a, b)=>a-b);
        console.log(a)
        answer.push(a[commands[i][2]-1])
    }
    return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]]))
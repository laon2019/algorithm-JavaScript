function solution(s) {
    var answer = [];
    answer = JSON.parse(s.replace(/}/g, ']').replace(/{/g, '['));
    answer.sort((a,b)=> a.length - b.length);
    let mySet = new Set;
    for(let i = 0; i<answer.length;i++){
        for(let j = 0;j<answer[i].length;j++){
            mySet.add(answer[i][j])
        }
    }
    let arr = Array.from(mySet);
    return arr;
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
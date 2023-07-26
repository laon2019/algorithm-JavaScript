function solution(n, t, m, p) {
    var answer = '';
    let stack = ""
    let i = 0;
    while(i<t*m){
        let num = i.toString(n)
        stack= stack+num;
        i++
    }
    for(i = p-1;i<t*m;i += m){
        answer= answer+stack[i]
    }
    return answer;
}

console.log(solution(16,16,2,2))
function solution(record) {
    let records = []
    var answer = [];
    let stack = [];
    let myMap = new Map;
    for(let i = 0;i<record.length;i++){
        records.push(record[i].split(" "))
    }
    for(let i = 0;i<record.length;i++){
        if(records[i][0] === "Enter"){
            myMap.set(records[i][1], records[i][2])
            stack.push([records[i][0], records[i][1]])
        } else if(records[i][0] === "Leave"){
            stack.push([records[i][0], records[i][1]])
        } else if(records[i][0] === "Change"){
            myMap.set(records[i][1], records[i][2])
        }
    }
    for(let i = 0;i<stack.length;i++){
        if(stack[i][0] === "Enter"){
            answer.push(myMap.get(stack[i][1])+"님이 들어왔습니다.")
        }else{
            answer.push(myMap.get(stack[i][1])+"님이 나갔습니다.")
        }
    }
    return answer;
}


console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]))
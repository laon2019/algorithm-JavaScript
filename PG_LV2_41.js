function solution(fees, records) {
    var answer = [];
    let [defaultTime, defaultMoney, countTime, countMoney] = fees;
    let entries = []
    let myMap = new Map;
    let time = 0;
    let lastTime = 1439;
    for(let i = 0;i<records.length;i++){
        entries.push(records[i].split(" "))
        const [hours, minutes] = entries[i][0].split(':');
        const totalMinutes = parseInt(hours, 10) * 60 + parseInt(minutes, 10);
        entries[i][0] = totalMinutes;
        if(!myMap.has(entries[i][1])){
            myMap.set(entries[i][1], 0)
        }
        if(entries[i][2] === "IN"){
            time = lastTime - entries[i][0];
            myMap.set(entries[i][1], myMap.get(entries[i][1])+time)
           
        }else{
            time = lastTime - entries[i][0];
            time = myMap.get(entries[i][1])-time;
            myMap.set(entries[i][1], myMap.get(entries[i][1])-myMap.get(entries[i][1])+time)
        }
        
    }
    myMap = Array.from(myMap).sort((a, b)=> a[0]-b[0]);

    for(let i = 0;i<myMap.length;i++){
        time = myMap[i][1]
        if(time <= defaultTime){
            answer.push(defaultMoney)
        } else{
            time -= defaultTime;
            time = Math.ceil(time/countTime);
            answer.push(defaultMoney+time*countMoney);
        }
    }
    return answer;
}
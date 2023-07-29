function solution(bridge_length, weight, truck_weights) {
    let [answer, i, sum] = [0, 0, 0];
    let arr = [];
    let bridge = Array(bridge_length).fill(0);
    while(arr.length<truck_weights.length){
        let shiftNum = bridge.shift();
        sum += truck_weights[i] 
        if(shiftNum>0){
            arr.push(shiftNum)
            sum -= shiftNum;
        }
        if(sum<=weight){
            bridge.push(truck_weights[i]);
            i++;
        }else{
            sum -= truck_weights[i];
            bridge.push(0);
        }
        answer++;
    }
    return answer;
}
console.log(solution(2,10,[7,4,5,6]))
function solution(prices) {
    var answer = [];
    for(let i = 0;i<prices.length;i++){
        let count = 0;
        for(let j = i+1;j<prices.length;j++){
            count++;
            if(prices[i] > prices[j]){
             break;
            }
            
        }
        answer.push(count)
    }
    return answer;
}
console.log(solution([1, 2, 3, 4, 5, 6, 1, 1, 2, 3, 1, 2, 3]))

// [12, 5, 4, 3, 2, 1, 6, 5, 2, 1, 2, 1, 0]
function solution(numbers) {
    var answer = new Array(numbers.length).fill(-1); 
    var stack = []; 
    for (var i = 0; i < numbers.length; i++) {
        while (stack && numbers[stack.at(-1)] < numbers[i]) {
            answer[stack.pop()] = numbers[i]; 
            console.log(i+" : "+stack)
            console.log(answer)
        }
        stack.push(i);
    }
    return answer;  
}

console.log(solution([9, 1, 5, 3, 6, 2]))

// function solution(numbers, target) {
//     let count = 0;
    
//     for(let i = 0;i<numbers.length;i++){
//         let sum = 0;
//         for(let j = i+1;j<numbers.length;j++){
//             for(let k =0;k<numbers.length;k++){
//                 sum += numbers[k];
//             }
//             sum = sum - (numbers[j]*2)
//         }
//         sum = sum - (numbers[i] *2)
//         console.log(sum);
//         if(sum === target){
//             count++;
//         }
//     }
//     return count;
// }
// function solution(numbers, target) {
//     let count = 0;
//     function dfs(idx, sum){
//         if(idx === numbers.length){
//             if(sum === target){
//                 count++;
//             }else{
//                 return;
//             }
//         }
//         dfs(idx + 1, sum + numbers[idx]);
//         dfs(idx + 1, sum - numbers[idx]);
//     }
//     dfs(0,0)
//     return count;
// }

// console.log(solution([1, 1, 1, 1, 1], 3))


console.log(solution(3))
// function solution(cacheSize, cities) {
//   const cache = new Map();
//   let answer = 0;
//   let count2 = 0;
//   for (let i = 0; i < cities.length; i++) {
//     cities[i]=cities[i].toLowerCase();
//     if (cache.has(cities[i])) {
//       cache.set(cities[i], i);
//       answer++;
//     } else {
//       if (cache.size >= cacheSize) {
//         //count는 반복문을 돌면서 cacheSize의 값과 비교할려고 만든 값이다.
//         let count = 0;
//         //count2는 몇 번째 전의 값인지 알아보려고 설정한 값이다.
//         count2 = 0;
//         while(count<cacheSize-1){
//             let j = i;
//             if(cities[j] == cities[j-count2]){
//                 count-1;
//             } else{
//                 count++;
//             }
//             count2++;
//             console.log(count2);
//         }
//         console.log(count2);
//         console.log("삭제될 값"+ cities[i-count2])
//         cache.delete(cities[i-count2]);
//         cache.set(cities[i], i);
//         console.log("새로 등록된 값"+cities[i])
//         answer += 5;
//         console.log(answer);
//         console.log(cache);
//       } else {
//         console.log()
//         cache.set(cities[i], i);
//         console.log(cities[i])
//         answer += 5;
//       }
//     }
//   }
//   return answer;
// }

// function solution(cacheSize, cities) {
//     const cache = new Map();
//     let answer = 0;
  
//     for (let i = 0; i < cities.length; i++) {
//       const city = cities[i].toLowerCase();
  
//       if (cache.has(city)) {
//         cache.delete(city);
//         cache.set(city, i);
//         answer += 1;
//       } else {
//         if (cache.size >= cacheSize) {
//           if (cacheSize > 0) {
//             const lruKey = cache.keys().next().value;
//             cache.delete(lruKey);
//           }
//         }
//         cache.set(city, i);
//         answer += 5;
//       }
//     }
  
//     return answer;
//   }

// function solution(cacheSize, cities) {
//     const cache = new Map();
//     const recentKeys = [];
//     let answer = 0;
  
//     for (let i = 0; i < cities.length; i++) {
//       const city = cities[i].toLowerCase();
  
//       if (cache.has(city)) {
//         const index = recentKeys.indexOf(city);
//         console.log(index)
//         recentKeys.splice(index, 1);
//         console.log(recentKeys)
//         recentKeys.unshift(city);
//         console.log(recentKeys)
//         answer += 1;
//       } else {
//         if (cache.size >= cacheSize) {
//           if (cacheSize > 0) {
//             const lruKey = recentKeys.pop();
//             cache.delete(lruKey);
//           }
//         }
//         recentKeys.unshift(city);
//         console.log(recentKeys)
//         cache.set(city, i);
//         answer += 5;
//       }
//     }
  
//     return answer;
//   }
function solution(cacheSize, cities){
    let answer = 0;
    let cachArr = [];
    for(let i = 0;i<cities.length;i++){
        let city = cities[i].toLowerCase();
        if(cachArr.includes(city)){
            let index = cachArr.indexOf(city);
            cachArr.splice(index, 1);
            cachArr.push(city);
            answer++;
        }else{
            cachArr.push(city);
            if(cachArr.length> cacheSize){
                cachArr.shift();
            }
            answer+=5;
        }console.log(city);
        console.log(answer);
        console.log(cachArr)
    } 
    return answer;
}
  
console.log(solution(3,["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]))


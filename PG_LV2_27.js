let arr = [1, 3, 2, 5, 4, 5, 2, 3];


function solution(k, tangerine) {
    var answer = 0;
    let map = new Map();
    for (let num of tangerine) {
      if (map.has(num)) {
        map.set(num, map.get(num) + 1);
      } else {
        map.set(num, 1);
      }
    }
    let sortedEntries = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
    console.log(Array.from(map));
    console.log(Array.from(map.entries()));
    for(let i = 0;i<sortedEntries.length;i++){
        k-= sortedEntries[i];
        if(k<=0){
            break;
        }
        answer++;
    }
    return answer;
}
console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]))
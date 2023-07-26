// function solution(genres, plays) {
//   var answer = [];
//   let map = new Map();
//   let map2 = new Map();
//   for (let i = 0; i < genres.length; i++) {
//     map2.set(genres[i] + " " + i, plays[i]);
//   }
//   let entries = Array.from(map2);

//   entries = entries.map((entry) => {
//     const [genre, index] = entry[0].split(" ");
//     const playCount = entry[1];
//     return [genre, Number(index), playCount];
//   });

//   console.log(entries);
//   return answer;
// }

function solution(genres, plays) {
  var answer = [];
  let map = new Map();
  // map을 사용하여 각 장르의 총합을 구하고 내림차순으로 정렬
  for (let i = 0; i < genres.length; i++) {
    if(map.has(genres[i])){
        map.set(genres[i], map.get(genres[i])+plays[i])
    } else{
        map.set(genres[i], plays[i])
    }
    }
    let entries = Array.from(map);
    entries.sort((a,b)=>b[1]-a[1]);
    // map을 사용하여 각 장르와 고유번호 순서 재생횟수를 저장하였다. ex) "pop", 2, 600
    let map2 = new Map();
      for (let i = 0; i < genres.length; i++) {
        map2.set(genres[i] + " " + i, plays[i]);
      }
      let entries2 = Array.from(map2);
    
      entries2 = entries2.map((entry) => {
        const [genre, index] = entry[0].split(" ");
        const playCount = entry[1];
        return [genre, Number(index), playCount];
      });

      entries2.sort((a,b)=>b[2]-a[2])
    for(let i=0;i<entries.length;i++){
        let count = 0;
        for(let j = 0;j<genres.length;j++){
            if(entries2[j][0] === entries[i][0]&& count<2){
                answer.push(entries2[j][1])
                count++;
            }
        }
    }



  return answer;
}
let genres = ["classic", "pop", "classic", "classic", "pop"];
let plays = [500, 600, 150, 800, 2500];
console.log(solution(genres, plays));

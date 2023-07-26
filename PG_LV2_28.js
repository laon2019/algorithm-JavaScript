function solution(clothes) {
  let answer = 1;
  let map = new Map();
  for (let i = 0; i < clothes.length; i++) {
    if (map.has(clothes[i][1])) {
      map.set(clothes[i][1], map.get(clothes[i][1]) + 1);
    } else {
      map.set(clothes[i][1], 1);
    }
  }
  let entries = Array.from(map);

  if (entries.length === 1) {
    return clothes.length;
  } else {
    for (let i = 0; i < entries.length; i++) {
      answer *= entries[i][1] + 1; // 해당 종류의 의상을 선택하지 않는 경우도 고려하여 +1
    }

}
return answer - 1;
}

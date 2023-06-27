function solution(fees, records) {
  var answer = [];
  result = [];
  for (let i = 0; i < records.length; i++) {
    const [time, number, status] = records[i].split(" ");
    result.push([time, number, status]);
  }
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.legth; j++) {
      if (result[i][2] == "OUT") {
        if (result[i][1] == result[j][1]) {
          const [startHour, startMinute] = startTime.split(":");
          const [endHour, endMinute] = endTime.split(":");

          const start = parseInt(startHour, 10) * 60 + parseInt(startMinute, 10);
          const end = parseInt(endHour, 10) * 60 + parseInt(endMinute, 10);

          let difference = end - start;
          if (difference < 0) {
            difference += 24 * 60;
          }
          if(difference <= fees[0]){
            answer.push(fees[1]+);
          }
          
        }
      }
    }
  }
  return answer;
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ]
  )
);

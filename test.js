function solution(fees, records) {
  const time = new Map();
  const order = [];

  for (let i = 0; i < records.length; i++) {
      const temp = records[i].split(" ");
      if (temp[2] === "IN") {
          if (time.has(Number(temp[1]))) {
              time.set(Number(temp[1]), time.get(Number(temp[1])) + 1439 - changeTime(temp[0]));
          } else {
              time.set(Number(temp[1]), 1439 - changeTime(temp[0]));
          }
      } else {
          time.set(Number(temp[1]), time.get(Number(temp[1])) - (1439 - changeTime(temp[0])));
      }

      if (!order.includes(Number(temp[1]))) order.push(Number(temp[1]));
  }

  order.sort((a, b) => a - b);

  const answer = [];

  for (let i = 0; i < order.length; i++) {
      let stay = time.get(order[i]);
      stay -= fees[0];

      if (stay <= 0) {
          answer.push(fees[1]);
      } else {
          let cost = fees[1];
          while (stay > 0) {
              stay -= fees[2];
              cost += fees[3];
          }
          answer.push(cost);
      }
  }

  return answer;
}

function changeTime(time) {
  const temp = time.split(":");
  const hour = parseInt(temp[0]) * 60;
  const minute = parseInt(temp[1]);
  return hour + minute;
}
//로또의 최고순위와 최저순위
function solution(lottos, win_nums) {
    let result = [];
    let max = 0;
    let min = 0;
  
    for (let i = 0; i < 6; i++) {
      if (lottos[i] === 0) {
        max++;
      } else if (win_nums.includes(lottos[i])) {
        min++;
        max++;
      }
    }
  
    const getRank = (count) => {
      if (count === 6) return 1;
      if (count === 5) return 2;
      if (count === 4) return 3;
      if (count === 3) return 4;
      if (count === 2) return 5;
      return 6;
    };
  
    result[0] = getRank(max);
    result[1] = getRank(min);
  
    return result;
  }

  function solution(lottos, win_nums) {
    let result = [];
    let max = 0;
    let min = 0;
    for(let i = 0;i<6;i++){
        if(lottos[i] === 0){
            max++;  
        } else{
            for(let j=0;j<6;j++){
                 if(lottos[i]===win_nums[j]){
                    min++;
                    max++;
                }
            }
        }
    }
    if(max ===6){
        max = 1;
    } else if(max === 5){
        max = 2;
    } else if(max === 4){
        max = 3;
    } else if(max === 3){
        max = 4;
    } else if(max === 2){
        max = 5;
    } else if(max === 1){
        max = 6;
    }

    if(min ===6){
        min = 1;
    } else if(min === 5){
        min = 2;
    } else if(min === 4){
        min = 3;
    } else if(min === 3){
        min = 4;
    } else if(min === 2){
        min = 5;
    } else if(min === 1 || min ===0){
        min = 6;
    }
    result[0] = max;
    result[1] = min;
    return result;
}
  
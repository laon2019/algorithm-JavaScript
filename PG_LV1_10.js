function solution(num) {
    let count= 1;
    if(num===1){
        return 0;
    } else {
        while(true){
          if(num%2==0){
                num /= 2;
            }  else if(num%2==1){
                num *= 3;
                num++;
            }
            if(num===1){
                return count;
            }
            if(count>500){
                return -1;
            }
            count++;
        }
    }
}
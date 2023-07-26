function solution(want, number, discount) {
    let myMap = new Map;
    let sum = 0;
    for(let i = 0;i<want.length;i++){
        myMap.set(want[i], number[i]);
        sum += number[i];
    }

   for(let i = 0;i<discount.length-sum;i++){
        let entries = Array.from(myMap);
        for(let j =i;j<sum+i;j++){
            for(let k = 0;k<entries.length;k++){
                if(discount[j] === entries[k][0]){
                    entries[k][1]--;
                    console.log(entries[k][1]+" : "+discount[j]+" - "+i)
                }
            }
        }
        
        for(let j =0;j<entries.length;j++){
            if(entries[j][1]!==0){
                break;
            }
            return i+1;
        }
    }
   

    return 0;
}
let a = ["banana", "apple", "rice", "pork", "pot"];
let b = [3, 2, 2, 2, 1];
let c = ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"];
console.log(solution(a,b,c))
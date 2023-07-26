function solution(numbers) {
    let arr = numbers.split("");
    let mySet = new Set;
    allNums(arr, "");
    return mySet.size;

    function allNums(arr, fix){
        if(arr.length>0){
            for(let i = 0;i<arr.length;i++){
                const temp = [...arr];
                temp.splice(i, 1);
                allNums(temp, fix+arr[i])
            }
        }
        if (fix.length > 0) {
            isPrime(parseInt(fix));
        }
    }
    function isPrime(num) {
        for(let i = 2;i<num;i++){
            if(num%i === 0){
                return;
            }
        }
        // console.log(num)
        if(num>1){
            mySet.add(num); 
        }
    }
}


console.log(solution("0226"));
// console.log(isPrime(5))
// console.log(mySet.size)
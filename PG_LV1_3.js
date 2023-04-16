function solution(numbers) {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let sum = 45;
    for(let i = 0;i<arr.length;i++){
        for(let j =0;j<numbers.length;j++){
            if(arr[i]===numbers[j]){
                sum -= arr[i];
            }
        }
    }
    return sum;
}
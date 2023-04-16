function solution(arr) {
    let min = arr[0];
    let count = 0
    if(arr.length ===1){
        return -1;
    } else{
        for(let i = 0;i<arr.length;i++){
            if(min>arr[i]){
                min = arr[i];
                count = i;
            }
        }
        arr.splice(count, 1);
        return arr;
    }
}
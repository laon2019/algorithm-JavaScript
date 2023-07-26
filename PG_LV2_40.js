function solution(k, dungeons) {
    let max = 0;
    let arr = Array(dungeons.length).fill(true);
    dfs(0, k);
    function dfs(count, k){
        if(max < count){
            max = count;
        }
        for(let i =0;i<dungeons.length;i++){
            if(arr[i] && dungeons[i][0]<= k){
                arr[i] = false;
                dfs(count+1, k - dungeons[i][1])
                arr[i] = true;
            }
        }
    }
    return max
}

let arr = [[80, 20], [50, 40], [30, 10]]
console.log(solution(80, arr));

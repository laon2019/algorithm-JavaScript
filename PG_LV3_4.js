function solution(A, B) {
    let arr = Array(B.length).fill(true);
    let maxScore = 0;
    
    function dfs(count) {
        if (maxScore < count) {
            maxScore = count;
        }
        for (let i = 0; i < B.length; i++) {
            if (arr[i] && A[i] < B[i]) {
                arr[i] = false;
                dfs(count + 1);
                arr[i] = true;
            }
        }
    }
    
    dfs(0); 
    
    return maxScore;
}


console.log(solution([5,1,3,7],[2,2,6,8])); 

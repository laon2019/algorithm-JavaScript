function solution(s) {
    var answer = 0;
    if (s.length % 2 === 1){
        return answer;
    }
    let arr = s.split("");
    const left = ["{", "(", "["];
    let stack = [];
    for(let i = 0;i<arr.length;i++){
        let isTrue = true;
        let num = arr.shift();
        arr.push(num);
        for(let j = 0;j<arr.length;j++){
            if(left.includes(arr[j])){
                stack.push(arr[j]);
            } else {
                if(stack.length=== 0){
                    isTrue = false
                    break;
                } else{
                    let popString = stack.pop();
                    if(arr[j] === ")" && popString === "(" ){
                        continue;
                    }
                    if(arr[j] === "}" && popString === "{" ){
                        continue;
                    }
                    if(arr[j] === "]" && popString === "[" ){
                        continue;
                    }
                    isTrue = false;
                }

            }
           
        }
        console.log(stack+isTrue)
        if(stack.length === 0 && isTrue){
            answer++;
        }
    }

   
    return answer;
}

console.log(solution("[)(]"))
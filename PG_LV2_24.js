function solution(elements) {
    const numbers = [...elements,...elements];
    const mySet = new Set();
    for (let i = 1; i < elements.length; i++) {
        for (let j = 0; j < elements.length; j++) {
            const num = numbers.slice(j, j+i).reduce((acc, cur) => {
                return acc+=cur;
            }, 0);
            mySet.add(num);
            console.log(mySet);
        }
    }
    return mySet.size+1;
}

console.log(solution([7,9,1,1,4]))
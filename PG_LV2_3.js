function solution(s) {
    let a = s;
    let count = 0;
    let zero = 0;
    while(a>1){
        zero += a.toString(2).match(/0/g).length;
        a = a.toString(2).match(/1/g).length;
        count++;
    }
    return [count, zero];
}
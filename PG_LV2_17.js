//카펫
// function solution1(brown, yellow) {
//     let sum = brown + yellow;
//     for(let i = 3; i<sum;i++ ){
//         let x = Math.floor(sum/i);
//         if((x-2)*(i-2)==yellow){
//             return [x, i];
//         }
//     }
// }

// function solution2(brown, yellow) {
//     var answer = [];
//     let sum = brown + yellow;
//     for(let i = 3; i<sum;i++ ){
//         let x = Math.floor(sum/i);
//         if((x-2)*(i-2)==yellow){
//             answer[0] = i;
//             answer[1] = x;
//         }
//     }
//     return answer;
// }
// let a = 10;
// let b = 2;
// console.log(solution1(a, b));
// console.log(solution2(a, b));

function solution1(brown, yellow) {
    let sum = brown + yellow;
    for(let i = 3; i<sum;i++ ){
        let x = Math.floor(sum/i);
        if((x-2)*(i-2)==yellow){
            console.log('x = '+ x+ 'i = '+i );
            return [x, i];
        }
    }
}

function solution2(brown, yellow) {
    var answer = [];
    let sum = brown + yellow;
    for(let i = 3; i<sum;i++ ){
        let x = Math.floor(sum/i);
        if((x-2)*(i-2)==yellow){
            console.log('x = '+ x+ 'i = '+i );           
            answer[0] = i;
            answer[1] = x;
        }
    }
    return answer;
}
let a = 10;
let b = 2;
console.log(solution1(a, b));
console.log(solution2(a, b));
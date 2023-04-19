//다음 큰 숫자
function solution(n) {
    let A = n;
    var Acount = n.toString(2).match(/1/g).length;
    var Bcount = 0;
    while(Acount != Bcount){
        A += 1;
        Bcount = A.toString(2).match(/1/g).length;
    }
    return A;
}
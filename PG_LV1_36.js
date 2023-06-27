//콜라문제
function solution(a, b, n) {
    let colla = 0
    while(n >= a) {
        colla += Math.floor(n/a)*b
        n = Math.floor(n/a)*b + n%a
    }
    return colla
}

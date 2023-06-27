//2016
function solution(a, b) {
    let answer = 4;
    let count = b;
    const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const leapYearMonths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (let i = 0; i < a - 1; i++) {
        count += leapYearMonths[i];
    }
    answer = (answer + count) % 7;
    return week[answer];
}



console.log(solution(5,24));
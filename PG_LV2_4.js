//JadenCase 문자열 만들기
function solution(s) {
    let a = s.split(" ");
    let b = a.map(x => x.charAt(0).toUpperCase() 
                  + x.slice(1).toLowerCase());
    
    let c = b.join(" ");
    return c;
}
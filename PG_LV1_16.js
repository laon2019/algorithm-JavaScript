// 문자열 내 p와 y의 개수
function solution(s){
    let a = s.toLowerCase();
    let Pcount = a.split("p").length;
    let Ycount = a.split("y").length;
    
    return Pcount == Ycount ? true : false;
}
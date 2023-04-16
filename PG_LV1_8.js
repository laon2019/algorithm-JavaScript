function solution(x) {
    let a = Math.floor(x/1000);
    let b = Math.floor((x%1000)/100); 
    let c = Math.floor((x%100)/10);
    let d = x%10;
    let sum = a+b+c+d;
    console.log(a+"\n"+b+"\n"+c+"\n"+d+"\n"+sum);
    if(x%sum===0){
        return true;
    } else{
        return false;
    }
}
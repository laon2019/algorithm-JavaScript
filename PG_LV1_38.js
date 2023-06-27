//최소직사각형
function solution(sizes) {
    let height = 0;
    let width = 0;
    for(let i = 0;i<sizes.length;i++){
        sizes[i].sort((a, b) => a-b);
        console.log("가로 : "+sizes[i][0]);
        console.log("세로 : "+sizes[i][1]);
        if(sizes[i][0] > height){
            height = sizes[i][0];
            console.log(height);
        }
        if(sizes[i][1] > width){
            width = sizes[i][1];
            console.log(width);
        }
    }
    console.log(height+"-"+width)
    return height*width;
}


console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))
'use script'
var img_src = new Array("/img/black_00049.jpg","/img/humberger01.webp","/img/R.png");
var num = 0

function change_img(){
    if (num == 2){
        num = 0;
    }
    else {
        num ++;
    }
    document.getElementById("sec-img").src=img_src[num];
}
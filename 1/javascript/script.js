

var parent = document.querySelectorAll(".has-sub");

var node = Array.prototype.slice.call(parent, 0);

node.forEach(function (element) {
element.addEventListener(
    "mouseover",
    function () {
    element.querySelector(".sub").classList.add("active");
    },
    false
);
element.addEventListener(
    "mouseout",
    function () {
    element.querySelector(".sub").classList.remove("active");
    },
    false
);
});

var img_src = new Array("../../img/black_00049.jpg","../../img/humberger01.webp","../../img/R.png");
var num = 0;

function change_img(){
    if (num == 2) {
        num = 0;
    }
    else {
        num ++;
    }
    document.getElementById("sec-img").src=img_src[num];
}
change_img_timer();

function change_img_timer(){
    if (num == 2){
        num = 0;
    } 
    else {
        num ++;
    }
    document.getElementById("sec-img").src=img_src[num];
    setTimeout("change_img_timer()",10000); 
}



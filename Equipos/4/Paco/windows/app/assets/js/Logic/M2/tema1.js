w7 = $("#w7");
w10 = $("#w10");
txt1 = $("#txt1");
txt2 = $("#txt2");

erase();
w7.addClass("active");
txt1.css("display","block");


w7.on("click",function(){
    erase();
    txt1.css("display","block");
    w7.addClass("active");
})

w10.on("click",function(){
    erase();
    txt2.css("display","block");
    w10.addClass("active");
})

function erase(){
    txt1.css("display","none");
    txt2.css("display","none");
    w7.removeClass("active");
    w10.removeClass("active");
}
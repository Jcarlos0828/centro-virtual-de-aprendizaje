busq = $("#busq");
ini = $("#ini");
txt1 = $("#txt1");
txt2 = $("#txt2");

erase();
busq.addClass("active");
txt1.css("display","block");


busq.on("click",function(){
    erase();
    txt1.css("display","block");
    busq.addClass("active");
})

ini.on("click",function(){
    erase();
    txt2.css("display","block");
    ini.addClass("active");
})

function erase(){
    txt1.css("display","none");
    txt2.css("display","none");
    busq.removeClass("active");
    ini.removeClass("active");
}
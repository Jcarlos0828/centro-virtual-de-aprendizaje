contex = $("#contex");
supr = $("#supr");
pap = $("#pap");
txt1 = $("#txt1");
txt2 = $("#txt2");
txt3 = $("#txt3");

erase();
txt1.css("display","block");
contex.addClass("active");

contex.on("click",function(){
    erase();
    txt1.css("display","block");
    contex.addClass("active");
})

supr.on("click",function(){
    erase();
    txt2.css("display","block");
    supr.addClass("active");
})

pap.on("click", function(){
    erase();
    txt3.css("display","block");
    pap.addClass("active");
})

function erase(){
    txt1.css("display","none");
    txt2.css("display","none");
    txt3.css("display","none");
    contex.removeClass("active");
    supr.removeClass("active");
    pap.removeClass("active");
}
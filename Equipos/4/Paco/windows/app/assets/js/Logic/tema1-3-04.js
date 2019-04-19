b1 = $("#b1");
b2 = $("#b2");
a1 = $("#a1");
a2 = $("#a2");
txt1 = $("#txt1");
txt2 = $("#txt2");
txt3 = $("#txt3");
init7 = $("#init7");

erase();

init7.on("click",function(){
    erase();
    txt1.css("display","block");
    a1.css("display","block");
})

b1.on("click",function(){
    erase();
    txt2.css("display","block");
    a2.css("display","block");
})

b2.on("click",function(){
    erase();
    txt3.css("display","block");
})

function erase(){
    txt1.css("display","none");
    txt2.css("display","none");
    txt3.css("display","none");
    a1.css("display","none");
    a2.css("display","none");
}
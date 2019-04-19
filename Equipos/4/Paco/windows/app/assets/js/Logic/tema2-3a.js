archivo = $("#archivo");
contex = $("#contex");
txt1 = $("#txt1");
txt2 = $("#txt2");

erase();

archivo.on("click",function(){
    erase();
    txt1.css("display","block");
    archivo.addClass("active");
})

contex.on("click",function(){
    erase();
    txt2.css("display","block");
    contex.addClass("active");
})

function erase(){
    txt1.css("display","none");
    txt2.css("display","none");
    archivo.removeClass("active");
    contex.removeClass("active");
}
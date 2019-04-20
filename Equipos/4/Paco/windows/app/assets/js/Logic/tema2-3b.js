archivo = $("#archivo");
contex = $("#contex");
carpeta = $("#carpeta");
f2 = $("#f2");
txt1 = $("#txt1");
txt2 = $("#txt2");
txt3 = $("#txt3");
txt4 = $("#txt4");

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

carpeta.on("click", function(){
    erase();
    txt3.css("display","block");
    carpeta.addClass("active");
})

f2.on("click",function(){
    erase();
    txt4.css("display","block");
    f2.addClass("active")
})

function erase(){
    txt1.css("display","none");
    txt2.css("display","none");
    txt3.css("display","none");
    txt4.css("display","none");
    archivo.removeClass("active");
    contex.removeClass("active");
    carpeta.removeClass("active");
    f2.removeClass("active");
}
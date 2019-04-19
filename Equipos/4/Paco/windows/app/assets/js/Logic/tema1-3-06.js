txt1 = $("#txt1");
txt2 = $("#txt2");
txt3 = $("#txt3");
txt4 = $("#txt4");
documentos = $("#documentos");
carpetas = $("#carpetas");
basura = $("#basura");
programas = $("#programas");

erase();
txt1.css("display","block");
documentos.addClass("active");

documentos.on("click",function(){
    erase();
    txt1.css("display","block");
    documentos.addClass("active");
})

carpetas.on("click",function(){
    erase();
    txt2.css("display","block");
    carpetas.addClass("active");
})

basura.on("click",function(){
    erase();
    txt3.css("display","block");
    basura.addClass("active");
})

programas.on("click",function(){
    erase();
    txt4.css("display","block");
    programas.addClass("active");
})


function erase(){
txt1.css("display","none");
txt2.css("display","none");
txt3.css("display","none");
txt4.css("display","none");
documentos.removeClass("active");
carpetas.removeClass("active");
basura.removeClass("active");
programas.removeClass("active");
}
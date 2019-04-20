edicion = $("#edicion");
copiar = $("#copiar");
contex = $("#contex");
control = $("#control");
arrastrar = $("#arrastrar")
txt1 = $("#txt1");
txt2 = $("#txt2");
txt3 = $("#txt3");
txt4 = $("#txt4");
txt5 = $("#txt5");

erase();
txt1.css("display","block");
edicion.addClass("active");

edicion.on("click",function(){
    erase();
    txt1.css("display","block");
    edicion.addClass("active");
})

copiar.on("click",function(){
    erase();
    txt2.css("display","block");
    copiar.addClass("active");
})

contex.on("click", function(){
    erase();
    txt3.css("display","block");
    contex.addClass("active");
})

control.on("click",function(){
    erase();
    txt4.css("display","block");
    control.addClass("active")
})

arrastrar.on("click",function(){
    erase();
    txt5.css("display","block");
    arrastrar.addClass("active");
})

function erase(){
    txt1.css("display","none");
    txt2.css("display","none");
    txt3.css("display","none");
    txt4.css("display","none");
    txt5.css("display","none");
    edicion.removeClass("active");
    copiar.removeClass("active");
    contex.removeClass("active");
    control.removeClass("active");
    arrastrar.removeClass("active");
}
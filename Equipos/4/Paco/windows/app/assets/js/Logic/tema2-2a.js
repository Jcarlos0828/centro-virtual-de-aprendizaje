erase();
$("#txt1").css("display","block");
$("#iconos").addClass("active");

$("#iconos").on("click", function(){
    erase();
   $("#txt1").css("display","block");
   $("#iconos").addClass("active");
});

$("#dir").on("click",function(){
    erase();
    $("#txt2").css("display","block");
   $("#dir").addClass("active");
});

$("#herr").on("click",function(){
    erase();
    $("#txt3").css("display","block");
   $("#herr").addClass("active");
});

$("#nav").on("click",function(){
    erase();
    $("#txt4").css("display","block");
   $("#nav").addClass("active");
});

$("#est").on("click",function(){
    erase();
    $("#txt5").css("display","block");
   $("#est").addClass("active");
});



function erase(){
    $("#txt1").css("display","none");
    $("#txt2").css("display","none");
    $("#txt3").css("display","none");
    $("#txt4").css("display","none");
    $("#txt5").css("display","none");
    $("#iconos").removeClass("active");
    $("#dir").removeClass("active");
    $("#herr").removeClass("active");
    $("#nav").removeClass("active");
    $("#est").removeClass("active");
}

erase();
$("#txt1").css("display","block");
$("#funcion").addClass("active");

$("#funcion").on("click", function(){
    erase();
   $("#txt1").css("display","block");
   $("#funcion").addClass("active");
});

$("#desp").on("click",function(){
    erase();
    $("#txt2").css("display","block");
   $("#desp").addClass("active");
});

$("#num").on("click",function(){
    erase();
    $("#txt3").css("display","block");
   $("#num").addClass("active");
});

$("#alfa").on("click",function(){
    erase();
    $("#txt4").css("display","block");
   $("#alfa").addClass("active");
});

$("#control").on("click",function(){
    erase();
    $("#txt5").css("display","block");
   $("#control").addClass("active");
});



function erase(){
    $("#txt1").css("display","none");
    $("#txt2").css("display","none");
    $("#txt3").css("display","none");
    $("#txt4").css("display","none");
    $("#txt5").css("display","none");
    $("#funcion").removeClass("active");
    $("#desp").removeClass("active");
    $("#num").removeClass("active");
    $("#alfa").removeClass("active");
    $("#control").removeClass("active");
}

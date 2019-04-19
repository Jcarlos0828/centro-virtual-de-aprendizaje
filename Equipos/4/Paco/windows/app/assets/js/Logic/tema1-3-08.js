button = $(".btn-block");
icon = $("#icon");

button.on("click",function(){
    icon.toggleClass("fa-plus");
    icon.toggleClass("fa-minus");
})
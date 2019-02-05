$(document).ready(function(){
    $('#sideNav').load("/app/sideNav.html",function(responseText, textStatus, XMLHttpRequest){
        $('.side-nav-menu > .dropdown').on('click','.dropdown-toggle',function(e){
            e.preventDefault();
            $(this).parent().children('.dropdown-menu').toggle();
            console.log($(this).parent().children());
        });
    });
});
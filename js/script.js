$(document).ready(function () {
    $(".hamburguer").click(function () {
        $(this).toggleClass("active");
        $(".menu").toggleClass("active");
        return false;
    });

    $(".item-menu").click(function(){
        $(".menu").removeClass("active");
    });

  
});


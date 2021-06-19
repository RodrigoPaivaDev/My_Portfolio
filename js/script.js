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

function toggleDevWeek(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popupDevWeek = document.getElementById('popupDevWeek');
    popupDevWeek.classList.toggle('active');

}


function togglePort(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    
    var popupPort = document.getElementById('popupPort');
    popupPort.classList.toggle('active');
}



function toggleGame(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popupGame = document.getElementById('popupGame');
    popupGame.classList.toggle('active');
}
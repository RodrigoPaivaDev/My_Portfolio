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

function blur(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
}

function toggleDevWeek(){
    blur();

    var popupDevWeek = document.getElementById('popupDevWeek');
    popupDevWeek.classList.toggle('active');

}


function togglePort(){
    blur();
    
    var popupPort = document.getElementById('popupPort');
    popupPort.classList.toggle('active');
}



function toggleGame(){
    blur();

    var popupGame = document.getElementById('popupGame');
    popupGame.classList.toggle('active');
}
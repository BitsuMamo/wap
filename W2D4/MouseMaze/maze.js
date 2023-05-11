$(document).ready(function () {

    let lost = false;
    let startClicked = false;

    $('.boundary').each((index, element) => {
        $(element).mouseover(function () {
            youLose();
        });
    });

    $('#end').mouseover(function () {
        if (!lost) {
            $('#status').text("You Win :]");
            startClicked = false;
        }
    })

    $('#start').click(() => {
        lost = false;
        startClicked = true;
        $('.boundary').removeClass("youlose");
    })


    $('#maze').mouseleave(function () { 
        if(startClicked){
            youLose();
        }
    });

});

function youLose(){
    $('.boundary').addClass("youlose")
    lost = true;
    $('#status').text("Sorry, you lost, :[");
    startClicked = false;
}
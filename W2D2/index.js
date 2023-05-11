

$(document).ready(function () {

    $('#stop-btn').prop('disabled', true);

    $('#stop-btn').click(function (e) {
        e.preventDefault();

        console.log("Stop click")
        $('#start-btn').prop("disabled", false);
        $('#stop-btn').prop('disabled', true);

        stopAnimation();


    });

    $('#start-btn').click(function (e) {
        e.preventDefault();
        console.log("Start click")

        $('#stop-btn').prop("disabled", false);
        $('#start-btn').prop('disabled', true);

        if ($('#turbo-check-box').prop("checked")) {
            animate(50);
        } else {
            animate(250);
        }

    });

    $('#animation-select').change(function (e) {
        e.preventDefault();
        $('#stop-btn').click();
        selectAnimation();
    });

    $('#size-select').change(function (e) { 
        e.preventDefault();
        seletSize();
    });

    $('#turbo-check-box').change(function (e) {
        stopAnimation();
        // $('#start-btn').prop("disabled", true);
        // $('#stop-btn').prop('disabled', false);
        if ($('#turbo-check-box').prop("checked")) {
            animate(50);
        } else {
            animate(250);
        }
    })
});

let interval

function stopAnimation() {
    clearInterval(interval);
    selectAnimation();
}

function setText(x, i = 0) {
    $("#draw").text(x[i % x.length]);
}


function animate(x = 50) {
    let frames = $("#draw").text();
    frames = frames.split("=====\n");
    i = 0;

    interval = setInterval(() => {
        setText(frames, i++);
    }, x);
}


function selectAnimation() {
    $('#draw').text(ANIMATIONS[$('#animation-select option:selected').val()]);
}

function seletSize() {
    let fontSize = $('#size-select option:selected').val();
    $('#draw').css("font-size", fontSize);
}
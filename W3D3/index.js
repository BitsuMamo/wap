$(document).ready(function () {
    var count = 0;
    var imageHtmls = [];

    var EMPTY_SQUARE = {
        leftx: "300px",
        toppx: "300px"
    };

    $('#puzzlearea div').each(function () {
        var imageSquares = {};
        var x = ((count % 4) * 100);
        var y = (Math.floor(count / 4) * 100);

        $(this).addClass('puzzlepiece');

        var leftOffest = x + 'px';
        var topOffest = y + 'px';

        imageSquares.leftpx = leftOffest;
        imageSquares.toppx = topOffest;

        imageHtmls.push(imageSquares);

        $(this).css({
            "left": leftOffest,
            "top": topOffest,
            "backgroundImage": "url('images/background.jpg')",
            "backgroundPosition": `${-x}px ${-y}px`,
        });

        count++;
    });

    $('.puzzlepiece').click(function () {

        var changedleft = $(this).css("left");
        var changedtop = $(this).css("top");

        if (leftSafe(changedleft, changedtop)) {
            $(this).css({ "left": EMPTY_SQUARE.leftx, "top": EMPTY_SQUARE.toppx });
            EMPTY_SQUARE.leftx = changedleft;
            EMPTY_SQUARE.toppx = changedtop;
        } else if (topSafe(changedleft, changedtop)) {
            $(this).css({ "left": EMPTY_SQUARE.leftx, "top": EMPTY_SQUARE.toppx });
            EMPTY_SQUARE.leftx = changedleft;
            EMPTY_SQUARE.toppx = changedtop;
        }

    });
    $('.puzzlepiece').hover(function () {
        var changedleft = $(this).css("left");
        var changedtop = $(this).css("top");

        if (leftSafe(changedleft, changedtop)) {
            $(this).addClass('movablepiece');
        } else if (topSafe(changedleft, changedtop)) {
            $(this).addClass('movablepiece');
        }

    }, function () {
        $(this).removeClass('movablepiece');
    });

    const leftSafe = (changedleft, changedtop) => {
        if (parseInt(changedtop) === parseInt(EMPTY_SQUARE.toppx)) {
            if (parseInt(changedleft) + 100 === parseInt(EMPTY_SQUARE.leftx) || parseInt(changedleft) - 100 === parseInt(EMPTY_SQUARE.leftx)) {

                return true;
            }
            return false;
        }
    };

    const topSafe = (changedleft, changedtop) => {
        if (parseInt(changedleft) === parseInt(EMPTY_SQUARE.leftx)) {
            if (parseInt(changedtop) + 100 === parseInt(EMPTY_SQUARE.toppx) || parseInt(changedtop) - 100 === parseInt(EMPTY_SQUARE.toppx)) {
                return true;

            }
            return false;
        }
    };

    $('#shufflebutton').click(function () {

        var i = 0, j = 0, suff = 0, temp = null;

        for (i = imageHtmls.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1));
            temp = imageHtmls[i];
            imageHtmls[i] = imageHtmls[j];
            imageHtmls[j] = temp;
        }
        $('#puzzlearea div').each(function () {
            $(this).css({ "left": imageHtmls[suff].leftpx, "top": imageHtmls[suff].toppx });
            suff++;
        });
        suff = 0;
        EMPTY_SQUARE.leftx = "300px";
        EMPTY_SQUARE.toppx = "300px";
    });

});
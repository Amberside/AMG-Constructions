$(document).ready(function () {
    var win = $(this);
    if (win.width() < 1200) {
        $('#aboutCol1, #aboutCol2').removeClass('col-md-6');
        $('#aboutCol1, #aboutCol2').addClass('col-md-12');
    } else {
        $('#aboutCol1, #aboutCol2').removeClass('col-md-12');
        $('#aboutCol1, #aboutCol2').addClass('col-md-6');

    }
});
$(window).on('resize', function () {
    var win = $(this);
    if (win.width() < 1200) {
        $('#aboutCol1, #aboutCol2').removeClass('col-md-6');
        $('#aboutCol1, #aboutCol2').addClass('col-md-12');
    } else {
        $('#aboutCol1, #aboutCol2').removeClass('col-md-12');
        $('#aboutCol1, #aboutCol2').addClass('col-md-6');
    }
});
$(document).ready(function () {
    var win = $(this);
    if (win.width() < 1124) {
        $('#buildCol1, #buildCol2, #extendCol1, #extendCol2, #renoCol1, #renoCol2, #saunaCol1, #saunaCol2, #spaCol1, #spaCol2, #slopeCol1, #slopeCol2')
            .removeClass('col-md-6');
        $('#buildCol1, #extendCol2, #renoCol1, #saunaCol1, #spaCol1, #slopeCol1')
            .addClass('col-md-12 order-1');
        $('#buildCol2, #extendCol1, #renoCol2, #saunaCol2, #spaCol2, #slopeCol2')
            .addClass('col-md-12 order-12');
    } else {
        $('#buildCol1, #extendCol2, #renoCol1, #saunaCol1, #spaCol1, #slopeCol1')
            .removeClass('col-md-12 order-1');
        $('#buildCol2, #extendCol1, #renoCol2, #saunaCol2, #spaCol2, #slopeCol2')
            .removeClass('col-md-12 order-12');
        $('#buildCol1, #buildCol2, #extendCol1, #extendCol2, #renoCol1, #renoCol2, #saunaCol1, #saunaCol2, #spaCol1, #spaCol2, #slopeCol1, #slopeCol2')
            .addClass('col-md-6');

    }
});
$(window).on('resize', function () {
    var win = $(this);
    if (win.width() < 1124) {
        $('#buildCol1, #buildCol2, #extendCol1, #extendCol2, #renoCol1, #renoCol2, #saunaCol1, #saunaCol2, #spaCol1, #spaCol2, #slopeCol1, #slopeCol2')
            .removeClass('col-md-6');
        $('#buildCol1, #extendCol2, #renoCol1, #saunaCol1, #spaCol1, #slopeCol1')
            .addClass('col-md-12 order-1');
        $('#buildCol2, #extendCol1, #renoCol2, #saunaCol2, #spaCol2, #slopeCol2')
            .addClass('col-md-12 order-12');
    } else {
        $('#buildCol1, #extendCol2, #renoCol1, #saunaCol1, #spaCol1, #slopeCol1')
            .removeClass('col-md-12 order-1');
        $('#buildCol2, #extendCol1, #renoCol2, #saunaCol2, #spaCol2, #slopeCol2')
            .removeClass('col-md-12 order-12');
        $('#buildCol1, #buildCol2, #extendCol1, #extendCol2, #renoCol1, #renoCol2, #saunaCol1, #saunaCol2, #spaCol1, #spaCol2, #slopeCol1, #slopeCol2')
            .addClass('col-md-6');
    }
});
$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash == "#contact" || "#testimonials") {
            // event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});
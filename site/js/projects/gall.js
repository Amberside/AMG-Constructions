document.onkeydown = function (event) {
	switch (event.keyCode) {
		case 37:
			// alert('Left key pressed');
			plusSlides(-1)
			break;
		case 39:
			plusSlides(1)
			break;
		case 27:
			closeModal()

			break;
	}
};


function openModal() {
	document.getElementById("myModal").style.display = "block";
}

function closeModal() {
	document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	// var dots = document.getElementsByClassName("demo");
	var captionText = document.getElementById("caption");

	if (n > slides.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = slides.length }
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	// for (i = 0; i < dots.length; i++) {
	//     dots[i].class = dots[i].class.replace(" active", "");
	// }
	slides[slideIndex - 1].style.display = "block";
	// dots[slideIndex - 1].className += " active";

	// captionText.innerHTML = dots[slideIndex - 1].alt;
}

(function ($) {

	$(".fancybox").fancybox();

	function loopGallery(test, index, item) {
		if (test) {
			var box = $('<div class="col-md-4 box_animaux box-' + index + '"></div>');
			var pola = $('<div class="pola"></div>');
			var view = $('<div class="view thumb"></div>');
			var mask = $('<div class="mask"><h2>' + item.name + '</h2><p>' + item.description + '</p><a href="img/ara_bleu.jpg" class="info fancybox" rel="group" title="' + item.id + '" ><div class="alt">Voir</div></a></div>')

			$('.gallery').prepend(box);
			box.append(pola);
			pola.append(view);
			view.prepend('<img src="' + item.source + '">');
			view.append(mask);
		}
	}

	$.getJSON('json/photos.json', function (data) {
		$.each(data, function (index, item) {
			loopGallery(index <= 2, index, item);
		});
	});

	$('.next').on('click', function (event) {
		event.preventDefault();
		var galleryLength = $('.pola').length;
		$.ajax('json/photos.json', {
			success: function (data) {
				$.each(data, function (index, item) {
					loopGallery(item.id >= galleryLength && item.id < galleryLength + 3, index, item);
				});
			},
			beforeSend: function () {
				$('.next').hide();
				$('.spinner').fadeIn();
			},
			complete: function () {
				$('.spinner').hide();
				$('.next').fadeIn();
			}
		});
	});


})(jQuery);

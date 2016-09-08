$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	// Mobile menu toggler

	var toggles = $(".c-hamburger");

	for (var i = toggles.length - 1; i >= 0; i--) {
		var toggle = toggles[i];
		toggleHandler(toggle);
	};

	function toggleHandler(toggle) {
		toggle.addEventListener( "click", function(e) {
			e.preventDefault();
			(this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
			$(".header__menu-social").slideToggle();
		});
	}

	// Waypoints

	$('.section-3').waypoint(function(){
		$(".section-3__deals .deals__deal").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("deals__deal--off").addClass("deals__deal--on");
			}, 200*index);
		});
	}, {
		offset : "20%"
	});

	$('.section-5').waypoint(function(){
		$(".section-5__news .news__item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("news__item--off").addClass("news__item--on");
			}, 200*index);
		});
	}, {
		offset : "20%"
	});

	// Animation
		$(".section-1__caption").animated("bounceInLeft");
		$(".section-1__form").animated("bounceInRight");

		$(".round-items__item").animated("fadeInUp");
		$(".description__title, .description__text").animated("fadeIn");

		$(".section-6__title, .section-6__descr").animated("fadeIn");
		$(".section-6__button").animated("flip");

});
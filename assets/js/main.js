

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');
	window.onbeforeunload = function () {
		window.scrollTo(0, 0);
	}

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
			
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});


})(jQuery);

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Jil Shah"];
const typingDelay = 200;
const erasingDelay = 500;
const newTextDelay = 4000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
	if (charIndex < textArray[textArrayIndex].length) {
		if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
		typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
		charIndex++;
		setTimeout(type, typingDelay);
	}
	else {
		cursorSpan.classList.remove("typing");
		setTimeout(erase, newTextDelay);
	}
}

function erase() {
	if (charIndex > 0) {
		if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
		typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
		charIndex--;
		setTimeout(erase, erasingDelay);
	}
	else {
		cursorSpan.classList.remove("typing");
		textArrayIndex++;
		if (textArrayIndex >= textArray.length) textArrayIndex = 0;
		setTimeout(type, typingDelay + 1100);
	}
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
	if (textArray.length) setTimeout(type, newTextDelay + 250);
});




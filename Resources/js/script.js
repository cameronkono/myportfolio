$(document).ready(function(){
  $(".throwable").throwable({
    autostart:false,
    gravity:{x:0.00,y:0},
    shape:"box",                 
    bounce:0.5,
    damping:100,
		impulse:{
		f:250,
		p:{x:40,y:20}
    },
  });
});

window.onresize = function(){ location.reload(); }

$(document).ready(function() {

	var screenWidth = window.innerWidth,
		halfWidth = screenWidth / 6,
		screenHeight = window.innerHeight,
		halfHeight = screenHeight / 6,
		mouseX = halfWidth,
		mouseY = halfHeight,
		eyeX = 50,
		eyeY = 50;

	// Make the eye follow cursor	

	$(document).mousemove(function(e) {
		mouseX = e.clientX;
		mouseY = e.clientY;

	});

	function move() {
		eyeX = mouseX / screenWidth * 72;
		eyeY = mouseY / screenHeight * 50;

		$(".eye").css({
			left: eyeX + '%',
			top: eyeY + '%'
		});

		window.requestAnimationFrame(move);
	};

	move();

	// Make blink effect

	function blink() {
		$(".lid-top").addClass("lid-go-down");
		$(".lid-bottom").addClass("lid-go-up");
		setTimeout(function() {
			$(".lid-top").removeClass("lid-go-down");
			$(".lid-bottom").removeClass("lid-go-up");
		}, 200);
	}

	// Blink on click (audio deactivated on this codepen version)
	$(".container").click(function() {
		blink();
	});

	// Blink automatically every x seconds

	var blinkTime;

	function autoBlink() {
		blinkTime = (Math.random() * (8 - 30) + 3) * 1000;
		setTimeout(function() {
			blink();
			autoBlink();
		}, blinkTime);
	};
	autoBlink();

});

$(window).scroll(function(e){ 
  var $el = $('.zero'); 
  var isPositionFixed = ($el.css('position') == 'relative');
  if ($(this).scrollTop() > 300 && !isPositionFixed){ 
    $el.css({'position': 'fixed', 'top': '0px'}); 
  }
  if ($(this).scrollTop() < 300 && isPositionFixed){
    $el.css({'position': 'relative', 'top': '0px'}); 
  } 
});

$( document ).ready(function() {
    var leftgear = document.getElementById("leftgear");
    
    window.addEventListener("scroll", function() {
        leftgear.style.transform = "rotate("+window.pageYOffset/3+"deg)";
    });
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 20) {
        //clearHeader, not clearheader - caps H
        $(".nav").addClass("navScrolled");
    }
		
		else {
		$(".nav").removeClass("navScrolled");
		}
});

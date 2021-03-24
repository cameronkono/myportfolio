$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 10) {
        //clearHeader, not clearheader - caps H
        $(".nav").addClass("navScrolled");
        $(".navBar").addClass("navBarScrolled");
    }
		
		else {
		$(".nav").removeClass("navScrolled");
        $(".navBar").removeClass("navBarScrolled");
		}
});



function openMenu(){
    document.getElementById('burgerIcon').classList.add('close');
    
    document.getElementById('nav').classList.add('mobileMenuOpen');

    document.getElementById('closeContainer').style.visibility='visible';
    
    document.getElementById('mobileMenu').style.visibility='visible';
    
    document.getElementById('mobileMenu').style.opacity='100%';
}

function closeMenu(){
    document.getElementById('burgerIcon').classList.remove('close');
    
    document.getElementById('nav').classList.remove('mobileMenuOpen');

    document.getElementById('closeContainer').style.visibility='hidden';
    
    document.getElementById('mobileMenu').style.opacity='0%';
    
    document.getElementById('mobileMenu').style.visibility='hidden';
}
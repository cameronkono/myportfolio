$(document).ready(function() { 
 var carousel = $(".carousel"),
    currdeg  = 0;
$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);
 
function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 60;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 60;
  }
  carousel.css({
    "-webkit-transform": "rotateX("+currdeg+"deg)",
    "transform": "rotateX("+currdeg+"deg)"
  });
}
});

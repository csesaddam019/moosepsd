$(document).ready(function(){
	$('#nav').slicknav();
     
     $(".blog_list").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 $('.nav a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});
 
});
(function() {
  $(document).ready(function() {
    return $('#header-handle').click(function() {
      return $('header').toggleClass('expanded');
    });
  });

}).call(this);

 //smooth scroll
$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		
		event.preventDefault();

		
		var id  = $(this).attr('href'),

		
			top = $(id).offset().top;
			top = top - 64;
		
		
		$('body,html').animate({scrollTop: top}, 600);
	});
});
////////////////////////////
$(document).ready(function() {
	
	$(".fancybox").fancybox();

	$("#callback").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			alert("Дякую, я з вами звяжуся протягом 1 дня.");
			setTimeout(function() {
				$.fancybox.close();
			}, 6000);
		});
		return false;
	});

});

function checkEmail() {

    var email = document.getElementById('txtEmail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) { 
    alert('Перевірте правельність свого email!');
    email.focus;
    return false;
 }
};


//to top
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 600);
		return false;
	});



//// :((
	$(document).ready(function(){
	$("#down").on("click","a", function (event) {
		
		event.preventDefault();

		
		var id  = $(this).attr('href'),

		
			top = $(id).offset().top;
			top = top - 30;
		
		
		$('body,html').animate({scrollTop: top}, 500);
	});
});
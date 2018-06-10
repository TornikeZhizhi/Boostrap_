 

$(document).scroll(function(){


	var pos =  $(this).scrollTop();

//animate
	if (pos > 400 ) {


		$(".services_box .far").addClass("fadein");


		setTimeout(function(){

		$(".services_box .far2").addClass("fadein");

		},100)

		setTimeout(function(){

		$(".services_box .far3").addClass("fadein");

		},250)

		setTimeout(function(){

		$(".services_box .far4").addClass("fadein");

		},350)

	}
	// else {
	// 	$(".far").removeClass("fadein");

	// 	$(".far2").removeClass("fadein");

	// 	$(".far3").removeClass("fadein");

	// 	$(".far4").removeClass("fadein");
	// }


	if (pos > 100 ) {



		$(".top_nav").css("background","white");
		$(".top_nav").css("border-bottom","1px solid grey");

		$(".start_boostrap h1").css("color","#f05f40");


		$(".navigation ul li a").css("color","black");

		

		$(".navigation ul li a").hover(function(){

			$(this).css("color","#f05f40");

		},function(){

			$(this).css("color","#000");

		})



	}else {
		$(".top_nav").css("background","transparent");

		$(".top_nav").css("border-bottom","none");
		$(".start_boostrap h1").css("color","rgba(255, 255, 255, 0.7)");

		$(".navigation ul li a").css("color","rgb(255, 255, 255, 0.7");


			$(".navigation ul li a").hover(function(){

			$(this).css("color","");

		},function(){

			$(this).css("color","");

		})

	}


	if (pos > 2150) {

		$(".contact_info .phone1").addClass("fadein");


		setTimeout(function(){

		$(".email_info .phone2").addClass("fadein");

		},200)


	};

if (pos > 1400) {


		$(".tester").addClass("slideInUp");


	};


});



   $(document).scroll(function(){

    	var poss =  $(this).scrollTop();

        if ($(document).width() < 576) {
        	

        	if (poss > 2250) {

		$(".contact_info .phone1").removeClass("fadein");
		

			setTimeout(function(){

		$(".email_info .phone2").removeClass("fadein");

		},200)

	}

	if (poss > 3250) {

		$(".contact_info .phone1").addClass("fadein");
		

			setTimeout(function(){

		$(".email_info .phone2").addClass("fadein");

		},200)
			
	}


	};


	})

	






function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

$("#myNavbar a").click(function(){

	$("#myNav").css("width","0px")
})







$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: ( $(hash).offset().top - 82 )
      }, 500, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
      //  window.location.hash = hash;
      });
    }  // End if

   
  });
});
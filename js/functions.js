//Função própria

//Aparecer a nav ao dar um scroll
$(function(){
  $(window).scroll(function(){
    var wscroll = $(window).scrollTop();

    if (wscroll >= $(window).height()) {
      $('#nav').removeClass("nav-hide").addClass("nav-show");
      $('#banner-pic').removeClass('bounceIn').addClass('bounceOut');
    }
    else {
      $('#nav').removeClass("nav-show").addClass("nav-hide");
      $('#banner-pic').removeClass('bounceOut').addClass('bounceIn');
    }
  });
});

//Indicação do Menu
$(document).ready(function() {
  $("ul li a").click(function(){
    $("li a").removeClass("active");
    $(this).addClass("active");
  });
});

//Scroll suave
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

//Confirmação de Envio
$(document).ready(function() {
  $(".contato-submit").click(function(){
    alert("Seu e-mail foi enviado, aguarde retorno!");
  });
});

jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});

//Fim das funções próprias

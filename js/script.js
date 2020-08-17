// Smooth scroll

$(function(){

  $(window).scroll(function() {
    if ($(this).scrollTop() > 900) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

$("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
});

// Modal

$('[data-modal=booking]').on('click', function() {
  $('.overlay, #booking').fadeIn();
});

$('.modal__close').on('click', function() {
    $('.overlay, #booking, #thanks').fadeOut();
});


$('form').submit(function(e) {
  e.preventDefault()
  $.ajax({
      type: 'POST',
      url: 'mailer/smart.php',
      data: $(this).serialize()
  }).done(function() {
      $(this).find('input').val('');
      $("#booking").fadeOut();
      $(".overlay, #thanks").fadeIn();
      $('form').trigger('reset');
  });
  return false;
});

});


let el = $('.menu ul li');

el.click(function() {
  let offsetTop = $(this)[0].offsetTop - 6;
  $('.activator').offset({top: offsetTop});
  
  $('.menu ul li.active').removeClass('active');
  $(this).addClass('active');
})
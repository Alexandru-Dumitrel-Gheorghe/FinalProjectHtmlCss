$('.accordion-button').click(function() {
    $(this).toggleClass('collapsed');
    var target = $(this).data('target');
    $(target).toggleClass('show');
  });
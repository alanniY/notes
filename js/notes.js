$(function(){
  $('.nav-a a').click(function(){
    var id = $(this).attr('data-id');
    $('.nav-a a').removeClass('active');
    $(this).addClass('active');
    $('.tab-item').removeClass('active');
    $('#' + id).addClass('active');
  })
  $('.item p').hover(
    function(){
      $('.item').parents('.tab-item').find('code').hide(1000);
      $(this).parents('.item').find('code:first-child').show('fast', function(){
        $(this).next().show('fast', arguments.callee);
      });
  });
});

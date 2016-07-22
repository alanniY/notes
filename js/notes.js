$(function(){
  $('.nav-a a').click(function(){
    var id = $(this).attr('data-id');
    $('.nav-a a').removeClass('active');
    $(this).addClass('active');
    $('.tab-item').removeClass('active');
    $('#' + id).addClass('active');
  })
  $('.item p').click(function(){
    $('.item').parents('.tab-item').find('code').hide(1000);
    $(this).parents('.item').find('code:first-child').show('fast', function(){
      $(this).next().show('fast', arguments.callee);
    });
  });
  // for of循环 由 var = < ++ 变成了 var of

  // var $items = $('.item');
  // for (var i = 0; i < $items.length; i++) {
  //   $items[i].id = 'item-' + i;
  // }
  var $items = $('.item');
  var i = 0;
  for (var item of $items) {
    item.id = 'item-' + i++;
  }
  // unwrap() 方法增加了一个可选的 selector 参数(div class)
  $('code').unwrap(".p");
  $('#data-one').data({
    'my-haha': 'hello',
    'my-11': 'hello'
  });
  // j2原样保留横杠'my-haha', j3驼峰形式，横杠去除'myHaha'(数字my-11)
  console.log($('#data-one').data());
  var deferred = $.Deferred();
  deferred
    .then(function() {
      throw new Error('An error');
    })
    .then(
      function() {
        console.log('Success 1');
      },
      function() {
        console.log('Failure 1');
      }
    )
    .then(
      function() {
        console.log('Success 2');
      },
      function() {
        console.log('Failure 2');
      }
    );
  deferred.resolve();
  // width\height不再取整，显示浮点数
  console.log($('.three').width());
  $('.three').wrapAll('<div class="divdiv"></div>');
  // $('.three').wrapAll($('.div'));
});
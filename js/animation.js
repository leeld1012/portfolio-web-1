$(function(){
  const title = $('#home .title h2');
  const para = $('#home .title p');
  const btn = $('#home .title a');
  const img = $('#home .img-group');


  title.delay(800).animate({
    'opacity' :1
  }, 1200, 'easeOutCubic');

  para.delay(1000).animate({
    'opacity' :1
  }, 1200, 'easeOutCubic',);

  btn.delay(1400).animate({
    'opacity' :1
  }, 900, );

  img.delay(200).animate({
    'opacity' :1
  }, 2000);

});
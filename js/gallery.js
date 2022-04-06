$(function(){

  const everyBtn = $('#works .gmenu li a')
  const allBtn = $('#works #btn-all');
  const graBtn = $('#works #btn-gra');
  const webBtn = $('#works #btn-web');
  const rwdBtn = $('#works #btn-rwd');
  const moBtn = $('#works #btn-mo');

  const grid = $('#works #gallery')

  $(window).load(function(){
    grid.isotope({   
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
      });
  }); 
  $('#gallery .gra a').magnificPopup({
      type : 'image',
      gallery:{
        enabled:true, //갤러리 스크롤 활성화
      }
    });

  allBtn.click(function(e){
    grid.isotope({
      filter : '.grid-item'
    });
    
    everyBtn.removeClass('gmenu-act');
    allBtn.addClass('gmenu-act');
    e.preventDefault();
  });
  
  graBtn.click(function(e){
    grid.isotope({filter : '.gra'});
    everyBtn.removeClass('gmenu-act');
    graBtn.addClass('gmenu-act');
    e.preventDefault();
  });

  webBtn.click(function(e){
    grid.isotope({filter : '.web'});
    everyBtn.removeClass('gmenu-act');
    webBtn.addClass('gmenu-act');
    e.preventDefault();
  });

  rwdBtn.click(function(e){
    grid.isotope({filter : '.rwd'});
    everyBtn.removeClass('gmenu-act');
    rwdBtn.addClass('gmenu-act');
    e.preventDefault();
  });

  moBtn.click(function(e){
    grid.isotope({filter : '.mo'});
    everyBtn.removeClass('gmenu-act');
    moBtn.addClass('gmenu-act');
    e.preventDefault();
  });


  
 

});
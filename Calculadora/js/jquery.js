$(document).ready(function(){
  $('.sidenav > ul > li:has(ul)').addClass('desplegable');
   $('.sidenav > ul > li > a').click(function() {
     var comprobar = $(this).next();
     $('.sidenav li').removeClass('activado');
     $(this).closest('li').addClass('activado');
     if((comprobar.is('ul')) && (comprobar.is(':visible'))) {
        $(this).closest('li').removeClass('activado');
        comprobar.slideUp('normal');
     }
     if((comprobar.is('ul')) && (!comprobar.is(':visible'))) {
        $('.sidenav ul ul:visible').slideUp('normal');
        comprobar.slideDown('normal');
     }
  });
  $('.sidenav > ul > li > ul > li:has(ul)').addClass('desplegable');
   $('.sidenav > ul > li > ul > li > a').click(function() {
     var comprobar = $(this).next();
     $('.sidenav ul ul li').removeClass('activo');
     $(this).closest('ul ul li').addClass('activo');
     if((comprobar.is('ul ul')) && (comprobar.is(':visible'))) {
        $(this).closest('ul ul li').removeClass('activo');
        comprobar.slideUp('normal');
     }
     if((comprobar.is('ul ul')) && (!comprobar.is(':visible'))) {
        $('.sidenav ul ul ul:visible').slideUp('normal');
        comprobar.slideDown('normal');
     }
  });
});

$(function(){
    var Slidermodule = (function(){
        var pb ={};
        pb.el = $('#slider-c');
        pb.items ={
          panel : pb.el.find('li')
        }
        var SliderInterval,
        CurrentSlider=0,
        nextSlider=1,
        lengthSlider=pb.items.panel.length;
        pb.init = function(settings){
            sliderinit();
        }
        var sliderinit = function(){
            SliderInterval = setInterval(pb.startSlider, 3000);
        }
        pb.startSlider= function(){
          var panels = pb.items.panel;
          if(nextSlider>= lengthSlider){
            nextSlider = 0;
            CurrentSlider = lengthSlider-1;
          }
          panels.eq(CurrentSlider).fadeOut('slow');
          panels.eq(nextSlider).fadeIn('slow');
          CurrentSlider = nextSlider;
          nextSlider += 1;
        }
        return pb;
        }());
         Slidermodule.init();
});

//Menu-responsive
$(document).ready(main);
 
var contador = 1;
 
function main () {
  $('.menu_bar').click(function(){
    if (contador == 1) {
      $('body').addClass('click');
      $('nav').animate({        
        left: '0'
      });
      contador = 0;
    } else {
      $('body').removeClass('click');
      contador = 1;
      $('nav').animate({
        left: '-100%'
      });
    }
    
  });
 
  // Mostramos y ocultamos submenus
  $('.submenu').click(function(){
    $(this).children('.children').slideToggle();
  });
}

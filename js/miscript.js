$(document).ready(function() {

  var i = 0;

  function cambiarImagen() {
    var imagenes = [
      "images/header.png",
      "images/header2.png",
      "images/header3.png"
    ];
    if (i < imagenes.length - 1) {
      i++;
    } else {
      i = 0;
    }
    $('#imagenfondo').fadeOut('slow', function() {

      $('#imagenfondo').css({
        'background-image': 'url("' + imagenes[i] + '")'
      });

      $('#imagenfondo').fadeIn('slow');
    });
  }
  setInterval(cambiarImagen, 30000);

  // var img = '<iframe frameborder="0" scrolling="no" height="220" width="420" src="http://dxlite.g7vjr.org/?dx=LU5DX&limit=10"></iframe>';
  // $("#blob").popover({title: 'Last 10 spots for the selected station', content: img, html:true});
  $('[rel="popover"]').popover();

  $(".fb_iframe_widget span iframe[style]").contents().find('_2p3a').css("width", "100%");

  // $(".dropdown").hover(
  //   function() {
  //     $('.dropdown-menu', this).stop().fadeIn("fast");
  //   },
  //   function() {
  //     $('.dropdown-menu', this).stop().fadeOut("fast");
  //   });


});

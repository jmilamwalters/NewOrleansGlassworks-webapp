/*******************************
        Global Plugins
*******************************/
$(document)
  .ready(function() {

    /* Moment.JS: Initiate */
    moment().format();

    /* Hot Glass Now */
    $('.hot-glass-now').hide();
      if(moment().hours() >= 10 && moment().hours() <= 15){
        $('#glassworks-logo').hide();
        $('#hot-glass-now').show();
      }
      else{
        $('#hot-glass-now').hide();
        $('#glassworks-logo').show();
      }

    /* S-UI: Gallery Dimmer */
    $('.card .dimmer')
      .dimmer({
        on: 'hover'
      });

    /* S-UI: Dimmer */
    $('.dimmable.image')
      .dimmer({
        on: 'hover'
      });

    /* Media Query re: "Blow Your Own Glass" : Disable '.ribbon' */
    function checkWidth() {
        if ($(window).width() < 960) {
            $('a.ui.big.red.ribbon.label').removeClass('label');
        } else {
            $('a.ui.big.red.ribbon').addClass('label');
        }
    }
    $(window).resize(checkWidth);

  })
;

/* S-UI: Close Message */
$('.message .close').on('click', function() {
  $(this).closest('.message').fadeOut();
});

/* S-UI: Sticky */
/*
  $('.ui.sticky')
    .sticky({
      context: '#glassworks-container'
    });
*/
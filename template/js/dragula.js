(function($) {
  'use strict';
  var iconTochange;
  dragula([document.getElementById("dragula-left"), document.getElementById("dragula-right")]);
  dragula([document.getElementById("profile-list-left"), document.getElementById("profile-list-right")]);
  dragula([document.getElementById("dragula-event-left"), document.getElementById("dragula-event-right")])
    .on('drop', function(el) {
      console.log($(el));
      iconTochange = $(el).find('.ti');
      if (iconTochange.hasClass('ti-pin-alt')) {
        iconTochange.removeClass('ti-pin-alt text-primary').addClass('ti-time text-success');
      } else if (iconTochange.hasClass('ti-time')) {
        iconTochange.removeClass('ti-time text-success').addClass('ti-pin-alt text-primary');
      }
    })
})(jQuery);
(function($) {
  'use strict';
  var clipboard = new ClipboardJS('.btn-clipboard');
  clipboard.on('success', function(e) {
    console.log(e);
  });
  clipboard.on('error', function(e) {
    console.log(e);
  });
})(jQuery);
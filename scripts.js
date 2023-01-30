// Jquery to control the link delay:

jQuery(document).ready(function($) {
    $(".delay-link").click(function() {
        var href = $(this).attr('href');
        setTimeout(function() {window.location = href}, 1200);
        return false;
    });
});

// JS to reload page when going back in browser:

window.addEventListener( "pageshow", function ( event ) {
  var historyTraversal = event.persisted || 
                         ( typeof window.performance != "undefined" && 
                              window.performance.navigation.type === 2 );
  if ( historyTraversal ) {
    // Handle page restore.
    window.location.reload();
  }
});

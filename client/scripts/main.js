/** ------------------------------------------------------------------------- *\
 * Main script.
 * client/main.js
 ** ------------------------------------------------------------------------- */

'use strict';

;( function( $ ) {
    var debounce = require('./modules/util/debounce')
    ,   uiNavigation = require('./modules/ui-navigation')
    ;

    if ($('#navigations').length) uiNavigation.init($('#navigations'));
})(jQuery);

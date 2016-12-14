/**
 * Javascript for Objectiv
 *
 * JS for the theme
 */

function ObjectivParentTheme($) {
    'use strict';

    var body = $(document.body);

    this.detectTouch = function() {
        body.addClass('ontouchstart' in window || 'onmsgesturechange' in window ? 'touch' : 'no-touch');
    };

    this.init = function() {

        // Initialize the mobile menu
        $('.nav-primary').objectivMobileMenu();
        
    };
}

var ObjectivParentTheme = new ObjectivParentTheme(jQuery);
ObjectivParentTheme.detectTouch();

jQuery(document).ready(function() {
    ObjectivParentTheme.init();
});

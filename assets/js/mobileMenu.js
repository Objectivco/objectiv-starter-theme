/**
 * Objectiv Mobile Menu
 *
 * Create an off-canvas mobile menu
 *
 * @version 1.0
 */

(function(window, $, undefined) {
    'use strict';

    $.fn.objectivMobileMenu = function(options) {
        var body = $('body');
        var menuButton = $('.nav-primary-toggle');
        var menu = $(this);

        // Check to make sure we have a menu
        if (menu.length === 0) {
            return;
        }

        /**
         * Check to see if menu is open
         *
         * @since 1.0
         */
        function menuIsOpen() {
            if (body.hasClass('nav-is-open')) {
                return true;
            }
            return false;
        }

        /**
         * Toggle the classes to open the menu
         *
         * @since 1.0
         */
        function toggleClasses() {
            menuButton.toggleClass('nav-is-open');
            menu.toggleClass('nav-is-open');
        }

        /**
         * Fire methods to open menu
         *
         * @since 1.0
         */
        function openMenu() {
            if (!menuIsOpen()) {
                toggleClasses();
            }
        }

        /**
         * Fire methods to close menu
         *
         * @since 1.0
         */
        function closeMenu() {
            if (menuIsOpen()) {
                toggleClasses();
            }
        }

        /**
         * Open & Close the Menu
         *
         * @since 1.0
         */
        function toggleMenu(e) {
            e.preventDefault();
            openMenu();
            closeMenu();
            body.toggleClass('nav-is-open');
        }

        /**
		 * Load all of our mobile menu functionality.
		 *
		 * @since  0.1.0
		 * @return void
		 */
		function loadMobileMenu() {
			menuButton.on('click', toggleMenu);
		}

		return loadMobileMenu();
    };

})(this, jQuery);

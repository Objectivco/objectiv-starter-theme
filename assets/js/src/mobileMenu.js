/**
 * Objectiv Mobile Menu
 */
(function () {
    'use strict';

    if ('object' !== typeof window.Objectiv) {
        window.Objectiv = {};
    }

    window.Objectiv.mobileMenu = function (options) {
        if ('undefined' === typeof options.menu)
            return false;

        var container = document.querySelector(options.container),
            menu = document.querySelector(options.menu),
            toggle = document.querySelector(options.toggle);

        if (!container || !menu || !toggle) return;

        function toggleMenu() {
            container.classList.toggle('Nav--is-visible');
            menu.classList.toggle('Nav--is-visible');
            toggle.classList.toggle('Nav--is-visible');

            if (toggle.classList.contains('Nav--is-visible')) {
                toggle.setAttribute('aria-expanded', true);
                menu.setAttribute('aria-hidden', false);
            } else {
                toggle.setAttribute('aria-expanded', false);
                menu.setAttribute('aria-hidden', true);
            }
        }

        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            toggleMenu();
        });
    }
})();
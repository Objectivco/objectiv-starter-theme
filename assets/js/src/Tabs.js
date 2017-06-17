/**
 * Objectiv Tabs
 *
 */
(function () {
    'use strict';

    // Let's make sure that we have an Objectiv object
    if ('object' !== typeof window.Objectiv) {
        window.Objectiv = {};
    }

    window.Objectiv.tabs = function (options) {
        // Make sure that a target is passed into the options object
        if ('undefined' === typeof options.target)
            return false;

        // Set up the variables
        var tabs = document.querySelector(options.target),
            tabLinks = tabs.getElementsByClassName('Tabs-link'),
            tabContainers = tabs.getElementsByClassName('Tab'),
            activeIndex = 0;

        // If we don't have tabs, jump out
        if (!tabs) return;

        // Click handler function to go to tab on click
        function tabClickHandler(link, index) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                goToTab(index);
            });
        }

        // Add appropriate classes based on the current index
        function goToTab(index) {
            if (index !== activeIndex && index >= 0 && index <= tabLinks.length) {
                tabLinks[activeIndex].classList.remove('is-active');
                tabLinks[index].classList.add('is-active');
                tabContainers[activeIndex].classList.remove('is-active');
                tabContainers[index].classList.add('is-active');

                tabLinks[activeIndex].setAttribute('aria-selected', 'false');
                tabLinks[activeIndex].setAttribute('aria-expanded', 'false');
                tabContainers[activeIndex].setAttribute('aria-hidden', 'true');

                tabLinks[index].setAttribute('aria-selected', 'true');
                tabLinks[index].setAttribute('aria-expanded', 'true');
                tabContainers[index].setAttribute('aria-hidden', 'false');


                activeIndex = index;
            }


        }

        // Loop through the links and set the clickhandler
        Array.prototype.map.call(tabLinks, function (value, index) {
            var link = value;
            tabClickHandler(link, index);

            if (link.classList.contains('is-active')) {
                link.setAttribute('aria-selected', 'true');
                link.setAttribute('aria-expanded', 'true');
            }
        });

        // Loop through containers and add appropriate attributes
        Array.prototype.map.call(tabContainers, function (value, index) {
            var content = value;

            content.setAttribute('role', 'tabpanel');
            if (content.classList.contains('is-active')) {
                content.setAttribute('aria-hidden', 'false');
            } else {
                content.setAttribute('aria-hidden', 'true');
            }
        });
    }
})();
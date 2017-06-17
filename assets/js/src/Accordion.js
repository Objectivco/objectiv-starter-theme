/**
 * Objectiv Accessible Accordion
 * 
 * Loosely based off of 10up's Accordion: https://10up.github.io/wp-component-library/component/accordion/index.html
 */
(function () {
    'use strict';

    // Let's make sure that we have an Objectiv object
    if ('object' !== typeof window.Objectiv) {
        window.Objectiv = {};
    }

    // Start creating the accordionobject
    window.Objectiv.accordion = function (options) {
        // Make sure that a target is passed into the options object
        if ('undefined' === typeof options.target)
            return false;

        // Let's set up our variables
        var accordion = document.querySelector(options.target),
            accordionContent = accordion.getElementsByClassName('Accordion-content'),
            accordionHeader = accordion.getElementsByClassName('Accordion-header');

        // If we don't have an accordion, jump out
        if (!accordion) return;

        // Loop through the headers
        Array.prototype.map.call(accordionHeader, function (value, index) {
            var index = index + 1,
                header = value;

            function accordionClickHandler() {
                var content = value.nextElementSibling,
                    contentLabel = content.getElementsByClassName('Accordion-label')[0];

                // Set our active classes
                header.classList.toggle('is-active');
                content.classList.toggle('is-active');

                // Focus on the label in the accordion content
                contentLabel.focus();

                // Let's now set all of our attributes if the accordion is active
                if (content.classList.contains('is-active')) {
                    header.setAttribute('aria-selected', 'true');
                    header.setAttribute('aria-expanded', 'true');
                    content.setAttribute('aria-hidden', 'false');
                } else {
                    header.setAttribute('aria-selected', 'false');
                    header.setAttribute('aria-expanded', 'false');
                    content.setAttribute('aria-hidden', 'true');
                }

            }

            header.addEventListener('click', accordionClickHandler);
        });

        // Set proper attributes for the content and content label
        Array.prototype.map.call(accordionContent, function (value, index) {
            var content = value;

            content.setAttribute('aria-hidden', 'true');
            content.setAttribute('role', 'tabpanel');
        });
    }
})();
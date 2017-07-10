'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Objectiv Accessible Accordion
 * 
 * Loosely based off of 10up's Accordion: https://10up.github.io/wp-component-library/component/accordion/index.html
 */
(function () {
    'use strict';

    // Let's make sure that we have an Objectiv object

    if ('object' !== _typeof(window.Objectiv)) {
        window.Objectiv = {};
    }

    // Start creating the accordionobject
    window.Objectiv.accordion = function (options) {
        // Make sure that a target is passed into the options object
        if ('undefined' === typeof options.target) return false;

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
    };
})();
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Objectiv Tabs
 *
 */
(function () {
    'use strict';

    // Let's make sure that we have an Objectiv object

    if ('object' !== _typeof(window.Objectiv)) {
        window.Objectiv = {};
    }

    window.Objectiv.tabs = function (options) {
        // Make sure that a target is passed into the options object
        if ('undefined' === typeof options.target) return false;

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
    };
})();
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Objectiv Mobile Menu
 */
(function () {
    'use strict';

    if ('object' !== _typeof(window.Objectiv)) {
        window.Objectiv = {};
    }

    window.Objectiv.mobileMenu = function (options) {
        if ('undefined' === typeof options.menu) return false;

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
    };
})();
'use strict';

/**
 * Javascript for Objectiv
 *
 * JS for the theme
 */
document.addEventListener('DOMContentLoaded', function () {
    // Initialize the mobile menu
    Objectiv.mobileMenu({
        container: '.SiteContainer',
        menu: '.Nav--primary',
        toggle: '.NavToggle'
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFjY29yZGlvbi5qcyIsIlRhYnMuanMiLCJtb2JpbGVNZW51LmpzIiwidGhlbWUuanMiXSwibmFtZXMiOlsid2luZG93IiwiT2JqZWN0aXYiLCJhY2NvcmRpb24iLCJvcHRpb25zIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWNjb3JkaW9uQ29udGVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJhY2NvcmRpb25IZWFkZXIiLCJBcnJheSIsInByb3RvdHlwZSIsIm1hcCIsImNhbGwiLCJ2YWx1ZSIsImluZGV4IiwiaGVhZGVyIiwiYWNjb3JkaW9uQ2xpY2tIYW5kbGVyIiwiY29udGVudCIsIm5leHRFbGVtZW50U2libGluZyIsImNvbnRlbnRMYWJlbCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImZvY3VzIiwiY29udGFpbnMiLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwidGFicyIsInRhYkxpbmtzIiwidGFiQ29udGFpbmVycyIsImFjdGl2ZUluZGV4IiwidGFiQ2xpY2tIYW5kbGVyIiwibGluayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImdvVG9UYWIiLCJsZW5ndGgiLCJyZW1vdmUiLCJhZGQiLCJtb2JpbGVNZW51IiwibWVudSIsImNvbnRhaW5lciIsInRvZ2dsZU1lbnUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7QUFLQSxDQUFDLFlBQVk7QUFDVDs7QUFFQTs7QUFDQSxRQUFJLHFCQUFvQkEsT0FBT0MsUUFBM0IsQ0FBSixFQUF5QztBQUNyQ0QsZUFBT0MsUUFBUCxHQUFrQixFQUFsQjtBQUNIOztBQUVEO0FBQ0FELFdBQU9DLFFBQVAsQ0FBZ0JDLFNBQWhCLEdBQTRCLFVBQVVDLE9BQVYsRUFBbUI7QUFDM0M7QUFDQSxZQUFJLGdCQUFnQixPQUFPQSxRQUFRQyxNQUFuQyxFQUNJLE9BQU8sS0FBUDs7QUFFSjtBQUNBLFlBQUlGLFlBQVlHLFNBQVNDLGFBQVQsQ0FBdUJILFFBQVFDLE1BQS9CLENB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RUFBb0M7O0FBRXBDLGlCQUFTb0IsVUFBVCxHQUFzQjtBQUNsQkQsc0JBQVVwQixTQUFWLENBQW9CQyxNQUFwQixDQUEyQixpQkFBM0I7QUFDQWtCLGlCQUFLbkIsU0FBTCxDQUFlQyxNQUFmLENBQXNCLGlCQUF0QjtBQUNBQSxtQkFBT0QsU0FBUCxDQUFpQkMsTUFBakIsQ0FBd0IsaUJBQXhCOztBQUVBLGdCQUFJQSxPQUFPRCxTQUFQLENBQWlCRyxRQUFqQixDQUEwQixpQkFBMUIsQ0FBSixFQUFrRDtBQUM5Q0YsdUJBQU9HLFlBQVAsQ0FBb0IsZUFBcEIsRUFBcUMsSUFBckM7QUFDQWUscUJBQUtmLFlBQUwsQ0FBa0IsYUFBbEIsRUFBaUMsS0FBakM7QUFDSCxhQUhELE1BR087QUFDSEgsdUJBQU9HLFlBQVAsQ0FBb0IsZUFBcEIsRUFBcUMsS0FBckM7QUFDQWUscUJBQUtmLFlBQUwsQ0FBa0IsYUFBbEIsRUFBaUMsSUFBakM7QUFDSDtBQUNKOztBQUVESCxlQUFPSSxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFVTyxDQUFWLEVBQWE7QUFDMUNBLGNBQUVDLGNBQUY7QUFDQVE7QUFDSCxTQUhEO0FBSUgsS0E1QkQ7QUE2QkgsQ0FwQ0Q7OztBQ0hBOzs7OztBQUtBckMsU0FBU3FCLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3REO0FBQ0F6QixhQUFTc0MsVUFBVCxDQUFvQjtBQUNoQkUsbUJBQVcsZ0JBREs7QUFFaEJELGNBQU0sZUFGVTtBQUdoQmxCLGdCQUFRO0FBSFEsS0FBcEI7QUFLSCxDQVBEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBPYmplY3RpdiBBY2Nlc3NpYmxlIEFjY29yZGlvblxuICogXG4gKiBMb29zZWx5IGJhc2VkIG9mZiBvZiAxMHVwJ3MgQWNjb3JkaW9uOiBodHRwczovLzEwdXAuZ2l0aHViLmlvL3dwLWNvbXBvbmVudC1saWJyYXJ5L2NvbXBvbmVudC9hY2NvcmRpb24vaW5kZXguaHRtbFxuICovXG4oZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIC8vIExldCdzIG1ha2Ugc3VyZSB0aGF0IHdlIGhhdmUgYW4gT2JqZWN0aXYgb2JqZWN0XG4gICAgaWYgKCdvYmplY3QnICE9PSB0eXBlb2Ygd2luZG93Lk9iamVjdGl2KSB7XG4gICAgICAgIHdpbmRvdy5PYmplY3RpdiA9IHt9O1xuICAgIH1cblxuICAgIC8vIFN0YXJ0IGNyZWF0aW5nIHRoZSBhY2NvcmRpb25vYmplY3RcbiAgICB3aW5kb3cuT2JqZWN0aXYuYWNjb3JkaW9uID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgYSB0YXJnZXQgaXMgcGFzc2VkIGludG8gdGhlIG9wdGlvbnMgb2JqZWN0XG4gICAgICAgIGlmICgndW5kZWZpbmVkJyA9PT0gdHlwZW9mIG9wdGlvbnMudGFyZ2V0KVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIC8vIExldCdzIHNldCB1cCBvdXIgdmFyaWFibGVzXG4gICAgICAgIHZhciBhY2NvcmRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMudGFyZ2V0KSxcbiAgICAgICAgICAgIGFjY29yZGlvbkNvbnRlbnQgPSBhY2NvcmRpb24uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnQWNjb3JkaW9uLWNvbnRlbnQnKSxcbiAgICAgICAgICAgIGFjY29yZGlvbkhlYWRlciA9IGFjY29yZGlvbi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdBY2NvcmRpb24taGVhZGVyJyk7XG5cbiAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhbiBhY2NvcmRpb24sIGp1bXAgb3V0XG4gICAgICAgIGlmICghYWNjb3JkaW9uKSByZXR1cm47XG5cbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBoZWFkZXJzXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChhY2NvcmRpb25IZWFkZXIsIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGluZGV4ICsgMSxcbiAgICAgICAgICAgICAgICBoZWFkZXIgPSB2YWx1ZTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gYWNjb3JkaW9uQ2xpY2tIYW5kbGVyKCkge1xuICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gdmFsdWUubmV4dEVsZW1lbnRTaWJsaW5nLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50TGFiZWwgPSBjb250ZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ0FjY29yZGlvbi1sYWJlbCcpWzBdO1xuXG4gICAgICAgICAgICAgICAgLy8gU2V0IG91ciBhY3RpdmUgY2xhc3Nlc1xuICAgICAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgLy8gRm9jdXMgb24gdGhlIGxhYmVsIGluIHRoZSBhY2NvcmRpb24gY29udGVudFxuICAgICAgICAgICAgICAgIGNvbnRlbnRMYWJlbC5mb2N1cygpO1xuXG4gICAgICAgICAgICAgICAgLy8gTGV0J3Mgbm93IHNldCBhbGwgb2Ygb3VyIGF0dHJpYnV0ZXMgaWYgdGhlIGFjY29yZGlvbiBpcyBhY3RpdmVcbiAgICAgICAgICAgICAgICBpZiAoY29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFjY29yZGlvbkNsaWNrSGFuZGxlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFNldCBwcm9wZXIgYXR0cmlidXRlcyBmb3IgdGhlIGNvbnRlbnQgYW5kIGNvbnRlbnQgbGFiZWxcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGFjY29yZGlvbkNvbnRlbnQsIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gdmFsdWU7XG5cbiAgICAgICAgICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICAgICAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICd0YWJwYW5lbCcpO1xuICAgICAgICB9KTtcbiAgICB9XG59KSgpOyIsIi8qKlxuICogT2JqZWN0aXYgVGFic1xuICpcbiAqL1xuKGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICAvLyBMZXQncyBtYWtlIHN1cmUgdGhhdCB3ZSBoYXZlIGFuIE9iamVjdGl2IG9iamVjdFxuICAgIGlmICgnb2JqZWN0JyAhPT0gdHlwZW9mIHdpbmRvdy5PYmplY3Rpdikge1xuICAgICAgICB3aW5kb3cuT2JqZWN0aXYgPSB7fTtcbiAgICB9XG5cbiAgICB3aW5kb3cuT2JqZWN0aXYudGFicyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IGEgdGFyZ2V0IGlzIHBhc3NlZCBpbnRvIHRoZSBvcHRpb25zIG9iamVjdFxuICAgICAgICBpZiAoJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBvcHRpb25zLnRhcmdldClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICAvLyBTZXQgdXAgdGhlIHZhcmlhYmxlc1xuICAgICAgICB2YXIgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy50YXJnZXQpLFxuICAgICAgICAgICAgdGFiTGlua3MgPSB0YWJzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ1RhYnMtbGluaycpLFxuICAgICAgICAgICAgdGFiQ29udGFpbmVycyA9IHRhYnMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnVGFiJyksXG4gICAgICAgICAgICBhY3RpdmVJbmRleCA9IDA7XG5cbiAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSB0YWJzLCBqdW1wIG91dFxuICAgICAgICBpZiAoIXRhYnMpIHJldHVybjtcblxuICAgICAgICAvLyBDbGljayBoYW5kbGVyIGZ1bmN0aW9uIHRvIGdvIHRvIHRhYiBvbiBjbGlja1xuICAgICAgICBmdW5jdGlvbiB0YWJDbGlja0hhbmRsZXIobGluaywgaW5kZXgpIHtcbiAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBnb1RvVGFiKGluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIGFwcHJvcHJpYXRlIGNsYXNzZXMgYmFzZWQgb24gdGhlIGN1cnJlbnQgaW5kZXhcbiAgICAgICAgZnVuY3Rpb24gZ29Ub1RhYihpbmRleCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSBhY3RpdmVJbmRleCAmJiBpbmRleCA+PSAwICYmIGluZGV4IDw9IHRhYkxpbmtzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRhYkxpbmtzW2FjdGl2ZUluZGV4XS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB0YWJMaW5rc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgdGFiQ29udGFpbmVyc1thY3RpdmVJbmRleF0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgdGFiQ29udGFpbmVyc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICB0YWJMaW5rc1thY3RpdmVJbmRleF0uc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICAgICAgdGFiTGlua3NbYWN0aXZlSW5kZXhdLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgICAgIHRhYkNvbnRhaW5lcnNbYWN0aXZlSW5kZXhdLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgICAgICAgICAgICAgdGFiTGlua3NbaW5kZXhdLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgdGFiTGlua3NbaW5kZXhdLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgdGFiQ29udGFpbmVyc1tpbmRleF0uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG5cbiAgICAgICAgICAgICAgICBhY3RpdmVJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgbGlua3MgYW5kIHNldCB0aGUgY2xpY2toYW5kbGVyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbCh0YWJMaW5rcywgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIGxpbmsgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRhYkNsaWNrSGFuZGxlcihsaW5rLCBpbmRleCk7XG5cbiAgICAgICAgICAgIGlmIChsaW5rLmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBMb29wIHRocm91Z2ggY29udGFpbmVycyBhbmQgYWRkIGFwcHJvcHJpYXRlIGF0dHJpYnV0ZXNcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKHRhYkNvbnRhaW5lcnMsIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gdmFsdWU7XG5cbiAgICAgICAgICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3RhYnBhbmVsJyk7XG4gICAgICAgICAgICBpZiAoY29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0pKCk7IiwiLyoqXG4gKiBPYmplY3RpdiBNb2JpbGUgTWVudVxuICovXG4oZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGlmICgnb2JqZWN0JyAhPT0gdHlwZW9mIHdpbmRvdy5PYmplY3Rpdikge1xuICAgICAgICB3aW5kb3cuT2JqZWN0aXYgPSB7fTtcbiAgICB9XG5cbiAgICB3aW5kb3cuT2JqZWN0aXYubW9iaWxlTWVudSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmICgndW5kZWZpbmVkJyA9PT0gdHlwZW9mIG9wdGlvbnMubWVudSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmNvbnRhaW5lciksXG4gICAgICAgICAgICBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLm1lbnUpLFxuICAgICAgICAgICAgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLnRvZ2dsZSk7XG5cbiAgICAgICAgaWYgKCFjb250YWluZXIgfHwgIW1lbnUgfHwgIXRvZ2dsZSkgcmV0dXJuO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZU1lbnUoKSB7XG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnTmF2LS1pcy12aXNpYmxlJyk7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ05hdi0taXMtdmlzaWJsZScpO1xuICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ05hdi0taXMtdmlzaWJsZScpO1xuXG4gICAgICAgICAgICBpZiAodG9nZ2xlLmNsYXNzTGlzdC5jb250YWlucygnTmF2LS1pcy12aXNpYmxlJykpIHtcbiAgICAgICAgICAgICAgICB0b2dnbGUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b2dnbGUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIG1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRvZ2dsZU1lbnUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSkoKTsiLCIvKipcbiAqIEphdmFzY3JpcHQgZm9yIE9iamVjdGl2XG4gKlxuICogSlMgZm9yIHRoZSB0aGVtZVxuICovXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIC8vIEluaXRpYWxpemUgdGhlIG1vYmlsZSBtZW51XG4gICAgT2JqZWN0aXYubW9iaWxlTWVudSh7XG4gICAgICAgIGNvbnRhaW5lcjogJy5TaXRlQ29udGFpbmVyJyxcbiAgICAgICAgbWVudTogJy5OYXYtLXByaW1hcnknLFxuICAgICAgICB0b2dnbGU6ICcuTmF2VG9nZ2xlJ1xuICAgIH0pO1xufSk7XG4iXX0=

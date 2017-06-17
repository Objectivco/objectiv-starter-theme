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

/**
 * Javascript for Objectiv
 *
 * JS for the theme
 */
document.addEventListener('DOMContentLoaded', function () {
    // Initialize the mobile menu
    Objectiv.mobileMenu({
        container: '.SiteContainer',
        menu: '.Nav--mobile',
        toggle: '.NavToggle'
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFjY29yZGlvbi5qcyIsIk1vYmlsZU1lbnUuanMiLCJUYWJzLmpzIiwidGhlbWUuanMiXSwibmFtZXMiOlsid2luZG93IiwiT2JqZWN0aXYiLCJhY2NvcmRpb24iLCJvcHRpb25zIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWNjb3JkaW9uQ29udGVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJhY2NvcmRpb25IZWFkZXIiLCJBcnJheSIsInByb3RvdHlwZSIsIm1hcCIsImNhbGwiLCJ2YWx1ZSIsImluZGV4IiwiaGVhZGVyIiwiYWNjb3JkaW9uQ2xpY2tIYW5kbGVyIiwiY29udGVudCIsIm5leHRFbGVtZW50U2libGluZyIsImNvbnRlbnRMYWJlbCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImZvY3VzIiwiY29udGFpbnMiLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwibW9iaWxlTWVudSIsIm1lbnUiLCJjb250YWluZXIiLCJ0b2dnbGVNZW51IiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFicyIsInRhYkxpbmtzIiwidGFiQ29udGFpbmVycyIsImFjdGl2ZUluZGV4IiwidGFiQ2xpY2tIYW5kbGVyIiwibGluayIsImdvVG9UYWIiLCJsZW5ndGgiLCJyZW1vdmUiLCJhZGQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7QUFLQSxDQUFDLFlBQVk7QUFDVDs7QUFFQTs7QUFDQSxRQUFJLHFCQUFvQkEsT0FBT0MsUUFBM0IsQ0FBSixFQUF5QztBQUNyQ0QsZUFBT0MsUUFBUCxHQUFrQixFQUFsQjtBQUNIOztBQUVEO0FBQ0FELFdBQU9DLFFBQVAsQ0FBZ0JDLFNBQWhCLEdBQTRCLFVBQVVDLE9BQVYsRUFBbUI7QUFDM0M7QUFDQSxZQUFJLGdCQUFnQixPQUFPQSxRQUFRQyxNQUFuQyxFQUNJLE9BQU8sS0FBUDs7QUFFSjtBQUNBLFlBQUlGLFlBQVlHLFNBQVNDLGFBQVQsQ0FBdUJILFFBQVFDLE1BQS9CLENB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QUFzQnZCLEtBQXRCOztBQUVBLGdCQUFJdUIsS0FBS2pCLFNBQUwsQ0FBZUcsUUFBZixDQUF3QixXQUF4QixDQUFKLEVBQTBDO0FBQ3RDYyxxQkFBS2IsWUFBTCxDQUFrQixlQUFsQixFQUFtQyxNQUFuQztBQUNBYSxxQkFBS2IsWUFBTCxDQUFrQixlQUFsQixFQUFtQyxNQUFuQztBQUNIO0FBQ0osU0FSRDs7QUFVQTtBQUNBZixjQUFNQyxTQUFOLENBQWdCQyxHQUFoQixDQUFvQkMsSUFBcEIsQ0FBeUJzQixhQUF6QixFQUF3QyxVQUFVckIsS0FBVixFQUFpQkMsS0FBakIsRUFBd0I7QUFDNUQsZ0JBQUlHLFVBQVVKLEtBQWQ7O0FBRUFJLG9CQUFRTyxZQUFSLENBQXFCLE1BQXJCLEVBQTZCLFVBQTdCO0FBQ0EsZ0JBQUlQLFFBQVFHLFNBQVIsQ0FBa0JHLFFBQWxCLENBQTJCLFdBQTNCLENBQUosRUFBNkM7QUFDekNOLHdCQUFRTyxZQUFSLENBQXFCLGFBQXJCLEVBQW9DLE9BQXBDO0FBQ0gsYUFGRCxNQUVPO0FBQ0hQLHdCQUFRTyxZQUFSLENBQXFCLGFBQXJCLEVBQW9DLE1BQXBDO0FBQ0g7QUFDSixTQVREO0FBVUgsS0FuRUQ7QUFvRUgsQ0E1RUQ7OztBQ0pBOzs7OztBQUtBcEIsU0FBU3FCLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3REO0FBQ0F6QixhQUFTMEIsVUFBVCxDQUFvQjtBQUNoQkUsbUJBQVcsZ0JBREs7QUFFaEJELGNBQU0sY0FGVTtBQUdoQk4sZ0JBQVE7QUFIUSxLQUFwQjtBQUtILENBUEQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE9iamVjdGl2IEFjY2Vzc2libGUgQWNjb3JkaW9uXG4gKiBcbiAqIExvb3NlbHkgYmFzZWQgb2ZmIG9mIDEwdXAncyBBY2NvcmRpb246IGh0dHBzOi8vMTB1cC5naXRodWIuaW8vd3AtY29tcG9uZW50LWxpYnJhcnkvY29tcG9uZW50L2FjY29yZGlvbi9pbmRleC5odG1sXG4gKi9cbihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLy8gTGV0J3MgbWFrZSBzdXJlIHRoYXQgd2UgaGF2ZSBhbiBPYmplY3RpdiBvYmplY3RcbiAgICBpZiAoJ29iamVjdCcgIT09IHR5cGVvZiB3aW5kb3cuT2JqZWN0aXYpIHtcbiAgICAgICAgd2luZG93Lk9iamVjdGl2ID0ge307XG4gICAgfVxuXG4gICAgLy8gU3RhcnQgY3JlYXRpbmcgdGhlIGFjY29yZGlvbm9iamVjdFxuICAgIHdpbmRvdy5PYmplY3Rpdi5hY2NvcmRpb24gPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCBhIHRhcmdldCBpcyBwYXNzZWQgaW50byB0aGUgb3B0aW9ucyBvYmplY3RcbiAgICAgICAgaWYgKCd1bmRlZmluZWQnID09PSB0eXBlb2Ygb3B0aW9ucy50YXJnZXQpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgLy8gTGV0J3Mgc2V0IHVwIG91ciB2YXJpYWJsZXNcbiAgICAgICAgdmFyIGFjY29yZGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy50YXJnZXQpLFxuICAgICAgICAgICAgYWNjb3JkaW9uQ29udGVudCA9IGFjY29yZGlvbi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdBY2NvcmRpb24tY29udGVudCcpLFxuICAgICAgICAgICAgYWNjb3JkaW9uSGVhZGVyID0gYWNjb3JkaW9uLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ0FjY29yZGlvbi1oZWFkZXInKTtcblxuICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGFuIGFjY29yZGlvbiwganVtcCBvdXRcbiAgICAgICAgaWYgKCFhY2NvcmRpb24pIHJldHVybjtcblxuICAgICAgICAvLyBMb29wIHRocm91Z2ggdGhlIGhlYWRlcnNcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGFjY29yZGlvbkhlYWRlciwgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICAgICAgICAgIGhlYWRlciA9IHZhbHVlO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBhY2NvcmRpb25DbGlja0hhbmRsZXIoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSB2YWx1ZS5uZXh0RWxlbWVudFNpYmxpbmcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRMYWJlbCA9IGNvbnRlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnQWNjb3JkaW9uLWxhYmVsJylbMF07XG5cbiAgICAgICAgICAgICAgICAvLyBTZXQgb3VyIGFjdGl2ZSBjbGFzc2VzXG4gICAgICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBGb2N1cyBvbiB0aGUgbGFiZWwgaW4gdGhlIGFjY29yZGlvbiBjb250ZW50XG4gICAgICAgICAgICAgICAgY29udGVudExhYmVsLmZvY3VzKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBMZXQncyBub3cgc2V0IGFsbCBvZiBvdXIgYXR0cmlidXRlcyBpZiB0aGUgYWNjb3JkaW9uIGlzIGFjdGl2ZVxuICAgICAgICAgICAgICAgIGlmIChjb250ZW50LmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWNjb3JkaW9uQ2xpY2tIYW5kbGVyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU2V0IHByb3BlciBhdHRyaWJ1dGVzIGZvciB0aGUgY29udGVudCBhbmQgY29udGVudCBsYWJlbFxuICAgICAgICBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoYWNjb3JkaW9uQ29udGVudCwgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSB2YWx1ZTtcblxuICAgICAgICAgICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3RhYnBhbmVsJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pKCk7IiwiLyoqXG4gKiBPYmplY3RpdiBNb2JpbGUgTWVudVxuICovXG4oZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGlmICgnb2JqZWN0JyAhPT0gdHlwZW9mIHdpbmRvdy5PYmplY3Rpdikge1xuICAgICAgICB3aW5kb3cuT2JqZWN0aXYgPSB7fTtcbiAgICB9XG5cbiAgICB3aW5kb3cuT2JqZWN0aXYubW9iaWxlTWVudSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmICgndW5kZWZpbmVkJyA9PT0gdHlwZW9mIG9wdGlvbnMubWVudSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmNvbnRhaW5lciksXG4gICAgICAgICAgICBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLm1lbnUpLFxuICAgICAgICAgICAgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLnRvZ2dsZSk7XG5cbiAgICAgICAgaWYgKCFjb250YWluZXIgfHwgIW1lbnUgfHwgIXRvZ2dsZSkgcmV0dXJuO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZU1lbnUoKSB7XG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnTmF2LS1pcy12aXNpYmxlJyk7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ05hdi0taXMtdmlzaWJsZScpO1xuICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ05hdi0taXMtdmlzaWJsZScpO1xuXG4gICAgICAgICAgICBpZiAodG9nZ2xlLmNsYXNzTGlzdC5jb250YWlucygnTmF2LS1pcy12aXNpYmxlJykpIHtcbiAgICAgICAgICAgICAgICB0b2dnbGUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b2dnbGUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIG1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRvZ2dsZU1lbnUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSkoKTsiLCIvKipcbiAqIE9iamVjdGl2IFRhYnNcbiAqXG4gKi9cbihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLy8gTGV0J3MgbWFrZSBzdXJlIHRoYXQgd2UgaGF2ZSBhbiBPYmplY3RpdiBvYmplY3RcbiAgICBpZiAoJ29iamVjdCcgIT09IHR5cGVvZiB3aW5kb3cuT2JqZWN0aXYpIHtcbiAgICAgICAgd2luZG93Lk9iamVjdGl2ID0ge307XG4gICAgfVxuXG4gICAgd2luZG93Lk9iamVjdGl2LnRhYnMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCBhIHRhcmdldCBpcyBwYXNzZWQgaW50byB0aGUgb3B0aW9ucyBvYmplY3RcbiAgICAgICAgaWYgKCd1bmRlZmluZWQnID09PSB0eXBlb2Ygb3B0aW9ucy50YXJnZXQpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgLy8gU2V0IHVwIHRoZSB2YXJpYWJsZXNcbiAgICAgICAgdmFyIHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMudGFyZ2V0KSxcbiAgICAgICAgICAgIHRhYkxpbmtzID0gdGFicy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdUYWJzLWxpbmsnKSxcbiAgICAgICAgICAgIHRhYkNvbnRhaW5lcnMgPSB0YWJzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ1RhYicpLFxuICAgICAgICAgICAgYWN0aXZlSW5kZXggPSAwO1xuXG4gICAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgdGFicywganVtcCBvdXRcbiAgICAgICAgaWYgKCF0YWJzKSByZXR1cm47XG5cbiAgICAgICAgLy8gQ2xpY2sgaGFuZGxlciBmdW5jdGlvbiB0byBnbyB0byB0YWIgb24gY2xpY2tcbiAgICAgICAgZnVuY3Rpb24gdGFiQ2xpY2tIYW5kbGVyKGxpbmssIGluZGV4KSB7XG4gICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZ29Ub1RhYihpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBhcHByb3ByaWF0ZSBjbGFzc2VzIGJhc2VkIG9uIHRoZSBjdXJyZW50IGluZGV4XG4gICAgICAgIGZ1bmN0aW9uIGdvVG9UYWIoaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gYWN0aXZlSW5kZXggJiYgaW5kZXggPj0gMCAmJiBpbmRleCA8PSB0YWJMaW5rcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0YWJMaW5rc1thY3RpdmVJbmRleF0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgdGFiTGlua3NbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHRhYkNvbnRhaW5lcnNbYWN0aXZlSW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHRhYkNvbnRhaW5lcnNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgdGFiTGlua3NbYWN0aXZlSW5kZXhdLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgICAgIHRhYkxpbmtzW2FjdGl2ZUluZGV4XS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgICAgICB0YWJDb250YWluZXJzW2FjdGl2ZUluZGV4XS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgICAgICAgICAgICAgIHRhYkxpbmtzW2luZGV4XS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIHRhYkxpbmtzW2luZGV4XS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIHRhYkNvbnRhaW5lcnNbaW5kZXhdLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuXG4gICAgICAgICAgICAgICAgYWN0aXZlSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBMb29wIHRocm91Z2ggdGhlIGxpbmtzIGFuZCBzZXQgdGhlIGNsaWNraGFuZGxlclxuICAgICAgICBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwodGFiTGlua3MsIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBsaW5rID0gdmFsdWU7XG4gICAgICAgICAgICB0YWJDbGlja0hhbmRsZXIobGluaywgaW5kZXgpO1xuXG4gICAgICAgICAgICBpZiAobGluay5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGNvbnRhaW5lcnMgYW5kIGFkZCBhcHByb3ByaWF0ZSBhdHRyaWJ1dGVzXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbCh0YWJDb250YWluZXJzLCBmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHZhbHVlO1xuXG4gICAgICAgICAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICd0YWJwYW5lbCcpO1xuICAgICAgICAgICAgaWYgKGNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59KSgpOyIsIi8qKlxuICogSmF2YXNjcmlwdCBmb3IgT2JqZWN0aXZcbiAqXG4gKiBKUyBmb3IgdGhlIHRoZW1lXG4gKi9cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgbW9iaWxlIG1lbnVcbiAgICBPYmplY3Rpdi5tb2JpbGVNZW51KHtcbiAgICAgICAgY29udGFpbmVyOiAnLlNpdGVDb250YWluZXInLFxuICAgICAgICBtZW51OiAnLk5hdi0tbW9iaWxlJyxcbiAgICAgICAgdG9nZ2xlOiAnLk5hdlRvZ2dsZSdcbiAgICB9KTtcbn0pO1xuIl19

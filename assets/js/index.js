'use strict';

/**
 * Objectiv Mobile Menu
 *
 * Create an off-canvas mobile menu
 *
 * @version 1.0
 */

(function (window, $, undefined) {
    'use strict';

    $.fn.objectivMobileMenu = function (options) {
        var body = $('body');
        var menuButton = $('.Nav-toggle');
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
            if (body.hasClass('is-open')) {
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
            menuButton.toggleClass('is-open');
            menu.toggleClass('is-open');
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
            console.log('click');
            openMenu();
            closeMenu();
            body.toggleClass('is-open');
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
})(undefined, jQuery);
'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Javascript for Objectiv
 *
 * JS for the theme
 */

function ObjectivParentTheme($) {
    'use strict';

    var body = $(document.body);

    this.detectTouch = function () {
        body.addClass('ontouchstart' in window || 'onmsgesturechange' in window ? 'touch' : 'no-touch');
    };

    this.init = function () {

        // Initialize the mobile menu
        $('.Nav-primary').objectivMobileMenu();
    };
}

var ObjectivParentTheme = new ObjectivParentTheme(jQuery);
ObjectivParentTheme.detectTouch();

(0, _jquery2.default)(document).ready(function () {
    ObjectivParentTheme.init();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYmlsZU1lbnUuanMiLCJ0aGVtZS5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCIkIiwidW5kZWZpbmVkIiwiZm4iLCJvYmplY3Rpdk1vYmlsZU1lbnUiLCJvcHRpb25zIiwiYm9keSIsIm1lbnVCdXR0b24iLCJtZW51IiwibGVuZ3RoIiwibWVudUlzT3BlbiIsImhhc0NsYXNzIiwidG9nZ2xlQ2xhc3NlcyIsInRvZ2dsZUNsYXNzIiwib3Blbk1lbnUiLCJjbG9zZU1lbnUiLCJ0b2dnbGVNZW51IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImxvYWRNb2JpbGVNZW51Iiwib24iLCJqUXVlcnkiLCJPYmplY3RpdlBhcmVudFRoZW1lIiwiZG9jdW1lbnQiLCJkZXRlY3RUb3VjaCIsImFkZENsYXNzIiwiaW5pdCIsInJlYWR5Il0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7OztBQVFBLENBQUMsVUFBU0EsTUFBVCxFQUFpQkMsQ0FBakIsRUFBb0JDLFNBQXBCLEVBQStCO0FBQzVCOztBQUVBRCxNQUFFRSxFQUFGLENBQUtDLGtCQUFMLEdBQTBCLFVBQVNDLE9BQVQsRUFBa0I7QUFDeEMsWUFBSUMsT0FBT0wsRUFBRSxNQUFGLENBQVg7QUFDQSxZQUFJTSxhQUFhTixFQUFFLGFBQUYsQ0FBakI7QUFDQSxZQUFJTyxPQUFPUCxFQUFFLElBQUYsQ0FBWDs7QUFFQTtBQUNBLFlBQUlPLEtBQUtDLE1BQUwsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFDbkI7QUFDSDs7QUFFRDs7Ozs7QUFLQSxpQkFBU0MsVUFBVCxHQUFzQjtBQUNsQixnQkFBSUosS0FBS0ssUUFBTCxDQUFjLFNBQWQsQ0FBSixFQUE4QjtBQUMxQix1QkFBTyxJQUFQO0FBQ0g7QUFDRCxtQkFBTyxLQUFQO0FBQ0g7O0FBRUQ7Ozs7O0FBS0EsaUJBQVNDLGFBQVQsR0FBeUI7QUFDckJMLHVCQUFXTSxXQUFYLENBQXVCLFNBQXZCO0FBQ0FMLGlCQUFLSyxXQUFMLENBQWlCLFNBQWpCO0FBQ0g7O0FBRUQ7Ozs7O0FBS0EsaUJBQVNDLFFBQVQsR0FBb0I7QUFDaEIsZ0JBQUksQ0FBQ0osWUFBTCxFQUFtQjtBQUNmRTtBQUNIO0FBQ0o7O0FBRUQ7Ozs7O0FBS0EsaUJBQVNHLFNBQVQsR0FBcUI7QUFDakIsZ0JBQUlMLFlBQUosRUFBa0I7QUFDZEU7QUFDSDtBQUNKOztBQUVEOzs7OztBQUtBLGlCQUFTSSxVQUFULENBQW9CQyxDQUFwQixFQUF1QjtBQUNuQkEsY0FBRUMsY0FBRjtBQUNBQyxvQkFBUUMsR0FBUixDQUFZLE9BQVo7QUFDQU47QUFDQUM7QUFDQVQsaUJBQUtPLFdBQUwsQ0FBaUIsU0FBakI7QUFDSDs7QUFFRDs7Ozs7O0FBTU4saUJBQVNRLGNBQVQsR0FBMEI7QUFDekJkLHVCQUFXZSxFQUFYLENBQWMsT0FBZCxFQUF1Qk4sVUFBdkI7QUFDQTs7QUFFRCxlQUFPSyxnQkFBUDtBQUNHLEtBOUVEO0FBZ0ZILENBbkZELGFBbUZTRSxNQW5GVDs7O0FDUkE7Ozs7OztBQUVBOzs7Ozs7QUFNQSxTQUFTQyxtQkFBVCxDQUE2QnZCLENBQTdCLEVBQWdDO0FBQzVCOztBQUVBLFFBQUlLLE9BQU9MLEVBQUV3QixTQUFTbkIsSUFBWCxDQUFYOztBQUVBLFNBQUtvQixXQUFMLEdBQW1CLFlBQVc7QUFDMUJwQixhQUFLcUIsUUFBTCxDQUFjLGtCQUFrQjNCLE1BQWxCLElBQTRCLHVCQUF1QkEsTUFBbkQsR0FBNEQsT0FBNUQsR0FBc0UsVUFBcEY7QUFDSCxLQUZEOztBQUlBLFNBQUs0QixJQUFMLEdBQVksWUFBVzs7QUFFbkI7QUFDQTNCLFVBQUUsY0FBRixFQUFrQkcsa0JBQWxCO0FBRUgsS0FMRDtBQU1IOztBQUVELElBQUlvQixzQkFBc0IsSUFBSUEsbUJBQUosQ0FBd0JELE1BQXhCLENBQTFCO0FBQ0FDLG9CQUFvQkUsV0FBcEI7O0FBRUEsc0JBQUVELFFBQUYsRUFBWUksS0FBWixDQUFrQixZQUFXO0FBQ3pCTCx3QkFBb0JJLElBQXBCO0FBQ0gsQ0FGRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogT2JqZWN0aXYgTW9iaWxlIE1lbnVcbiAqXG4gKiBDcmVhdGUgYW4gb2ZmLWNhbnZhcyBtb2JpbGUgbWVudVxuICpcbiAqIEB2ZXJzaW9uIDEuMFxuICovXG5cbihmdW5jdGlvbih3aW5kb3csICQsIHVuZGVmaW5lZCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgICQuZm4ub2JqZWN0aXZNb2JpbGVNZW51ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICB2YXIgYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgdmFyIG1lbnVCdXR0b24gPSAkKCcuTmF2LXRvZ2dsZScpO1xuICAgICAgICB2YXIgbWVudSA9ICQodGhpcyk7XG5cbiAgICAgICAgLy8gQ2hlY2sgdG8gbWFrZSBzdXJlIHdlIGhhdmUgYSBtZW51XG4gICAgICAgIGlmIChtZW51Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIHRvIHNlZSBpZiBtZW51IGlzIG9wZW5cbiAgICAgICAgICpcbiAgICAgICAgICogQHNpbmNlIDEuMFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gbWVudUlzT3BlbigpIHtcbiAgICAgICAgICAgIGlmIChib2R5Lmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUb2dnbGUgdGhlIGNsYXNzZXMgdG8gb3BlbiB0aGUgbWVudVxuICAgICAgICAgKlxuICAgICAgICAgKiBAc2luY2UgMS4wXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiB0b2dnbGVDbGFzc2VzKCkge1xuICAgICAgICAgICAgbWVudUJ1dHRvbi50b2dnbGVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgbWVudS50b2dnbGVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpcmUgbWV0aG9kcyB0byBvcGVuIG1lbnVcbiAgICAgICAgICpcbiAgICAgICAgICogQHNpbmNlIDEuMFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gb3Blbk1lbnUoKSB7XG4gICAgICAgICAgICBpZiAoIW1lbnVJc09wZW4oKSkge1xuICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaXJlIG1ldGhvZHMgdG8gY2xvc2UgbWVudVxuICAgICAgICAgKlxuICAgICAgICAgKiBAc2luY2UgMS4wXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBjbG9zZU1lbnUoKSB7XG4gICAgICAgICAgICBpZiAobWVudUlzT3BlbigpKSB7XG4gICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9wZW4gJiBDbG9zZSB0aGUgTWVudVxuICAgICAgICAgKlxuICAgICAgICAgKiBAc2luY2UgMS4wXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiB0b2dnbGVNZW51KGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGljaycpO1xuICAgICAgICAgICAgb3Blbk1lbnUoKTtcbiAgICAgICAgICAgIGNsb3NlTWVudSgpO1xuICAgICAgICAgICAgYm9keS50b2dnbGVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG5cdFx0ICogTG9hZCBhbGwgb2Ygb3VyIG1vYmlsZSBtZW51IGZ1bmN0aW9uYWxpdHkuXG5cdFx0ICpcblx0XHQgKiBAc2luY2UgIDAuMS4wXG5cdFx0ICogQHJldHVybiB2b2lkXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gbG9hZE1vYmlsZU1lbnUoKSB7XG5cdFx0XHRtZW51QnV0dG9uLm9uKCdjbGljaycsIHRvZ2dsZU1lbnUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBsb2FkTW9iaWxlTWVudSgpO1xuICAgIH07XG5cbn0pKHRoaXMsIGpRdWVyeSk7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vKipcbiAqIEphdmFzY3JpcHQgZm9yIE9iamVjdGl2XG4gKlxuICogSlMgZm9yIHRoZSB0aGVtZVxuICovXG5cbmZ1bmN0aW9uIE9iamVjdGl2UGFyZW50VGhlbWUoJCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBib2R5ID0gJChkb2N1bWVudC5ib2R5KTtcblxuICAgIHRoaXMuZGV0ZWN0VG91Y2ggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgYm9keS5hZGRDbGFzcygnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgJ29ubXNnZXN0dXJlY2hhbmdlJyBpbiB3aW5kb3cgPyAndG91Y2gnIDogJ25vLXRvdWNoJyk7XG4gICAgfTtcblxuICAgIHRoaXMuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIC8vIEluaXRpYWxpemUgdGhlIG1vYmlsZSBtZW51XG4gICAgICAgICQoJy5OYXYtcHJpbWFyeScpLm9iamVjdGl2TW9iaWxlTWVudSgpO1xuICAgICAgICBcbiAgICB9O1xufVxuXG52YXIgT2JqZWN0aXZQYXJlbnRUaGVtZSA9IG5ldyBPYmplY3RpdlBhcmVudFRoZW1lKGpRdWVyeSk7XG5PYmplY3RpdlBhcmVudFRoZW1lLmRldGVjdFRvdWNoKCk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIE9iamVjdGl2UGFyZW50VGhlbWUuaW5pdCgpO1xufSk7XG4iXX0=

<?php
/**
 * Load JS and CSS files for theme
 */

/**
 * Load CSS stylesheets for the theme
 *
 * @since 1.0
 */
function obj_enqueue_styles() {
}

/**
 * Load JS files for the theme
 *
 * @since 1.0
 */
function obj_enqueue_scripts() {

    // Register mobileMenu.js
    wp_register_script(
        'obj-mobile',
        PARENT_THEME_URI . "assets/js/mobileMenu.js",
        array('jQuery'),
        PARENT_THEME_VERSION,
        true
    );

    // Register theme.js
    wp_register_script(
        'obj-theme',
        PARENT_THEME_URI . "assets/js/theme.js",
        array('jQuery'),
        PARENT_THEME_VERSION,
        true
    );

    // Enqueue All of the Scripts
    wp_enqueue_script( 'obj-mobile' );
    wp_enqueue_script( 'obj-theme' );

}

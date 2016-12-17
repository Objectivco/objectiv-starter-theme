<?php

add_filter( 'admin_body_class', 'obj_admin_body_class' );
/**
 * Add obj class for stylign specific pages
 * @param  array $classes [description]
 */
function obj_admin_body_class( $classes ) {
    $screen = get_current_screen();

    if ( 'toplevel_page_objectiv' == $screen->base )
        $classes .= ' ' . 'obj-admin';
    return $classes;
}

add_action( 'admin_enqueue_scripts', 'obj_admin_css' );
/**
 * Enqueue Objectiv's Admin CSS
 *
 * @since 1.0
 */
function obj_admin_css() {
    wp_enqueue_style( 'obj_admin_css', PARENT_THEME_URI . 'lib/css/admin.css', array(), PARENT_THEME_VERSION );
}

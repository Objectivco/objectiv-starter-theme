<?php

// Include all Composer Modules
require_once( __DIR__ . '/vendor/autoload.php' );

include( __DIR__ . '/includes/tha-theme-hooks.php' );
include( __DIR__ . '/includes/attributes.php' );

// Initialize Timber
$timber = new \Timber\Timber();

// Set the Timber directories that Twig templates can be found in
Timber::$dirname = array( 'templates', 'views' );

/**
 * Set up the site object
 *
 * @since 1.0
 */
class ObjectivSite extends TimberSite {

    function __construct() {
        add_theme_support( 'post_thumbnails' );
        add_theme_support( 'menus' );
        add_action( 'widgets_init', array( $this, 'obj_widgets_init' ) );
        add_filter( 'timber_context', array( $this, 'obj_add_to_context' ) );
        add_filter( 'get_twig', array( $this, 'obj_add_to_twig' ) );
        parent::__construct();
    }

    /**
     * Register Sidebars
     *
     * @since 1.0
     */
    function obj_widgets_init() {
        register_sidebar( array(
            'name'          => __( 'Primary Sidebar', 'objectiv' ),
            'id'            => 'primary-sidebar'
        ) );
    }

    /**
     * Add variables to site context
     * @param object $context
     *
     * @since 1.0
     */
    function obj_add_to_context( $context ) {
        $context['site'] = $this;
        $context['menu'] = new TimberMenu( 'testing-menu' );
        return $context;
    }

    /**
     * Add custom functions to Twig
     * @param object $twig
     * @return object $twig
     *
     * @since 1.0
     */
    function obj_add_to_twig( $twig ) {
        return $twig;
    }
}

new ObjectivSite();

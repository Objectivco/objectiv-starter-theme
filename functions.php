<?php

$GLOBALS['objectiv_prefix'] = 'objectiv';

/**
 * Current version of the parent theme.
 *
 * @since 1.0
 */
define( 'PARENT_THEME_VERSION', '1.0.0' );

/**
 * Template's directory with trailing slash
 *
 * @since 1.0.0
 * @uses get_template_directory()
 * @uses trailingslashit()
 */
define( 'PARENT_THEME_DIR', trailingslashit( get_template_directory() ) );

/**
 * Template's URI with trailing slash
 *
 * @since 1.0.0
 * @uses get_template_directory_uri()
 * @uses trailingslashit()
 */
define( 'PARENT_THEME_URI', trailingslashit( get_template_directory_uri() ) );

/**
 * Admin images directory with trailing slash
 *
 * @since 1.0.0
 * @uses tralingslashit()
 */
define( 'PARENT_THEME_ADMIN_IMAGES_DIR', trailingslashit( PARENT_THEME_URI . 'lib/admin/images' ) );

/**
 * Themes LIB URL
 *
 * @since 1.0.0
 * @uses trailingslashit()
 */
define( 'PARENT_THEME_LIB_DIR', trailingslashit( PARENT_THEME_DIR . 'lib' ) );

/**
 * Require all needed files for the theme to work
 *
 * @since 1.0.0
 */
require_once( PARENT_THEME_DIR . 'vendor/autoload.php' );

// Admin
require_once( PARENT_THEME_DIR . 'lib/classes/Objectiv.php' );
require_once( PARENT_THEME_DIR . 'lib/classes/Admin.php' );
require_once( PARENT_THEME_DIR . 'lib/classes/Settings.php' );
require_once( PARENT_THEME_DIR . 'lib/classes/ACF.php' );
require_once( PARENT_THEME_DIR . 'lib/css/load-styles.php' );

// Front End
require_once( PARENT_THEME_DIR . 'includes/tha-theme-hooks.php' );
require_once( PARENT_THEME_DIR . 'includes/attributes.php' );
require_once( PARENT_THEME_DIR . 'lib/woo/woo-functions.php' );

/**
 * Initialize and set up Timber views location
 *
 * @since 1.0.0
 */
$timber = new \Timber\Timber();
Timber::$dirname = array( 'views' );

/**
 * Initialize and set up Objectiv Class
 * 
 * @since 1.0.0
 */
$objectiv = new \Objectiv\Objectiv();

/**
 * Set up Timber's Site Object
 *
 * @since 1.0
 */
class ObjectivSite extends TimberSite {

    function __construct() {
        add_theme_support( 'menus' );
        add_theme_support( 'post_thumbnails' );
        add_action( 'wp_enqueue_scripts', array( $this, 'obj_enqueue_scripts' ) );
        add_action( 'after_setup_theme', array( $this, 'obj_woocommerce_support' ) );
        add_action( 'widgets_init', array( $this, 'obj_widgets_init' ) );
        add_filter( 'timber_context', array( $this, 'obj_add_to_context' ) );
        add_filter( 'get_twig', array( $this, 'obj_add_to_twig' ) );
        add_theme_support( 'admin-bar', array( 'callback' => '__return_false' ) );
        parent::__construct();
    }

    /**
     * Load JS files for the theme
     *
     * @since 1.0
     */
    function obj_enqueue_scripts() {

        // Register all js
        wp_enqueue_script(
            'objectiv-theme',
            PARENT_THEME_URI . "assets/js/min/all.min.js",
            array( 'jquery' ),
            PARENT_THEME_VERSION,
            true
        );

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

    /**
     * Add theme support for WooCommerce
     * 
     * @since 1.0
     */
    function obj_woocommerce_support() {
        add_theme_support( 'woocommerce' );
    }
}

new ObjectivSite();

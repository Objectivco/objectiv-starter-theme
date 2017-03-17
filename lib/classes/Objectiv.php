<?php

namespace Objectiv;

use Objectiv\Settings;
use Objectiv\ACF;

/**
 * Objectiv Class
 * 
 * Main class for all Objectiv projects
 */
class Objectiv {
    
    function __construct() {
        if ( !defined( 'ABSPATH' ) )
            return;
        
        // Start your engines!
        self::init();
    }

    /**
     * Init function for child classes
     * 
     * @since 1.0
     */
    protected static function init() {
        if ( is_admin() ) {
            $_obj_admin_settings = new \Objectiv\Settings;
        }

        $_obj_acf = new \Objectiv\ACF;
    }

    /**
     * Get flexible sections
     * 
     * @example \Objectiv\Objectiv::get_flexible_sections();
     * 
     * @return array
     */
    public static function get_flexible_sections( $field_name ) {
        if ( have_rows( $field_name ) ) {
            while( have_rows( $field_name ) ): the_row();
                self::get_flexible_section( get_row_layout() );
            endwhile;
        }
    }

    /**
     * Get Flexible Section
     * 
     * @example \Objectiv\Objectiv::get_flexible_section();
     * 
     * @return array
     */
    public static function get_flexible_section( $layout ) {
        var_dump($layout);
    }
}

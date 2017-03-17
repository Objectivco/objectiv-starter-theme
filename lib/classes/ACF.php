<?php

namespace Objectiv;

/**
 * ACF Class
 * 
 * Main class for all Objectiv projects
 */
class ACF {
    
    function __construct() {

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

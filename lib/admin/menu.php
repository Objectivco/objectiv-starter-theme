<?php
/**
 * Objectiv Admin Menu
 *
 * @package Objectiv\Admin
 * @author  Objectiv
 * @license GPL-2.0+
 * @link    http://objectiv.co
 */

add_action( 'after_setup_theme', 'obj_add_main_menu' );

function obj_add_main_menu() {
    if ( ! is_admin() )
        return;

    global $_obj_admin_settings;

    $_obj_admin_settings = new ObjectivSettings;
}

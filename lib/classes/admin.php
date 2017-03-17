<?php
/**
 * Base class for working with admin pages and generating them
 *
 * @package Objectiv\Admin
 * @author Objectiv
 * @license GPL-2.0+
 * @link http://objectiv.co
 * @since 1.0
 */

namespace Objectiv;

abstract class Admin {

    /**
     * Page hook for when menu is registered
     *
     * @since 1.0
     * @var string Page hook
     */
    public $pagehook;

    /**
     * Admin menu ID
     *
     * @since 1.0
     * @var string Page ID
     */
    public $page_id;

    /**
     * Menu configuration options
     *
     * @since 1.0
     * @var array
     */
    public $menu_options;

    /**
     * Page configuration options
     *
     * @since 1.0
     * @var array
     */
    public $page_options;

    /**
     * Create function for creating admin pages
     * @param  string $page_id
     * @param  array  $menu_options
     */
    public function create( $page_id = '', array $menu_options = array() ) {
        $this->page_id = $page_id;
        $this->menu_options = $menu_options;

        if ( ! $this->page_id )
            return;

        // Check to make sure we have the menu options
        if ( isset( $this->menu_options['submenu'] ) && ( isset( $this->menu_options['main_menu'] ) || isset( $this->menu_options['first_submenu'] ) ) )
			wp_die( sprintf( __( 'You cannot use %s to create two menus in the same subclass. Please use separate subclasses for each menu.', 'objectiv' ), 'Objectiv_Admin' ) );

        add_action( 'admin_menu', array( $this, 'obj_add_main_menu' ), 5 );

    }

    /**
     * Add the menu page
     */
    public function obj_add_main_menu() {

        if ( isset( $this->menu_options['main_menu']['sep'] ) ) {
            $sep = wp_parse_args(
                $this->menu_options['main_menu']['sep'],
                array(
                    'sep_position' => '',
                    'sep_capability' => '',
                )
            );

            if ( $sep['sep_position'] && $sep['sep_capability'] )
                $GLOBALS['menu'][$sep['sep_position']] = array( '', $sep['sep_capability'], 'seperator', '', 'obj-seperator wp-menu-separator' );
        }

        $menu = wp_parse_args(
            $this->menu_options['main_menu'],
            array(
                'page_title' => '',
                'menu_title' => '',
                'capability' => 'edit_theme_options',
                'icon_url' => '',
                'position' => '',
            )
        );

        $this->pagehook = add_menu_page( $menu['page_title'], $menu['menu_title'], $menu['capability'], $this->page_id, array( $this, 'admin' ), $menu['icon_url'], $menu['position'] );
    }

    /**
     * Create the body of the admin page
     */
    abstract public function admin();
}

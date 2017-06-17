<?php
/**
 * Main Template File
 *
 * This is the base and most generic template file and required for the theme to work.
 *
 * @package WordPress
 * @subpackage Timber
 *
 * @since 1.0
 */

$context = Timber::get_context();
$context['posts'] = Timber::get_posts();
$context['sidebar'] = Timber::get_widgets('primary-sidebar');
$templates = array( 'index.twig' );

if (is_home()) {
    array_unshift( $templates, 'home.twig' );
}
Timber::render( $templates, $context );

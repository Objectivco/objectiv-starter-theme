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
$templates = array( 'index.twig' );

if ( is_home() ) {
    array_unshift( $templates, 'home.twig' );
} elseif ( is_front_page() ) {
    $context['post'] = Timber::get_post();
    array_unshift( $templates, 'front-page.twig' );
}
Timber::render( $templates, $context );

<?php
/**
 * Home Template File
 *
 * This is the logic for the blog page.
 *
 * @package WordPress
 * @subpackage Timber
 *
 * @since 1.0
 */

$context = Timber::get_context();
$context['posts'] = Timber::get_posts();
$context['primary_sidebar'] = Timber::get_widgets('primary-sidebar');
$templates = array( 'home.twig' );

Timber::render( $templates, $context );

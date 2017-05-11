<?php
/**
 * Blog home Template File
 *
 * This is the logic for the blog page.
 *
 * @package WordPress
 * @subpackage Timber
 *
 * @since 1.0
 */

$context = Timber::get_context();
$context['posts'] = new Timber\PostQuery();
$context['primary_sidebar'] = Timber::get_widgets('primary-sidebar');
$context['archive_title'] = get_the_archive_title();
$templates = array( 'home.twig' );

Timber::render( $templates, $context );

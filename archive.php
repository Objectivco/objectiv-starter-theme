<?php
/**
 * Archive Template File
 *
 * This is the logic for the all archive pages.
 *
 * @package WordPress
 * @subpackage Timber
 *
 * @since 1.0
 */

$context = Timber::get_context();
$context['posts'] = new Timber\PostQuery();
$context['primary_sidebar'] = Timber::get_widgets('primary-sidebar');
$templates = array( 'archive.twig' );

Timber::render( $templates, $context );

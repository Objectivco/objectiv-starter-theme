<?php
/**
 * The template for displaying search results
 *
 * Methods for TimberHelper can be found in the /functions sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    1.0
 */

$context = Timber::get_context();
$context['posts'] = Timber::get_posts();
$context['primary_sidebar'] = Timber::get_widgets('primary-sidebar');
Timber::render( 'search.twig', $context );

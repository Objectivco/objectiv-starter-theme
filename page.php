<?php
/**
 * The Template for displaying all single pages
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    1.0
 */

$context = Timber::get_context();
$post = Timber::query_post();
$context['page'] = $post;
$context['sections'] = \Objectiv\Objectiv::get_flexible_sections( 'content_sections' );

Timber::render( array( 'page.twig' ), $context );

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

var_dump($context);

Timber::render( array( 'page.twig' ), $context );

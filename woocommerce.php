<?php
/**
 * WooCommerce Template File
 *
 * This is the logic for woocommerce pages.
 *
 * @package WordPress
 * @subpackage Timber
 *
 * @since 1.0
 */

$context = Timber::get_context();
$context['sidebar'] = Timber::get_widgets( 'shop-sidebar' );

if (is_singular('product')) {

    $context['post'] = Timber::get_post();
    $product = get_product( $context['post']->ID );
    $context['product'] = $product;

    Timber::render( 'views/woo/product.twig', $context );

} else {

    $posts = Timber::get_posts();
    $context['products'] = $posts;

    if ( is_product_category() ) {
        $queried_object = get_queried_object();
        $term_id = $queried_object->term_id;
        $context['category'] = get_term( $term_id, 'product_cat' );
        $context['title'] = single_term_title( '', false );
    }

    Timber::render( 'views/woo/catalog.twig', $context );

}

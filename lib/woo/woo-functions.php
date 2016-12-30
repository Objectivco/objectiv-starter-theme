<?php

/**
 * Get the proper context for woo products in catalog.twig
 * @param object $post
 *
 * @since 1.0
 */
function obj_set_product( $post ) {
    global $product;
    if ( is_woocommerce() ) {
        $product = get_product($post->ID);
    }
}

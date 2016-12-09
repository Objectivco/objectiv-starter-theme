<?php
/**
 * HTML attribute functions and filters.
 *
 * The purposes of this is to provide a way for theme/plugin devs to hook into
 * the attributes for specific HTML elements and create new or modify existing
 * attributes.
 *
 * This is sort of like `body_class()`, `post_class()`, and `comment_class()` on
 * steroids. Plus, it handles attributes for many more elements. The biggest
 * benefit of using this is to provide richer microdata while being forward
 * compatible with the ever-changing Web. Currently, the default microdata
 * vocabulary supported is Schema.org.
 *
 * @package   CareLib
 * @copyright Copyright (c) 2016, WP Site Care, LLC
 * @license   GPL-2.0+
 * @since     1.0.0
 */

/**
 * Output an HTML element's attributes.
 *
 * @since  0.1.0
 * @access public
 * @param  string $slug the slug/ID of the element (e.g., 'sidebar').
 * @param  string $context a specific context (e.g., 'primary').
 * @param  array  $attr A list of attributes to be merged.
 * @return void
 */
function obj_attr( $slug, $context = '', $attr = array() ) {
	echo obj_get_attr( $slug, $context, $attr );
}

/**
 * Get an HTML element's attributes.
 *
 * This function is actually meant to be filtered by theme authors, plugins,
 * or advanced child theme users. The purpose is to allow folks to modify,
 * remove, or add any attributes they want without having to edit every
 * template file in the theme. So, one could support microformats instead
 * of microdata, if desired.
 *
 * @since  1.0.0
 * @access public
 * @param  string $slug The slug/ID of the element (e.g., 'sidebar').
 * @param  string $context A specific context (e.g., 'primary').
 * @param  array  $attr A list of attributes passed-in directly.
 * @return string
 */
function obj_get_attr( $slug, $context = '', $attr = array() ) {
	$out   = '';
	$class = sanitize_html_class( $slug );

	if ( ! empty( $context ) ) {
		$class = "{$class} {$class}-" . sanitize_html_class( $context );
	}

	$attr = array_merge(
		array(
			'class' => $class,
		),
		(array) $attr
	);

	$attr = array_merge(
		$attr,
		(array) apply_filters( "obj_attr_{$slug}", $attr, $context )
	);

	foreach ( $attr as $name => $value ) {
		$out .= ! empty( $value ) ? sprintf( ' %s="%s"', esc_html( $name ), esc_attr( $value ) ) : esc_html( " {$name}" );
	}

	return trim( $out );
}

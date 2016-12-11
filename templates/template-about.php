<?php

/*
Template Name: About Us Template
*/

$context = Timber::get_context();
$post = Timber::query_post();
$context['page'] = $post;

Timber::render( 'templates/about.twig', $context );

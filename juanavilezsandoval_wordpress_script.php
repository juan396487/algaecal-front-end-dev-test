<?php
function wp_jquery_scripts() {
    wp_enqueue_script( 'jquery-cdn','https://code.jquery.com/jquery-3.3.1.min.js', array(), '' );
}
add_action( 'wp_enqueue_scripts', 'wp_jquery_scripts' );

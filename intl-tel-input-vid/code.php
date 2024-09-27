function enqueue_intl_tel_input_js()

{

    // Enqueue intlTelInput.js

    wp_enqueue_script('intl-tel-input', get_template_directory_uri() . '/assets/plugins/intl-tel-input/build/js/intlTelInput.js', array('jquery'), null, true);

}

add_action('wp_enqueue_scripts', 'enqueue_intl_tel_input_js');




function enqueue_intl_tel_input_css()

{

    wp_enqueue_style('intl-tel-input', get_template_directory_uri() . '/assets/plugins/intl-tel-input/build/css/intlTelInput.css');

}

add_action('wp_enqueue_scripts', 'enqueue_intl_tel_input_css');
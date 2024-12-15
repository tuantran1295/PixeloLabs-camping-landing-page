$(document).ready(function() {
    // Navbar Menu dropdown

    // Initial setup - hide the nav-list
    $("#nav-close").addClass("display-none");
    $(".nav-list").addClass("display-none");

    // Toggle the nav-list and show the close button when the navbar-toggle is clicked
    $("#nav-toggle").click(function() {
        $(".nav-list").toggleClass("display-none");

        // Use slideDown() to smoothly show the element
        $(".nav-list").slideDown(400, function() {
            $("#nav-toggle").toggleClass("display-none"); // Toggle the toggle button
            $("#nav-close").toggleClass("display-none"); // Toggle the close button
        });
    });

    // Hide the nav-list and close button when the navbar-close is clicked
    $("#nav-close").click(function() {
        // Use slideUp() to smoothly hide the element
        $(".nav-list").slideUp(400, function() {
            $("#nav-toggle").toggleClass("display-none"); // Toggle the toggle button
            $("#nav-close").toggleClass("display-none"); // Toggle the close button
        });
    });
});


// Slider

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.icon-splide', {
        perPage    : 8,
        arrows: false,
        type: 'loop',
        pagination: false,
        breakpoints: {
            1024: {
                perPage: 5,
            },
            640: {
                perPage: 3,
            },
        },
    } ).mount();
} );

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#main-ticket-splide', {
        type       : 'loop',
        pagination : false,
        arrows     : true,
        cover      : true,
        breakpoints: {
            1023: {
                pagination : true,
                arrows     : false,
            },
        }
    } ).mount();
} );

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#footer-carousel', {
        perPage: 2,
        breakpoints: {
            380: {
                perPage: 2,
            },
            786: {
                perPage: 3,
            },
            980: {
                perPage: 4,
            },
            1440: {
                perPage: 8,
            },
        },
    } ).mount();
} );



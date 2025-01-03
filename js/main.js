$(document).ready(function() {
    // Navbar Menu dropdown
    const closeBtn = $("#nav-close");
    const navList =  $(".nav-list");
    const navToggle = $("#nav-toggle");
    let showMenu = false;
    // Initial setup - hide the nav-list
    closeBtn.addClass("display-none");
    navList.addClass("display-none");

    // Toggle the nav-list and show the close button when the navbar-toggle is clicked
    navToggle.click(function() {
        showMenu = true;
        navList.removeClass("display-none");

        // Use slideDown() to smoothly show the element
        navList.slideDown(200, function() {
            navToggle.addClass("display-none"); // Toggle the toggle button
            closeBtn.removeClass("display-none"); // Toggle the close button
        });
    });

    // Hide the nav-list and close button when the navbar-close is clicked
    closeBtn.click(function() {
        showMenu = false;
        navList.addClass("display-none")
        // Use slideUp() to smoothly hide the element
        navList.slideUp(200, function() {
            navToggle.removeClass("display-none"); // Toggle the toggle button
            closeBtn.addClass("display-none"); // Toggle the close button
        });
    });
});


// Slider

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.icon-splide', {
        autoplay: true,
        pagination: false,
        type: "loop",
        // gap: "3rem",
        arrows: false,
        mediaQuery: 'max',
        breakpoints: {
            640: {
                perPage: 3,
            },
            768: {
                perPage: 4,
            },
            1024: {
                perPage: 5,
            },
            1440: {
                perPage: 6,
            },
        },
        perPage: 8,
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
        autoplay: true,
        pagination: false,
        type: "loop",
        arrows: false,
        mediaQuery: 'max',
        breakpoints: {
            640: {
                perPage: 3,
            },
            768: {
                perPage: 4,
            },
            1024: {
                perPage: 5,
            },
            1440: {
                perPage: 6,
            },
        },
        perPage: 8,
    } ).mount();
} );



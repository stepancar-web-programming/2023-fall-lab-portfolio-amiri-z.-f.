$(document).ready(function () {
    $('#video-section').html('<p><b>The best goal ever! It was better than everything!</b></p>  <iframe width="560" height="315" src="https://www.youtube.com/embed/ZC_XihZGPEg?si=KAz7HItciZuP2wU3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
 // Toggle menu
    $('#toggle-menu').on('click', function () {
        $('nav').toggleClass('show-menu');
    });

    // Toggle dark mode
    $('#toggle-dark-mode').on('click', function () {
        $('body').toggleClass('dark-mode');
    });

    // Close menu when clicking on the page
    $(document).on('click', function (event) {
        if (!$(event.target).closest('nav').length && !$(event.target).is('#toggle-menu')) {
            $('nav').removeClass('show-menu');
        }
    });
    
});

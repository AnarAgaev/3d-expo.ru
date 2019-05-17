$(document).ready(function(){
    //Added background to the header when user slidinp page
    $(window).scroll(function () {
         if( $(this).scrollTop() > 50 ) {
             $('header.header').addClass('back-on')
         }
         else {
             $('header.header').removeClass('back-on')
         }
    })

    // Toggle header navigation
    $('.burger-container').on('click', function(){
        toggleNav()
    })

    function toggleNav () {
        let header = $('.header'),
            body   = $('body')

        header.toggleClass('menu-opened')
        body.toggleClass('menu-opened')
        $('.main-nav__drop-menu').removeClass('show')
        $('.main-nav .caret').removeClass('drop-opend')
    }

    // Drop menu in main navigation
    $('.main-nav__link, .main-nav .caret').on('click', function(){
        let windowWidth = $(window).width()
        let dropMenu = $(this).nextAll('.main-nav__drop-menu')
        let caret = $(this).parent().children('.caret')

        if(windowWidth < 992) {
            if( dropMenu.length > 0 ) {
                $('.main-nav__drop-menu').not(dropMenu).removeClass('show')
                $('.main-nav .caret').not(caret).removeClass('drop-opend')
                dropMenu.toggleClass('show')
                caret.toggleClass('drop-opend')
            }

        }
    })

    // Smooth scroll to the link inside the page
    $('.main-nav__link[href^="#"]').click(function () {
        let id  = $(this).attr('href'),
            top = $(id).offset().top

        $('html, body').animate({scrollTop: top}, 750)

        // Hide navigation if it is open
        if( $('body').hasClass('menu-opened') ) toggleNav()
    })
})

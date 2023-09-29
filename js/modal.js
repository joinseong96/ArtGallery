$(function(){
    $('.overlay').on('click', function() {
        $('.modal').hide();
        $('body').removeClass('not_scroll');
    });
    $('.contact_privacy_overlay').on('click', function() {
        $('.contact_privacy_modal').hide();
    });
    $('.modal_close').on('click', function(){
        $('.modal').hide();
        $('body').removeClass('not_scroll');
    });
    $('.contact_privacy_close').on('click', function(){
        $('.contact_privacy_modal').hide();
    });
    $('.privacy').on('click', function(){
        $('.privacy_modal').show();
        $('body').addClass('not_scroll');
    });
    $('.contact_privacy').on('click', function(){
        $('.contact_privacy_modal').show();
        $('body').addClass('not_scroll');
    });
    $('.contact_open').on('click', function(){
        $('.contact_modal').show();
        $('body').addClass('not_scroll');
    });
    $('.contact_modal .finish_btn').on('click', function(){
        $('.contact_finish').show();
        $('body').addClass('not_scroll');
    });
    $('.contact_finish button').on('click', function(){
        $('.modal').hide();
        $('body').removeClass('not_scroll');
    });
});
$(function(){
    $('.thumb_work.select li').click(function(){
        $('.thumb_work.select li').removeClass('active')
        $(this).addClass('active')
    });
    $('.category_wrap .page_list li').click(function(){
        $('.category_wrap .page_list li').removeClass('active')
        $(this).addClass('active')
    });
    $('#tabAll').click(function(){
        $("#season_data").text('All');
    });
    $('#tab01').click(function(){
        $("#season_data").text('Spring');
    });
    $('#tab02').click(function(){
        $("#season_data").text('Summer');
    });
    $('#tab03').click(function(){
        $("#season_data").text('Fall');
    });
    $('#tab04').click(function(){
        $("#season_data").text('Winter');
    });
    $('#tab05').click(function(){
        $("#season_data").text('ETC');
    });
    
    $(window).on("hashchange load", function () {
        if (location.hash == "#tab01") {
            $("#season_data").text('Spring');
        } else if (location.hash == "#tab02") {
            $("#season_data").text('Summer');
        } else if (location.hash == "#tab03") {
            $("#season_data").text('Fall');
        } else if (location.hash == "#tab04") {
            $("#season_data").text('Winter');
        } else if (location.hash == "#tab05") {
            $("#season_data").text('ETC');
        }
    });
});
$(function () {
    $(".gnb_list").mouseover(function () {
        $('.gnb_list').removeClass('active')
        $(this).addClass('active')
        $(this).children(".lnb").stop().slideDown(400);
    });
    $(".gnb_list").mouseleave(function () {
        $('.gnb_list').removeClass('active')
        $(this).children(".lnb").stop().slideUp(150);
    });

    $('.nav_btn').click(function(){
        // $(this).addClass('active');
        $(this).parents('nav').siblings('.menu_wrap').addClass('active');
      });
    
      $('.menu_btn').click(function(){
        $(this).parents('.menu_wrap').removeClass('active');
      });

      const btn = document.querySelector('.select_btn');
      const list = document.querySelector('.select_list');
      btn.addEventListener('click', () => {
          btn.classList.toggle('on');
          list.classList.toggle('on');
        });
      list.addEventListener('click', (event) => {
          if (event.target.nodeName === "LI") {
              btn.innerText = event.target.innerText;
              btn.classList.remove('on');
              list.classList.remove('on');
          }
      });
      $('html').click(function(e) {   
          if(!$(e.target).hasClass("on")) {
              btn.classList.remove('on');
              list.classList.remove('on');
          }
      });

      $(window).on("hashchange load", function () {
        if (location.hash == "#tab01") {
        
        $(".page_list li").removeClass("active");
        $(".page_list li").eq(1).addClass("active");
        } else if (location.hash == "#tab02") {

        $(".page_list li").removeClass("active");
        $(".page_list li").eq(2).addClass("active");
        } else if (location.hash == "#tab03") {

        $(".page_list li").removeClass("active");
        $(".page_list li").eq(3).addClass("active");
        } else if (location.hash == "#tab04") {

        $(".page_list li").removeClass("active");
        $(".page_list li").eq(4).addClass("active");
        } else if (location.hash == "#tab05") {

        $(".page_list li").removeClass("active");
        $(".page_list li").eq(5).addClass("active");
        }
    });

    $('.shop_open').click(function(){
        alert('준비중입니다.')
    });

    $('.finish_btn').click(function(){
        $(this).parents('.contact_bottom').siblings('.error_txt').addClass('active');
    });

    const timer01 = setTimeout(function() {
        $('.error_txt.active').fadeOut(3000, function(){
            $(".error_txt").removeClass('active');
            document.getElementById("error_first").style.opacity = '0';
        });
    }, 3000);

    const timer02 = setTimeout(function() {
        $('.error_txt.active').fadeOut(3000, function(){
            $(".error_txt").removeClass('active');
            document.getElementById("error_second").style.opacity = '0';
        });
    }, 3000);
});
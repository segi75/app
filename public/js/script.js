// JavaScript Document
$(function () {
  $.initiated = function () {
    /* MENU */
    $(".m_menu_btn").bind("click", function () {
      $(".m_menu_wrap").fadeIn(300);
      /*$('html, body').css({
		  'overflow-y': 'hidden'
		});*/
    });
    $(".m_menu_close").bind("click", function () {
      $(".m_menu_wrap").fadeOut(300);
      /*$('html, body').css({
		  'overflow-y': 'auto'
		});*/
    });

    /* M_MENU */
    $(".m_menu li.active").addClass("open").children("ul").show();
    $(".m_menu li.m_menu01 > a").on("click", function () {
      $(this).removeAttr("href");
      var element = $(this).parent("li");
      if (element.hasClass("open")) {
        element.removeClass("open");
        element.find("li").removeClass("open");
        element.find("ul").slideUp(200);
      } else {
        element.addClass("open");
        element.children("ul").slideDown(200);
        element.siblings("li").children("ul").slideUp(200);
        element.siblings("li").removeClass("open");
        element.siblings("li").find("li").removeClass("open");
        element.siblings("li").find("ul").slideUp(200);
      }
    });

    /* Mypage Info Menu */
    $(".my_etc_info .title").bind("click", function () {
      $(this).stop().toggleClass("on");
      $(this).next(".info_txt").stop().slideToggle(300);
    });

    /* POPUP - 공통 */
    $(".popup").bind("click", function () {
      $(".popup_bg").addClass("on");
      $("html, body").css({
        "overflow-y": "hidden",
      });
    });

    /* POPUP - 기본정보변경 */
    $(".mypopup01").bind("click", function () {
      $(".mypopup01_con").addClass("on");
    });
    $(".popup_exit, .pop_btn01 > .exit").bind("click", function () {
      $(".popup_bg").removeClass("on");
      $(".popup_con").removeClass("on");
      $("html, body").css({
        "overflow-y": "auto",
      });
    });
    $(".popup_exit02, .pop_btn02 > .cancel").bind("click", function () {
      $(".mypopup02_con").removeClass("on");
      $(".mypopup01_con").addClass("on");
    });

    /* POPUP - 전화번호변경 */
    $(".mypopup02").bind("click", function () {
      $(".mypopup02_con").addClass("on");
      $(".mypopup01_con").removeClass("on");
    });
    $(".pop_number").bind("click", function () {
      $(".num_btn").addClass("on");
      $(".num_time").stop().show();
      $(".num_txt").stop().show();
    });

    /* POPUP - 전화번호 변경완료 */
    $(".pop_btn02 > .save").bind("click", function () {
      $(".mypopup03_con").addClass("on");
      $(".mypopup02_con").removeClass("on");
    });
    $(
      ".popup_exit03, .pop_btn03 > .exit, .pop_btn02 > .cancel, .popup_exit02"
    ).bind("click", function () {
      $(".mypopup03_con, .mypopup02_con").removeClass("on");
      $(".mypopup01_con").addClass("on");
      $(".num_btn").removeClass("on");
      $(".num_time").stop().hide();
      $(".num_txt").stop().hide();
    });

    /* POPUP - 인바디밴드 */
    $(".modal_btn").bind("click", function () {
      $(".modal").stop().show();
    });
    $(".modal_close").bind("click", function () {
      $(".modal").stop().hide();
    });

    $(".modal02_btn").bind("click", function () {
      $(".modal02").stop().show();
    });
    $(".modal02_close").bind("click", function () {
      $(".modal02").stop().hide();
    });

    $(".modal03_btn").bind("click", function () {
      $(".modal03").stop().show();
    });
    $(".modal03_close").bind("click", function () {
      $(".modal03").stop().hide();
    });

    $(".modal04_btn").bind("click", function () {
      $(".modal04").stop().show();
    });
    $(".modal04_close").bind("click", function () {
      $(".modal04").stop().hide();
    });

    $(".modal05_btn").bind("click", function () {
      $(".modal05").stop().show();
    });
    $(".modal05_close").bind("click", function () {
      $(".modal05").stop().hide();
    });
  };
});

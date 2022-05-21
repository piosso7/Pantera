$(document).ready(function () {
  var delay = false;
  var currentPage = 1;
  var pageCount = $(".section").length;

  $(document).on("mousewheel DOMMouseScroll", function (event) {
    event.preventDefault();
    if (delay) return;
    delay = true;
    setTimeout(function () {
      delay = false;
    }, 100);

    var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;
    console.log(wd);

    if (wd < 0) {
      if (currentPage < pageCount) {
        currentPage++;
      }
    } else {
      if (1 < currentPage) {
        currentPage--;
      }
    }

    $("html,body").animate(
      {
        scrollTop: $("#sec" + currentPage).offset().top,
      },
      700
    );

    for (var i = 1; i <= pageCount; i++) {}
    if (currentPage == 1) {
      // ON PAGE 1
      // PAGE 1
      $("#sec1curtain").removeClass("active");
      $("#sec1logo").addClass("active");
      // PAGE 2
      $(
        "#menu1, #avatar, #titleS2H1, #TBLblueS2,#TBLgreyS2, #descriptionS2, #smallBlueLineS2, .newsletter p, .newsletter form"
      ).removeClass("active");
    }
    if (currentPage == 2) {
      // ON PAGE 2
      // PAGE 1
      $("#sec1curtain").addClass("active");
      $("#sec1logo").removeClass("active");
      // PAGE 2
      $(
        "#menu1, #avatar, #titleS2H1, #TBLblueS2,#TBLgreyS2, #descriptionS2, #smallBlueLineS2, .newsletter p, .newsletter form"
      ).addClass("active");
      //PAGE 3
      $(
        "#menu2,.whiteBg,#titleS3H1,#descriptionS3,#TBLblueS3,#TBLgreyS3,.leftImgBannerSec3 img,.leftImgBannerSec3 div,.ourWorkElement,.ourWorkElement h2,.ourWorkElement .descriptionDiv,.smallBlueLineS3"
      ).removeClass("active");
    }

    if (currentPage == 3) {
      // ON PAGE 3
      // PAGE 2
      $(
        "#menu1, #avatar, #titleS2H1, #TBLblueS2, #TBLgreyS2, #descriptionS2, #smallBlueLineS2, .newsletter p, .newsletter form"
      ).removeClass("active");
      //PAGE 3
      $(
        "#menu2, .whiteBg, #titleS3H1, #descriptionS3, #TBLblueS3, #TBLgreyS3, .leftImgBannerSec3 img, .leftImgBannerSec3 div, .ourWorkElement, .ourWorkElement h2, .ourWorkElement .descriptionDiv, .smallBlueLineS3"
      ).addClass("active");
      //PAGE 4
      $("#menu3, .blueBG, .darkBlueBG").removeClass("active");
    }
    if (currentPage == 4) {
      //ON PAGE 4
      //PAGE 3
      $(
        "#menu2, .whiteBg, #titleS3H1, #descriptionS3, #TBLblueS3, #TBLgreyS3, .leftImgBannerSec3 img, .leftImgBannerSec3 div, .ourWorkElement, .ourWorkElement h2, .ourWorkElement .descriptionDiv, .smallBlueLineS3"
      ).removeClass("active");
      //PAGE 4
      $("#menu3, .blueBG, .darkBlueBG").addClass("active");
    }
    if (currentPage == 5) {
      //ON PAGE 5
      //PAGE 4
      $("#menu3, .blueBG, .darkBlueBG").removeClass("active");
    }
  });
});

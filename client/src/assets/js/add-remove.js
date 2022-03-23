$(document).ready(function () {
  $(".category-box").click(function () {
    if (!$(this).hasClass("active")) {
      $(".category-box.active").removeClass("active");
      $(this).addClass("active");
    }
  });
});

$(document).ready(function () {
  $(".category-color li a").click(function () {
    if (!$(this).hasClass("active")) {
      $("i.active").removeClass("active");
      $(this).addClass("active");
    }
  });
});
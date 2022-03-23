// magnific start
$(".parent-container").magnificPopup({
  delegate: "a",
  type: "image",
  mainClass: "mfp-fade",
  closeOnContentClick: true,
  closeBtnInside: true,
});
// magnific End

// Isotope Start
$(document).ready(function () {
  $(".grid").isotope({
    itemSelector: ".grid-item",
  });

  $(".filter-button-group").on("click", "li", function () {
    var filterValue = $(this).attr("data-filter");
    $(".grid").isotope({
      filter: filterValue
    });
    $(".filter-button-group li").removeClass("active");
    $(this).addClass("active");
  });
});
// Isotope End
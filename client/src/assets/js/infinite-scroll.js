$(function () {
  $(".product-load-more .col-grid-box").slice(0, 8).show();
  $(".loadMore").on("click", function (e) {
    e.preventDefault();
    $(".product-load-more .col-grid-box:hidden").slice(0, 3).slideDown();
    if ($(".product-load-more .col-grid-box:hidden").length === 0) {
      $(".loadMore").text("no more products");
    }
  });
});
$(".hpe-filter__button").click(() => {
  $(this)
    .siblings(".hpe-filter__list")
    .toggleClass("hpe-filter--expanded");
});

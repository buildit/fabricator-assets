function toggleHiddenClass (elHeader, toggle) {
  const $elSection = $(elHeader).next('section');

  let hidden = $elSection.attr("aria-hidden") !== "true";
  if (toggle) {
    hidden = !hidden;
  }

  if (hidden) {
    $elSection.attr("aria-hidden", false);
  } else {
    $elSection.attr("aria-hidden", true);
  }

  $(elHeader).toggleClass('hpe-filter__header--hidden', hidden);
}

$(document).ready(() => {
  $('.hpe-filter__header')
    .click(function () {
      toggleHiddenClass(this, true);
    })
    .each((index, el) => toggleHiddenClass(el));

  $(".hpe-filter__button").click(() => {
    $(this)
      .siblings(".hpe-filter__list")
      .toggleClass("hpe-filter--expanded");
  });
});

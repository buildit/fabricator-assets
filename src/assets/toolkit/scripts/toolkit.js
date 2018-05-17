const owlCarousel = require("owl.carousel");
const noUiSlider = require("../../../../node_modules/nouislider/distribute/nouislider.js");

$(".hpe-input input").focus(function() {
  $(this)
    .parent()
    .addClass("hpe-input--active");
});

$(".hpe-input input").focusout(function() {
  if ($(this).val().length === 0) {
    $(this)
      .parent()
      .removeClass("hpe-input--active");
  }
});

$(".hpe-header__search-button").click(function() {
  $(".hpe-header__search").removeClass("hpe-header__search--active");
});

$(".hpe-nav__search").click(function() {
  $(".hpe-header__search").toggleClass("hpe-header__search--active");
});

$(".hpe-carousel__button--next").click(function() {
  $(this)
    .siblings(".hpe-carousel__image--active")
    .removeClass("hpe-carousel__image--active")
    .nextAll(".hpe-carousel__image")
    .first()
    .addClass("hpe-carousel__image--active");
});

$(".hpe-carousel__button--previous").click(function() {
  $(this)
    .siblings(".hpe-carousel__image--active")
    .removeClass("hpe-carousel__image--active")
    .prevAll(".hpe-carousel__image")
    .first()
    .addClass("hpe-carousel__image--active");
});

$(".hpe-carousel__indicator").click(function() {
  $(this)
    .prev()
    .addClass("hpe-carousel__image--active")
    .siblings()
    .removeClass("hpe-carousel__image--active");
});

$(".hpe-filter__button").click(function() {
  $(this)
    .siblings(".hpe-filter__list")
    .toggleClass("hpe-filter--expanded");
});

$(".hpe-filter__header").click(function() {
  const thisSection = $(this).next();

  $(this).toggleClass("hpe-filter__header--hidden");

  if (thisSection.attr("aria-hidden") === "true") {
    thisSection.attr("aria-hidden", false);
  } else {
    thisSection.attr("aria-hidden", true);
  }
});

// Initialize Input Range

$(".hpe-range--handles").each(function(i, obj) {
  const thisElement = $(obj);
  const minValue = thisElement.attr("data-range-min")
    ? parseInt(thisElement.attr("data-range-min"), 10)
    : 0;
  const maxValue = thisElement.attr("data-range-max")
    ? parseInt(thisElement.attr("data-range-max"), 10)
    : 100;
  const minStart = thisElement.attr("data-range-start-min")
    ? parseInt(thisElement.attr("data-range-start-min"), 10)
    : 10;
  const maxStart = thisElement.attr("data-range-start-max")
    ? parseInt(thisElement.attr("data-range-start-max"), 10)
    : 50;

  noUiSlider.create(obj, {
    range: {
      min: minValue,
      max: maxValue
    },
    start: [minStart, maxStart]
  });
});

$(".owl-carousel").owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  navText: [
    `
    <svg class="hpe-icon">
      <use xlink:href="#icon-link-previous" />
    </svg>  
  `,
    `
    <svg class="hpe-icon">
      <use xlink:href="#icon-link-next" />
    </svg>`
  ],
  autoWidth: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    768: {
      items: 3
    },
    1024: {
      items: 4
    }
  }
});

// Open Forgot Passowrd 
$("#open-forgot-password").click(function(){
  $("#forgot-password-modal").addClass("hpe-modal--active");
  $("body").addClass("hpe-body-noscroll");
});

// Close Forgot Passowrd 
$("#close-forgot-password").click(function(){
  $("#forgot-password-modal").removeClass("hpe-modal--active");
  $("body").removeClass("hpe-body-noscroll");
});

// Toggle Header Sign in Popover
$("#header-sign-in").click(function () {
  $(this).parent().toggleClass("hpe-nav__item--active");
});
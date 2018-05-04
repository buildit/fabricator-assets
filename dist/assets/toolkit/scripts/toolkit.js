/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	$(".hpe-input input").focus(function () {
	  $(this).parent().addClass("hpe-input--active");
	});
	
	$(".hpe-input input").focusout(function () {
	  if ($(this).val().length === 0) {
	    $(this).parent().removeClass("hpe-input--active");
	  }
	});
	
	$(".hpe-nav__menu").click(function () {
	  $(this).toggleClass("hpe-nav__menu--active");
	  $(".hpe-header__search").removeClass("hpe-header__search--active");
	});
	
	$(".hpe-nav__search").click(function () {
	  $(".hpe-header__search").toggleClass("hpe-header__search--active");
	  $(".hpe-nav__menu").toggleClass("hpe-nav__menu--active");
	});
	
	$(".hpe-carousel__button--next").click(function () {
	  $(this).siblings(".hpe-carousel__image--active").removeClass("hpe-carousel__image--active").nextAll(".hpe-carousel__image").first().addClass("hpe-carousel__image--active");
	});
	
	$(".hpe-carousel__button--previous").click(function () {
	  $(this).siblings(".hpe-carousel__image--active").removeClass("hpe-carousel__image--active").prevAll(".hpe-carousel__image").first().addClass("hpe-carousel__image--active");
	});
	
	$(".hpe-carousel__indicator").click(function () {
	  $(this).prev().addClass("hpe-carousel__image--active").siblings().removeClass("hpe-carousel__image--active");
	});
	
	$(".hpe-filter__button").click(function () {
	  $(this).siblings(".hpe-filter__list").toggleClass("hpe-filter--expanded");
	});
	
	$(".hpe-filter__header").click(function () {
	  const thisSection = $(this).next();
	
	  $(this).toggleClass("hpe-filter__header--hidden");
	
	  if (thisSection.attr("aria-hidden") === "true") {
	    thisSection.attr("aria-hidden", false);
	  } else {
	    thisSection.attr("aria-hidden", true);
	  }
	});
	
	// Initialize Input Range
	
	$(".hpe-range--handles").each(function (i, obj) {
	  const thisElement = $(obj);
	  const minValue = thisElement.attr("data-range-min") ? parseInt(thisElement.attr("data-range-min"), 10) : 0;
	  const maxValue = thisElement.attr("data-range-max") ? parseInt(thisElement.attr("data-range-max"), 10) : 100;
	  const minStart = thisElement.attr("data-range-start-min") ? parseInt(thisElement.attr("data-range-start-min"), 10) : 10;
	  const maxStart = thisElement.attr("data-range-start-max") ? parseInt(thisElement.attr("data-range-start-max"), 10) : 50;
	
	  noUiSlider.create(obj, {
	    range: {
	      min: minValue,
	      max: maxValue
	    },
	    start: [minStart, maxStart]
	  });
	});

/***/ })
/******/ ]);
//# sourceMappingURL=toolkit.js.map
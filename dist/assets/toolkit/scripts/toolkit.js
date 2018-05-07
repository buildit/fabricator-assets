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
/***/ (function(module, exports, __webpack_require__) {

	const owlCarousel = __webpack_require__(3);
	const noUiSlider = __webpack_require__(2);
	
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
	
	$(".owl-carousel").owlCarousel({
	  loop: true,
	  nav: true,
	  dots: false,
	  navText: [`
	    <svg class="hpe-icon">
	      <use xlink:href="#icon-link-previous" />
	    </svg>  
	  `, `
	    <svg class="hpe-icon">
	      <use xlink:href="#icon-link-next" />
	    </svg>`],
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
	      items: 3
	    }
	  }
	});

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! nouislider - 11.1.0 - 2018-04-02 11:18:13 */
	
	(function (factory) {
	
	    if ( true ) {
	
	        // AMD. Register as an anonymous module.
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	
	    } else if ( typeof exports === 'object' ) {
	
	        // Node/CommonJS
	        module.exports = factory();
	
	    } else {
	
	        // Browser globals
	        window.noUiSlider = factory();
	    }
	
	}(function( ){
	
		'use strict';
	
		var VERSION = '11.1.0';
	
	
		function isValidFormatter ( entry ) {
			return typeof entry === 'object' && typeof entry.to === 'function' && typeof entry.from === 'function';
		}
	
		function removeElement ( el ) {
			el.parentElement.removeChild(el);
		}
	
		function isSet ( value ) {
			return value !== null && value !== undefined;
		}
	
		// Bindable version
		function preventDefault ( e ) {
			e.preventDefault();
		}
	
		// Removes duplicates from an array.
		function unique ( array ) {
			return array.filter(function(a){
				return !this[a] ? this[a] = true : false;
			}, {});
		}
	
		// Round a value to the closest 'to'.
		function closest ( value, to ) {
			return Math.round(value / to) * to;
		}
	
		// Current position of an element relative to the document.
		function offset ( elem, orientation ) {
	
			var rect = elem.getBoundingClientRect();
			var doc = elem.ownerDocument;
			var docElem = doc.documentElement;
			var pageOffset = getPageOffset(doc);
	
			// getBoundingClientRect contains left scroll in Chrome on Android.
			// I haven't found a feature detection that proves this. Worst case
			// scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
			if ( /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) ) {
				pageOffset.x = 0;
			}
	
			return orientation ? (rect.top + pageOffset.y - docElem.clientTop) : (rect.left + pageOffset.x - docElem.clientLeft);
		}
	
		// Checks whether a value is numerical.
		function isNumeric ( a ) {
			return typeof a === 'number' && !isNaN( a ) && isFinite( a );
		}
	
		// Sets a class and removes it after [duration] ms.
		function addClassFor ( element, className, duration ) {
			if (duration > 0) {
			addClass(element, className);
				setTimeout(function(){
					removeClass(element, className);
				}, duration);
			}
		}
	
		// Limits a value to 0 - 100
		function limit ( a ) {
			return Math.max(Math.min(a, 100), 0);
		}
	
		// Wraps a variable as an array, if it isn't one yet.
		// Note that an input array is returned by reference!
		function asArray ( a ) {
			return Array.isArray(a) ? a : [a];
		}
	
		// Counts decimals
		function countDecimals ( numStr ) {
			numStr = String(numStr);
			var pieces = numStr.split(".");
			return pieces.length > 1 ? pieces[1].length : 0;
		}
	
		// http://youmightnotneedjquery.com/#add_class
		function addClass ( el, className ) {
			if ( el.classList ) {
				el.classList.add(className);
			} else {
				el.className += ' ' + className;
			}
		}
	
		// http://youmightnotneedjquery.com/#remove_class
		function removeClass ( el, className ) {
			if ( el.classList ) {
				el.classList.remove(className);
			} else {
				el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
			}
		}
	
		// https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
		function hasClass ( el, className ) {
			return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
		}
	
		// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
		function getPageOffset ( doc ) {
	
			var supportPageOffset = window.pageXOffset !== undefined;
			var isCSS1Compat = ((doc.compatMode || "") === "CSS1Compat");
			var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? doc.documentElement.scrollLeft : doc.body.scrollLeft;
			var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? doc.documentElement.scrollTop : doc.body.scrollTop;
	
			return {
				x: x,
				y: y
			};
		}
	
		// we provide a function to compute constants instead
		// of accessing window.* as soon as the module needs it
		// so that we do not compute anything if not needed
		function getActions ( ) {
	
			// Determine the events to bind. IE11 implements pointerEvents without
			// a prefix, which breaks compatibility with the IE10 implementation.
			return window.navigator.pointerEnabled ? {
				start: 'pointerdown',
				move: 'pointermove',
				end: 'pointerup'
			} : window.navigator.msPointerEnabled ? {
				start: 'MSPointerDown',
				move: 'MSPointerMove',
				end: 'MSPointerUp'
			} : {
				start: 'mousedown touchstart',
				move: 'mousemove touchmove',
				end: 'mouseup touchend'
			};
		}
	
		// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
		// Issue #785
		function getSupportsPassive ( ) {
	
			var supportsPassive = false;
	
			try {
	
				var opts = Object.defineProperty({}, 'passive', {
					get: function() {
						supportsPassive = true;
					}
				});
	
				window.addEventListener('test', null, opts);
	
			} catch (e) {}
	
			return supportsPassive;
		}
	
		function getSupportsTouchActionNone ( ) {
			return window.CSS && CSS.supports && CSS.supports('touch-action', 'none');
		}
	
	
	// Value calculation
	
		// Determine the size of a sub-range in relation to a full range.
		function subRangeRatio ( pa, pb ) {
			return (100 / (pb - pa));
		}
	
		// (percentage) How many percent is this value of this range?
		function fromPercentage ( range, value ) {
			return (value * 100) / ( range[1] - range[0] );
		}
	
		// (percentage) Where is this value on this range?
		function toPercentage ( range, value ) {
			return fromPercentage( range, range[0] < 0 ?
				value + Math.abs(range[0]) :
					value - range[0] );
		}
	
		// (value) How much is this percentage on this range?
		function isPercentage ( range, value ) {
			return ((value * ( range[1] - range[0] )) / 100) + range[0];
		}
	
	
	// Range conversion
	
		function getJ ( value, arr ) {
	
			var j = 1;
	
			while ( value >= arr[j] ){
				j += 1;
			}
	
			return j;
		}
	
		// (percentage) Input a value, find where, on a scale of 0-100, it applies.
		function toStepping ( xVal, xPct, value ) {
	
			if ( value >= xVal.slice(-1)[0] ){
				return 100;
			}
	
			var j = getJ( value, xVal );
			var va = xVal[j-1];
			var vb = xVal[j];
			var pa = xPct[j-1];
			var pb = xPct[j];
	
			return pa + (toPercentage([va, vb], value) / subRangeRatio (pa, pb));
		}
	
		// (value) Input a percentage, find where it is on the specified range.
		function fromStepping ( xVal, xPct, value ) {
	
			// There is no range group that fits 100
			if ( value >= 100 ){
				return xVal.slice(-1)[0];
			}
	
			var j = getJ( value, xPct );
			var va = xVal[j-1];
			var vb = xVal[j];
			var pa = xPct[j-1];
			var pb = xPct[j];
	
			return isPercentage([va, vb], (value - pa) * subRangeRatio (pa, pb));
		}
	
		// (percentage) Get the step that applies at a certain value.
		function getStep ( xPct, xSteps, snap, value ) {
	
			if ( value === 100 ) {
				return value;
			}
	
			var j = getJ( value, xPct );
			var a = xPct[j-1];
			var b = xPct[j];
	
			// If 'snap' is set, steps are used as fixed points on the slider.
			if ( snap ) {
	
				// Find the closest position, a or b.
				if ((value - a) > ((b-a)/2)){
					return b;
				}
	
				return a;
			}
	
			if ( !xSteps[j-1] ){
				return value;
			}
	
			return xPct[j-1] + closest(
				value - xPct[j-1],
				xSteps[j-1]
			);
		}
	
	
	// Entry parsing
	
		function handleEntryPoint ( index, value, that ) {
	
			var percentage;
	
			// Wrap numerical input in an array.
			if ( typeof value === "number" ) {
				value = [value];
			}
	
			// Reject any invalid input, by testing whether value is an array.
			if ( !Array.isArray(value) ){
				throw new Error("noUiSlider (" + VERSION + "): 'range' contains invalid value.");
			}
	
			// Covert min/max syntax to 0 and 100.
			if ( index === 'min' ) {
				percentage = 0;
			} else if ( index === 'max' ) {
				percentage = 100;
			} else {
				percentage = parseFloat( index );
			}
	
			// Check for correct input.
			if ( !isNumeric( percentage ) || !isNumeric( value[0] ) ) {
				throw new Error("noUiSlider (" + VERSION + "): 'range' value isn't numeric.");
			}
	
			// Store values.
			that.xPct.push( percentage );
			that.xVal.push( value[0] );
	
			// NaN will evaluate to false too, but to keep
			// logging clear, set step explicitly. Make sure
			// not to override the 'step' setting with false.
			if ( !percentage ) {
				if ( !isNaN( value[1] ) ) {
					that.xSteps[0] = value[1];
				}
			} else {
				that.xSteps.push( isNaN(value[1]) ? false : value[1] );
			}
	
			that.xHighestCompleteStep.push(0);
		}
	
		function handleStepPoint ( i, n, that ) {
	
			// Ignore 'false' stepping.
			if ( !n ) {
				return true;
			}
	
			// Factor to range ratio
			that.xSteps[i] = fromPercentage([that.xVal[i], that.xVal[i+1]], n) / subRangeRatio(that.xPct[i], that.xPct[i+1]);
	
			var totalSteps = (that.xVal[i+1] - that.xVal[i]) / that.xNumSteps[i];
			var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
			var step = that.xVal[i] + (that.xNumSteps[i] * highestStep);
	
			that.xHighestCompleteStep[i] = step;
		}
	
	
	// Interface
	
		function Spectrum ( entry, snap, singleStep ) {
	
			this.xPct = [];
			this.xVal = [];
			this.xSteps = [ singleStep || false ];
			this.xNumSteps = [ false ];
			this.xHighestCompleteStep = [];
	
			this.snap = snap;
	
			var index;
			var ordered = []; // [0, 'min'], [1, '50%'], [2, 'max']
	
			// Map the object keys to an array.
			for ( index in entry ) {
				if ( entry.hasOwnProperty(index) ) {
					ordered.push([entry[index], index]);
				}
			}
	
			// Sort all entries by value (numeric sort).
			if ( ordered.length && typeof ordered[0][0] === "object" ) {
				ordered.sort(function(a, b) { return a[0][0] - b[0][0]; });
			} else {
				ordered.sort(function(a, b) { return a[0] - b[0]; });
			}
	
	
			// Convert all entries to subranges.
			for ( index = 0; index < ordered.length; index++ ) {
				handleEntryPoint(ordered[index][1], ordered[index][0], this);
			}
	
			// Store the actual step values.
			// xSteps is sorted in the same order as xPct and xVal.
			this.xNumSteps = this.xSteps.slice(0);
	
			// Convert all numeric steps to the percentage of the subrange they represent.
			for ( index = 0; index < this.xNumSteps.length; index++ ) {
				handleStepPoint(index, this.xNumSteps[index], this);
			}
		}
	
		Spectrum.prototype.getMargin = function ( value ) {
	
			var step = this.xNumSteps[0];
	
			if ( step && ((value / step) % 1) !== 0 ) {
				throw new Error("noUiSlider (" + VERSION + "): 'limit', 'margin' and 'padding' must be divisible by step.");
			}
	
			return this.xPct.length === 2 ? fromPercentage(this.xVal, value) : false;
		};
	
		Spectrum.prototype.toStepping = function ( value ) {
	
			value = toStepping( this.xVal, this.xPct, value );
	
			return value;
		};
	
		Spectrum.prototype.fromStepping = function ( value ) {
	
			return fromStepping( this.xVal, this.xPct, value );
		};
	
		Spectrum.prototype.getStep = function ( value ) {
	
			value = getStep(this.xPct, this.xSteps, this.snap, value );
	
			return value;
		};
	
		Spectrum.prototype.getNearbySteps = function ( value ) {
	
			var j = getJ(value, this.xPct);
	
			return {
				stepBefore: { startValue: this.xVal[j-2], step: this.xNumSteps[j-2], highestStep: this.xHighestCompleteStep[j-2] },
				thisStep: { startValue: this.xVal[j-1], step: this.xNumSteps[j-1], highestStep: this.xHighestCompleteStep[j-1] },
				stepAfter: { startValue: this.xVal[j-0], step: this.xNumSteps[j-0], highestStep: this.xHighestCompleteStep[j-0] }
			};
		};
	
		Spectrum.prototype.countStepDecimals = function () {
			var stepDecimals = this.xNumSteps.map(countDecimals);
			return Math.max.apply(null, stepDecimals);
		};
	
		// Outside testing
		Spectrum.prototype.convert = function ( value ) {
			return this.getStep(this.toStepping(value));
		};
	
	/*	Every input option is tested and parsed. This'll prevent
		endless validation in internal methods. These tests are
		structured with an item for every option available. An
		option can be marked as required by setting the 'r' flag.
		The testing function is provided with three arguments:
			- The provided value for the option;
			- A reference to the options object;
			- The name for the option;
	
		The testing function returns false when an error is detected,
		or true when everything is OK. It can also modify the option
		object, to make sure all values can be correctly looped elsewhere. */
	
		var defaultFormatter = { 'to': function( value ){
			return value !== undefined && value.toFixed(2);
		}, 'from': Number };
	
		function validateFormat ( entry ) {
	
			// Any object with a to and from method is supported.
			if ( isValidFormatter(entry) ) {
				return true;
			}
	
			throw new Error("noUiSlider (" + VERSION + "): 'format' requires 'to' and 'from' methods.");
		}
	
		function testStep ( parsed, entry ) {
	
			if ( !isNumeric( entry ) ) {
				throw new Error("noUiSlider (" + VERSION + "): 'step' is not numeric.");
			}
	
			// The step option can still be used to set stepping
			// for linear sliders. Overwritten if set in 'range'.
			parsed.singleStep = entry;
		}
	
		function testRange ( parsed, entry ) {
	
			// Filter incorrect input.
			if ( typeof entry !== 'object' || Array.isArray(entry) ) {
				throw new Error("noUiSlider (" + VERSION + "): 'range' is not an object.");
			}
	
			// Catch missing start or end.
			if ( entry.min === undefined || entry.max === undefined ) {
				throw new Error("noUiSlider (" + VERSION + "): Missing 'min' or 'max' in 'range'.");
			}
	
			// Catch equal start or end.
			if ( entry.min === entry.max ) {
				throw new Error("noUiSlider (" + VERSION + "): 'range' 'min' and 'max' cannot be equal.");
			}
	
			parsed.spectrum = new Spectrum(entry, parsed.snap, parsed.singleStep);
		}
	
		function testStart ( parsed, entry ) {
	
			entry = asArray(entry);
	
			// Validate input. Values aren't tested, as the public .val method
			// will always provide a valid location.
			if ( !Array.isArray( entry ) || !entry.length ) {
				throw new Error("noUiSlider (" + VERSION + "): 'start' option is incorrect.");
			}
	
			// Store the number of handles.
			parsed.handles = entry.length;
	
			// When the slider is initialized, the .val method will
			// be called with the start options.
			parsed.start = entry;
		}
	
		function testSnap ( parsed, entry ) {
	
			// Enforce 100% stepping within subranges.
			parsed.snap = entry;
	
			if ( typeof entry !== 'boolean' ){
				throw new Error("noUiSlider (" + VERSION + "): 'snap' option must be a boolean.");
			}
		}
	
		function testAnimate ( parsed, entry ) {
	
			// Enforce 100% stepping within subranges.
			parsed.animate = entry;
	
			if ( typeof entry !== 'boolean' ){
				throw new Error("noUiSlider (" + VERSION + "): 'animate' option must be a boolean.");
			}
		}
	
		function testAnimationDuration ( parsed, entry ) {
	
			parsed.animationDuration = entry;
	
			if ( typeof entry !== 'number' ){
				throw new Error("noUiSlider (" + VERSION + "): 'animationDuration' option must be a number.");
			}
		}
	
		function testConnect ( parsed, entry ) {
	
			var connect = [false];
			var i;
	
			// Map legacy options
			if ( entry === 'lower' ) {
				entry = [true, false];
			}
	
			else if ( entry === 'upper' ) {
				entry = [false, true];
			}
	
			// Handle boolean options
			if ( entry === true || entry === false ) {
	
				for ( i = 1; i < parsed.handles; i++ ) {
					connect.push(entry);
				}
	
				connect.push(false);
			}
	
			// Reject invalid input
			else if ( !Array.isArray( entry ) || !entry.length || entry.length !== parsed.handles + 1 ) {
				throw new Error("noUiSlider (" + VERSION + "): 'connect' option doesn't match handle count.");
			}
	
			else {
				connect = entry;
			}
	
			parsed.connect = connect;
		}
	
		function testOrientation ( parsed, entry ) {
	
			// Set orientation to an a numerical value for easy
			// array selection.
			switch ( entry ){
				case 'horizontal':
					parsed.ort = 0;
					break;
				case 'vertical':
					parsed.ort = 1;
					break;
				default:
					throw new Error("noUiSlider (" + VERSION + "): 'orientation' option is invalid.");
			}
		}
	
		function testMargin ( parsed, entry ) {
	
			if ( !isNumeric(entry) ){
				throw new Error("noUiSlider (" + VERSION + "): 'margin' option must be numeric.");
			}
	
			// Issue #582
			if ( entry === 0 ) {
				return;
			}
	
			parsed.margin = parsed.spectrum.getMargin(entry);
	
			if ( !parsed.margin ) {
				throw new Error("noUiSlider (" + VERSION + "): 'margin' option is only supported on linear sliders.");
			}
		}
	
		function testLimit ( parsed, entry ) {
	
			if ( !isNumeric(entry) ){
				throw new Error("noUiSlider (" + VERSION + "): 'limit' option must be numeric.");
			}
	
			parsed.limit = parsed.spectrum.getMargin(entry);
	
			if ( !parsed.limit || parsed.handles < 2 ) {
				throw new Error("noUiSlider (" + VERSION + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
			}
		}
	
		function testPadding ( parsed, entry ) {
	
			if ( !isNumeric(entry) && !Array.isArray(entry) ){
				throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers.");
			}
	
			if ( Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1])) ) {
				throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers.");
			}
	
			if ( entry === 0 ) {
				return;
			}
	
			if ( !Array.isArray(entry) ) {
				entry = [entry, entry];
			}
	
			// 'getMargin' returns false for invalid values.
			parsed.padding = [parsed.spectrum.getMargin(entry[0]), parsed.spectrum.getMargin(entry[1])];
	
			if ( parsed.padding[0] === false || parsed.padding[1] === false ) {
				throw new Error("noUiSlider (" + VERSION + "): 'padding' option is only supported on linear sliders.");
			}
	
			if ( parsed.padding[0] < 0 || parsed.padding[1] < 0 ) {
				throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be a positive number(s).");
			}
	
			if ( parsed.padding[0] + parsed.padding[1] >= 100 ) {
				throw new Error("noUiSlider (" + VERSION + "): 'padding' option must not exceed 100% of the range.");
			}
		}
	
		function testDirection ( parsed, entry ) {
	
			// Set direction as a numerical value for easy parsing.
			// Invert connection for RTL sliders, so that the proper
			// handles get the connect/background classes.
			switch ( entry ) {
				case 'ltr':
					parsed.dir = 0;
					break;
				case 'rtl':
					parsed.dir = 1;
					break;
				default:
					throw new Error("noUiSlider (" + VERSION + "): 'direction' option was not recognized.");
			}
		}
	
		function testBehaviour ( parsed, entry ) {
	
			// Make sure the input is a string.
			if ( typeof entry !== 'string' ) {
				throw new Error("noUiSlider (" + VERSION + "): 'behaviour' must be a string containing options.");
			}
	
			// Check if the string contains any keywords.
			// None are required.
			var tap = entry.indexOf('tap') >= 0;
			var drag = entry.indexOf('drag') >= 0;
			var fixed = entry.indexOf('fixed') >= 0;
			var snap = entry.indexOf('snap') >= 0;
			var hover = entry.indexOf('hover') >= 0;
	
			if ( fixed ) {
	
				if ( parsed.handles !== 2 ) {
					throw new Error("noUiSlider (" + VERSION + "): 'fixed' behaviour must be used with 2 handles");
				}
	
				// Use margin to enforce fixed state
				testMargin(parsed, parsed.start[1] - parsed.start[0]);
			}
	
			parsed.events = {
				tap: tap || snap,
				drag: drag,
				fixed: fixed,
				snap: snap,
				hover: hover
			};
		}
	
		function testTooltips ( parsed, entry ) {
	
			if ( entry === false ) {
				return;
			}
	
			else if ( entry === true ) {
	
				parsed.tooltips = [];
	
				for ( var i = 0; i < parsed.handles; i++ ) {
					parsed.tooltips.push(true);
				}
			}
	
			else {
	
				parsed.tooltips = asArray(entry);
	
				if ( parsed.tooltips.length !== parsed.handles ) {
					throw new Error("noUiSlider (" + VERSION + "): must pass a formatter for all handles.");
				}
	
				parsed.tooltips.forEach(function(formatter){
					if ( typeof formatter !== 'boolean' && (typeof formatter !== 'object' || typeof formatter.to !== 'function') ) {
						throw new Error("noUiSlider (" + VERSION + "): 'tooltips' must be passed a formatter or 'false'.");
					}
				});
			}
		}
	
		function testAriaFormat ( parsed, entry ) {
			parsed.ariaFormat = entry;
			validateFormat(entry);
		}
	
		function testFormat ( parsed, entry ) {
			parsed.format = entry;
			validateFormat(entry);
		}
	
		function testCssPrefix ( parsed, entry ) {
	
			if ( typeof entry !== 'string' && entry !== false ) {
				throw new Error("noUiSlider (" + VERSION + "): 'cssPrefix' must be a string or `false`.");
			}
	
			parsed.cssPrefix = entry;
		}
	
		function testCssClasses ( parsed, entry ) {
	
			if ( typeof entry !== 'object' ) {
				throw new Error("noUiSlider (" + VERSION + "): 'cssClasses' must be an object.");
			}
	
			if ( typeof parsed.cssPrefix === 'string' ) {
				parsed.cssClasses = {};
	
				for ( var key in entry ) {
					if ( !entry.hasOwnProperty(key) ) { continue; }
	
					parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
				}
			} else {
				parsed.cssClasses = entry;
			}
		}
	
		// Test all developer settings and parse to assumption-safe values.
		function testOptions ( options ) {
	
			// To prove a fix for #537, freeze options here.
			// If the object is modified, an error will be thrown.
			// Object.freeze(options);
	
			var parsed = {
				margin: 0,
				limit: 0,
				padding: 0,
				animate: true,
				animationDuration: 300,
				ariaFormat: defaultFormatter,
				format: defaultFormatter
			};
	
			// Tests are executed in the order they are presented here.
			var tests = {
				'step': { r: false, t: testStep },
				'start': { r: true, t: testStart },
				'connect': { r: true, t: testConnect },
				'direction': { r: true, t: testDirection },
				'snap': { r: false, t: testSnap },
				'animate': { r: false, t: testAnimate },
				'animationDuration': { r: false, t: testAnimationDuration },
				'range': { r: true, t: testRange },
				'orientation': { r: false, t: testOrientation },
				'margin': { r: false, t: testMargin },
				'limit': { r: false, t: testLimit },
				'padding': { r: false, t: testPadding },
				'behaviour': { r: true, t: testBehaviour },
				'ariaFormat': { r: false, t: testAriaFormat },
				'format': { r: false, t: testFormat },
				'tooltips': { r: false, t: testTooltips },
				'cssPrefix': { r: true, t: testCssPrefix },
				'cssClasses': { r: true, t: testCssClasses }
			};
	
			var defaults = {
				'connect': false,
				'direction': 'ltr',
				'behaviour': 'tap',
				'orientation': 'horizontal',
				'cssPrefix' : 'noUi-',
				'cssClasses': {
					target: 'target',
					base: 'base',
					origin: 'origin',
					handle: 'handle',
					handleLower: 'handle-lower',
					handleUpper: 'handle-upper',
					horizontal: 'horizontal',
					vertical: 'vertical',
					background: 'background',
					connect: 'connect',
					connects: 'connects',
					ltr: 'ltr',
					rtl: 'rtl',
					draggable: 'draggable',
					drag: 'state-drag',
					tap: 'state-tap',
					active: 'active',
					tooltip: 'tooltip',
					pips: 'pips',
					pipsHorizontal: 'pips-horizontal',
					pipsVertical: 'pips-vertical',
					marker: 'marker',
					markerHorizontal: 'marker-horizontal',
					markerVertical: 'marker-vertical',
					markerNormal: 'marker-normal',
					markerLarge: 'marker-large',
					markerSub: 'marker-sub',
					value: 'value',
					valueHorizontal: 'value-horizontal',
					valueVertical: 'value-vertical',
					valueNormal: 'value-normal',
					valueLarge: 'value-large',
					valueSub: 'value-sub'
				}
			};
	
			// AriaFormat defaults to regular format, if any.
			if ( options.format && !options.ariaFormat ) {
				options.ariaFormat = options.format;
			}
	
			// Run all options through a testing mechanism to ensure correct
			// input. It should be noted that options might get modified to
			// be handled properly. E.g. wrapping integers in arrays.
			Object.keys(tests).forEach(function( name ){
	
				// If the option isn't set, but it is required, throw an error.
				if ( !isSet(options[name]) && defaults[name] === undefined ) {
	
					if ( tests[name].r ) {
						throw new Error("noUiSlider (" + VERSION + "): '" + name + "' is required.");
					}
	
					return true;
				}
	
				tests[name].t( parsed, !isSet(options[name]) ? defaults[name] : options[name] );
			});
	
			// Forward pips options
			parsed.pips = options.pips;
	
			// All recent browsers accept unprefixed transform.
			// We need -ms- for IE9 and -webkit- for older Android;
			// Assume use of -webkit- if unprefixed and -ms- are not supported.
			// https://caniuse.com/#feat=transforms2d
			var d = document.createElement("div");
			var msPrefix = d.style.msTransform !== undefined;
			var noPrefix = d.style.transform !== undefined;
	
			parsed.transformRule = noPrefix ? 'transform' : (msPrefix ? 'msTransform' : 'webkitTransform');
	
			// Pips don't move, so we can place them using left/top.
			var styles = [['left', 'top'], ['right', 'bottom']];
	
			parsed.style = styles[parsed.dir][parsed.ort];
	
			return parsed;
		}
	
	
	function scope ( target, options, originalOptions ){
	
		var actions = getActions();
		var supportsTouchActionNone = getSupportsTouchActionNone();
		var supportsPassive = supportsTouchActionNone && getSupportsPassive();
	
		// All variables local to 'scope' are prefixed with 'scope_'
		var scope_Target = target;
		var scope_Locations = [];
		var scope_Base;
		var scope_Handles;
		var scope_HandleNumbers = [];
		var scope_ActiveHandlesCount = 0;
		var scope_Connects;
		var scope_Spectrum = options.spectrum;
		var scope_Values = [];
		var scope_Events = {};
		var scope_Self;
		var scope_Pips;
		var scope_Document = target.ownerDocument;
		var scope_DocumentElement = scope_Document.documentElement;
		var scope_Body = scope_Document.body;
	
	
		// For horizontal sliders in standard ltr documents,
		// make .noUi-origin overflow to the left so the document doesn't scroll.
		var scope_DirOffset = (scope_Document.dir === 'rtl') || (options.ort === 1) ? 0 : 100;
	
	/*! In this file: Construction of DOM elements; */
	
		// Creates a node, adds it to target, returns the new node.
		function addNodeTo ( addTarget, className ) {
	
			var div = scope_Document.createElement('div');
	
			if ( className ) {
				addClass(div, className);
			}
	
			addTarget.appendChild(div);
	
			return div;
		}
	
		// Append a origin to the base
		function addOrigin ( base, handleNumber ) {
	
			var origin = addNodeTo(base, options.cssClasses.origin);
			var handle = addNodeTo(origin, options.cssClasses.handle);
	
			handle.setAttribute('data-handle', handleNumber);
	
			// https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
			// 0 = focusable and reachable
			handle.setAttribute('tabindex', '0');
			handle.setAttribute('role', 'slider');
			handle.setAttribute('aria-orientation', options.ort ? 'vertical' : 'horizontal');
	
			if ( handleNumber === 0 ) {
				addClass(handle, options.cssClasses.handleLower);
			}
	
			else if ( handleNumber === options.handles - 1 ) {
				addClass(handle, options.cssClasses.handleUpper);
			}
	
			return origin;
		}
	
		// Insert nodes for connect elements
		function addConnect ( base, add ) {
	
			if ( !add ) {
				return false;
			}
	
			return addNodeTo(base, options.cssClasses.connect);
		}
	
		// Add handles to the slider base.
		function addElements ( connectOptions, base ) {
	
			var connectBase = addNodeTo(base, options.cssClasses.connects);
	
			scope_Handles = [];
			scope_Connects = [];
	
			scope_Connects.push(addConnect(connectBase, connectOptions[0]));
	
			// [::::O====O====O====]
			// connectOptions = [0, 1, 1, 1]
	
			for ( var i = 0; i < options.handles; i++ ) {
				// Keep a list of all added handles.
				scope_Handles.push(addOrigin(base, i));
				scope_HandleNumbers[i] = i;
				scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
			}
		}
	
		// Initialize a single slider.
		function addSlider ( addTarget ) {
	
			// Apply classes and data to the target.
			addClass(addTarget, options.cssClasses.target);
	
			if ( options.dir === 0 ) {
				addClass(addTarget, options.cssClasses.ltr);
			} else {
				addClass(addTarget, options.cssClasses.rtl);
			}
	
			if ( options.ort === 0 ) {
				addClass(addTarget, options.cssClasses.horizontal);
			} else {
				addClass(addTarget, options.cssClasses.vertical);
			}
	
			scope_Base = addNodeTo(addTarget, options.cssClasses.base);
		}
	
	
		function addTooltip ( handle, handleNumber ) {
	
			if ( !options.tooltips[handleNumber] ) {
				return false;
			}
	
			return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
		}
	
		// The tooltips option is a shorthand for using the 'update' event.
		function tooltips ( ) {
	
			// Tooltips are added with options.tooltips in original order.
			var tips = scope_Handles.map(addTooltip);
	
			bindEvent('update', function(values, handleNumber, unencoded) {
	
				if ( !tips[handleNumber] ) {
					return;
				}
	
				var formattedValue = values[handleNumber];
	
				if ( options.tooltips[handleNumber] !== true ) {
					formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
				}
	
				tips[handleNumber].innerHTML = formattedValue;
			});
		}
	
	
		function aria ( ) {
	
			bindEvent('update', function ( values, handleNumber, unencoded, tap, positions ) {
	
				// Update Aria Values for all handles, as a change in one changes min and max values for the next.
				scope_HandleNumbers.forEach(function( index ){
	
					var handle = scope_Handles[index];
	
					var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
					var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
	
					var now = positions[index];
					var text = options.ariaFormat.to(unencoded[index]);
	
					handle.children[0].setAttribute('aria-valuemin', min.toFixed(1));
					handle.children[0].setAttribute('aria-valuemax', max.toFixed(1));
					handle.children[0].setAttribute('aria-valuenow', now.toFixed(1));
					handle.children[0].setAttribute('aria-valuetext', text);
				});
			});
		}
	
	
		function getGroup ( mode, values, stepped ) {
	
			// Use the range.
			if ( mode === 'range' || mode === 'steps' ) {
				return scope_Spectrum.xVal;
			}
	
			if ( mode === 'count' ) {
	
				if ( values < 2 ) {
					throw new Error("noUiSlider (" + VERSION + "): 'values' (>= 2) required for mode 'count'.");
				}
	
				// Divide 0 - 100 in 'count' parts.
				var interval = values - 1;
				var spread = ( 100 / interval );
	
				values = [];
	
				// List these parts and have them handled as 'positions'.
				while ( interval-- ) {
					values[ interval ] = ( interval * spread );
				}
	
				values.push(100);
	
				mode = 'positions';
			}
	
			if ( mode === 'positions' ) {
	
				// Map all percentages to on-range values.
				return values.map(function( value ){
					return scope_Spectrum.fromStepping( stepped ? scope_Spectrum.getStep( value ) : value );
				});
			}
	
			if ( mode === 'values' ) {
	
				// If the value must be stepped, it needs to be converted to a percentage first.
				if ( stepped ) {
	
					return values.map(function( value ){
	
						// Convert to percentage, apply step, return to value.
						return scope_Spectrum.fromStepping( scope_Spectrum.getStep( scope_Spectrum.toStepping( value ) ) );
					});
	
				}
	
				// Otherwise, we can simply use the values.
				return values;
			}
		}
	
		function generateSpread ( density, mode, group ) {
	
			function safeIncrement(value, increment) {
				// Avoid floating point variance by dropping the smallest decimal places.
				return (value + increment).toFixed(7) / 1;
			}
	
			var indexes = {};
			var firstInRange = scope_Spectrum.xVal[0];
			var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length-1];
			var ignoreFirst = false;
			var ignoreLast = false;
			var prevPct = 0;
	
			// Create a copy of the group, sort it and filter away all duplicates.
			group = unique(group.slice().sort(function(a, b){ return a - b; }));
	
			// Make sure the range starts with the first element.
			if ( group[0] !== firstInRange ) {
				group.unshift(firstInRange);
				ignoreFirst = true;
			}
	
			// Likewise for the last one.
			if ( group[group.length - 1] !== lastInRange ) {
				group.push(lastInRange);
				ignoreLast = true;
			}
	
			group.forEach(function ( current, index ) {
	
				// Get the current step and the lower + upper positions.
				var step;
				var i;
				var q;
				var low = current;
				var high = group[index+1];
				var newPct;
				var pctDifference;
				var pctPos;
				var type;
				var steps;
				var realSteps;
				var stepsize;
	
				// When using 'steps' mode, use the provided steps.
				// Otherwise, we'll step on to the next subrange.
				if ( mode === 'steps' ) {
					step = scope_Spectrum.xNumSteps[ index ];
				}
	
				// Default to a 'full' step.
				if ( !step ) {
					step = high-low;
				}
	
				// Low can be 0, so test for false. If high is undefined,
				// we are at the last subrange. Index 0 is already handled.
				if ( low === false || high === undefined ) {
					return;
				}
	
				// Make sure step isn't 0, which would cause an infinite loop (#654)
				step = Math.max(step, 0.0000001);
	
				// Find all steps in the subrange.
				for ( i = low; i <= high; i = safeIncrement(i, step) ) {
	
					// Get the percentage value for the current step,
					// calculate the size for the subrange.
					newPct = scope_Spectrum.toStepping( i );
					pctDifference = newPct - prevPct;
	
					steps = pctDifference / density;
					realSteps = Math.round(steps);
	
					// This ratio represents the amount of percentage-space a point indicates.
					// For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-devided.
					// Round the percentage offset to an even number, then divide by two
					// to spread the offset on both sides of the range.
					stepsize = pctDifference/realSteps;
	
					// Divide all points evenly, adding the correct number to this subrange.
					// Run up to <= so that 100% gets a point, event if ignoreLast is set.
					for ( q = 1; q <= realSteps; q += 1 ) {
	
						// The ratio between the rounded value and the actual size might be ~1% off.
						// Correct the percentage offset by the number of points
						// per subrange. density = 1 will result in 100 points on the
						// full range, 2 for 50, 4 for 25, etc.
						pctPos = prevPct + ( q * stepsize );
						indexes[pctPos.toFixed(5)] = ['x', 0];
					}
	
					// Determine the point type.
					type = (group.indexOf(i) > -1) ? 1 : ( mode === 'steps' ? 2 : 0 );
	
					// Enforce the 'ignoreFirst' option by overwriting the type for 0.
					if ( !index && ignoreFirst ) {
						type = 0;
					}
	
					if ( !(i === high && ignoreLast)) {
						// Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
						indexes[newPct.toFixed(5)] = [i, type];
					}
	
					// Update the percentage count.
					prevPct = newPct;
				}
			});
	
			return indexes;
		}
	
		function addMarking ( spread, filterFunc, formatter ) {
	
			var element = scope_Document.createElement('div');
	
			var valueSizeClasses = [
				options.cssClasses.valueNormal,
				options.cssClasses.valueLarge,
				options.cssClasses.valueSub
			];
			var markerSizeClasses = [
				options.cssClasses.markerNormal,
				options.cssClasses.markerLarge,
				options.cssClasses.markerSub
			];
			var valueOrientationClasses = [
				options.cssClasses.valueHorizontal,
				options.cssClasses.valueVertical
			];
			var markerOrientationClasses = [
				options.cssClasses.markerHorizontal,
				options.cssClasses.markerVertical
			];
	
			addClass(element, options.cssClasses.pips);
			addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
	
			function getClasses( type, source ){
				var a = source === options.cssClasses.value;
				var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
				var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
	
				return source + ' ' + orientationClasses[options.ort] + ' ' + sizeClasses[type];
			}
	
			function addSpread ( offset, values ){
	
				// Apply the filter function, if it is set.
				values[1] = (values[1] && filterFunc) ? filterFunc(values[0], values[1]) : values[1];
	
				// Add a marker for every point
				var node = addNodeTo(element, false);
					node.className = getClasses(values[1], options.cssClasses.marker);
					node.style[options.style] = offset + '%';
	
				// Values are only appended for points marked '1' or '2'.
				if ( values[1] ) {
					node = addNodeTo(element, false);
					node.className = getClasses(values[1], options.cssClasses.value);
					node.setAttribute('data-value', values[0]);
					node.style[options.style] = offset + '%';
					node.innerText = formatter.to(values[0]);
				}
			}
	
			// Append all points.
			Object.keys(spread).forEach(function(a){
				addSpread(a, spread[a]);
			});
	
			return element;
		}
	
		function removePips ( ) {
			if ( scope_Pips ) {
				removeElement(scope_Pips);
				scope_Pips = null;
			}
		}
	
		function pips ( grid ) {
	
			// Fix #669
			removePips();
	
			var mode = grid.mode;
			var density = grid.density || 1;
			var filter = grid.filter || false;
			var values = grid.values || false;
			var stepped = grid.stepped || false;
			var group = getGroup( mode, values, stepped );
			var spread = generateSpread( density, mode, group );
			var format = grid.format || {
				to: Math.round
			};
	
			scope_Pips = scope_Target.appendChild(addMarking(
				spread,
				filter,
				format
			));
	
			return scope_Pips;
		}
	
	/*! In this file: Browser events (not slider events like slide, change); */
	
		// Shorthand for base dimensions.
		function baseSize ( ) {
			var rect = scope_Base.getBoundingClientRect();
			var alt = 'offset' + ['Width', 'Height'][options.ort];
			return options.ort === 0 ? (rect.width||scope_Base[alt]) : (rect.height||scope_Base[alt]);
		}
	
		// Handler for attaching events trough a proxy.
		function attachEvent ( events, element, callback, data ) {
	
			// This function can be used to 'filter' events to the slider.
			// element is a node, not a nodeList
	
			var method = function ( e ){
	
				e = fixEvent(e, data.pageOffset, data.target || element);
	
				// fixEvent returns false if this event has a different target
				// when handling (multi-) touch events;
				if ( !e ) {
					return false;
				}
	
				// doNotReject is passed by all end events to make sure released touches
				// are not rejected, leaving the slider "stuck" to the cursor;
				if ( scope_Target.hasAttribute('disabled') && !data.doNotReject ) {
					return false;
				}
	
				// Stop if an active 'tap' transition is taking place.
				if ( hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject ) {
					return false;
				}
	
				// Ignore right or middle clicks on start #454
				if ( events === actions.start && e.buttons !== undefined && e.buttons > 1 ) {
					return false;
				}
	
				// Ignore right or middle clicks on start #454
				if ( data.hover && e.buttons ) {
					return false;
				}
	
				// 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
				// iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
				// touch-action: manipulation, but that allows panning, which breaks
				// sliders after zooming/on non-responsive pages.
				// See: https://bugs.webkit.org/show_bug.cgi?id=133112
				if ( !supportsPassive ) {
					e.preventDefault();
				}
	
				e.calcPoint = e.points[ options.ort ];
	
				// Call the event handler with the event [ and additional data ].
				callback ( e, data );
			};
	
			var methods = [];
	
			// Bind a closure on the target for every event type.
			events.split(' ').forEach(function( eventName ){
				element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
				methods.push([eventName, method]);
			});
	
			return methods;
		}
	
		// Provide a clean event with standardized offset values.
		function fixEvent ( e, pageOffset, eventTarget ) {
	
			// Filter the event to register the type, which can be
			// touch, mouse or pointer. Offset changes need to be
			// made on an event specific basis.
			var touch = e.type.indexOf('touch') === 0;
			var mouse = e.type.indexOf('mouse') === 0;
			var pointer = e.type.indexOf('pointer') === 0;
	
			var x;
			var y;
	
			// IE10 implemented pointer events with a prefix;
			if ( e.type.indexOf('MSPointer') === 0 ) {
				pointer = true;
			}
	
			// In the event that multitouch is activated, the only thing one handle should be concerned
			// about is the touches that originated on top of it.
			if ( touch ) {
	
				// Returns true if a touch originated on the target.
				var isTouchOnTarget = function (checkTouch) {
					return checkTouch.target === eventTarget || eventTarget.contains(checkTouch.target);
				};
	
				// In the case of touchstart events, we need to make sure there is still no more than one
				// touch on the target so we look amongst all touches.
				if (e.type === 'touchstart') {
	
					var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
	
					// Do not support more than one touch per handle.
					if ( targetTouches.length > 1 ) {
						return false;
					}
	
					x = targetTouches[0].pageX;
					y = targetTouches[0].pageY;
	
				} else {
	
					// In the other cases, find on changedTouches is enough.
					var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
	
					// Cancel if the target touch has not moved.
					if ( !targetTouch ) {
						return false;
					}
	
					x = targetTouch.pageX;
					y = targetTouch.pageY;
				}
			}
	
			pageOffset = pageOffset || getPageOffset(scope_Document);
	
			if ( mouse || pointer ) {
				x = e.clientX + pageOffset.x;
				y = e.clientY + pageOffset.y;
			}
	
			e.pageOffset = pageOffset;
			e.points = [x, y];
			e.cursor = mouse || pointer; // Fix #435
	
			return e;
		}
	
		// Translate a coordinate in the document to a percentage on the slider
		function calcPointToPercentage ( calcPoint ) {
			var location = calcPoint - offset(scope_Base, options.ort);
			var proposal = ( location * 100 ) / baseSize();
	
			// Clamp proposal between 0% and 100%
			// Out-of-bound coordinates may occur when .noUi-base pseudo-elements
			// are used (e.g. contained handles feature)
			proposal = limit(proposal);
	
			return options.dir ? 100 - proposal : proposal;
		}
	
		// Find handle closest to a certain percentage on the slider
		function getClosestHandle ( proposal ) {
	
			var closest = 100;
			var handleNumber = false;
	
			scope_Handles.forEach(function(handle, index){
	
				// Disabled handles are ignored
				if ( handle.hasAttribute('disabled') ) {
					return;
				}
	
				var pos = Math.abs(scope_Locations[index] - proposal);
	
				if ( pos < closest || (pos === 100 && closest === 100) ) {
					handleNumber = index;
					closest = pos;
				}
			});
	
			return handleNumber;
		}
	
		// Fire 'end' when a mouse or pen leaves the document.
		function documentLeave ( event, data ) {
			if ( event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null ){
				eventEnd (event, data);
			}
		}
	
		// Handle movement on document for handle and range drag.
		function eventMove ( event, data ) {
	
			// Fix #498
			// Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
			// https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
			// IE9 has .buttons and .which zero on mousemove.
			// Firefox breaks the spec MDN defines.
			if ( navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0 ) {
				return eventEnd(event, data);
			}
	
			// Check if we are moving up or down
			var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
	
			// Convert the movement into a percentage of the slider width/height
			var proposal = (movement * 100) / data.baseSize;
	
			moveHandles(movement > 0, proposal, data.locations, data.handleNumbers);
		}
	
		// Unbind move events on document, call callbacks.
		function eventEnd ( event, data ) {
	
			// The handle is no longer active, so remove the class.
			if ( data.handle ) {
				removeClass(data.handle, options.cssClasses.active);
				scope_ActiveHandlesCount -= 1;
			}
	
			// Unbind the move and end events, which are added on 'start'.
			data.listeners.forEach(function( c ) {
				scope_DocumentElement.removeEventListener(c[0], c[1]);
			});
	
			if ( scope_ActiveHandlesCount === 0 ) {
				// Remove dragging class.
				removeClass(scope_Target, options.cssClasses.drag);
				setZindex();
	
				// Remove cursor styles and text-selection events bound to the body.
				if ( event.cursor ) {
					scope_Body.style.cursor = '';
					scope_Body.removeEventListener('selectstart', preventDefault);
				}
			}
	
			data.handleNumbers.forEach(function(handleNumber){
				fireEvent('change', handleNumber);
				fireEvent('set', handleNumber);
				fireEvent('end', handleNumber);
			});
		}
	
		// Bind move events on document.
		function eventStart ( event, data ) {
	
			var handle;
			if ( data.handleNumbers.length === 1 ) {
	
				var handleOrigin = scope_Handles[data.handleNumbers[0]];
	
				// Ignore 'disabled' handles
				if ( handleOrigin.hasAttribute('disabled') ) {
					return false;
				}
	
				handle = handleOrigin.children[0];
				scope_ActiveHandlesCount += 1;
	
				// Mark the handle as 'active' so it can be styled.
				addClass(handle, options.cssClasses.active);
			}
	
			// A drag should never propagate up to the 'tap' event.
			event.stopPropagation();
	
			// Record the event listeners.
			var listeners = [];
	
			// Attach the move and end events.
			var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
				// The event target has changed so we need to propagate the original one so that we keep
				// relying on it to extract target touches.
				target: event.target,
				handle: handle,
				listeners: listeners,
				startCalcPoint: event.calcPoint,
				baseSize: baseSize(),
				pageOffset: event.pageOffset,
				handleNumbers: data.handleNumbers,
				buttonsProperty: event.buttons,
				locations: scope_Locations.slice()
			});
	
			var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
				target: event.target,
				handle: handle,
				listeners: listeners,
				doNotReject: true,
				handleNumbers: data.handleNumbers
			});
	
			var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
				target: event.target,
				handle: handle,
				listeners: listeners,
				doNotReject: true,
				handleNumbers: data.handleNumbers
			});
	
			// We want to make sure we pushed the listeners in the listener list rather than creating
			// a new one as it has already been passed to the event handlers.
			listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
	
			// Text selection isn't an issue on touch devices,
			// so adding cursor styles can be skipped.
			if ( event.cursor ) {
	
				// Prevent the 'I' cursor and extend the range-drag cursor.
				scope_Body.style.cursor = getComputedStyle(event.target).cursor;
	
				// Mark the target with a dragging state.
				if ( scope_Handles.length > 1 ) {
					addClass(scope_Target, options.cssClasses.drag);
				}
	
				// Prevent text selection when dragging the handles.
				// In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
				// which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
				// meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
				// The 'cursor' flag is false.
				// See: http://caniuse.com/#search=selectstart
				scope_Body.addEventListener('selectstart', preventDefault, false);
			}
	
			data.handleNumbers.forEach(function(handleNumber){
				fireEvent('start', handleNumber);
			});
		}
	
		// Move closest handle to tapped location.
		function eventTap ( event ) {
	
			// The tap event shouldn't propagate up
			event.stopPropagation();
	
			var proposal = calcPointToPercentage(event.calcPoint);
			var handleNumber = getClosestHandle(proposal);
	
			// Tackle the case that all handles are 'disabled'.
			if ( handleNumber === false ) {
				return false;
			}
	
			// Flag the slider as it is now in a transitional state.
			// Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
			if ( !options.events.snap ) {
				addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
			}
	
			setHandle(handleNumber, proposal, true, true);
	
			setZindex();
	
			fireEvent('slide', handleNumber, true);
			fireEvent('update', handleNumber, true);
			fireEvent('change', handleNumber, true);
			fireEvent('set', handleNumber, true);
	
			if ( options.events.snap ) {
				eventStart(event, { handleNumbers: [handleNumber] });
			}
		}
	
		// Fires a 'hover' event for a hovered mouse/pen position.
		function eventHover ( event ) {
	
			var proposal = calcPointToPercentage(event.calcPoint);
	
			var to = scope_Spectrum.getStep(proposal);
			var value = scope_Spectrum.fromStepping(to);
	
			Object.keys(scope_Events).forEach(function( targetEvent ) {
				if ( 'hover' === targetEvent.split('.')[0] ) {
					scope_Events[targetEvent].forEach(function( callback ) {
						callback.call( scope_Self, value );
					});
				}
			});
		}
	
		// Attach events to several slider parts.
		function bindSliderEvents ( behaviour ) {
	
			// Attach the standard drag event to the handles.
			if ( !behaviour.fixed ) {
	
				scope_Handles.forEach(function( handle, index ){
	
					// These events are only bound to the visual handle
					// element, not the 'real' origin element.
					attachEvent ( actions.start, handle.children[0], eventStart, {
						handleNumbers: [index]
					});
				});
			}
	
			// Attach the tap event to the slider base.
			if ( behaviour.tap ) {
				attachEvent (actions.start, scope_Base, eventTap, {});
			}
	
			// Fire hover events
			if ( behaviour.hover ) {
				attachEvent (actions.move, scope_Base, eventHover, { hover: true });
			}
	
			// Make the range draggable.
			if ( behaviour.drag ){
	
				scope_Connects.forEach(function( connect, index ){
	
					if ( connect === false || index === 0 || index === scope_Connects.length - 1 ) {
						return;
					}
	
					var handleBefore = scope_Handles[index - 1];
					var handleAfter = scope_Handles[index];
					var eventHolders = [connect];
	
					addClass(connect, options.cssClasses.draggable);
	
					// When the range is fixed, the entire range can
					// be dragged by the handles. The handle in the first
					// origin will propagate the start event upward,
					// but it needs to be bound manually on the other.
					if ( behaviour.fixed ) {
						eventHolders.push(handleBefore.children[0]);
						eventHolders.push(handleAfter.children[0]);
					}
	
					eventHolders.forEach(function( eventHolder ) {
						attachEvent ( actions.start, eventHolder, eventStart, {
							handles: [handleBefore, handleAfter],
							handleNumbers: [index - 1, index]
						});
					});
				});
			}
		}
	
	/*! In this file: Slider events (not browser events); */
	
		// Attach an event to this slider, possibly including a namespace
		function bindEvent ( namespacedEvent, callback ) {
			scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
			scope_Events[namespacedEvent].push(callback);
	
			// If the event bound is 'update,' fire it immediately for all handles.
			if ( namespacedEvent.split('.')[0] === 'update' ) {
				scope_Handles.forEach(function(a, index){
					fireEvent('update', index);
				});
			}
		}
	
		// Undo attachment of event
		function removeEvent ( namespacedEvent ) {
	
			var event = namespacedEvent && namespacedEvent.split('.')[0];
			var namespace = event && namespacedEvent.substring(event.length);
	
			Object.keys(scope_Events).forEach(function( bind ){
	
				var tEvent = bind.split('.')[0];
				var tNamespace = bind.substring(tEvent.length);
	
				if ( (!event || event === tEvent) && (!namespace || namespace === tNamespace) ) {
					delete scope_Events[bind];
				}
			});
		}
	
		// External event handling
		function fireEvent ( eventName, handleNumber, tap ) {
	
			Object.keys(scope_Events).forEach(function( targetEvent ) {
	
				var eventType = targetEvent.split('.')[0];
	
				if ( eventName === eventType ) {
					scope_Events[targetEvent].forEach(function( callback ) {
	
						callback.call(
							// Use the slider public API as the scope ('this')
							scope_Self,
							// Return values as array, so arg_1[arg_2] is always valid.
							scope_Values.map(options.format.to),
							// Handle index, 0 or 1
							handleNumber,
							// Unformatted slider values
							scope_Values.slice(),
							// Event is fired by tap, true or false
							tap || false,
							// Left offset of the handle, in relation to the slider
							scope_Locations.slice()
						);
					});
				}
			});
		}
	
	/*! In this file: Mechanics for slider operation */
	
		function toPct ( pct ) {
			return pct + '%';
		}
	
		// Split out the handle positioning logic so the Move event can use it, too
		function checkHandlePosition ( reference, handleNumber, to, lookBackward, lookForward, getValue ) {
	
			// For sliders with multiple handles, limit movement to the other handle.
			// Apply the margin option by adding it to the handle positions.
			if ( scope_Handles.length > 1 ) {
	
				if ( lookBackward && handleNumber > 0 ) {
					to = Math.max(to, reference[handleNumber - 1] + options.margin);
				}
	
				if ( lookForward && handleNumber < scope_Handles.length - 1 ) {
					to = Math.min(to, reference[handleNumber + 1] - options.margin);
				}
			}
	
			// The limit option has the opposite effect, limiting handles to a
			// maximum distance from another. Limit must be > 0, as otherwise
			// handles would be unmoveable.
			if ( scope_Handles.length > 1 && options.limit ) {
	
				if ( lookBackward && handleNumber > 0 ) {
					to = Math.min(to, reference[handleNumber - 1] + options.limit);
				}
	
				if ( lookForward && handleNumber < scope_Handles.length - 1 ) {
					to = Math.max(to, reference[handleNumber + 1] - options.limit);
				}
			}
	
			// The padding option keeps the handles a certain distance from the
			// edges of the slider. Padding must be > 0.
			if ( options.padding ) {
	
				if ( handleNumber === 0 ) {
					to = Math.max(to, options.padding[0]);
				}
	
				if ( handleNumber === scope_Handles.length - 1 ) {
					to = Math.min(to, 100 - options.padding[1]);
				}
			}
	
			to = scope_Spectrum.getStep(to);
	
			// Limit percentage to the 0 - 100 range
			to = limit(to);
	
			// Return false if handle can't move
			if ( to === reference[handleNumber] && !getValue ) {
				return false;
			}
	
			return to;
		}
	
		// Uses slider orientation to create CSS rules. a = base value;
		function inRuleOrder ( v, a ) {
			var o = options.ort;
			return (o?a:v) + ', ' + (o?v:a);
		}
	
		// Moves handle(s) by a percentage
		// (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
		function moveHandles ( upward, proposal, locations, handleNumbers ) {
	
			var proposals = locations.slice();
	
			var b = [!upward, upward];
			var f = [upward, !upward];
	
			// Copy handleNumbers so we don't change the dataset
			handleNumbers = handleNumbers.slice();
	
			// Check to see which handle is 'leading'.
			// If that one can't move the second can't either.
			if ( upward ) {
				handleNumbers.reverse();
			}
	
			// Step 1: get the maximum percentage that any of the handles can move
			if ( handleNumbers.length > 1 ) {
	
				handleNumbers.forEach(function(handleNumber, o) {
	
					var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false);
	
					// Stop if one of the handles can't move.
					if ( to === false ) {
						proposal = 0;
					} else {
						proposal = to - proposals[handleNumber];
						proposals[handleNumber] = to;
					}
				});
			}
	
			// If using one handle, check backward AND forward
			else {
				b = f = [true];
			}
	
			var state = false;
	
			// Step 2: Try to set the handles with the found percentage
			handleNumbers.forEach(function(handleNumber, o) {
				state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
			});
	
			// Step 3: If a handle moved, fire events
			if ( state ) {
				handleNumbers.forEach(function(handleNumber){
					fireEvent('update', handleNumber);
					fireEvent('slide', handleNumber);
				});
			}
		}
	
		// Takes a base value and an offset. This offset is used for the connect bar size.
		// In the initial design for this feature, the origin element was 1% wide.
		// Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
		// in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
		function transformDirection ( a, b ) {
			return options.dir ? 100 - a - b : a;
		}
	
		// Updates scope_Locations and scope_Values, updates visual state
		function updateHandlePosition ( handleNumber, to ) {
	
			// Update locations.
			scope_Locations[handleNumber] = to;
	
			// Convert the value to the slider stepping/range.
			scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
	
			var rule = 'translate(' + inRuleOrder(toPct(transformDirection(to, 0) - scope_DirOffset), '0') + ')';
			scope_Handles[handleNumber].style[options.transformRule] = rule;
	
			updateConnect(handleNumber);
			updateConnect(handleNumber + 1);
		}
	
		// Handles before the slider middle are stacked later = higher,
		// Handles after the middle later is lower
		// [[7] [8] .......... | .......... [5] [4]
		function setZindex ( ) {
	
			scope_HandleNumbers.forEach(function(handleNumber){
				var dir = (scope_Locations[handleNumber] > 50 ? -1 : 1);
				var zIndex = 3 + (scope_Handles.length + (dir * handleNumber));
				scope_Handles[handleNumber].style.zIndex = zIndex;
			});
		}
	
		// Test suggested values and apply margin, step.
		function setHandle ( handleNumber, to, lookBackward, lookForward ) {
	
			to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false);
	
			if ( to === false ) {
				return false;
			}
	
			updateHandlePosition(handleNumber, to);
	
			return true;
		}
	
		// Updates style attribute for connect nodes
		function updateConnect ( index ) {
	
			// Skip connects set to false
			if ( !scope_Connects[index] ) {
				return;
			}
	
			var l = 0;
			var h = 100;
	
			if ( index !== 0 ) {
				l = scope_Locations[index - 1];
			}
	
			if ( index !== scope_Connects.length - 1 ) {
				h = scope_Locations[index];
			}
	
			// We use two rules:
			// 'translate' to change the left/top offset;
			// 'scale' to change the width of the element;
			// As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
			var connectWidth = h - l;
			var translateRule = 'translate(' + inRuleOrder(toPct(transformDirection(l, connectWidth)), '0') + ')';
			var scaleRule = 'scale(' + inRuleOrder(connectWidth / 100, '1') + ')';
	
			scope_Connects[index].style[options.transformRule] = translateRule + ' ' + scaleRule;
		}
	
	/*! In this file: All methods eventually exposed in slider.noUiSlider... */
	
		// Parses value passed to .set method. Returns current value if not parse-able.
		function resolveToValue ( to, handleNumber ) {
	
			// Setting with null indicates an 'ignore'.
			// Inputting 'false' is invalid.
			if ( to === null || to === false || to === undefined ) {
				return scope_Locations[handleNumber];
			}
	
			// If a formatted number was passed, attempt to decode it.
			if ( typeof to === 'number' ) {
				to = String(to);
			}
	
			to = options.format.from(to);
			to = scope_Spectrum.toStepping(to);
	
			// If parsing the number failed, use the current value.
			if ( to === false || isNaN(to) ) {
				return scope_Locations[handleNumber];
			}
	
			return to;
		}
	
		// Set the slider value.
		function valueSet ( input, fireSetEvent ) {
	
			var values = asArray(input);
			var isInit = scope_Locations[0] === undefined;
	
			// Event fires by default
			fireSetEvent = (fireSetEvent === undefined ? true : !!fireSetEvent);
	
			// Animation is optional.
			// Make sure the initial values were set before using animated placement.
			if ( options.animate && !isInit ) {
				addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
			}
	
			// First pass, without lookAhead but with lookBackward. Values are set from left to right.
			scope_HandleNumbers.forEach(function(handleNumber){
				setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false);
			});
	
			// Second pass. Now that all base values are set, apply constraints
			scope_HandleNumbers.forEach(function(handleNumber){
				setHandle(handleNumber, scope_Locations[handleNumber], true, true);
			});
	
			setZindex();
	
			scope_HandleNumbers.forEach(function(handleNumber){
	
				fireEvent('update', handleNumber);
	
				// Fire the event only for handles that received a new value, as per #579
				if ( values[handleNumber] !== null && fireSetEvent ) {
					fireEvent('set', handleNumber);
				}
			});
		}
	
		// Reset slider to initial values
		function valueReset ( fireSetEvent ) {
			valueSet(options.start, fireSetEvent);
		}
	
		// Get the slider value.
		function valueGet ( ) {
	
			var values = scope_Values.map(options.format.to);
	
			// If only one handle is used, return a single value.
			if ( values.length === 1 ){
				return values[0];
			}
	
			return values;
		}
	
		// Removes classes from the root and empties it.
		function destroy ( ) {
	
			for ( var key in options.cssClasses ) {
				if ( !options.cssClasses.hasOwnProperty(key) ) { continue; }
				removeClass(scope_Target, options.cssClasses[key]);
			}
	
			while (scope_Target.firstChild) {
				scope_Target.removeChild(scope_Target.firstChild);
			}
	
			delete scope_Target.noUiSlider;
		}
	
		// Get the current step size for the slider.
		function getCurrentStep ( ) {
	
			// Check all locations, map them to their stepping point.
			// Get the step point, then find it in the input list.
			return scope_Locations.map(function( location, index ){
	
				var nearbySteps = scope_Spectrum.getNearbySteps( location );
				var value = scope_Values[index];
				var increment = nearbySteps.thisStep.step;
				var decrement = null;
	
				// If the next value in this step moves into the next step,
				// the increment is the start of the next step - the current value
				if ( increment !== false ) {
					if ( value + increment > nearbySteps.stepAfter.startValue ) {
						increment = nearbySteps.stepAfter.startValue - value;
					}
				}
	
	
				// If the value is beyond the starting point
				if ( value > nearbySteps.thisStep.startValue ) {
					decrement = nearbySteps.thisStep.step;
				}
	
				else if ( nearbySteps.stepBefore.step === false ) {
					decrement = false;
				}
	
				// If a handle is at the start of a step, it always steps back into the previous step first
				else {
					decrement = value - nearbySteps.stepBefore.highestStep;
				}
	
	
				// Now, if at the slider edges, there is not in/decrement
				if ( location === 100 ) {
					increment = null;
				}
	
				else if ( location === 0 ) {
					decrement = null;
				}
	
				// As per #391, the comparison for the decrement step can have some rounding issues.
				var stepDecimals = scope_Spectrum.countStepDecimals();
	
				// Round per #391
				if ( increment !== null && increment !== false ) {
					increment = Number(increment.toFixed(stepDecimals));
				}
	
				if ( decrement !== null && decrement !== false ) {
					decrement = Number(decrement.toFixed(stepDecimals));
				}
	
				return [decrement, increment];
			});
		}
	
		// Updateable: margin, limit, padding, step, range, animate, snap
		function updateOptions ( optionsToUpdate, fireSetEvent ) {
	
			// Spectrum is created using the range, snap, direction and step options.
			// 'snap' and 'step' can be updated.
			// If 'snap' and 'step' are not passed, they should remain unchanged.
			var v = valueGet();
	
			var updateAble = ['margin', 'limit', 'padding', 'range', 'animate', 'snap', 'step', 'format'];
	
			// Only change options that we're actually passed to update.
			updateAble.forEach(function(name){
				if ( optionsToUpdate[name] !== undefined ) {
					originalOptions[name] = optionsToUpdate[name];
				}
			});
	
			var newOptions = testOptions(originalOptions);
	
			// Load new options into the slider state
			updateAble.forEach(function(name){
				if ( optionsToUpdate[name] !== undefined ) {
					options[name] = newOptions[name];
				}
			});
	
			scope_Spectrum = newOptions.spectrum;
	
			// Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
			options.margin = newOptions.margin;
			options.limit = newOptions.limit;
			options.padding = newOptions.padding;
	
			// Update pips, removes existing.
			if ( options.pips ) {
				pips(options.pips);
			}
	
			// Invalidate the current positioning so valueSet forces an update.
			scope_Locations = [];
			valueSet(optionsToUpdate.start || v, fireSetEvent);
		}
	
	/*! In this file: Calls to functions. All other scope_ files define functions only; */
	
		// Create the base element, initialize HTML and set classes.
		// Add handles and connect elements.
		addSlider(scope_Target);
		addElements(options.connect, scope_Base);
	
		// Attach user events.
		bindSliderEvents(options.events);
	
		// Use the public value method to set the start values.
		valueSet(options.start);
	
		scope_Self = {
			destroy: destroy,
			steps: getCurrentStep,
			on: bindEvent,
			off: removeEvent,
			get: valueGet,
			set: valueSet,
			reset: valueReset,
			// Exposed for unit testing, don't use this in your application.
			__moveHandles: function(a, b, c) { moveHandles(a, b, scope_Locations, c); },
			options: originalOptions, // Issue #600, #678
			updateOptions: updateOptions,
			target: scope_Target, // Issue #597
			removePips: removePips,
			pips: pips // Issue #594
		};
	
		if ( options.pips ) {
			pips(options.pips);
		}
	
		if ( options.tooltips ) {
			tooltips();
		}
	
		aria();
	
		return scope_Self;
	
	}
	
	
		// Run the standard initializer
		function initialize ( target, originalOptions ) {
	
			if ( !target || !target.nodeName ) {
				throw new Error("noUiSlider (" + VERSION + "): create requires a single element, got: " + target);
			}
	
			// Throw an error if the slider was already initialized.
			if ( target.noUiSlider ) {
				throw new Error("noUiSlider (" + VERSION + "): Slider was already initialized.");
			}
	
			// Test the options and create the slider environment;
			var options = testOptions( originalOptions, target );
			var api = scope( target, options, originalOptions );
	
			target.noUiSlider = api;
	
			return api;
		}
	
		// Use an object instead of a function for future expandability;
		return {
			version: VERSION,
			create: initialize
		};
	
	}));

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/**
	 * Owl Carousel v2.3.4
	 * Copyright 2013-2018 David Deutsch
	 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
	 */
	/**
	 * Owl carousel
	 * @version 2.3.4
	 * @author Bartosz Wojciechowski
	 * @author David Deutsch
	 * @license The MIT License (MIT)
	 * @todo Lazy Load Icon
	 * @todo prevent animationend bubling
	 * @todo itemsScaleUp
	 * @todo Test Zepto
	 * @todo stagePadding calculate wrong active classes
	 */
	;(function($, window, document, undefined) {
	
		/**
		 * Creates a carousel.
		 * @class The Owl Carousel.
		 * @public
		 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
		 * @param {Object} [options] - The options
		 */
		function Owl(element, options) {
	
			/**
			 * Current settings for the carousel.
			 * @public
			 */
			this.settings = null;
	
			/**
			 * Current options set by the caller including defaults.
			 * @public
			 */
			this.options = $.extend({}, Owl.Defaults, options);
	
			/**
			 * Plugin element.
			 * @public
			 */
			this.$element = $(element);
	
			/**
			 * Proxied event handlers.
			 * @protected
			 */
			this._handlers = {};
	
			/**
			 * References to the running plugins of this carousel.
			 * @protected
			 */
			this._plugins = {};
	
			/**
			 * Currently suppressed events to prevent them from being retriggered.
			 * @protected
			 */
			this._supress = {};
	
			/**
			 * Absolute current position.
			 * @protected
			 */
			this._current = null;
	
			/**
			 * Animation speed in milliseconds.
			 * @protected
			 */
			this._speed = null;
	
			/**
			 * Coordinates of all items in pixel.
			 * @todo The name of this member is missleading.
			 * @protected
			 */
			this._coordinates = [];
	
			/**
			 * Current breakpoint.
			 * @todo Real media queries would be nice.
			 * @protected
			 */
			this._breakpoint = null;
	
			/**
			 * Current width of the plugin element.
			 */
			this._width = null;
	
			/**
			 * All real items.
			 * @protected
			 */
			this._items = [];
	
			/**
			 * All cloned items.
			 * @protected
			 */
			this._clones = [];
	
			/**
			 * Merge values of all items.
			 * @todo Maybe this could be part of a plugin.
			 * @protected
			 */
			this._mergers = [];
	
			/**
			 * Widths of all items.
			 */
			this._widths = [];
	
			/**
			 * Invalidated parts within the update process.
			 * @protected
			 */
			this._invalidated = {};
	
			/**
			 * Ordered list of workers for the update process.
			 * @protected
			 */
			this._pipe = [];
	
			/**
			 * Current state information for the drag operation.
			 * @todo #261
			 * @protected
			 */
			this._drag = {
				time: null,
				target: null,
				pointer: null,
				stage: {
					start: null,
					current: null
				},
				direction: null
			};
	
			/**
			 * Current state information and their tags.
			 * @type {Object}
			 * @protected
			 */
			this._states = {
				current: {},
				tags: {
					'initializing': [ 'busy' ],
					'animating': [ 'busy' ],
					'dragging': [ 'interacting' ]
				}
			};
	
			$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
				this._handlers[handler] = $.proxy(this[handler], this);
			}, this));
	
			$.each(Owl.Plugins, $.proxy(function(key, plugin) {
				this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
					= new plugin(this);
			}, this));
	
			$.each(Owl.Workers, $.proxy(function(priority, worker) {
				this._pipe.push({
					'filter': worker.filter,
					'run': $.proxy(worker.run, this)
				});
			}, this));
	
			this.setup();
			this.initialize();
		}
	
		/**
		 * Default options for the carousel.
		 * @public
		 */
		Owl.Defaults = {
			items: 3,
			loop: false,
			center: false,
			rewind: false,
			checkVisibility: true,
	
			mouseDrag: true,
			touchDrag: true,
			pullDrag: true,
			freeDrag: false,
	
			margin: 0,
			stagePadding: 0,
	
			merge: false,
			mergeFit: true,
			autoWidth: false,
	
			startPosition: 0,
			rtl: false,
	
			smartSpeed: 250,
			fluidSpeed: false,
			dragEndSpeed: false,
	
			responsive: {},
			responsiveRefreshRate: 200,
			responsiveBaseElement: window,
	
			fallbackEasing: 'swing',
			slideTransition: '',
	
			info: false,
	
			nestedItemSelector: false,
			itemElement: 'div',
			stageElement: 'div',
	
			refreshClass: 'owl-refresh',
			loadedClass: 'owl-loaded',
			loadingClass: 'owl-loading',
			rtlClass: 'owl-rtl',
			responsiveClass: 'owl-responsive',
			dragClass: 'owl-drag',
			itemClass: 'owl-item',
			stageClass: 'owl-stage',
			stageOuterClass: 'owl-stage-outer',
			grabClass: 'owl-grab'
		};
	
		/**
		 * Enumeration for width.
		 * @public
		 * @readonly
		 * @enum {String}
		 */
		Owl.Width = {
			Default: 'default',
			Inner: 'inner',
			Outer: 'outer'
		};
	
		/**
		 * Enumeration for types.
		 * @public
		 * @readonly
		 * @enum {String}
		 */
		Owl.Type = {
			Event: 'event',
			State: 'state'
		};
	
		/**
		 * Contains all registered plugins.
		 * @public
		 */
		Owl.Plugins = {};
	
		/**
		 * List of workers involved in the update process.
		 */
		Owl.Workers = [ {
			filter: [ 'width', 'settings' ],
			run: function() {
				this._width = this.$element.width();
			}
		}, {
			filter: [ 'width', 'items', 'settings' ],
			run: function(cache) {
				cache.current = this._items && this._items[this.relative(this._current)];
			}
		}, {
			filter: [ 'items', 'settings' ],
			run: function() {
				this.$stage.children('.cloned').remove();
			}
		}, {
			filter: [ 'width', 'items', 'settings' ],
			run: function(cache) {
				var margin = this.settings.margin || '',
					grid = !this.settings.autoWidth,
					rtl = this.settings.rtl,
					css = {
						'width': 'auto',
						'margin-left': rtl ? margin : '',
						'margin-right': rtl ? '' : margin
					};
	
				!grid && this.$stage.children().css(css);
	
				cache.css = css;
			}
		}, {
			filter: [ 'width', 'items', 'settings' ],
			run: function(cache) {
				var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
					merge = null,
					iterator = this._items.length,
					grid = !this.settings.autoWidth,
					widths = [];
	
				cache.items = {
					merge: false,
					width: width
				};
	
				while (iterator--) {
					merge = this._mergers[iterator];
					merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;
	
					cache.items.merge = merge > 1 || cache.items.merge;
	
					widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
				}
	
				this._widths = widths;
			}
		}, {
			filter: [ 'items', 'settings' ],
			run: function() {
				var clones = [],
					items = this._items,
					settings = this.settings,
					// TODO: Should be computed from number of min width items in stage
					view = Math.max(settings.items * 2, 4),
					size = Math.ceil(items.length / 2) * 2,
					repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
					append = '',
					prepend = '';
	
				repeat /= 2;
	
				while (repeat > 0) {
					// Switch to only using appended clones
					clones.push(this.normalize(clones.length / 2, true));
					append = append + items[clones[clones.length - 1]][0].outerHTML;
					clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
					prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
					repeat -= 1;
				}
	
				this._clones = clones;
	
				$(append).addClass('cloned').appendTo(this.$stage);
				$(prepend).addClass('cloned').prependTo(this.$stage);
			}
		}, {
			filter: [ 'width', 'items', 'settings' ],
			run: function() {
				var rtl = this.settings.rtl ? 1 : -1,
					size = this._clones.length + this._items.length,
					iterator = -1,
					previous = 0,
					current = 0,
					coordinates = [];
	
				while (++iterator < size) {
					previous = coordinates[iterator - 1] || 0;
					current = this._widths[this.relative(iterator)] + this.settings.margin;
					coordinates.push(previous + current * rtl);
				}
	
				this._coordinates = coordinates;
			}
		}, {
			filter: [ 'width', 'items', 'settings' ],
			run: function() {
				var padding = this.settings.stagePadding,
					coordinates = this._coordinates,
					css = {
						'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
						'padding-left': padding || '',
						'padding-right': padding || ''
					};
	
				this.$stage.css(css);
			}
		}, {
			filter: [ 'width', 'items', 'settings' ],
			run: function(cache) {
				var iterator = this._coordinates.length,
					grid = !this.settings.autoWidth,
					items = this.$stage.children();
	
				if (grid && cache.items.merge) {
					while (iterator--) {
						cache.css.width = this._widths[this.relative(iterator)];
						items.eq(iterator).css(cache.css);
					}
				} else if (grid) {
					cache.css.width = cache.items.width;
					items.css(cache.css);
				}
			}
		}, {
			filter: [ 'items' ],
			run: function() {
				this._coordinates.length < 1 && this.$stage.removeAttr('style');
			}
		}, {
			filter: [ 'width', 'items', 'settings' ],
			run: function(cache) {
				cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
				cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
				this.reset(cache.current);
			}
		}, {
			filter: [ 'position' ],
			run: function() {
				this.animate(this.coordinates(this._current));
			}
		}, {
			filter: [ 'width', 'position', 'items', 'settings' ],
			run: function() {
				var rtl = this.settings.rtl ? 1 : -1,
					padding = this.settings.stagePadding * 2,
					begin = this.coordinates(this.current()) + padding,
					end = begin + this.width() * rtl,
					inner, outer, matches = [], i, n;
	
				for (i = 0, n = this._coordinates.length; i < n; i++) {
					inner = this._coordinates[i - 1] || 0;
					outer = Math.abs(this._coordinates[i]) + padding * rtl;
	
					if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
						|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
						matches.push(i);
					}
				}
	
				this.$stage.children('.active').removeClass('active');
				this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');
	
				this.$stage.children('.center').removeClass('center');
				if (this.settings.center) {
					this.$stage.children().eq(this.current()).addClass('center');
				}
			}
		} ];
	
		/**
		 * Create the stage DOM element
		 */
		Owl.prototype.initializeStage = function() {
			this.$stage = this.$element.find('.' + this.settings.stageClass);
	
			// if the stage is already in the DOM, grab it and skip stage initialization
			if (this.$stage.length) {
				return;
			}
	
			this.$element.addClass(this.options.loadingClass);
	
			// create stage
			this.$stage = $('<' + this.settings.stageElement + '>', {
				"class": this.settings.stageClass
			}).wrap( $( '<div/>', {
				"class": this.settings.stageOuterClass
			}));
	
			// append stage
			this.$element.append(this.$stage.parent());
		};
	
		/**
		 * Create item DOM elements
		 */
		Owl.prototype.initializeItems = function() {
			var $items = this.$element.find('.owl-item');
	
			// if the items are already in the DOM, grab them and skip item initialization
			if ($items.length) {
				this._items = $items.get().map(function(item) {
					return $(item);
				});
	
				this._mergers = this._items.map(function() {
					return 1;
				});
	
				this.refresh();
	
				return;
			}
	
			// append content
			this.replace(this.$element.children().not(this.$stage.parent()));
	
			// check visibility
			if (this.isVisible()) {
				// update view
				this.refresh();
			} else {
				// invalidate width
				this.invalidate('width');
			}
	
			this.$element
				.removeClass(this.options.loadingClass)
				.addClass(this.options.loadedClass);
		};
	
		/**
		 * Initializes the carousel.
		 * @protected
		 */
		Owl.prototype.initialize = function() {
			this.enter('initializing');
			this.trigger('initialize');
	
			this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);
	
			if (this.settings.autoWidth && !this.is('pre-loading')) {
				var imgs, nestedSelector, width;
				imgs = this.$element.find('img');
				nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
				width = this.$element.children(nestedSelector).width();
	
				if (imgs.length && width <= 0) {
					this.preloadAutoWidthImages(imgs);
				}
			}
	
			this.initializeStage();
			this.initializeItems();
	
			// register event handlers
			this.registerEventHandlers();
	
			this.leave('initializing');
			this.trigger('initialized');
		};
	
		/**
		 * @returns {Boolean} visibility of $element
		 *                    if you know the carousel will always be visible you can set `checkVisibility` to `false` to
		 *                    prevent the expensive browser layout forced reflow the $element.is(':visible') does
		 */
		Owl.prototype.isVisible = function() {
			return this.settings.checkVisibility
				? this.$element.is(':visible')
				: true;
		};
	
		/**
		 * Setups the current settings.
		 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
		 * @todo Support for media queries by using `matchMedia` would be nice.
		 * @public
		 */
		Owl.prototype.setup = function() {
			var viewport = this.viewport(),
				overwrites = this.options.responsive,
				match = -1,
				settings = null;
	
			if (!overwrites) {
				settings = $.extend({}, this.options);
			} else {
				$.each(overwrites, function(breakpoint) {
					if (breakpoint <= viewport && breakpoint > match) {
						match = Number(breakpoint);
					}
				});
	
				settings = $.extend({}, this.options, overwrites[match]);
				if (typeof settings.stagePadding === 'function') {
					settings.stagePadding = settings.stagePadding();
				}
				delete settings.responsive;
	
				// responsive class
				if (settings.responsiveClass) {
					this.$element.attr('class',
						this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
					);
				}
			}
	
			this.trigger('change', { property: { name: 'settings', value: settings } });
			this._breakpoint = match;
			this.settings = settings;
			this.invalidate('settings');
			this.trigger('changed', { property: { name: 'settings', value: this.settings } });
		};
	
		/**
		 * Updates option logic if necessery.
		 * @protected
		 */
		Owl.prototype.optionsLogic = function() {
			if (this.settings.autoWidth) {
				this.settings.stagePadding = false;
				this.settings.merge = false;
			}
		};
	
		/**
		 * Prepares an item before add.
		 * @todo Rename event parameter `content` to `item`.
		 * @protected
		 * @returns {jQuery|HTMLElement} - The item container.
		 */
		Owl.prototype.prepare = function(item) {
			var event = this.trigger('prepare', { content: item });
	
			if (!event.data) {
				event.data = $('<' + this.settings.itemElement + '/>')
					.addClass(this.options.itemClass).append(item)
			}
	
			this.trigger('prepared', { content: event.data });
	
			return event.data;
		};
	
		/**
		 * Updates the view.
		 * @public
		 */
		Owl.prototype.update = function() {
			var i = 0,
				n = this._pipe.length,
				filter = $.proxy(function(p) { return this[p] }, this._invalidated),
				cache = {};
	
			while (i < n) {
				if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
					this._pipe[i].run(cache);
				}
				i++;
			}
	
			this._invalidated = {};
	
			!this.is('valid') && this.enter('valid');
		};
	
		/**
		 * Gets the width of the view.
		 * @public
		 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
		 * @returns {Number} - The width of the view in pixel.
		 */
		Owl.prototype.width = function(dimension) {
			dimension = dimension || Owl.Width.Default;
			switch (dimension) {
				case Owl.Width.Inner:
				case Owl.Width.Outer:
					return this._width;
				default:
					return this._width - this.settings.stagePadding * 2 + this.settings.margin;
			}
		};
	
		/**
		 * Refreshes the carousel primarily for adaptive purposes.
		 * @public
		 */
		Owl.prototype.refresh = function() {
			this.enter('refreshing');
			this.trigger('refresh');
	
			this.setup();
	
			this.optionsLogic();
	
			this.$element.addClass(this.options.refreshClass);
	
			this.update();
	
			this.$element.removeClass(this.options.refreshClass);
	
			this.leave('refreshing');
			this.trigger('refreshed');
		};
	
		/**
		 * Checks window `resize` event.
		 * @protected
		 */
		Owl.prototype.onThrottledResize = function() {
			window.clearTimeout(this.resizeTimer);
			this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
		};
	
		/**
		 * Checks window `resize` event.
		 * @protected
		 */
		Owl.prototype.onResize = function() {
			if (!this._items.length) {
				return false;
			}
	
			if (this._width === this.$element.width()) {
				return false;
			}
	
			if (!this.isVisible()) {
				return false;
			}
	
			this.enter('resizing');
	
			if (this.trigger('resize').isDefaultPrevented()) {
				this.leave('resizing');
				return false;
			}
	
			this.invalidate('width');
	
			this.refresh();
	
			this.leave('resizing');
			this.trigger('resized');
		};
	
		/**
		 * Registers event handlers.
		 * @todo Check `msPointerEnabled`
		 * @todo #261
		 * @protected
		 */
		Owl.prototype.registerEventHandlers = function() {
			if ($.support.transition) {
				this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
			}
	
			if (this.settings.responsive !== false) {
				this.on(window, 'resize', this._handlers.onThrottledResize);
			}
	
			if (this.settings.mouseDrag) {
				this.$element.addClass(this.options.dragClass);
				this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
				this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
			}
	
			if (this.settings.touchDrag){
				this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
				this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
			}
		};
	
		/**
		 * Handles `touchstart` and `mousedown` events.
		 * @todo Horizontal swipe threshold as option
		 * @todo #261
		 * @protected
		 * @param {Event} event - The event arguments.
		 */
		Owl.prototype.onDragStart = function(event) {
			var stage = null;
	
			if (event.which === 3) {
				return;
			}
	
			if ($.support.transform) {
				stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
				stage = {
					x: stage[stage.length === 16 ? 12 : 4],
					y: stage[stage.length === 16 ? 13 : 5]
				};
			} else {
				stage = this.$stage.position();
				stage = {
					x: this.settings.rtl ?
						stage.left + this.$stage.width() - this.width() + this.settings.margin :
						stage.left,
					y: stage.top
				};
			}
	
			if (this.is('animating')) {
				$.support.transform ? this.animate(stage.x) : this.$stage.stop()
				this.invalidate('position');
			}
	
			this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');
	
			this.speed(0);
	
			this._drag.time = new Date().getTime();
			this._drag.target = $(event.target);
			this._drag.stage.start = stage;
			this._drag.stage.current = stage;
			this._drag.pointer = this.pointer(event);
	
			$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));
	
			$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
				var delta = this.difference(this._drag.pointer, this.pointer(event));
	
				$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));
	
				if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
					return;
				}
	
				event.preventDefault();
	
				this.enter('dragging');
				this.trigger('drag');
			}, this));
		};
	
		/**
		 * Handles the `touchmove` and `mousemove` events.
		 * @todo #261
		 * @protected
		 * @param {Event} event - The event arguments.
		 */
		Owl.prototype.onDragMove = function(event) {
			var minimum = null,
				maximum = null,
				pull = null,
				delta = this.difference(this._drag.pointer, this.pointer(event)),
				stage = this.difference(this._drag.stage.start, delta);
	
			if (!this.is('dragging')) {
				return;
			}
	
			event.preventDefault();
	
			if (this.settings.loop) {
				minimum = this.coordinates(this.minimum());
				maximum = this.coordinates(this.maximum() + 1) - minimum;
				stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
			} else {
				minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
				maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
				pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
				stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
			}
	
			this._drag.stage.current = stage;
	
			this.animate(stage.x);
		};
	
		/**
		 * Handles the `touchend` and `mouseup` events.
		 * @todo #261
		 * @todo Threshold for click event
		 * @protected
		 * @param {Event} event - The event arguments.
		 */
		Owl.prototype.onDragEnd = function(event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event)),
				stage = this._drag.stage.current,
				direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';
	
			$(document).off('.owl.core');
	
			this.$element.removeClass(this.options.grabClass);
	
			if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
				this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
				this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
				this.invalidate('position');
				this.update();
	
				this._drag.direction = direction;
	
				if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
					this._drag.target.one('click.owl.core', function() { return false; });
				}
			}
	
			if (!this.is('dragging')) {
				return;
			}
	
			this.leave('dragging');
			this.trigger('dragged');
		};
	
		/**
		 * Gets absolute position of the closest item for a coordinate.
		 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
		 * @protected
		 * @param {Number} coordinate - The coordinate in pixel.
		 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
		 * @return {Number} - The absolute position of the closest item.
		 */
		Owl.prototype.closest = function(coordinate, direction) {
			var position = -1,
				pull = 30,
				width = this.width(),
				coordinates = this.coordinates();
	
			if (!this.settings.freeDrag) {
				// check closest item
				$.each(coordinates, $.proxy(function(index, value) {
					// on a left pull, check on current index
					if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
						position = index;
					// on a right pull, check on previous index
					// to do so, subtract width from value and set position = index + 1
					} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
						position = index + 1;
					} else if (this.op(coordinate, '<', value)
						&& this.op(coordinate, '>', coordinates[index + 1] !== undefined ? coordinates[index + 1] : value - width)) {
						position = direction === 'left' ? index + 1 : index;
					}
					return position === -1;
				}, this));
			}
	
			if (!this.settings.loop) {
				// non loop boundries
				if (this.op(coordinate, '>', coordinates[this.minimum()])) {
					position = coordinate = this.minimum();
				} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
					position = coordinate = this.maximum();
				}
			}
	
			return position;
		};
	
		/**
		 * Animates the stage.
		 * @todo #270
		 * @public
		 * @param {Number} coordinate - The coordinate in pixels.
		 */
		Owl.prototype.animate = function(coordinate) {
			var animate = this.speed() > 0;
	
			this.is('animating') && this.onTransitionEnd();
	
			if (animate) {
				this.enter('animating');
				this.trigger('translate');
			}
	
			if ($.support.transform3d && $.support.transition) {
				this.$stage.css({
					transform: 'translate3d(' + coordinate + 'px,0px,0px)',
					transition: (this.speed() / 1000) + 's' + (
						this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''
					)
				});
			} else if (animate) {
				this.$stage.animate({
					left: coordinate + 'px'
				}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
			} else {
				this.$stage.css({
					left: coordinate + 'px'
				});
			}
		};
	
		/**
		 * Checks whether the carousel is in a specific state or not.
		 * @param {String} state - The state to check.
		 * @returns {Boolean} - The flag which indicates if the carousel is busy.
		 */
		Owl.prototype.is = function(state) {
			return this._states.current[state] && this._states.current[state] > 0;
		};
	
		/**
		 * Sets the absolute position of the current item.
		 * @public
		 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
		 * @returns {Number} - The absolute position of the current item.
		 */
		Owl.prototype.current = function(position) {
			if (position === undefined) {
				return this._current;
			}
	
			if (this._items.length === 0) {
				return undefined;
			}
	
			position = this.normalize(position);
	
			if (this._current !== position) {
				var event = this.trigger('change', { property: { name: 'position', value: position } });
	
				if (event.data !== undefined) {
					position = this.normalize(event.data);
				}
	
				this._current = position;
	
				this.invalidate('position');
	
				this.trigger('changed', { property: { name: 'position', value: this._current } });
			}
	
			return this._current;
		};
	
		/**
		 * Invalidates the given part of the update routine.
		 * @param {String} [part] - The part to invalidate.
		 * @returns {Array.<String>} - The invalidated parts.
		 */
		Owl.prototype.invalidate = function(part) {
			if ($.type(part) === 'string') {
				this._invalidated[part] = true;
				this.is('valid') && this.leave('valid');
			}
			return $.map(this._invalidated, function(v, i) { return i });
		};
	
		/**
		 * Resets the absolute position of the current item.
		 * @public
		 * @param {Number} position - The absolute position of the new item.
		 */
		Owl.prototype.reset = function(position) {
			position = this.normalize(position);
	
			if (position === undefined) {
				return;
			}
	
			this._speed = 0;
			this._current = position;
	
			this.suppress([ 'translate', 'translated' ]);
	
			this.animate(this.coordinates(position));
	
			this.release([ 'translate', 'translated' ]);
		};
	
		/**
		 * Normalizes an absolute or a relative position of an item.
		 * @public
		 * @param {Number} position - The absolute or relative position to normalize.
		 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
		 * @returns {Number} - The normalized position.
		 */
		Owl.prototype.normalize = function(position, relative) {
			var n = this._items.length,
				m = relative ? 0 : this._clones.length;
	
			if (!this.isNumeric(position) || n < 1) {
				position = undefined;
			} else if (position < 0 || position >= n + m) {
				position = ((position - m / 2) % n + n) % n + m / 2;
			}
	
			return position;
		};
	
		/**
		 * Converts an absolute position of an item into a relative one.
		 * @public
		 * @param {Number} position - The absolute position to convert.
		 * @returns {Number} - The converted position.
		 */
		Owl.prototype.relative = function(position) {
			position -= this._clones.length / 2;
			return this.normalize(position, true);
		};
	
		/**
		 * Gets the maximum position for the current item.
		 * @public
		 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
		 * @returns {Number}
		 */
		Owl.prototype.maximum = function(relative) {
			var settings = this.settings,
				maximum = this._coordinates.length,
				iterator,
				reciprocalItemsWidth,
				elementWidth;
	
			if (settings.loop) {
				maximum = this._clones.length / 2 + this._items.length - 1;
			} else if (settings.autoWidth || settings.merge) {
				iterator = this._items.length;
				if (iterator) {
					reciprocalItemsWidth = this._items[--iterator].width();
					elementWidth = this.$element.width();
					while (iterator--) {
						reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
						if (reciprocalItemsWidth > elementWidth) {
							break;
						}
					}
				}
				maximum = iterator + 1;
			} else if (settings.center) {
				maximum = this._items.length - 1;
			} else {
				maximum = this._items.length - settings.items;
			}
	
			if (relative) {
				maximum -= this._clones.length / 2;
			}
	
			return Math.max(maximum, 0);
		};
	
		/**
		 * Gets the minimum position for the current item.
		 * @public
		 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
		 * @returns {Number}
		 */
		Owl.prototype.minimum = function(relative) {
			return relative ? 0 : this._clones.length / 2;
		};
	
		/**
		 * Gets an item at the specified relative position.
		 * @public
		 * @param {Number} [position] - The relative position of the item.
		 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
		 */
		Owl.prototype.items = function(position) {
			if (position === undefined) {
				return this._items.slice();
			}
	
			position = this.normalize(position, true);
			return this._items[position];
		};
	
		/**
		 * Gets an item at the specified relative position.
		 * @public
		 * @param {Number} [position] - The relative position of the item.
		 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
		 */
		Owl.prototype.mergers = function(position) {
			if (position === undefined) {
				return this._mergers.slice();
			}
	
			position = this.normalize(position, true);
			return this._mergers[position];
		};
	
		/**
		 * Gets the absolute positions of clones for an item.
		 * @public
		 * @param {Number} [position] - The relative position of the item.
		 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
		 */
		Owl.prototype.clones = function(position) {
			var odd = this._clones.length / 2,
				even = odd + this._items.length,
				map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };
	
			if (position === undefined) {
				return $.map(this._clones, function(v, i) { return map(i) });
			}
	
			return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
		};
	
		/**
		 * Sets the current animation speed.
		 * @public
		 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
		 * @returns {Number} - The current animation speed in milliseconds.
		 */
		Owl.prototype.speed = function(speed) {
			if (speed !== undefined) {
				this._speed = speed;
			}
	
			return this._speed;
		};
	
		/**
		 * Gets the coordinate of an item.
		 * @todo The name of this method is missleanding.
		 * @public
		 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
		 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
		 */
		Owl.prototype.coordinates = function(position) {
			var multiplier = 1,
				newPosition = position - 1,
				coordinate;
	
			if (position === undefined) {
				return $.map(this._coordinates, $.proxy(function(coordinate, index) {
					return this.coordinates(index);
				}, this));
			}
	
			if (this.settings.center) {
				if (this.settings.rtl) {
					multiplier = -1;
					newPosition = position + 1;
				}
	
				coordinate = this._coordinates[position];
				coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
			} else {
				coordinate = this._coordinates[newPosition] || 0;
			}
	
			coordinate = Math.ceil(coordinate);
	
			return coordinate;
		};
	
		/**
		 * Calculates the speed for a translation.
		 * @protected
		 * @param {Number} from - The absolute position of the start item.
		 * @param {Number} to - The absolute position of the target item.
		 * @param {Number} [factor=undefined] - The time factor in milliseconds.
		 * @returns {Number} - The time in milliseconds for the translation.
		 */
		Owl.prototype.duration = function(from, to, factor) {
			if (factor === 0) {
				return 0;
			}
	
			return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
		};
	
		/**
		 * Slides to the specified item.
		 * @public
		 * @param {Number} position - The position of the item.
		 * @param {Number} [speed] - The time in milliseconds for the transition.
		 */
		Owl.prototype.to = function(position, speed) {
			var current = this.current(),
				revert = null,
				distance = position - this.relative(current),
				direction = (distance > 0) - (distance < 0),
				items = this._items.length,
				minimum = this.minimum(),
				maximum = this.maximum();
	
			if (this.settings.loop) {
				if (!this.settings.rewind && Math.abs(distance) > items / 2) {
					distance += direction * -1 * items;
				}
	
				position = current + distance;
				revert = ((position - minimum) % items + items) % items + minimum;
	
				if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
					current = revert - distance;
					position = revert;
					this.reset(current);
				}
			} else if (this.settings.rewind) {
				maximum += 1;
				position = (position % maximum + maximum) % maximum;
			} else {
				position = Math.max(minimum, Math.min(maximum, position));
			}
	
			this.speed(this.duration(current, position, speed));
			this.current(position);
	
			if (this.isVisible()) {
				this.update();
			}
		};
	
		/**
		 * Slides to the next item.
		 * @public
		 * @param {Number} [speed] - The time in milliseconds for the transition.
		 */
		Owl.prototype.next = function(speed) {
			speed = speed || false;
			this.to(this.relative(this.current()) + 1, speed);
		};
	
		/**
		 * Slides to the previous item.
		 * @public
		 * @param {Number} [speed] - The time in milliseconds for the transition.
		 */
		Owl.prototype.prev = function(speed) {
			speed = speed || false;
			this.to(this.relative(this.current()) - 1, speed);
		};
	
		/**
		 * Handles the end of an animation.
		 * @protected
		 * @param {Event} event - The event arguments.
		 */
		Owl.prototype.onTransitionEnd = function(event) {
	
			// if css2 animation then event object is undefined
			if (event !== undefined) {
				event.stopPropagation();
	
				// Catch only owl-stage transitionEnd event
				if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
					return false;
				}
			}
	
			this.leave('animating');
			this.trigger('translated');
		};
	
		/**
		 * Gets viewport width.
		 * @protected
		 * @return {Number} - The width in pixel.
		 */
		Owl.prototype.viewport = function() {
			var width;
			if (this.options.responsiveBaseElement !== window) {
				width = $(this.options.responsiveBaseElement).width();
			} else if (window.innerWidth) {
				width = window.innerWidth;
			} else if (document.documentElement && document.documentElement.clientWidth) {
				width = document.documentElement.clientWidth;
			} else {
				console.warn('Can not detect viewport width.');
			}
			return width;
		};
	
		/**
		 * Replaces the current content.
		 * @public
		 * @param {HTMLElement|jQuery|String} content - The new content.
		 */
		Owl.prototype.replace = function(content) {
			this.$stage.empty();
			this._items = [];
	
			if (content) {
				content = (content instanceof jQuery) ? content : $(content);
			}
	
			if (this.settings.nestedItemSelector) {
				content = content.find('.' + this.settings.nestedItemSelector);
			}
	
			content.filter(function() {
				return this.nodeType === 1;
			}).each($.proxy(function(index, item) {
				item = this.prepare(item);
				this.$stage.append(item);
				this._items.push(item);
				this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
			}, this));
	
			this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
	
			this.invalidate('items');
		};
	
		/**
		 * Adds an item.
		 * @todo Use `item` instead of `content` for the event arguments.
		 * @public
		 * @param {HTMLElement|jQuery|String} content - The item content to add.
		 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
		 */
		Owl.prototype.add = function(content, position) {
			var current = this.relative(this._current);
	
			position = position === undefined ? this._items.length : this.normalize(position, true);
			content = content instanceof jQuery ? content : $(content);
	
			this.trigger('add', { content: content, position: position });
	
			content = this.prepare(content);
	
			if (this._items.length === 0 || position === this._items.length) {
				this._items.length === 0 && this.$stage.append(content);
				this._items.length !== 0 && this._items[position - 1].after(content);
				this._items.push(content);
				this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
			} else {
				this._items[position].before(content);
				this._items.splice(position, 0, content);
				this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
			}
	
			this._items[current] && this.reset(this._items[current].index());
	
			this.invalidate('items');
	
			this.trigger('added', { content: content, position: position });
		};
	
		/**
		 * Removes an item by its position.
		 * @todo Use `item` instead of `content` for the event arguments.
		 * @public
		 * @param {Number} position - The relative position of the item to remove.
		 */
		Owl.prototype.remove = function(position) {
			position = this.normalize(position, true);
	
			if (position === undefined) {
				return;
			}
	
			this.trigger('remove', { content: this._items[position], position: position });
	
			this._items[position].remove();
			this._items.splice(position, 1);
			this._mergers.splice(position, 1);
	
			this.invalidate('items');
	
			this.trigger('removed', { content: null, position: position });
		};
	
		/**
		 * Preloads images with auto width.
		 * @todo Replace by a more generic approach
		 * @protected
		 */
		Owl.prototype.preloadAutoWidthImages = function(images) {
			images.each($.proxy(function(i, element) {
				this.enter('pre-loading');
				element = $(element);
				$(new Image()).one('load', $.proxy(function(e) {
					element.attr('src', e.target.src);
					element.css('opacity', 1);
					this.leave('pre-loading');
					!this.is('pre-loading') && !this.is('initializing') && this.refresh();
				}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
			}, this));
		};
	
		/**
		 * Destroys the carousel.
		 * @public
		 */
		Owl.prototype.destroy = function() {
	
			this.$element.off('.owl.core');
			this.$stage.off('.owl.core');
			$(document).off('.owl.core');
	
			if (this.settings.responsive !== false) {
				window.clearTimeout(this.resizeTimer);
				this.off(window, 'resize', this._handlers.onThrottledResize);
			}
	
			for (var i in this._plugins) {
				this._plugins[i].destroy();
			}
	
			this.$stage.children('.cloned').remove();
	
			this.$stage.unwrap();
			this.$stage.children().contents().unwrap();
			this.$stage.children().unwrap();
			this.$stage.remove();
			this.$element
				.removeClass(this.options.refreshClass)
				.removeClass(this.options.loadingClass)
				.removeClass(this.options.loadedClass)
				.removeClass(this.options.rtlClass)
				.removeClass(this.options.dragClass)
				.removeClass(this.options.grabClass)
				.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
				.removeData('owl.carousel');
		};
	
		/**
		 * Operators to calculate right-to-left and left-to-right.
		 * @protected
		 * @param {Number} [a] - The left side operand.
		 * @param {String} [o] - The operator.
		 * @param {Number} [b] - The right side operand.
		 */
		Owl.prototype.op = function(a, o, b) {
			var rtl = this.settings.rtl;
			switch (o) {
				case '<':
					return rtl ? a > b : a < b;
				case '>':
					return rtl ? a < b : a > b;
				case '>=':
					return rtl ? a <= b : a >= b;
				case '<=':
					return rtl ? a >= b : a <= b;
				default:
					break;
			}
		};
	
		/**
		 * Attaches to an internal event.
		 * @protected
		 * @param {HTMLElement} element - The event source.
		 * @param {String} event - The event name.
		 * @param {Function} listener - The event handler to attach.
		 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
		 */
		Owl.prototype.on = function(element, event, listener, capture) {
			if (element.addEventListener) {
				element.addEventListener(event, listener, capture);
			} else if (element.attachEvent) {
				element.attachEvent('on' + event, listener);
			}
		};
	
		/**
		 * Detaches from an internal event.
		 * @protected
		 * @param {HTMLElement} element - The event source.
		 * @param {String} event - The event name.
		 * @param {Function} listener - The attached event handler to detach.
		 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
		 */
		Owl.prototype.off = function(element, event, listener, capture) {
			if (element.removeEventListener) {
				element.removeEventListener(event, listener, capture);
			} else if (element.detachEvent) {
				element.detachEvent('on' + event, listener);
			}
		};
	
		/**
		 * Triggers a public event.
		 * @todo Remove `status`, `relatedTarget` should be used instead.
		 * @protected
		 * @param {String} name - The event name.
		 * @param {*} [data=null] - The event data.
		 * @param {String} [namespace=carousel] - The event namespace.
		 * @param {String} [state] - The state which is associated with the event.
		 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
		 * @returns {Event} - The event arguments.
		 */
		Owl.prototype.trigger = function(name, data, namespace, state, enter) {
			var status = {
				item: { count: this._items.length, index: this.current() }
			}, handler = $.camelCase(
				$.grep([ 'on', name, namespace ], function(v) { return v })
					.join('-').toLowerCase()
			), event = $.Event(
				[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
				$.extend({ relatedTarget: this }, status, data)
			);
	
			if (!this._supress[name]) {
				$.each(this._plugins, function(name, plugin) {
					if (plugin.onTrigger) {
						plugin.onTrigger(event);
					}
				});
	
				this.register({ type: Owl.Type.Event, name: name });
				this.$element.trigger(event);
	
				if (this.settings && typeof this.settings[handler] === 'function') {
					this.settings[handler].call(this, event);
				}
			}
	
			return event;
		};
	
		/**
		 * Enters a state.
		 * @param name - The state name.
		 */
		Owl.prototype.enter = function(name) {
			$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
				if (this._states.current[name] === undefined) {
					this._states.current[name] = 0;
				}
	
				this._states.current[name]++;
			}, this));
		};
	
		/**
		 * Leaves a state.
		 * @param name - The state name.
		 */
		Owl.prototype.leave = function(name) {
			$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
				this._states.current[name]--;
			}, this));
		};
	
		/**
		 * Registers an event or state.
		 * @public
		 * @param {Object} object - The event or state to register.
		 */
		Owl.prototype.register = function(object) {
			if (object.type === Owl.Type.Event) {
				if (!$.event.special[object.name]) {
					$.event.special[object.name] = {};
				}
	
				if (!$.event.special[object.name].owl) {
					var _default = $.event.special[object.name]._default;
					$.event.special[object.name]._default = function(e) {
						if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
							return _default.apply(this, arguments);
						}
						return e.namespace && e.namespace.indexOf('owl') > -1;
					};
					$.event.special[object.name].owl = true;
				}
			} else if (object.type === Owl.Type.State) {
				if (!this._states.tags[object.name]) {
					this._states.tags[object.name] = object.tags;
				} else {
					this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
				}
	
				this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
					return $.inArray(tag, this._states.tags[object.name]) === i;
				}, this));
			}
		};
	
		/**
		 * Suppresses events.
		 * @protected
		 * @param {Array.<String>} events - The events to suppress.
		 */
		Owl.prototype.suppress = function(events) {
			$.each(events, $.proxy(function(index, event) {
				this._supress[event] = true;
			}, this));
		};
	
		/**
		 * Releases suppressed events.
		 * @protected
		 * @param {Array.<String>} events - The events to release.
		 */
		Owl.prototype.release = function(events) {
			$.each(events, $.proxy(function(index, event) {
				delete this._supress[event];
			}, this));
		};
	
		/**
		 * Gets unified pointer coordinates from event.
		 * @todo #261
		 * @protected
		 * @param {Event} - The `mousedown` or `touchstart` event.
		 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
		 */
		Owl.prototype.pointer = function(event) {
			var result = { x: null, y: null };
	
			event = event.originalEvent || event || window.event;
	
			event = event.touches && event.touches.length ?
				event.touches[0] : event.changedTouches && event.changedTouches.length ?
					event.changedTouches[0] : event;
	
			if (event.pageX) {
				result.x = event.pageX;
				result.y = event.pageY;
			} else {
				result.x = event.clientX;
				result.y = event.clientY;
			}
	
			return result;
		};
	
		/**
		 * Determines if the input is a Number or something that can be coerced to a Number
		 * @protected
		 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
		 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
		 */
		Owl.prototype.isNumeric = function(number) {
			return !isNaN(parseFloat(number));
		};
	
		/**
		 * Gets the difference of two vectors.
		 * @todo #261
		 * @protected
		 * @param {Object} - The first vector.
		 * @param {Object} - The second vector.
		 * @returns {Object} - The difference.
		 */
		Owl.prototype.difference = function(first, second) {
			return {
				x: first.x - second.x,
				y: first.y - second.y
			};
		};
	
		/**
		 * The jQuery Plugin for the Owl Carousel
		 * @todo Navigation plugin `next` and `prev`
		 * @public
		 */
		$.fn.owlCarousel = function(option) {
			var args = Array.prototype.slice.call(arguments, 1);
	
			return this.each(function() {
				var $this = $(this),
					data = $this.data('owl.carousel');
	
				if (!data) {
					data = new Owl(this, typeof option == 'object' && option);
					$this.data('owl.carousel', data);
	
					$.each([
						'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
					], function(i, event) {
						data.register({ type: Owl.Type.Event, name: event });
						data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
							if (e.namespace && e.relatedTarget !== this) {
								this.suppress([ event ]);
								data[event].apply(this, [].slice.call(arguments, 1));
								this.release([ event ]);
							}
						}, data));
					});
				}
	
				if (typeof option == 'string' && option.charAt(0) !== '_') {
					data[option].apply(data, args);
				}
			});
		};
	
		/**
		 * The constructor for the jQuery Plugin
		 * @public
		 */
		$.fn.owlCarousel.Constructor = Owl;
	
	})(window.Zepto || window.jQuery, window, document);
	
	/**
	 * AutoRefresh Plugin
	 * @version 2.3.4
	 * @author Artus Kolanowski
	 * @author David Deutsch
	 * @license The MIT License (MIT)
	 */
	;(function($, window, document, undefined) {
	
		/**
		 * Creates the auto refresh plugin.
		 * @class The Auto Refresh Plugin
		 * @param {Owl} carousel - The Owl Carousel
		 */
		var AutoRefresh = function(carousel) {
			/**
			 * Reference to the core.
			 * @protected
			 * @type {Owl}
			 */
			this._core = carousel;
	
			/**
			 * Refresh interval.
			 * @protected
			 * @type {number}
			 */
			this._interval = null;
	
			/**
			 * Whether the element is currently visible or not.
			 * @protected
			 * @type {Boolean}
			 */
			this._visible = null;
	
			/**
			 * All event handlers.
			 * @protected
			 * @type {Object}
			 */
			this._handlers = {
				'initialized.owl.carousel': $.proxy(function(e) {
					if (e.namespace && this._core.settings.autoRefresh) {
						this.watch();
					}
				}, this)
			};
	
			// set default options
			this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);
	
			// register event handlers
			this._core.$element.on(this._handlers);
		};
	
		/**
		 * Default options.
		 * @public
		 */
		AutoRefresh.Defaults = {
			autoRefresh: true,
			autoRefreshInterval: 500
		};
	
		/**
		 * Watches the element.
		 */
		AutoRefresh.prototype.watch = function() {
			if (this._interval) {
				return;
			}
	
			this._visible = this._core.isVisible();
			this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
		};
	
		/**
		 * Refreshes the element.
		 */
		AutoRefresh.prototype.refresh = function() {
			if (this._core.isVisible() === this._visible) {
				return;
			}
	
			this._visible = !this._visible;
	
			this._core.$element.toggleClass('owl-hidden', !this._visible);
	
			this._visible && (this._core.invalidate('width') && this._core.refresh());
		};
	
		/**
		 * Destroys the plugin.
		 */
		AutoRefresh.prototype.destroy = function() {
			var handler, property;
	
			window.clearInterval(this._interval);
	
			for (handler in this._handlers) {
				this._core.$element.off(handler, this._handlers[handler]);
			}
			for (property in Object.getOwnPropertyNames(this)) {
				typeof this[property] != 'function' && (this[property] = null);
			}
		};
	
		$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;
	
	})(window.Zepto || window.jQuery, window, document);
	
	/**
	 * Lazy Plugin
	 * @version 2.3.4
	 * @author Bartosz Wojciechowski
	 * @author David Deutsch
	 * @license The MIT License (MIT)
	 */
	;(function($, window, document, undefined) {
	
		/**
		 * Creates the lazy plugin.
		 * @class The Lazy Plugin
		 * @param {Owl} carousel - The Owl Carousel
		 */
		var Lazy = function(carousel) {
	
			/**
			 * Reference to the core.
			 * @protected
			 * @type {Owl}
			 */
			this._core = carousel;
	
			/**
			 * Already loaded items.
			 * @protected
			 * @type {Array.<jQuery>}
			 */
			this._loaded = [];
	
			/**
			 * Event handlers.
			 * @protected
			 * @type {Object}
			 */
			this._handlers = {
				'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
					if (!e.namespace) {
						return;
					}
	
					if (!this._core.settings || !this._core.settings.lazyLoad) {
						return;
					}
	
					if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
						var settings = this._core.settings,
							n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
							i = ((settings.center && n * -1) || 0),
							position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
							clones = this._core.clones().length,
							load = $.proxy(function(i, v) { this.load(v) }, this);
						//TODO: Need documentation for this new option
						if (settings.lazyLoadEager > 0) {
							n += settings.lazyLoadEager;
							// If the carousel is looping also preload images that are to the "left"
							if (settings.loop) {
	              position -= settings.lazyLoadEager;
	              n++;
	            }
						}
	
						while (i++ < n) {
							this.load(clones / 2 + this._core.relative(position));
							clones && $.each(this._core.clones(this._core.relative(position)), load);
							position++;
						}
					}
				}, this)
			};
	
			// set the default options
			this._core.options = $.extend({}, Lazy.Defaults, this._core.options);
	
			// register event handler
			this._core.$element.on(this._handlers);
		};
	
		/**
		 * Default options.
		 * @public
		 */
		Lazy.Defaults = {
			lazyLoad: false,
			lazyLoadEager: 0
		};
	
		/**
		 * Loads all resources of an item at the specified position.
		 * @param {Number} position - The absolute position of the item.
		 * @protected
		 */
		Lazy.prototype.load = function(position) {
			var $item = this._core.$stage.children().eq(position),
				$elements = $item && $item.find('.owl-lazy');
	
			if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
				return;
			}
	
			$elements.each($.proxy(function(index, element) {
				var $element = $(element), image,
	                url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src') || $element.attr('data-srcset');
	
				this._core.trigger('load', { element: $element, url: url }, 'lazy');
	
				if ($element.is('img')) {
					$element.one('load.owl.lazy', $.proxy(function() {
						$element.css('opacity', 1);
						this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
					}, this)).attr('src', url);
	            } else if ($element.is('source')) {
	                $element.one('load.owl.lazy', $.proxy(function() {
	                    this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
	                }, this)).attr('srcset', url);
				} else {
					image = new Image();
					image.onload = $.proxy(function() {
						$element.css({
							'background-image': 'url("' + url + '")',
							'opacity': '1'
						});
						this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
					}, this);
					image.src = url;
				}
			}, this));
	
			this._loaded.push($item.get(0));
		};
	
		/**
		 * Destroys the plugin.
		 * @public
		 */
		Lazy.prototype.destroy = function() {
			var handler, property;
	
			for (handler in this.handlers) {
				this._core.$element.off(handler, this.handlers[handler]);
			}
			for (property in Object.getOwnPropertyNames(this)) {
				typeof this[property] != 'function' && (this[property] = null);
			}
		};
	
		$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
	
	})(window.Zepto || window.jQuery, window, document);
	
	/**
	 * AutoHeight Plugin
	 * @version 2.3.4
	 * @author Bartosz Wojciechowski
	 * @author David Deutsch
	 * @license The MIT License (MIT)
	 */
	;(function($, window, document, undefined) {
	
		/**
		 * Creates the auto height plugin.
		 * @class The Auto Height Plugin
		 * @param {Owl} carousel - The Owl Carousel
		 */
		var AutoHeight = function(carousel) {
			/**
			 * Reference to the core.
			 * @protected
			 * @type {Owl}
			 */
			this._core = carousel;
	
			this._previousHeight = null;
	
			/**
			 * All event handlers.
			 * @protected
			 * @type {Object}
			 */
			this._handlers = {
				'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
					if (e.namespace && this._core.settings.autoHeight) {
						this.update();
					}
				}, this),
				'changed.owl.carousel': $.proxy(function(e) {
					if (e.namespace && this._core.settings.autoHeight && e.property.name === 'position'){
						this.update();
					}
				}, this),
				'loaded.owl.lazy': $.proxy(function(e) {
					if (e.namespace && this._core.settings.autoHeight
						&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
						this.update();
					}
				}, this)
			};
	
			// set default options
			this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);
	
			// register event handlers
			this._core.$element.on(this._handlers);
			this._intervalId = null;
			var refThis = this;
	
			// These changes have been taken from a PR by gavrochelegnou proposed in #1575
			// and have been made compatible with the latest jQuery version
			$(window).on('load', function() {
				if (refThis._core.settings.autoHeight) {
					refThis.update();
				}
			});
	
			// Autoresize the height of the carousel when window is resized
			// When carousel has images, the height is dependent on the width
			// and should also change on resize
			$(window).resize(function() {
				if (refThis._core.settings.autoHeight) {
					if (refThis._intervalId != null) {
						clearTimeout(refThis._intervalId);
					}
	
					refThis._intervalId = setTimeout(function() {
						refThis.update();
					}, 250);
				}
			});
	
		};
	
		/**
		 * Default options.
		 * @public
		 */
		AutoHeight.Defaults = {
			autoHeight: false,
			autoHeightClass: 'owl-height'
		};
	
		/**
		 * Updates the view.
		 */
		AutoHeight.prototype.update = function() {
			var start = this._core._current,
				end = start + this._core.settings.items,
				lazyLoadEnabled = this._core.settings.lazyLoad,
				visible = this._core.$stage.children().toArray().slice(start, end),
				heights = [],
				maxheight = 0;
	
			$.each(visible, function(index, item) {
				heights.push($(item).height());
			});
	
			maxheight = Math.max.apply(null, heights);
	
			if (maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
				maxheight = this._previousHeight;
			}
	
			this._previousHeight = maxheight;
	
			this._core.$stage.parent()
				.height(maxheight)
				.addClass(this._core.settings.autoHeightClass);
		};
	
		AutoHeight.prototype.destroy = function() {
			var handler, property;
	
			for (handler in this._handlers) {
				this._core.$element.off(handler, this._handlers[handler]);
			}
			for (property in Object.getOwnPropertyNames(this)) {
				typeof this[property] !== 'function' && (this[property] = null);
			}
		};
	
		$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
	
	})(window.Zepto || window.jQuery, window, document);
	
	/**
	 * Video Plugin
	 * @version 2.3.4
	 * @author Bartosz Wojciechowski
	 * @author David Deutsch
	 * @license The MIT License (MIT)
	 */
	;(function($, window, document, undefined) {
	
		/**
		 * Creates the video plugin.
		 * @class The Video Plugin
		 * @param {Owl} carousel - The Owl Carousel
		 */
		var Video = function(carousel) {
			/**
			 * Reference to the core.
			 * @protected
			 * @type {Owl}
			 */
			this._core = carousel;
	
			/**
			 * Cache all video URLs.
			 * @protected
			 * @type {Object}
			 */
			this._videos = {};
	
			/**
			 * Current playing item.
			 * @protected
			 * @type {jQuery}
			 */
			this._playing = null;
	
			/**
			 * All event handlers.
			 * @todo The cloned content removale is too late
			 * @protected
			 * @type {Object}
			 */
			this._handlers = {
				'initialized.owl.carousel': $.proxy(function(e) {
					if (e.namespace) {
						this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
					}
				}, this),
				'resize.owl.carousel': $.proxy(function(e) {
					if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
						e.preventDefault();
					}
				}, this),
				'refreshed.owl.carousel': $.proxy(function(e) {
					if (e.namespace && this._core.is('resizing')) {
						this._core.$stage.find('.cloned .owl-video-frame').remove();
					}
				}, this),
				'changed.owl.carousel': $.proxy(function(e) {
					if (e.namespace && e.property.name === 'position' && this._playing) {
						this.stop();
					}
				}, this),
				'prepared.owl.carousel': $.proxy(function(e) {
					if (!e.namespace) {
						return;
					}
	
					var $element = $(e.content).find('.owl-video');
	
					if ($element.length) {
						$element.css('display', 'none');
						this.fetch($element, $(e.content));
					}
				}, this)
			};
	
			// set default options
			this._core.options = $.extend({}, Video.Defaults, this._core.options);
	
			// register event handlers
			this._core.$element.on(this._handlers);
	
			this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
				this.play(e);
			}, this));
		};
	
		/**
		 * Default options.
		 * @public
		 */
		Video.Defaults = {
			video: false,
			videoHeight: false,
			videoWidth: false
		};
	
		/**
		 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
		 * @protected
		 * @param {jQuery} target - The target containing the video data.
		 * @param {jQuery} item - The item containing the video.
		 */
		Video.prototype.fetch = function(target, item) {
				var type = (function() {
						if (target.attr('data-vimeo-id')) {
							return 'vimeo';
						} else if (target.attr('data-vzaar-id')) {
							return 'vzaar'
						} else {
							return 'youtube';
						}
					})(),
					id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
					width = target.attr('data-width') || this._core.settings.videoWidth,
					height = target.attr('data-height') || this._core.settings.videoHeight,
					url = target.attr('href');
	
			if (url) {
	
				/*
						Parses the id's out of the following urls (and probably more):
						https://www.youtube.com/watch?v=:id
						https://youtu.be/:id
						https://vimeo.com/:id
						https://vimeo.com/channels/:channel/:id
						https://vimeo.com/groups/:group/videos/:id
						https://app.vzaar.com/videos/:id
	
						Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
				*/
	
				id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
	
				if (id[3].indexOf('youtu') > -1) {
					type = 'youtube';
				} else if (id[3].indexOf('vimeo') > -1) {
					type = 'vimeo';
				} else if (id[3].indexOf('vzaar') > -1) {
					type = 'vzaar';
				} else {
					throw new Error('Video URL not supported.');
				}
				id = id[6];
			} else {
				throw new Error('Missing video URL.');
			}
	
			this._videos[url] = {
				type: type,
				id: id,
				width: width,
				height: height
			};
	
			item.attr('data-video', url);
	
			this.thumbnail(target, this._videos[url]);
		};
	
		/**
		 * Creates video thumbnail.
		 * @protected
		 * @param {jQuery} target - The target containing the video data.
		 * @param {Object} info - The video info object.
		 * @see `fetch`
		 */
		Video.prototype.thumbnail = function(target, video) {
			var tnLink,
				icon,
				path,
				dimensions = video.width && video.height ? 'width:' + video.width + 'px;height:' + video.height + 'px;' : '',
				customTn = target.find('img'),
				srcType = 'src',
				lazyClass = '',
				settings = this._core.settings,
				create = function(path) {
					icon = '<div class="owl-video-play-icon"></div>';
	
					if (settings.lazyLoad) {
						tnLink = $('<div/>',{
							"class": 'owl-video-tn ' + lazyClass,
							"srcType": path
						});
					} else {
						tnLink = $( '<div/>', {
							"class": "owl-video-tn",
							"style": 'opacity:1;background-image:url(' + path + ')'
						});
					}
					target.after(tnLink);
					target.after(icon);
				};
	
			// wrap video content into owl-video-wrapper div
			target.wrap( $( '<div/>', {
				"class": "owl-video-wrapper",
				"style": dimensions
			}));
	
			if (this._core.settings.lazyLoad) {
				srcType = 'data-src';
				lazyClass = 'owl-lazy';
			}
	
			// custom thumbnail
			if (customTn.length) {
				create(customTn.attr(srcType));
				customTn.remove();
				return false;
			}
	
			if (video.type === 'youtube') {
				path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
				create(path);
			} else if (video.type === 'vimeo') {
				$.ajax({
					type: 'GET',
					url: '//vimeo.com/api/v2/video/' + video.id + '.json',
					jsonp: 'callback',
					dataType: 'jsonp',
					success: function(data) {
						path = data[0].thumbnail_large;
						create(path);
					}
				});
			} else if (video.type === 'vzaar') {
				$.ajax({
					type: 'GET',
					url: '//vzaar.com/api/videos/' + video.id + '.json',
					jsonp: 'callback',
					dataType: 'jsonp',
					success: function(data) {
						path = data.framegrab_url;
						create(path);
					}
				});
			}
		};
	
		/**
		 * Stops the current video.
		 * @public
		 */
		Video.prototype.stop = function() {
			this._core.trigger('stop', null, 'video');
			this._playing.find('.owl-video-frame').remove();
			this._playing.removeClass('owl-video-playing');
			this._playing = null;
			this._core.leave('playing');
			this._core.trigger('stopped', null, 'video');
		};
	
		/**
		 * Starts the current video.
		 * @public
		 * @param {Event} event - The event arguments.
		 */
		Video.prototype.play = function(event) {
			var target = $(event.target),
				item = target.closest('.' + this._core.settings.itemClass),
				video = this._videos[item.attr('data-video')],
				width = video.width || '100%',
				height = video.height || this._core.$stage.height(),
				html,
				iframe;
	
			if (this._playing) {
				return;
			}
	
			this._core.enter('playing');
			this._core.trigger('play', null, 'video');
	
			item = this._core.items(this._core.relative(item.index()));
	
			this._core.reset(item.index());
	
			html = $( '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>' );
			html.attr( 'height', height );
			html.attr( 'width', width );
			if (video.type === 'youtube') {
				html.attr( 'src', '//www.youtube.com/embed/' + video.id + '?autoplay=1&rel=0&v=' + video.id );
			} else if (video.type === 'vimeo') {
				html.attr( 'src', '//player.vimeo.com/video/' + video.id + '?autoplay=1' );
			} else if (video.type === 'vzaar') {
				html.attr( 'src', '//view.vzaar.com/' + video.id + '/player?autoplay=true' );
			}
	
			iframe = $(html).wrap( '<div class="owl-video-frame" />' ).insertAfter(item.find('.owl-video'));
	
			this._playing = item.addClass('owl-video-playing');
		};
	
		/**
		 * Checks whether an video is currently in full screen mode or not.
		 * @todo Bad style because looks like a readonly method but changes members.
		 * @protected
		 * @returns {Boolean}
		 */
		Video.prototype.isInFullScreen = function() {
			var element = document.fullscreenElement || document.mozFullScreenElement ||
					document.webkitFullscreenElement;
	
			return element && $(element).parent().hasClass('owl-video-frame');
		};
	
		/**
		 * Destroys the plugin.
		 */
		Video.prototype.destroy = function() {
			var handler, property;
	
			this._core.$element.off('click.owl.video');
	
			for (handler in this._handlers) {
				this._core.$element.off(handler, this._handlers[handler]);
			}
			for (property in Object.getOwnPropertyNames(this)) {
				typeof this[property] != 'function' && (this[property] = null);
			}
		};
	
		$.fn.owlCarousel.Constructor.Plugins.Video = Video;
	
	})(window.Zepto || window.jQuery, window, document);
	
	/**
	 * Animate Plugin
	 * @version 2.3.4
	 * @author Bartosz Wojciechowski
	 * @author David Deutsch
	 * @license The MIT License (MIT)
	 */
	;(function($, window, document, undefined) {
	
		/**
		 * Creates the animate plugin.
		 * @class The Navigation Plugin
		 * @param {Owl} scope - The Owl Carousel
		 */
		var Animate = function(scope) {
			this.core = scope;
			this.core.options = $.extend({}, Animate.Defaults, this.core.options);
			this.swapping = true;
			this.previous = undefined;
			this.next = undefined;
	
			this.handlers = {
				'change.owl.carousel': $.proxy(function(e) {
					if (e.namespace && e.property.name == 'position') {
						this.previous = this.core.current();
						this.next = e.property.value;
					}
				}, this),
				'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
					if (e.namespace) {
						this.swapping = e.type == 'translated';
					}
				}, this),
				'translate.owl.carousel': $.proxy(function(e) {
					if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
						this.swap();
					}
				}, this)
			};
	
			this.core.$element.on(this.handlers);
		};
	
		/**
		 * Default options.
		 * @public
		 */
		Animate.Defaults = {
			animateOut: false,
			animateIn: false
		};
	
		/**
		 * Toggles the animation classes whenever an translations starts.
		 * @protected
		 * @returns {Boolean|undefined}
		 */
		Animate.prototype.swap = function() {
	
			if (this.core.settings.items !== 1) {
				return;
			}
	
			if (!$.support.animation || !$.support.transition) {
				return;
			}
	
			this.core.speed(0);
	
			var left,
				clear = $.proxy(this.clear, this),
				previous = this.core.$stage.children().eq(this.previous),
				next = this.core.$stage.children().eq(this.next),
				incoming = this.core.settings.animateIn,
				outgoing = this.core.settings.animateOut;
	
			if (this.core.current() === this.previous) {
				return;
			}
	
			if (outgoing) {
				left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
				previous.one($.support.animation.end, clear)
					.css( { 'left': left + 'px' } )
					.addClass('animated owl-animated-out')
					.addClass(outgoing);
			}
	
			if (incoming) {
				next.one($.support.animation.end, clear)
					.addClass('animated owl-animated-in')
					.addClass(incoming);
			}
		};
	
		Animate.prototype.clear = function(e) {
			$(e.target).css( { 'left': '' } )
				.removeClass('animated owl-animated-out owl-animated-in')
				.removeClass(this.core.settings.animateIn)
				.removeClass(this.core.settings.animateOut);
			this.core.onTransitionEnd();
		};
	
		/**
		 * Destroys the plugin.
		 * @public
		 */
		Animate.prototype.destroy = function() {
			var handler, property;
	
			for (handler in this.handlers) {
				this.core.$element.off(handler, this.handlers[handler]);
			}
			for (property in Object.getOwnPropertyNames(this)) {
				typeof this[property] != 'function' && (this[property] = null);
			}
		};
	
		$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
	
	})(window.Zepto || window.jQuery, window, document);
	
	/**
	 * Autoplay Plugin
	 * @version 2.3.4
	 * @author Bartosz Wojciechowski
	 * @author Artus Kolanowski
	 * @author David Deutsch
	 * @author Tom De Caluwé
	 * @license The MIT License (MIT)
	 */
	;(function($, window, document, undefined) {
	
		/**
		 * Creates the autoplay plugin.
		 * @class The Autoplay Plugin
		 * @param {Owl} scope - The Owl Carousel
		 */
		var Autoplay = function(carousel) {
			/**
			 * Reference to the core.
			 * @protected
			 * @type {Owl}
			 */
			this._core = carousel;
	
			/**
			 * The autoplay timeout id.
			 * @type {Number}
			 */
			this._call = null;
	
			/**
			 * Depending on the state of the plugin, this variable contains either
			 * the start time of the timer or the current timer value if it's
			 * paused. Since we start in a paused state we initialize the timer
			 * value.
			 * @type {Number}
			 */
			this._time = 0;
	
			/**
			 * Stores the timeout currently used.
			 * @type {Number}
			 */
			this._timeout = 0;
	
			/**
			 * Indicates whenever the autoplay is paused.
			 * @type {Boolean}
			 */
			this._paused = true;
	
			/**
			 * All event handlers.
			 * @protected
			 * @type {Object}
			 */
			this._handlers = {
				'changed.owl.carousel': $.proxy(function(e) {
					if (e.namespace && e.property.name === 'settings') {
						if (this._core.settings.autoplay) {
							this.play();
						} else {
							this.stop();
						}
					} else if (e.namespace && e.property.name === 'position' && this._paused) {
						// Reset the timer. This code is triggered when the position
						// of the carousel was changed through user interaction.
						this._time = 0;
					}
				}, this),
				'initialized.owl.carousel': $.proxy(function(e) {
					if (e.namespace && this._core.settings.autoplay) {
						this.play();
					}
				}, this),
				'play.owl.autoplay': $.proxy(function(e, t, s) {
					if (e.namespace) {
						this.play(t, s);
					}
				}, this),
				'stop.owl.autoplay': $.proxy(function(e) {
					if (e.namespace) {
						this.stop();
					}
				}, this),
				'mouseover.owl.autoplay': $.proxy(function() {
					if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
						this.pause();
					}
				}, this),
				'mouseleave.owl.autoplay': $.proxy(function() {
					if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
						this.play();
					}
				}, this),
				'touchstart.owl.core': $.proxy(function() {
					if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
						this.pause();
					}
				}, this),
				'touchend.owl.core': $.proxy(function() {
					if (this._core.settings.autoplayHoverPause) {
						this.play();
					}
				}, this)
			};
	
			// register event handlers
			this._core.$element.on(this._handlers);
	
			// set default options
			this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
		};
	
		/**
		 * Default options.
		 * @public
		 */
		Autoplay.Defaults = {
			autoplay: false,
			autoplayTimeout: 5000,
			autoplayHoverPause: false,
			autoplaySpeed: false
		};
	
		/**
		 * Transition to the next slide and set a timeout for the next transition.
		 * @private
		 * @param {Number} [speed] - The animation speed for the animations.
		 */
		Autoplay.prototype._next = function(speed) {
			this._call = window.setTimeout(
				$.proxy(this._next, this, speed),
				this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
			);
	
			if (this._core.is('interacting') || document.hidden) {
				return;
			}
			this._core.next(speed || this._core.settings.autoplaySpeed);
		}
	
		/**
		 * Reads the current timer value when the timer is playing.
		 * @public
		 */
		Autoplay.prototype.read = function() {
			return new Date().getTime() - this._time;
		};
	
		/**
		 * Starts the autoplay.
		 * @public
		 * @param {Number} [timeout] - The interval before the next animation starts.
		 * @param {Number} [speed] - The animation speed for the animations.
		 */
		Autoplay.prototype.play = function(timeout, speed) {
			var elapsed;
	
			if (!this._core.is('rotating')) {
				this._core.enter('rotating');
			}
	
			timeout = timeout || this._core.settings.autoplayTimeout;
	
			// Calculate the elapsed time since the last transition. If the carousel
			// wasn't playing this calculation will yield zero.
			elapsed = Math.min(this._time % (this._timeout || timeout), timeout);
	
			if (this._paused) {
				// Start the clock.
				this._time = this.read();
				this._paused = false;
			} else {
				// Clear the active timeout to allow replacement.
				window.clearTimeout(this._call);
			}
	
			// Adjust the origin of the timer to match the new timeout value.
			this._time += this.read() % timeout - elapsed;
	
			this._timeout = timeout;
			this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
		};
	
		/**
		 * Stops the autoplay.
		 * @public
		 */
		Autoplay.prototype.stop = function() {
			if (this._core.is('rotating')) {
				// Reset the clock.
				this._time = 0;
				this._paused = true;
	
				window.clearTimeout(this._call);
				this._core.leave('rotating');
			}
		};
	
		/**
		 * Pauses the autoplay.
		 * @public
		 */
		Autoplay.prototype.pause = function() {
			if (this._core.is('rotating') && !this._paused) {
				// Pause the clock.
				this._time = this.read();
				this._paused = true;
	
				window.clearTimeout(this._call);
			}
		};
	
		/**
		 * Destroys the plugin.
		 */
		Autoplay.prototype.destroy = function() {
			var handler, property;
	
			this.stop();
	
			for (handler in this._handlers) {
				this._core.$element.off(handler, this._handlers[handler]);
			}
			for (property in Object.getOwnPropertyNames(this)) {
				typeof this[property] != 'function' && (this[property] = null);
			}
		};
	
		$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
	
	})(window.Zepto || window.jQuery, window, document);
	
	/**
	 * Navigation Plugin
	 * @version 2.3.4
	 * @author Artus Kolanowski
	 * @author David Deutsch
	 * @license The MIT License (MIT)
	 */
	;(function($, window, document, undefined) {
		'use strict';
	
		/**
		 * Creates the navigation plugin.
		 * @class The Navigation Plugin
		 * @param {Owl} carousel - The Owl Carousel.
		 */
		var Navigation = function(carousel) {
			/**
			 * Reference to the core.
			 * @protected
			 * @type {Owl}
			 */
			this._core = carousel;
	
			/**
			 * Indicates whether the plugin is initialized or not.
			 * @protected
			 * @type {Boolean}
			 */
			this._initialized = false;
	
			/**
			 * The current paging indexes.
			 * @protected
			 * @type {Array}
			 */
			this._pages = [];
	
			/**
			 * All DOM elements of the user interface.
			 * @protected
			 * @type {Object}
			 */
			this._controls = {};
	
			/**
			 * Markup for an indicator.
			 * @protected
			 * @type {Array.<String>}
			 */
			this._templates = [];
	
			/**
			 * The carousel element.
			 * @type {jQuery}
			 */
			this.$element = this._core.$element;
	
			/**
			 * Overridden methods of the carousel.
			 * @protected
			 * @type {Object}
			 */
			this._overrides = {
				next: this._core.next,
				prev: this._core.prev,
				to: this._core.to
			};
	
			/**
			 * All event handlers.
			 * @protected
			 * @type {Object}
			 */
			this._handlers = {
				'prepared.owl.carousel': $.proxy(function(e) {
					if (e.namespace && this._core.settings.dotsData) {
						this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
							$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
					}
				}, this),
				'added.owl.carousel': $.proxy(function(e) {
					if (e.namespace && this._core.settings.dotsData) {
						this._templates.splice(e.position, 0, this._templates.pop());
					}
				}, this),
				'remove.owl.carousel': $.proxy(function(e) {
					if (e.namespace && this._core.settings.dotsData) {
						this._templates.splice(e.position, 1);
					}
				}, this),
				'changed.owl.carousel': $.proxy(function(e) {
					if (e.namespace && e.property.name == 'position') {
						this.draw();
					}
				}, this),
				'initialized.owl.carousel': $.proxy(function(e) {
					if (e.namespace && !this._initialized) {
						this._core.trigger('initialize', null, 'navigation');
						this.initialize();
						this.update();
						this.draw();
						this._initialized = true;
						this._core.trigger('initialized', null, 'navigation');
					}
				}, this),
				'refreshed.owl.carousel': $.proxy(function(e) {
					if (e.namespace && this._initialized) {
						this._core.trigger('refresh', null, 'navigation');
						this.update();
						this.draw();
						this._core.trigger('refreshed', null, 'navigation');
					}
				}, this)
			};
	
			// set default options
			this._core.options = $.extend({}, Navigation.Defaults, this._core.options);
	
			// register event handlers
			this.$element.on(this._handlers);
		};
	
		/**
		 * Default options.
		 * @public
		 * @todo Rename `slideBy` to `navBy`
		 */
		Navigation.Defaults = {
			nav: false,
			navText: [
				'<span aria-label="' + 'Previous' + '">&#x2039;</span>',
				'<span aria-label="' + 'Next' + '">&#x203a;</span>'
			],
			navSpeed: false,
			navElement: 'button type="button" role="presentation"',
			navContainer: false,
			navContainerClass: 'owl-nav',
			navClass: [
				'owl-prev',
				'owl-next'
			],
			slideBy: 1,
			dotClass: 'owl-dot',
			dotsClass: 'owl-dots',
			dots: true,
			dotsEach: false,
			dotsData: false,
			dotsSpeed: false,
			dotsContainer: false
		};
	
		/**
		 * Initializes the layout of the plugin and extends the carousel.
		 * @protected
		 */
		Navigation.prototype.initialize = function() {
			var override,
				settings = this._core.settings;
	
			// create DOM structure for relative navigation
			this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
				: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');
	
			this._controls.$previous = $('<' + settings.navElement + '>')
				.addClass(settings.navClass[0])
				.html(settings.navText[0])
				.prependTo(this._controls.$relative)
				.on('click', $.proxy(function(e) {
					this.prev(settings.navSpeed);
				}, this));
			this._controls.$next = $('<' + settings.navElement + '>')
				.addClass(settings.navClass[1])
				.html(settings.navText[1])
				.appendTo(this._controls.$relative)
				.on('click', $.proxy(function(e) {
					this.next(settings.navSpeed);
				}, this));
	
			// create DOM structure for absolute navigation
			if (!settings.dotsData) {
				this._templates = [ $('<button role="button">')
					.addClass(settings.dotClass)
					.append($('<span>'))
					.prop('outerHTML') ];
			}
	
			this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
				: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');
	
			this._controls.$absolute.on('click', 'button', $.proxy(function(e) {
				var index = $(e.target).parent().is(this._controls.$absolute)
					? $(e.target).index() : $(e.target).parent().index();
	
				e.preventDefault();
	
				this.to(index, settings.dotsSpeed);
			}, this));
	
			/*$el.on('focusin', function() {
				$(document).off(".carousel");
	
				$(document).on('keydown.carousel', function(e) {
					if(e.keyCode == 37) {
						$el.trigger('prev.owl')
					}
					if(e.keyCode == 39) {
						$el.trigger('next.owl')
					}
				});
			});*/
	
			// override public methods of the carousel
			for (override in this._overrides) {
				this._core[override] = $.proxy(this[override], this);
			}
		};
	
		/**
		 * Destroys the plugin.
		 * @protected
		 */
		Navigation.prototype.destroy = function() {
			var handler, control, property, override, settings;
			settings = this._core.settings;
	
			for (handler in this._handlers) {
				this.$element.off(handler, this._handlers[handler]);
			}
			for (control in this._controls) {
				if (control === '$relative' && settings.navContainer) {
					this._controls[control].html('');
				} else {
					this._controls[control].remove();
				}
			}
			for (override in this.overides) {
				this._core[override] = this._overrides[override];
			}
			for (property in Object.getOwnPropertyNames(this)) {
				typeof this[property] != 'function' && (this[property] = null);
			}
		};
	
		/**
		 * Updates the internal state.
		 * @protected
		 */
		Navigation.prototype.update = function() {
			var i, j, k,
				lower = this._core.clones().length / 2,
				upper = lower + this._core.items().length,
				maximum = this._core.maximum(true),
				settings = this._core.settings,
				size = settings.center || settings.autoWidth || settings.dotsData
					? 1 : settings.dotsEach || settings.items;
	
			if (settings.slideBy !== 'page') {
				settings.slideBy = Math.min(settings.slideBy, settings.items);
			}
	
			if (settings.dots || settings.slideBy == 'page') {
				this._pages = [];
	
				for (i = lower, j = 0, k = 0; i < upper; i++) {
					if (j >= size || j === 0) {
						this._pages.push({
							start: Math.min(maximum, i - lower),
							end: i - lower + size - 1
						});
						if (Math.min(maximum, i - lower) === maximum) {
							break;
						}
						j = 0, ++k;
					}
					j += this._core.mergers(this._core.relative(i));
				}
			}
		};
	
		/**
		 * Draws the user interface.
		 * @todo The option `dotsData` wont work.
		 * @protected
		 */
		Navigation.prototype.draw = function() {
			var difference,
				settings = this._core.settings,
				disabled = this._core.items().length <= settings.items,
				index = this._core.relative(this._core.current()),
				loop = settings.loop || settings.rewind;
	
			this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);
	
			if (settings.nav) {
				this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
				this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
			}
	
			this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);
	
			if (settings.dots) {
				difference = this._pages.length - this._controls.$absolute.children().length;
	
				if (settings.dotsData && difference !== 0) {
					this._controls.$absolute.html(this._templates.join(''));
				} else if (difference > 0) {
					this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
				} else if (difference < 0) {
					this._controls.$absolute.children().slice(difference).remove();
				}
	
				this._controls.$absolute.find('.active').removeClass('active');
				this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
			}
		};
	
		/**
		 * Extends event data.
		 * @protected
		 * @param {Event} event - The event object which gets thrown.
		 */
		Navigation.prototype.onTrigger = function(event) {
			var settings = this._core.settings;
	
			event.page = {
				index: $.inArray(this.current(), this._pages),
				count: this._pages.length,
				size: settings && (settings.center || settings.autoWidth || settings.dotsData
					? 1 : settings.dotsEach || settings.items)
			};
		};
	
		/**
		 * Gets the current page position of the carousel.
		 * @protected
		 * @returns {Number}
		 */
		Navigation.prototype.current = function() {
			var current = this._core.relative(this._core.current());
			return $.grep(this._pages, $.proxy(function(page, index) {
				return page.start <= current && page.end >= current;
			}, this)).pop();
		};
	
		/**
		 * Gets the current succesor/predecessor position.
		 * @protected
		 * @returns {Number}
		 */
		Navigation.prototype.getPosition = function(successor) {
			var position, length,
				settings = this._core.settings;
	
			if (settings.slideBy == 'page') {
				position = $.inArray(this.current(), this._pages);
				length = this._pages.length;
				successor ? ++position : --position;
				position = this._pages[((position % length) + length) % length].start;
			} else {
				position = this._core.relative(this._core.current());
				length = this._core.items().length;
				successor ? position += settings.slideBy : position -= settings.slideBy;
			}
	
			return position;
		};
	
		/**
		 * Slides to the next item or page.
		 * @public
		 * @param {Number} [speed=false] - The time in milliseconds for the transition.
		 */
		Navigation.prototype.next = function(speed) {
			$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
		};
	
		/**
		 * Slides to the previous item or page.
		 * @public
		 * @param {Number} [speed=false] - The time in milliseconds for the transition.
		 */
		Navigation.prototype.prev = function(speed) {
			$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
		};
	
		/**
		 * Slides to the specified item or page.
		 * @public
		 * @param {Number} position - The position of the item or page.
		 * @param {Number} [speed] - The time in milliseconds for the transition.
		 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
		 */
		Navigation.prototype.to = function(position, speed, standard) {
			var length;
	
			if (!standard && this._pages.length) {
				length = this._pages.length;
				$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
			} else {
				$.proxy(this._overrides.to, this._core)(position, speed);
			}
		};
	
		$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
	
	})(window.Zepto || window.jQuery, window, document);
	
	/**
	 * Hash Plugin
	 * @version 2.3.4
	 * @author Artus Kolanowski
	 * @author David Deutsch
	 * @license The MIT License (MIT)
	 */
	;(function($, window, document, undefined) {
		'use strict';
	
		/**
		 * Creates the hash plugin.
		 * @class The Hash Plugin
		 * @param {Owl} carousel - The Owl Carousel
		 */
		var Hash = function(carousel) {
			/**
			 * Reference to the core.
			 * @protected
			 * @type {Owl}
			 */
			this._core = carousel;
	
			/**
			 * Hash index for the items.
			 * @protected
			 * @type {Object}
			 */
			this._hashes = {};
	
			/**
			 * The carousel element.
			 * @type {jQuery}
			 */
			this.$element = this._core.$element;
	
			/**
			 * All event handlers.
			 * @protected
			 * @type {Object}
			 */
			this._handlers = {
				'initialized.owl.carousel': $.proxy(function(e) {
					if (e.namespace && this._core.settings.startPosition === 'URLHash') {
						$(window).trigger('hashchange.owl.navigation');
					}
				}, this),
				'prepared.owl.carousel': $.proxy(function(e) {
					if (e.namespace) {
						var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');
	
						if (!hash) {
							return;
						}
	
						this._hashes[hash] = e.content;
					}
				}, this),
				'changed.owl.carousel': $.proxy(function(e) {
					if (e.namespace && e.property.name === 'position') {
						var current = this._core.items(this._core.relative(this._core.current())),
							hash = $.map(this._hashes, function(item, hash) {
								return item === current ? hash : null;
							}).join();
	
						if (!hash || window.location.hash.slice(1) === hash) {
							return;
						}
	
						window.location.hash = hash;
					}
				}, this)
			};
	
			// set default options
			this._core.options = $.extend({}, Hash.Defaults, this._core.options);
	
			// register the event handlers
			this.$element.on(this._handlers);
	
			// register event listener for hash navigation
			$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
				var hash = window.location.hash.substring(1),
					items = this._core.$stage.children(),
					position = this._hashes[hash] && items.index(this._hashes[hash]);
	
				if (position === undefined || position === this._core.current()) {
					return;
				}
	
				this._core.to(this._core.relative(position), false, true);
			}, this));
		};
	
		/**
		 * Default options.
		 * @public
		 */
		Hash.Defaults = {
			URLhashListener: false
		};
	
		/**
		 * Destroys the plugin.
		 * @public
		 */
		Hash.prototype.destroy = function() {
			var handler, property;
	
			$(window).off('hashchange.owl.navigation');
	
			for (handler in this._handlers) {
				this._core.$element.off(handler, this._handlers[handler]);
			}
			for (property in Object.getOwnPropertyNames(this)) {
				typeof this[property] != 'function' && (this[property] = null);
			}
		};
	
		$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
	
	})(window.Zepto || window.jQuery, window, document);
	
	/**
	 * Support Plugin
	 *
	 * @version 2.3.4
	 * @author Vivid Planet Software GmbH
	 * @author Artus Kolanowski
	 * @author David Deutsch
	 * @license The MIT License (MIT)
	 */
	;(function($, window, document, undefined) {
	
		var style = $('<support>').get(0).style,
			prefixes = 'Webkit Moz O ms'.split(' '),
			events = {
				transition: {
					end: {
						WebkitTransition: 'webkitTransitionEnd',
						MozTransition: 'transitionend',
						OTransition: 'oTransitionEnd',
						transition: 'transitionend'
					}
				},
				animation: {
					end: {
						WebkitAnimation: 'webkitAnimationEnd',
						MozAnimation: 'animationend',
						OAnimation: 'oAnimationEnd',
						animation: 'animationend'
					}
				}
			},
			tests = {
				csstransforms: function() {
					return !!test('transform');
				},
				csstransforms3d: function() {
					return !!test('perspective');
				},
				csstransitions: function() {
					return !!test('transition');
				},
				cssanimations: function() {
					return !!test('animation');
				}
			};
	
		function test(property, prefixed) {
			var result = false,
				upper = property.charAt(0).toUpperCase() + property.slice(1);
	
			$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
				if (style[property] !== undefined) {
					result = prefixed ? property : true;
					return false;
				}
			});
	
			return result;
		}
	
		function prefixed(property) {
			return test(property, true);
		}
	
		if (tests.csstransitions()) {
			/* jshint -W053 */
			$.support.transition = new String(prefixed('transition'))
			$.support.transition.end = events.transition.end[ $.support.transition ];
		}
	
		if (tests.cssanimations()) {
			/* jshint -W053 */
			$.support.animation = new String(prefixed('animation'))
			$.support.animation.end = events.animation.end[ $.support.animation ];
		}
	
		if (tests.csstransforms()) {
			/* jshint -W053 */
			$.support.transform = new String(prefixed('transform'));
			$.support.transform3d = tests.csstransforms3d();
		}
	
	})(window.Zepto || window.jQuery, window, document);


/***/ })
/******/ ]);
//# sourceMappingURL=toolkit.js.map
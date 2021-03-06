(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.defaultSvgList = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    'hollow-plus': '<svg viewBox="0 0 512 512"><path d="M241.778 270.222v128c0 7.854 6.368 14.222 14.222 14.222s14.222-6.368 14.222-14.222v-128h128c7.854 0 14.222-6.368 14.222-14.222s-6.368-14.222-14.222-14.222h-128v-128c0-7.855-6.368-14.222-14.222-14.222s-14.222 6.367-14.222 14.222v128h-128c-7.855 0-14.222 6.368-14.222 14.222s6.367 14.222 14.222 14.222h128z"/><path d="M0 256C0 114.615 114.615 0 256 0s256 114.615 256 256-114.615 256-256 256S0 397.385 0 256zm28.445 0c0 125.675 101.88 227.555 227.555 227.555S483.555 381.675 483.555 256c0-125.675-101.88-227.555-227.555-227.555S28.445 130.325 28.445 256z"/></svg>',

    'arrow-up': '<svg viewBox="0 0 512 512"><path d="M145.92 315.904c-5.632-5.632-5.632-14.336 0-19.968l100.352-99.84c5.12-5.632 14.336-5.632 19.968 0l99.84 99.84c5.632 5.632 5.632 14.336 0 19.968s-14.336 5.632-19.968 0L256 225.792l-90.112 90.112c-5.632 5.632-14.336 5.632-19.968 0z"/></svg>',

    'arrow-down': '<svg viewBox="0 0 512 512"><path d="M366.08 196.096c5.632 5.632 5.632 14.336 0 19.968l-99.84 99.84c-5.632 5.632-14.848 5.632-19.968 0l-100.352-99.84c-5.632-5.632-5.632-14.336 0-19.968s14.336-5.632 19.968 0L256 286.208l90.112-90.112c5.632-5.632 14.336-5.632 19.968 0z"/></svg>',

    'arrow-left': '<svg viewBox="0 0 512 512"><path d="M315.904 366.08c-5.632 5.632-14.336 5.632-19.968 0l-99.84-100.352c-5.632-5.12-5.632-14.336 0-19.968l99.84-99.84c5.632-5.632 14.336-5.632 19.968 0s5.632 14.336 0 19.968L225.792 256l90.112 90.112c5.632 5.632 5.632 14.336 0 19.968z"/></svg>',

    'arrow-right': '<svg viewBox="0 0 512 512"><path d="M196.096 145.92c5.632-5.632 14.336-5.632 19.968 0l99.84 99.84c5.632 5.632 5.632 14.848 0 19.968l-99.84 100.352c-5.632 5.632-14.336 5.632-19.968 0s-5.632-14.336 0-19.968L286.208 256l-90.112-90.112c-5.632-5.632-5.632-14.336 0-19.968z"/></svg>',

    'cross': '<svg viewBox="0 0 512 512"><path d="M111.104 91.136L256 236.032 400.896 91.136l19.968 19.968L275.968 256l144.896 144.896-19.968 19.968L256 275.968 111.104 420.864l-19.968-19.968L236.032 256 91.136 111.104l19.968-19.968z"/></svg>',
    'circle-alert': '<svg viewBox="0 0 512 512"><path d="M256 496C123.449 496 16 388.551 16 256S123.449 16 256 16s240 107.449 240 240-107.449 240-240 240zm-23.441-375l7.031 165H271l8.441-165h-46.879zm44.692 218.76c-5.921-5.809-13.069-8.719-21.439-8.719-8.381 0-15.461 2.91-21.24 8.719-5.779 5.831-8.681 12.881-8.681 21.18 0 9.499 3.03 16.89 9.079 22.17 6.049 5.291 13.129 7.931 21.24 7.931 7.969 0 14.951-2.681 20.94-8.029 5.981-5.34 8.97-12.701 8.97-22.069 0-8.299-2.959-15.349-8.869-21.18z"/></svg>',

    'circle-cross': '<svg viewBox="0 0 512 512"><title/><path d="M256 29.696C131.072 29.696 29.696 131.072 29.696 256S131.072 482.304 256 482.304 482.304 380.928 482.304 256 380.928 29.696 256 29.696zm90.112 296.448l-19.968 19.968L256 275.968l-70.144 70.144-19.968-19.968L236.032 256l-70.144-70.144 19.968-19.968L256 236.032l70.144-70.144 19.968 19.968L275.968 256l70.144 70.144z"/></svg>',

    'circle-right': '<svg viewBox="0 0 512 512"><path d="M256 29.696C131.072 29.696 29.696 131.072 29.696 256S131.072 482.304 256 482.304 482.304 380.928 482.304 256 380.928 29.696 256 29.696zm-22.528 304.64l.512.512-19.968 19.968L128 268.8l19.968-19.968 65.536 65.536 145.92-145.92 19.968 19.968-145.92 145.92z"/></svg>',

    'spinner': '<svg class="lds-spinner" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="background:0 0"><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="7" height="17" fill="#eee"><animate attributeName="opacity" values="1;0" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"/></rect><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="7" height="17" fill="#eee" transform="rotate(30 50 50)"><animate attributeName="opacity" values="1;0" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"/></rect><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="7" height="17" fill="#eee" transform="rotate(60 50 50)"><animate attributeName="opacity" values="1;0" dur="1s" begin="-0.75s" repeatCount="indefinite"/></rect><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="7" height="17" fill="#eee" transform="rotate(90 50 50)"><animate attributeName="opacity" values="1;0" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"/></rect><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="7" height="17" fill="#eee" transform="rotate(120 50 50)"><animate attributeName="opacity" values="1;0" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"/></rect><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="7" height="17" fill="#eee" transform="rotate(150 50 50)"><animate attributeName="opacity" values="1;0" dur="1s" begin="-0.5s" repeatCount="indefinite"/></rect><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="7" height="17" fill="#eee" transform="rotate(180 50 50)"><animate attributeName="opacity" values="1;0" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"/></rect><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="7" height="17" fill="#eee" transform="rotate(210 50 50)"><animate attributeName="opacity" values="1;0" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"/></rect><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="7" height="17" fill="#eee" transform="rotate(240 50 50)"><animate attributeName="opacity" values="1;0" dur="1s" begin="-0.25s" repeatCount="indefinite"/></rect><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="7" height="17" fill="#eee" transform="rotate(270 50 50)"><animate attributeName="opacity" values="1;0" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"/></rect><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="7" height="17" fill="#eee" transform="rotate(300 50 50)"><animate attributeName="opacity" values="1;0" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"/></rect><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="7" height="17" fill="#eee" transform="rotate(330 50 50)"><animate attributeName="opacity" values="1;0" dur="1s" begin="0s" repeatCount="indefinite"/></rect></svg>',

    'right': '<svg viewBox="0 0 670 512"><path d="M222.793 371.595L55.698 204.5-.001 260.198l222.793 222.793L640.529 65.254 584.831 9.555 222.793 371.593z"/><path d="M55.699 232.35L27.85 260.199l194.944 194.944L612.682 65.255l-27.849-27.849-362.038 362.038L55.7 232.349z"/></svg>',

    'circle': '<svg viewBox="0 0 512 512"><path fill="none" stroke="#ccc" stroke-width="24.381" d="M467.81 256c0 116.98-94.83 211.81-211.81 211.81S44.19 372.98 44.19 256 139.02 44.19 256 44.19 467.81 139.02 467.81 256z"/></svg>'
  };
});
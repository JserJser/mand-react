;(function(){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../icon', '../_style/global.css', './style/index.css'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../icon'), require('../_style/global.css'), require('./style/index.css'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.icon, global.global, global.index);
    global.index = mod.exports;
  }
})(this, function (exports, _icon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _icon2 = _interopRequireDefault(_icon);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  exports.default = {
    name: 'md-notice-bar',

    components: _defineProperty({}, _icon2.default.name, _icon2.default),

    props: {
      closable: {
        type: Boolean,
        default: true
      },
      time: {
        type: Number,
        default: 0
      },
      icon: {
        type: String,
        default: 'circle-alert'
      }
    },

    data: function data() {
      return {
        isShow: true
      };
    },
    mounted: function mounted() {
      if (this.time) {
        this.$_hide(this.time);
      }
    },


    methods: {
      $_hide: function $_hide(time) {
        var _this = this;

        setTimeout(function () {
          _this.isShow = false;
        }, time);
      },
      $_close: function $_close() {
        this.isShow = false;
      }
    }
  };
});
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.isShow)?_c('div',{staticClass:"md-notice-bar"},[[_c('md-icon',{staticClass:"md-notice-icon md-notice-icon-left",attrs:{"name":_vm.icon}})],_vm._v(" "),_vm._t("default"),_vm._v(" "),(_vm.closable)?[_c('md-icon',{staticClass:"md-notice-icon md-notice-icon-right",attrs:{"name":"cross"},nativeOn:{"click":function($event){return _vm.$_close($event)}}})]:_vm._e()],2):_vm._e()}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3233f70e", __vue__options__)
  } else {
    hotAPI.reload("data-v-3233f70e", __vue__options__)
  }
})()}
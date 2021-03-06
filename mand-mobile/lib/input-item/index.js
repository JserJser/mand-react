;(function(){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../icon', '../number-keyboard', './cursor', '../_util', '../_util/formate-value', '../_style/global.css', './style/index.css'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../icon'), require('../number-keyboard'), require('./cursor'), require('../_util'), require('../_util/formate-value'), require('../_style/global.css'), require('./style/index.css'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.icon, global.numberKeyboard, global.cursor, global._util, global.formateValue, global.global, global.index);
    global.index = mod.exports;
  }
})(this, function (exports, _icon, _numberKeyboard, _cursor, _util, _formateValue) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _icon2 = _interopRequireDefault(_icon);

  var _numberKeyboard2 = _interopRequireDefault(_numberKeyboard);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _components;

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
    name: 'md-input-item',

    components: (_components = {}, _defineProperty(_components, _icon2.default.name, _icon2.default), _defineProperty(_components, _numberKeyboard2.default.name, _numberKeyboard2.default), _components),

    props: {
      type: {
        type: String,
        default: 'text'
      },
      name: {
        type: [String, Number],
        default: function _default() {
          return (0, _util.randomId)('input-item');
        }
      },
      title: {
        type: String,
        default: ''
      },
      value: {
        type: [String, Number],
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      maxlength: {
        type: [String, Number],
        default: ''
      },
      size: {
        type: String,
        default: 'normal'
      },
      align: {
        type: String,
        default: 'left'
      },
      error: {
        type: String,
        default: ''
      },
      readonly: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      clearable: {
        type: Boolean,
        default: false
      },
      isVirtualKeyboard: {
        type: Boolean,
        default: false
      },
      virtualKeyboardDisorder: {
        type: Boolean
      },
      virtualKeyboardOkText: {
        type: String
      },
      isTitleLatent: {
        type: Boolean,
        default: false
      },
      isFormative: {
        type: Boolean,
        default: function _default() {
          var type = this.type;
          return type === 'bankCard' || type === 'phone' || type === 'money' || type === 'digit';
        }
      },
      isHighlight: {
        type: Boolean,
        default: false
      },
      formation: {
        type: Function,
        default: _util.noop
      }
    },

    data: function data() {
      return {
        inputValue: '',
        inputBindValue: '',
        inputNumberKeyboard: '',
        isInputFocus: false
      };
    },


    computed: {
      inputEnv: function inputEnv() {
        if (_util.isIOS) {
          return 'is-ios';
        } else if (_util.isAndroid) {
          return 'is-android';
        } else {
          return 'is-browser';
        }
      },
      inputType: function inputType() {
        var inputType = this.type || 'text';
        if (inputType === 'bankCard' || inputType === 'phone' || inputType === 'digit') {
          inputType = 'tel';
        }
        return inputType;
      },
      inputMaxLength: function inputMaxLength() {
        if (this.type === 'phone') {
          return 11;
        } else {
          return this.maxlength;
        }
      },
      inputPlaceholder: function inputPlaceholder() {
        return this.isTitleLatent && this.isInputActive ? '' : this.placeholder;
      },
      isInputActive: function isInputActive() {
        return !this.isInputEmpty || this.isInputFocus;
      },
      isInputEmpty: function isInputEmpty() {
        return !this.inputValue.length;
      },
      isInputError: function isInputError() {
        return !!this.error;
      }
    },

    watch: {
      value: function value(val) {
        if (val !== this.$_trimValue(this.inputValue)) {
          this.inputValue = this.$_formateValue(this.$_subValue(val + '')).value;
        }
      },
      inputValue: function inputValue(val) {
        this.inputBindValue = val;
        val = this.isFormative ? this.$_trimValue(val) : val;
        this.$emit('input', val);
        this.$emit('change', this.name, val);
      },
      isInputFocus: function isInputFocus(val) {
        if (!this.isVirtualKeyboard) {
          return;
        }
        if (val) {
          this.inputNumberKeyboard.show();
          this.$emit('focus', this.name);
        } else {
          this.inputNumberKeyboard.hide();
          this.$emit('blur', this.name);
        }
      }
    },

    created: function created() {
      this.inputValue = this.$_formateValue(this.$_subValue(this.value + '')).value;
    },
    mounted: function mounted() {
      this.isVirtualKeyboard && this.$_initNumberKeyBoard();
    },
    beforeDestroy: function beforeDestroy() {
      var keyboard = this.inputNumberKeyboard;
      if (keyboard && keyboard.$el) {
        document.body.removeChild(keyboard.$el);
      }
    },


    methods: {
      $_formateValue: function $_formateValue(curValue) {
        var curPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var type = this.type;
        var name = this.name;
        var oldValue = this.inputValue;
        var isAdd = oldValue.length > curValue.length ? -1 : 1;

        var formateValue = { value: curValue, range: curPos };

        if (!this.isFormative || curValue === '') {
          return formateValue;
        }

        var customValue = this.formation(name, curValue, curPos);

        if (customValue) {
          return customValue;
        }

        var gap = ' ';
        switch (type) {
          case 'bankCard':
            curValue = this.$_subValue((0, _formateValue.trimValue)(curValue.replace(/\D/g, '')));
            formateValue = (0, _formateValue.formatValueByGapStep)(4, curValue, gap, 'left', curPos, isAdd, oldValue);
            break;
          case 'phone':
            curValue = this.$_subValue((0, _formateValue.trimValue)(curValue.replace(/\D/g, '')));
            formateValue = (0, _formateValue.formatValueByGapRule)('3|4|4', curValue, gap, curPos, isAdd);
            break;
          case 'money':
            gap = ',';
            curValue = this.$_subValue((0, _formateValue.trimValue)(curValue.replace(/[^\d.]/g, '')));

            var dotPos = curValue.indexOf('.');

            var moneyCurValue = curValue.split('.')[0];
            var moneyCurDecimal = ~dotPos ? '.' + curValue.split('.')[1] : '';

            formateValue = (0, _formateValue.formatValueByGapStep)(3, (0, _formateValue.trimValue)(moneyCurValue, gap), gap, 'right', curPos, isAdd, oldValue.split('.')[0]);
            formateValue.value += moneyCurDecimal;
            break;
          case 'digit':
            curValue = this.$_subValue((0, _formateValue.trimValue)(curValue.replace(/\D/g, '')));
            formateValue.value = curValue;
            break;
          default:
            break;
        }

        return formateValue;
      },
      $_trimValue: function $_trimValue(val) {
        return (0, _formateValue.trimValue)(val, '\\s|,');
      },
      $_subValue: function $_subValue(val) {
        var len = this.inputMaxLength;
        if (len !== '') {
          return val.substring(0, len);
        } else {
          return val;
        }
      },
      $_clearInput: function $_clearInput() {
        event.stopImmediatePropagation();
        this.inputValue = '';
      },
      $_focusFakeInput: function $_focusFakeInput() {
        var _this = this;

        this.isInputFocus = true;

        this.$nextTick(function () {
          _this.$_addBlurListener();
        });
      },
      $_blurFakeInput: function $_blurFakeInput() {
        this.isInputFocus = false;
        this.$_removeBlurListener();
      },
      $_addBlurListener: function $_addBlurListener() {
        document.addEventListener('click', this.$_blurFakeInput, false);
      },
      $_removeBlurListener: function $_removeBlurListener() {
        document.removeEventListener('click', this.$_blurFakeInput, false);
      },
      $_initNumberKeyBoard: function $_initNumberKeyBoard() {
        var keyboard = this.$refs['number-keyboard'];
        this.inputNumberKeyboard = keyboard;
        document.body.appendChild(keyboard.$el);
      },
      $_onInput: function $_onInput(event) {
        var formateValue = this.$_formateValue(event.target.value, this.isFormative ? (0, _cursor.getCursorsPosition)(event.target) : 0);

        this.inputValue = formateValue.value;
        this.inputBindValue = formateValue.value;

        if (this.isFormative) {
          this.$nextTick(function () {
            (0, _cursor.setCursorsPosition)(event.target, formateValue.range);
          });
        }
      },
      $_onKeyup: function $_onKeyup(event) {
        this.$emit('keyup', this.name, event);
        if (+event.keyCode === 13 || +event.keyCode === 108) {
          this.$emit('confirm', this.name, this.inputValue);
        }
      },
      $_onKeydown: function $_onKeydown(event) {
        this.$emit('keydown', this.name, event);
      },
      $_onFocus: function $_onFocus() {
        this.isInputFocus = true;
        this.$emit('focus', this.name);
      },
      $_onBlur: function $_onBlur() {
        this.isInputFocus = false;
        this.$emit('blur', this.name);
      },
      $_onFakeInputClick: function $_onFakeInputClick(event) {
        if (this.disabled || this.readonly) {
          return;
        }

        this.$_blurFakeInput();

        if (!this.isInputFocus) {
          this.$_focusFakeInput(event);
        }
      },
      $_onNumberKeyBoardEnter: function $_onNumberKeyBoardEnter(val) {
        this.inputValue = this.$_formateValue(this.inputValue + val).value;
      },
      $_onNumberKeyBoardDelete: function $_onNumberKeyBoardDelete() {
        var inputValue = this.inputValue;
        if (inputValue === '') {
          return;
        }
        this.inputValue = this.$_formateValue(inputValue.substring(0, inputValue.length - 1)).value;
      },
      $_onNumberKeyBoardConfirm: function $_onNumberKeyBoardConfirm() {
        this.$emit('confirm', this.name, this.inputValue);
      },
      focus: function focus() {
        if (this.isVirtualKeyboard) {
          this.$_onFakeInputClick();
        } else {
          this.$el.querySelector('.md-input-item-input').focus();
        }
      },
      blur: function blur() {
        if (this.isVirtualKeyboard) {
          this.$_blurFakeInput();
        } else {
          this.$el.querySelector('.md-input-item-input').blur();
        }
      },
      getValue: function getValue() {
        return this.inputValue;
      }
    }
  };
});
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"md-input-item",class:[
    _vm.isHighlight ? 'is-highlight' : '',
    _vm.isTitleLatent ? 'is-title-latent' : '',
    _vm.isInputActive ? 'active' : '',
    _vm.isInputFocus ? 'focus' : '',
    _vm.isInputError ? 'error' : '',
    _vm.clearable ? 'is-clear' : '',
    _vm.inputEnv,
    _vm.align,
    _vm.size
  ]},[_c('div',{staticClass:"md-input-item-container"},[(_vm.$slots.left)?_c('div',{staticClass:"md-input-item-extra"},[_vm._t("left")],2):_vm._e(),_vm._v(" "),(_vm.title !== '')?_c('div',{staticClass:"md-input-item-title",class:{
        fixed: !_vm.isTitleLatent
      },domProps:{"innerHTML":_vm._s(_vm.title)}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"md-input-item-control"},[(!_vm.isVirtualKeyboard)?[((_vm.inputType)==='checkbox')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.inputBindValue),expression:"inputBindValue"}],staticClass:"md-input-item-input",attrs:{"name":_vm.name,"placeholder":_vm.inputPlaceholder,"disabled":_vm.disabled,"readonly":_vm.readonly,"maxlength":_vm.isFormative ? '' : _vm.maxlength,"autocomplete":"off","type":"checkbox"},domProps:{"checked":Array.isArray(_vm.inputBindValue)?_vm._i(_vm.inputBindValue,null)>-1:(_vm.inputBindValue)},on:{"focus":_vm.$_onFocus,"blur":_vm.$_onBlur,"keyup":_vm.$_onKeyup,"keydown":_vm.$_onKeydown,"input":_vm.$_onInput,"change":function($event){var $$a=_vm.inputBindValue,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.inputBindValue=$$a.concat([$$v]))}else{$$i>-1&&(_vm.inputBindValue=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.inputBindValue=$$c}}}}):((_vm.inputType)==='radio')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.inputBindValue),expression:"inputBindValue"}],staticClass:"md-input-item-input",attrs:{"name":_vm.name,"placeholder":_vm.inputPlaceholder,"disabled":_vm.disabled,"readonly":_vm.readonly,"maxlength":_vm.isFormative ? '' : _vm.maxlength,"autocomplete":"off","type":"radio"},domProps:{"checked":_vm._q(_vm.inputBindValue,null)},on:{"focus":_vm.$_onFocus,"blur":_vm.$_onBlur,"keyup":_vm.$_onKeyup,"keydown":_vm.$_onKeydown,"input":_vm.$_onInput,"change":function($event){_vm.inputBindValue=null}}}):_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.inputBindValue),expression:"inputBindValue"}],staticClass:"md-input-item-input",attrs:{"name":_vm.name,"placeholder":_vm.inputPlaceholder,"disabled":_vm.disabled,"readonly":_vm.readonly,"maxlength":_vm.isFormative ? '' : _vm.maxlength,"autocomplete":"off","type":_vm.inputType},domProps:{"value":(_vm.inputBindValue)},on:{"focus":_vm.$_onFocus,"blur":_vm.$_onBlur,"keyup":_vm.$_onKeyup,"keydown":_vm.$_onKeydown,"input":[function($event){if($event.target.composing){ return; }_vm.inputBindValue=$event.target.value},_vm.$_onInput]}})]:[_c('div',{staticClass:"md-input-item-fake",class:{
            'focus': _vm.isInputFocus,
            'disabled': _vm.disabled,
            'readonly': _vm.readonly
          },on:{"click":_vm.$_onFakeInputClick}},[_c('span',{domProps:{"textContent":_vm._s(_vm.inputValue)}}),_vm._v(" "),(_vm.inputValue === '' && _vm.inputPlaceholder !== '')?_c('span',{staticClass:"md-input-item-fake-placeholder",domProps:{"textContent":_vm._s(_vm.inputPlaceholder)}}):_vm._e()])],_vm._v(" "),(!_vm.isTitleLatent && _vm.error !== '')?_c('div',{staticClass:"md-input-item-msg",domProps:{"textContent":_vm._s(_vm.error)}}):_vm._e(),_vm._v(" "),(_vm.clearable && !_vm.disabled && !_vm.readonly)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isInputEmpty && _vm.isInputFocus),expression:"!isInputEmpty && isInputFocus"}],staticClass:"md-input-item-clear",on:{"click":function($event){_vm.$_clearInput($event)}}},[_c('md-icon',{attrs:{"name":"circle-cross"}})],1):_vm._e(),_vm._v(" "),(_vm.$slots.right)?_c('div',{staticClass:"md-input-item-right"},[_vm._t("right")],2):_vm._e()],2)]),_vm._v(" "),(_vm.isTitleLatent && _vm.error !== '')?_c('div',{staticClass:"md-input-item-msg",domProps:{"textContent":_vm._s(_vm.error)}}):_vm._e(),_vm._v(" "),(_vm.isVirtualKeyboard)?_c('md-number-keyboard',{ref:"number-keyboard",staticClass:"md-input-item-number-keyboard",attrs:{"id":(_vm.name + "-number-keyboard"),"ok-text":_vm.virtualKeyboardOkText,"disorder":_vm.virtualKeyboardDisorder},on:{"enter":_vm.$_onNumberKeyBoardEnter,"delete":_vm.$_onNumberKeyBoardDelete,"confirm":_vm.$_onNumberKeyBoardConfirm}}):_vm._e()],1)}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f21ac3de", __vue__options__)
  } else {
    hotAPI.reload("data-v-f21ac3de", __vue__options__)
  }
})()}
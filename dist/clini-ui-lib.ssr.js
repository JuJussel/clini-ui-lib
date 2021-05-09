'use strict';var vue=require('vue');function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script$b = {
  name: 'CuiButton',
  props: {
    label: {
      default: '',
      type: String
    },
    icon: {
      default: '',
      type: String
    },
    danger: {
      default: false,
      type: Boolean
    },
    primary: {
      default: false,
      type: Boolean
    },
    warn: {
      default: false,
      type: Boolean
    },
    white: {
      default: false,
      type: Boolean
    },
    disabled: {
      default: false,
      type: Boolean
    },
    loading: {
      default: false,
      type: Boolean
    },
    plain: {
      default: false,
      type: Boolean
    }
  }
};var _withId$7 = /*#__PURE__*/vue.withScopeId("data-v-5b8231a1");

vue.pushScopeId("data-v-5b8231a1");

var _hoisted_1$b = {
  key: 0,
  class: "loader"
};

var _hoisted_2$9 = /*#__PURE__*/vue.createVNode("div", {
  class: "ripple"
}, null, -1);

var _hoisted_3$6 = {
  key: 2
};

vue.popScopeId();

var render$b = /*#__PURE__*/_withId$7(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("button", {
    class: ["cui-button", {
      danger: $props.danger,
      primary: $props.primary,
      warn: $props.warn,
      disabled: $props.disabled || $props.loading,
      loading: $props.loading,
      plain: $props.plain,
      white: $props.white
    }]
  }, [$props.loading ? (vue.openBlock(), vue.createBlock("div", _hoisted_1$b)) : vue.createCommentVNode("", true), _hoisted_2$9, $props.icon !== '' ? (vue.openBlock(), vue.createBlock("i", {
    key: 1,
    class: $props.icon
  }, null, 2)) : vue.createCommentVNode("", true), $props.label !== '' ? (vue.openBlock(), vue.createBlock("span", _hoisted_3$6, vue.toDisplayString($props.label), 1)) : vue.createCommentVNode("", true)], 2);
});function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}var css_248z$c = "\n.cui-button[data-v-5b8231a1] {\n        height: 35px;\n        border: 0px;\n        margin: 5px;\n        border-radius: var(--cui-button-radius);\n        transition: all .2s ease;\n        position: relative;\n        user-select: none;\n        z-index: 1;\n        overflow: hidden;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        padding: 10px;\n        outline: none;\n        font-size: .8rem;\n        box-sizing: border-box;\n        background: var(--cui-dark);\n        color: white;\n        cursor: pointer;\n}\n.cui-button[data-v-5b8231a1]:not(.disabled):not(.plain):hover {\n        margin-top: 0px;\n        box-shadow: 0 10px 20px -10px var(--cui-dark);\n        margin-bottom: 10px\n}\n.cui-button.danger[data-v-5b8231a1] {\n        background: var(--cui-danger);\n}\n.cui-button.danger[data-v-5b8231a1]:not(.disabled):hover {\n        box-shadow: 0 10px 20px -10px var(--cui-danger);\n}\n.cui-button.primary[data-v-5b8231a1] {\n        background: var(--cui-primary);\n}\n.cui-button.primary[data-v-5b8231a1]:not(.disabled):hover {\n        box-shadow: 0 10px 20px -10px var(--cui-primary);\n}\n.cui-button.warn[data-v-5b8231a1] {\n        background: var(--cui-warn);\n}\n.cui-button.warn[data-v-5b8231a1]:not(.disabled):hover {\n        box-shadow: 0 10px 20px -10px var(--cui-warn);\n}\n.cui-button > i[data-v-5b8231a1]:not(:last-child) {\n        margin-right: 5px\n}\n.cui-button.disabled[data-v-5b8231a1] {\n        cursor: not-allowed;\n        opacity: 0.7;\n}\n.cui-button.loading[data-v-5b8231a1] {\n        color: rgba(255,255,255,0.5)\n}\n.cui-button.plain[data-v-5b8231a1] {\n        background: none;\n        color: var(--cui-font-color)\n}\n.cui-button.plain[data-v-5b8231a1]:hover {\n        background: var(--cui-gray-1)\n}\n.cui-button.white[data-v-5b8231a1] {\n        background: white;\n        color: var(--cui-font-color)\n}\n";
styleInject(css_248z$c);script$b.render = render$b;
script$b.__scopeId = "data-v-5b8231a1";var script$a = {
  name: 'ButtonGroup',
  methods: {
    changeValue: function changeValue(value) {
      this.$emit('change', value);
    }
  }
};var _withId$6 = /*#__PURE__*/vue.withScopeId("data-v-7469df4e");

vue.pushScopeId("data-v-7469df4e");

var _hoisted_1$a = {
  class: "cui-button-group"
};

vue.popScopeId();

var render$a = /*#__PURE__*/_withId$6(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1$a, [vue.renderSlot(_ctx.$slots, "default")]);
});var css_248z$b = "\n.cui-button-group[data-v-7469df4e] {\n        display:flex;\n        margin: 5px 0\n}\n";
styleInject(css_248z$b);var css_248z$a = "\n.cui-button-group .cui-button  {\n        margin-left: 0;\n        margin-right: 0;\n        border-radius: 0\n}\n.cui-button-group .cui-button:first-of-type {\n        margin-left: 5px;\n        border-top-left-radius:15px;\n        border-bottom-left-radius: 15px;\n}\n.cui-button-group .cui-button:last-of-type {\n        border-top-left-radius: 0px!important;\n        border-bottom-left-radius: 0px!important;\n}\n\n";
styleInject(css_248z$a);script$a.render = render$a;
script$a.__scopeId = "data-v-7469df4e";var script$9 = {
  name: 'ButtonGroupItem',
  props: {
    label: {
      default: '',
      type: String
    },
    icon: {
      default: '',
      type: String
    },
    value: {
      default: null
    }
  },
  methods: {
    handelClick: function handelClick() {
      this.$parent.changeValue(this.value);
      var menuItems = document.querySelectorAll(".cui-button-group-item");
      menuItems.forEach(function (item) {
        item.classList.remove('selected');
      });
      this.$refs.item.classList.add("selected");
    }
  }
};var _withId$5 = /*#__PURE__*/vue.withScopeId("data-v-5085d32b");

vue.pushScopeId("data-v-5085d32b");

var _hoisted_1$9 = /*#__PURE__*/vue.createVNode("div", {
  class: "ripple"
}, null, -1);

var _hoisted_2$8 = {
  key: 1
};

vue.popScopeId();

var render$9 = /*#__PURE__*/_withId$5(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", {
    class: "cui-button-group-item",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.handelClick && $options.handelClick.apply($options, arguments);
    }),
    ref: "item"
  }, [_hoisted_1$9, $props.icon !== '' ? (vue.openBlock(), vue.createBlock("i", {
    key: 0,
    class: $props.icon
  }, null, 2)) : vue.createCommentVNode("", true), $props.label !== '' ? (vue.openBlock(), vue.createBlock("span", _hoisted_2$8, vue.toDisplayString($props.label), 1)) : vue.createCommentVNode("", true)], 512);
});var css_248z$9 = "\n.cui-button-group-item[data-v-5085d32b] {\n        height: 35px;\n        border: 0px;\n        margin: 5px 0;\n        transition: all .2s ease;\n        position: relative;\n        user-select: none;\n        z-index: 1;\n        overflow: hidden;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        padding: 10px;\n        outline: none;\n        font-size: .8rem;\n        box-sizing: border-box;\n        background: white;\n        cursor: pointer;\n        border: solid 2px var(--cui-dark);\n        border-right: none\n}\n.cui-button-group-item[data-v-5085d32b]:first-of-type {\n        margin-left: 5px;\n        border-top-left-radius: var(--cui-button-radius);\n        border-bottom-left-radius: var(--cui-button-radius);\n}\n.cui-button-group-item[data-v-5085d32b]:last-of-type {\n        margin-right: 5px;\n        border-top-right-radius: var(--cui-button-radius);\n        border-bottom-right-radius: var(--cui-button-radius);\n        border-right: solid 2px var(--cui-dark)\n}\n.selected[data-v-5085d32b] {\n        background: var(--cui-dark);\n        color: white\n}\n.cui-button-group-item > i[data-v-5085d32b]:not(:last-child) {\n        margin-right: 5px\n}\n\n\n";
styleInject(css_248z$9);script$9.render = render$9;
script$9.__scopeId = "data-v-5085d32b";var script$8 = {
  name: 'CuiMenuBar',
  methods: {
    changeValue: function changeValue(value) {
      this.$emit('change', value);
    }
  }
};var _withId$4 = /*#__PURE__*/vue.withScopeId("data-v-47b2ae79");

vue.pushScopeId("data-v-47b2ae79");

var _hoisted_1$8 = {
  class: "cui-menu-bar",
  ref: "menuBar"
};
var _hoisted_2$7 = {
  class: "menu-item"
};
var _hoisted_3$5 = {
  class: "menu-item"
};
var _hoisted_4$4 = {
  class: "menu-item"
};

vue.popScopeId();

var render$8 = /*#__PURE__*/_withId$4(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1$8, [vue.createVNode("div", _hoisted_2$7, [vue.renderSlot(_ctx.$slots, "left")]), vue.createVNode("div", _hoisted_3$5, [vue.renderSlot(_ctx.$slots, "center")]), vue.createVNode("div", _hoisted_4$4, [vue.renderSlot(_ctx.$slots, "right")])], 512);
});var css_248z$8 = "\n.cui-menu-bar[data-v-47b2ae79] {\n        background: var(--cui-dark);\n        height: 45px;\n        border-bottom-left-radius: 15px;\n        border-bottom-right-radius: 15px;\n        padding: 0 15px;\n        position: relative;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        color: var(--cui-gray-2);\n        font-weight: bold;\n        font-size: 16px;\n}\n.cui-menu-bar > .menu-item[data-v-47b2ae79] {\n        display: flex;\n}\n";
styleInject(css_248z$8);script$8.render = render$8;
script$8.__scopeId = "data-v-47b2ae79";var script$7 = {
  name: 'CuiMenuBarItem',
  props: {
    label: {
      default: '',
      type: String
    },
    icon: {
      default: '',
      type: String
    },
    value: {
      default: null
    }
  },
  methods: {
    handelClick: function handelClick() {
      this.$parent.changeValue(this.value);
      var menuItems = document.querySelectorAll(".cui-menu-bar-item");
      menuItems.forEach(function (item) {
        item.classList.remove('selected');
      });
      this.$refs.item.classList.add("selected");
    }
  }
};var _hoisted_1$7 = /*#__PURE__*/vue.createVNode("div", {
  class: "ripple"
}, null, -1);

var _hoisted_2$6 = /*#__PURE__*/vue.createVNode("div", {
  class: "menu-bar-line"
}, null, -1);

var _hoisted_3$4 = {
  class: "content"
};
var _hoisted_4$3 = {
  key: 1
};
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", {
    class: "cui-menu-bar-item",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.handelClick && $options.handelClick.apply($options, arguments);
    }),
    ref: "item"
  }, [_hoisted_1$7, _hoisted_2$6, vue.createVNode("div", _hoisted_3$4, [$props.icon !== '' ? (vue.openBlock(), vue.createBlock("i", {
    key: 0,
    class: $props.icon
  }, null, 2)) : vue.createCommentVNode("", true), $props.label !== '' ? (vue.openBlock(), vue.createBlock("span", _hoisted_4$3, vue.toDisplayString($props.label), 1)) : vue.createCommentVNode("", true)])], 512);
}var css_248z$7 = "\n.cui-menu-bar-item {\n        height: 45px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin: 0 10px;\n        position: relative;\n        padding: 0 5px\n}\n.cui-menu-bar-item:hover {\n        cursor: pointer;\n        color: white;\n}\n.cui-menu-bar-item > .content {\n        transition: all .2s ease;\n}\n.cui-menu-bar-item:hover > .content {\n        padding-bottom: 5px;\n}\n.cui-menu-bar-item > i:not(:last-child) {\n        margin-right: 5px\n}\n.cui-menu-bar-item.selected {\n        color: white;\n}\n.menu-bar-line {\n        opacity: 0;\n        transition: all .2s;\n        background: white;\n        width: 100%;\n        height: 2px;\n        bottom: 0;\n        position: absolute;\n}\n.cui-menu-bar-item.selected > .menu-bar-line {\n        opacity: 100\n}\n";
styleInject(css_248z$7);script$7.render = render$7;var script$6 = {
  name: "CuiCard",
  props: {
    noPadding: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      test: false
    };
  }
};var _hoisted_1$6 = {
  class: "cui-card"
};
var _hoisted_2$5 = {
  key: 0,
  class: "cui-card-header"
};
var _hoisted_3$3 = {
  key: 1,
  class: "footer"
};
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1$6, [_ctx.$slots.header ? (vue.openBlock(), vue.createBlock("div", _hoisted_2$5, [vue.renderSlot(_ctx.$slots, "header")])) : vue.createCommentVNode("", true), vue.createVNode("div", {
    class: ["cui-card-body", {
      'no-padding': $props.noPadding
    }]
  }, [vue.renderSlot(_ctx.$slots, "default")], 2), _ctx.$slots.footer ? (vue.openBlock(), vue.createBlock("div", _hoisted_3$3, [vue.renderSlot(_ctx.$slots, "footer")])) : vue.createCommentVNode("", true)]);
}var css_248z$6 = "\n.cui-card {\n        border-radius: 20px;\n        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 30%);\n        margin: 10px;\n        overflow: hidden;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        background: white;\n}\n.cui-card:not(adaptive) {\n        height: calc(100% - 20px);\n        width: calc(100% - 20px);\n}\n.cui-card-header {\n        background: var(--cui-gray-0);\n        padding: 10px;\n        box-shadow: 1px 1px 4px 0px rgb(0 0 0 / 15%);\n        display: flex;\n        align-items: center;\n}\n.cui-card-body {\n        flex: 1;\n        overflow: auto;\n}\n.cui-card-body:not(.no-padding) {\n        padding: 10px\n}\n.cui-card > .footer {\n        padding: 10px;\n        display: flex;\n        align-items: center;\n}\n\n";
styleInject(css_248z$6);script$6.render = render$6;var script$5 = {
  name: 'CuiModal',
  props: {
    visible: {
      default: false,
      type: Boolean
    },
    closable: {
      default: true,
      type: Boolean
    }
  },
  data: function data() {
    return {
      showContent: false
    };
  },
  methods: {
    handelClick: function handelClick(event) {
      if (event.target.matches('.cui-modal-content') && this.closable) {
        this.$emit('close');
      }
    }
  },
  watch: {
    visible: function visible() {
      if (this.visible) {
        setTimeout(function () {
          this.showContent = true;
        }.bind(this), 100);
      } else {
        this.showContent = false;
      }
    }
  }
};var _hoisted_1$5 = {
  key: 0,
  class: "cui-modal-overlay"
};
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock(vue.Transition, {
    name: "modal-trans"
  }, {
    default: vue.withCtx(function () {
      return [$props.visible ? (vue.openBlock(), vue.createBlock("div", _hoisted_1$5, [vue.createVNode(vue.Transition, {
        name: "modal-content-trans"
      }, {
        default: vue.withCtx(function () {
          return [$data.showContent ? (vue.openBlock(), vue.createBlock("div", {
            key: 0,
            class: "cui-modal-content",
            onClick: _cache[1] || (_cache[1] = function () {
              return $options.handelClick && $options.handelClick.apply($options, arguments);
            })
          }, [vue.renderSlot(_ctx.$slots, "default")])) : vue.createCommentVNode("", true)];
        }),
        _: 3
      })])) : vue.createCommentVNode("", true)];
    }),
    _: 1
  });
}var css_248z$5 = "\n.cui-modal-overlay {\n        position: fixed;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        z-index: 100;\n        background: rgba(0,0,0,.2);\n        backdrop-filter: saturate(180%) blur(10px);\n        overflow: hidden\n}\n.cui-modal-content {\n        position: relative;\n        width: 100%;\n        height: 100%;\n        padding: 100px;\n        box-sizing: border-box;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n}\n.modal-trans-enter-active, \n    .modal-content-trans-enter-active {\n        transition: all .15s ease;\n}\n.modal-content-trans-enter-active {        \n        animation: rebound .3s\n}\n.modal-trans-leave-active, \n    .modal-content-trans-leave-active {\n        transition: all .15s ease\n}\n.modal-trans-enter-from,\n    .modal-trans-leave-to {\n        opacity: 0;\n}\n.modal-content-trans-enter-from,\n    .modal-content-trans-leave-to {\n        transform: scale(.7)\n}\n@keyframes rebound {\n0% {transform: scale(.8)}\n40% {transform: scale(1.08)}\n80% {transform: scale(0.98)}\n100% {transform: scale(1)}\n}\n";
styleInject(css_248z$5);script$5.render = render$5;var script$4 = {
  name: 'CuiInput',
  props: {
    modelValue: {
      default: ''
    },
    type: {
      default: 'text'
    },
    label: {
      default: null
    },
    required: {
      default: false,
      type: Boolean
    },
    icon: {
      default: null
    },
    width: {
      default: 'calc(100% - 20px)'
    },
    disabled: {
      default: false,
      type: Boolean
    },
    append: {
      default: null
    }
  },
  emits: ['update:modelValue'],
  methods: {
    changeValue: function changeValue() {
      this.$emit('update:modelValue', this.modelValue);
    }
  },
  data: function data() {
    return {
      trans: {
        required: '*必須'
      },
      error: ''
    };
  }
};var _withId$3 = /*#__PURE__*/vue.withScopeId("data-v-73c5365b");

vue.pushScopeId("data-v-73c5365b");

var _hoisted_1$4 = {
  key: 0,
  class: "cui-input-label"
};
var _hoisted_2$4 = {
  style: {
    "margin-right": "10px"
  }
};
var _hoisted_3$2 = {
  key: 0
};
var _hoisted_4$2 = {
  style: {
    "position": "relative"
  }
};
var _hoisted_5$1 = {
  key: 0,
  class: "cui-input-append"
};
var _hoisted_6 = {
  class: "cui-input-note"
};

vue.popScopeId();

var render$4 = /*#__PURE__*/_withId$3(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", null, [$props.label ? (vue.openBlock(), vue.createBlock("label", _hoisted_1$4, [vue.createVNode("span", _hoisted_2$4, vue.toDisplayString($props.label), 1), $props.required ? (vue.openBlock(), vue.createBlock("span", _hoisted_3$2, vue.toDisplayString($data.trans.required), 1)) : vue.createCommentVNode("", true)])) : vue.createCommentVNode("", true), vue.createVNode("div", _hoisted_4$2, [$props.append ? (vue.openBlock(), vue.createBlock("span", _hoisted_5$1, vue.toDisplayString($props.append), 1)) : vue.createCommentVNode("", true), vue.withDirectives(vue.createVNode("input", {
    class: ["cui-input", {
      'has-icon': $props.icon
    }],
    style: {
      width: $props.width
    },
    type: $props.type,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $props.modelValue = $event;
    }),
    onInput: _cache[2] || (_cache[2] = function () {
      return $options.changeValue && $options.changeValue.apply($options, arguments);
    }),
    disabled: $props.disabled,
    clearable: ""
  }, null, 46, ["type", "disabled"]), [[vue.vModelDynamic, $props.modelValue]]), $props.icon ? (vue.openBlock(), vue.createBlock("span", {
    key: 1,
    class: $props.icon + ' cui-input-icon'
  }, null, 2)) : vue.createCommentVNode("", true)]), vue.createVNode("div", _hoisted_6, [vue.createVNode("span", null, vue.toDisplayString($data.error), 1)])]);
});var css_248z$4 = "\n.cui-input-label[data-v-73c5365b] {\n        font-size: 14px;\n        margin-left: 10px\n}\n.cui-input[data-v-73c5365b] {\n        background: var(--cui-gray-0);\n        border: none;\n        border-radius: 12px;\n        height: 26px;\n        padding: 5px 10px;\n        transition: all .2s ease\n}\n.cui-input[data-v-73c5365b]:focus {\n        outline: none;\n        padding-left: 13px;\n        padding-right: 7px;\n        background: var(--cui-gray-1)\n}\n.cui-input-note[data-v-73c5365b] {\n        font-size: 12px;\n        margin-left: 10px;\n        color: var(--cui-danger);\n        height: 15px;\n        line-height: 12px;\n}\n.cui-input-icon[data-v-73c5365b] {\n        position: absolute;\n        left:0;\n        background: var(--cui-gray-0);\n        border-radius: 12px;\n        padding: 10px;\n        transition: all .2s ease;\n}\n.has-icon[data-v-73c5365b] {\n        text-indent: 28px;\n}\n.cui-input:focus + .cui-input-icon[data-v-73c5365b] {\n        margin: -3px;\n        box-shadow: 0 10px 20px -10px var(--cui-dark);\n        background: white;\n}\n.cui-input-append[data-v-73c5365b] {\n        position: absolute;\n        right: 0;\n        height: 34px;\n        background: white;\n        border-radius: 12px;\n        line-height: 34px;\n        padding: 0 10px;\n        border: solid 1px var(--cui-gray-1);\n        font-size: 14px\n}\n";
styleInject(css_248z$4);script$4.render = render$4;
script$4.__scopeId = "data-v-73c5365b";var script$3 = {
  name: 'CuiCheckbox',
  props: {
    modelValue: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      selected: false
    };
  }
};var _hoisted_1$3 = {
  key: 0
};
var _hoisted_2$3 = {
  key: 1
};
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", null, [$props.modelValue ? (vue.openBlock(), vue.createBlock("span", _hoisted_1$3, "0")) : (vue.openBlock(), vue.createBlock("span", _hoisted_2$3, "S"))]);
}script$3.render = render$3;var script$2 = {
  name: 'CuiTable',
  props: {
    data: {
      default: [],
      type: Array
    },
    striped: {
      default: false,
      type: Boolean
    },
    singleSelect: {
      default: false,
      type: Boolean
    },
    multipleSelect: {
      default: false,
      type: Boolean
    },
    clickable: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      loading: false,
      trRefs: [],
      sort: {
        direction: null,
        prop: null
      }
    };
  },
  beforeUpdate: function beforeUpdate() {
    this.trRefs = [];
  },
  methods: {
    setItemRef: function setItemRef(el) {
      if (el) {
        this.trRefs.push(el);
      }
    },
    rowClick: function rowClick(row, index) {
      // this.$emit('click', {row: row, index: index})
      if (this.multipleSelect) {
        this.trRefs[index].selected = !this.trRefs[index].selected;
        var selectedItems = this.trRefs.filter(function (item) {
          return item.selected;
        });
        this.$emit('select', {
          row: row,
          index: index,
          selectedItems: selectedItems
        });
      } else if (this.singleSelect) {
        this.trRefs.forEach(function (item) {
          return item.selected = false;
        });
        this.trRefs[index].selected = true;
        this.$emit('select', {
          row: row,
          index: index,
          selected: this.trRefs[index].selected
        });
      }
    },
    toggleSort: function toggleSort(direction, prop) {
      this.sort.direction = direction;
      this.sort.prop = prop;
    }
  },
  computed: {
    displayData: function displayData() {
      var data = JSON.parse(JSON.stringify(this.data));
      var direction = this.sort.direction;
      var prop = this.sort.prop;

      if (direction === 'desc') {
        data.sort(function (a, b) {
          return a[prop] > b[prop] ? 1 : -1;
        });
      } else if (direction === 'asc') {
        data.sort(function (a, b) {
          return a[prop] < b[prop] ? 1 : -1;
        });
      }

      return data;
    }
  }
};var _withId$2 = /*#__PURE__*/vue.withScopeId("data-v-f6cea14e");

vue.pushScopeId("data-v-f6cea14e");

var _hoisted_1$2 = {
  key: 0,
  class: "cui-table-header"
};
var _hoisted_2$2 = {
  class: "cui-table-container"
};
var _hoisted_3$1 = {
  key: 0
};
var _hoisted_4$1 = {
  ref: "body"
};
var _hoisted_5 = {
  key: 1,
  class: "cui-table-footer"
};

vue.popScopeId();

var render$2 = /*#__PURE__*/_withId$2(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_cui_tr = vue.resolveComponent("cui-tr");

  return vue.openBlock(), vue.createBlock("div", {
    class: ["cui-table", {
      striped: $props.striped
    }]
  }, [_ctx.$slots.header ? (vue.openBlock(), vue.createBlock("div", _hoisted_1$2, [vue.renderSlot(_ctx.$slots, "header")])) : vue.createCommentVNode("", true), vue.createVNode("div", _hoisted_2$2, [vue.createVNode("table", null, [vue.createVNode("thead", null, [vue.createVNode("tr", null, [$props.multipleSelect ? (vue.openBlock(), vue.createBlock("th", _hoisted_3$1)) : vue.createCommentVNode("", true), vue.renderSlot(_ctx.$slots, "thead")])]), vue.createVNode("tbody", _hoisted_4$1, [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($options.displayData, function (row, index) {
    return vue.openBlock(), vue.createBlock(_component_cui_tr, {
      key: index,
      rowData: row,
      ref: $options.setItemRef,
      onClick: function onClick($event) {
        return $options.rowClick(row, index);
      },
      multipleSelect: $props.multipleSelect,
      clickable: $props.clickable
    }, vue.createSlots({
      parentRow: _withId$2(function () {
        return [vue.renderSlot(_ctx.$slots, "row", {
          row: row
        })];
      }),
      _: 2
    }, [_ctx.$slots.expand ? {
      name: "expand",
      fn: _withId$2(function () {
        return [vue.renderSlot(_ctx.$slots, "expand", {
          expand: row
        })];
      })
    } : undefined]), 1032, ["rowData", "onClick", "multipleSelect", "clickable"]);
  }), 128))], 512)])]), _ctx.$slots.footer ? (vue.openBlock(), vue.createBlock("div", _hoisted_5, [vue.renderSlot(_ctx.$slots, "footer")])) : vue.createCommentVNode("", true)], 2);
});var css_248z$3 = "\n.cui-table[data-v-f6cea14e] {\n        border-radius: 20px;\n        overflow: hidden;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n}\n.cui-table-header[data-v-f6cea14e], \n    .cui-table-footer[data-v-f6cea14e] {\n        background: var(--cui-gray-0);\n        padding: 10px;\n        display: flex;\n        align-items: center\n}\n.cui-table table[data-v-f6cea14e] {\n        border-collapse: collapse;\n        width: 100%;\n}\n.cui-table thead tr[data-v-f6cea14e] {\n        background: var(--cui-gray-0);\n}\n.cui-table-container[data-v-f6cea14e] {\n        overflow: auto;\n        flex: 1\n}\n\n";
styleInject(css_248z$3);var css_248z$2 = "\n.cui-table th:not([scope=row]) {\n        text-align: left;\n        position: -webkit-sticky;\n        position: sticky;\n        top: 0;\n        z-index: 2;\n        background: var(--cui-gray-0);\n        box-shadow: 0 2px 4px -2px rgb(0 0 0 / 15%)\n}\n.cui-table th,\n    .cui-table td {\n        padding: 3px 5px;\n}\n.cui-table tbody tr:not(.no-border) {\n        border-bottom: 1px solid var(--cui-gray-2);\n        transition: background .2s ease;\n}\n.cui-table tbody tr:not(.selected, .expanded):hover {\n        background: var(--cui-gray-2)!important;\n        font-weight: bold\n}\n.cui-table.striped tbody tr:nth-of-type(even) {\n        background-color: var(--cui-gray-0);\n}\n.cui-table tbody tr:last-of-type {\n        border-bottom: 2px solid var(--cui-gray-2);\n}\n";
styleInject(css_248z$2);script$2.render = render$2;
script$2.__scopeId = "data-v-f6cea14e";var script$1 = {
  name: 'CuiTh',
  props: {
    sort: {
      default: null,
      type: String
    }
  },
  data: function data() {
    return {
      sortDirection: null
    };
  },
  methods: {
    toggleSort: function toggleSort() {
      if (!this.sortDirection) {
        this.sortDirection = 'desc';
      } else if (this.sortDirection === 'desc') {
        this.sortDirection = 'asc';
      } else {
        this.sortDirection = null;
      }

      this.$parent.toggleSort(this.sortDirection, this.sort);
    }
  }
};var _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-67f07772");

vue.pushScopeId("data-v-67f07772");

var _hoisted_1$1 = {
  class: "cui-th"
};

var _hoisted_2$1 = /*#__PURE__*/vue.createVNode("div", {
  class: "ripple"
}, null, -1);

var _hoisted_3 = /*#__PURE__*/vue.createVNode("i", {
  class: "cui-th-sort-icon-1 fas fa-chevron-up"
}, null, -1);

var _hoisted_4 = /*#__PURE__*/vue.createVNode("i", {
  class: "cui-th-sort-icon-2 fas fa-chevron-down"
}, null, -1);

vue.popScopeId();

var render$1 = /*#__PURE__*/_withId$1(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("th", null, [vue.createVNode("div", _hoisted_1$1, [vue.renderSlot(_ctx.$slots, "default"), $props.sort ? (vue.openBlock(), vue.createBlock("div", {
    key: 0,
    class: ["cui-th-sort", {
      desc: $data.sortDirection === 'desc',
      asc: $data.sortDirection === 'asc'
    }],
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.toggleSort && $options.toggleSort.apply($options, arguments);
    })
  }, [_hoisted_2$1, _hoisted_3, _hoisted_4], 2)) : vue.createCommentVNode("", true)])]);
});var css_248z$1 = "\n.cui-th[data-v-67f07772] {\n        display: flex\n}\n.cui-th-sort[data-v-67f07772] {\n        display: flex;\n        flex-direction: column;\n        font-size: 10px;\n        align-items: center;\n        justify-content: center;\n        margin-left: 5px;\n        cursor: pointer;\n        height: 23px;\n        overflow: hidden\n}\n.cui-th-sort i[data-v-67f07772] {\n        transition: all .2s ease\n}\n.cui-th-sort.desc .cui-th-sort-icon-2[data-v-67f07772],\n    .cui-th-sort.asc .cui-th-sort-icon-2[data-v-67f07772] {\n        opacity: 0;\n        transform: rotate(180deg);\n        margin-top: -11px\n}\n.cui-th-sort.desc .cui-th-sort-icon-1[data-v-67f07772] {\n        transform: rotate(180deg)\n}\n.cui-th-sort.asc .cui-th-sort-icon-1[data-v-67f07772] {\n        transform: rotate(0deg)\n}   \n\n";
styleInject(css_248z$1);script$1.render = render$1;
script$1.__scopeId = "data-v-67f07772";var script = {
  name: 'CuiTr',
  emits: ["click"],
  props: {
    multipleSelect: {
      default: false,
      type: Boolean
    },
    clickable: {
      default: false,
      type: Boolean
    },
    rowData: {
      default: null
    }
  },
  data: function data() {
    return {
      selected: false,
      expanded: false
    };
  },
  methods: {
    handleClick: function handleClick() {
      this.$emit('click');

      if (this.$slots.expand) {
        this.expanded = !this.expanded;
      }
    }
  },
  watch: {
    rowData: {
      deep: true,
      immediate: true,
      handler: function handler() {
        var _this$rowData, _this$rowData2;

        if (((_this$rowData = this.rowData) === null || _this$rowData === void 0 ? void 0 : _this$rowData.selected) !== undefined) {
          this.selected = this.rowData.selected;
        }

        if (((_this$rowData2 = this.rowData) === null || _this$rowData2 === void 0 ? void 0 : _this$rowData2.expanded) !== undefined) {
          this.expanded = this.rowData.expanded;
        }
      }
    }
  }
};var _withId = /*#__PURE__*/vue.withScopeId("data-v-41fcaf20");

vue.pushScopeId("data-v-41fcaf20");

var _hoisted_1 = {
  key: 0,
  style: {
    "width": "15px"
  }
};
var _hoisted_2 = {
  colspan: "100%"
};

vue.popScopeId();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_cui_checkbox = vue.resolveComponent("cui-checkbox");

  return vue.openBlock(), vue.createBlock(vue.Fragment, null, [vue.createVNode("tr", {
    class: ["cui-tr-parent", {
      selected: $data.selected,
      clickable: $props.clickable || _ctx.$slots.expand,
      'no-border': $data.expanded
    }],
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.handleClick && $options.handleClick.apply($options, arguments);
    })
  }, [$props.multipleSelect ? (vue.openBlock(), vue.createBlock("td", _hoisted_1, [vue.createVNode(_component_cui_checkbox, {
    modelValue: $data.selected,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.selected = $event;
    })
  }, null, 8, ["modelValue"])])) : vue.createCommentVNode("", true), vue.renderSlot(_ctx.$slots, "parentRow")], 2), _ctx.$slots.expand ? (vue.openBlock(), vue.createBlock("tr", {
    key: 0,
    class: ["cui-tr-expand", {
      expanded: $data.expanded
    }]
  }, [vue.createVNode("td", _hoisted_2, [vue.renderSlot(_ctx.$slots, "expand")])], 2)) : vue.createCommentVNode("", true)], 64);
});var css_248z = "\n@keyframes expand-41fcaf20{\nfrom{\n            opacity: 0;\n}\nto{\n            opacity: 1;\n}\n}\n.selected[data-v-41fcaf20] {\n        background-color: var(--cui-primary)!important;\n        color: white;\n        font-weight: bold;\n}\n.clickable[data-v-41fcaf20] {\n        cursor: pointer\n}\n.cui-tr-expand[data-v-41fcaf20] {\n        display: none;\n        transition: all .2s ease\n}\n.cui-tr-expand.expanded[data-v-41fcaf20] {\n        display: table-row;\n        animation: expand-41fcaf20 .2s linear 0s;\n}\n.cui-tr-expand.expanded td[data-v-41fcaf20] {\n        padding: 20px\n}\n";
styleInject(css_248z);script.render = render;
script.__scopeId = "data-v-41fcaf20";/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,CuiButton: script$b,CuiButtonGroup: script$a,CuiButtonGroupItem: script$9,CuiMenuBar: script$8,CuiMenuBarItem: script$7,CuiCard: script$6,CuiModal: script$5,CuiInput: script$4,CuiCheckbox: script$3,CuiTable: script$2,CuiTh: script$1,CuiTr: script});var install = function installCliniUiLib(app) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default': install,CuiButton: script$b,CuiButtonGroup: script$a,CuiButtonGroupItem: script$9,CuiMenuBar: script$8,CuiMenuBarItem: script$7,CuiCard: script$6,CuiModal: script$5,CuiInput: script$4,CuiCheckbox: script$3,CuiTable: script$2,CuiTh: script$1,CuiTr: script});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    install[componentName] = component;
  }
});module.exports=install;
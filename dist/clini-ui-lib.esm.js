import { pushScopeId, popScopeId, openBlock, createBlock, createCommentVNode, toDisplayString, withScopeId, createVNode, renderSlot, Transition, withCtx, withDirectives, vModelDynamic, resolveComponent, Fragment, renderList, createSlots } from 'vue';

var script$b = {
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
};

const _withId$7 = /*#__PURE__*/withScopeId("data-v-5b8231a1");

pushScopeId("data-v-5b8231a1");

const _hoisted_1$b = {
  key: 0,
  class: "loader"
};

const _hoisted_2$9 = /*#__PURE__*/createVNode("div", {
  class: "ripple"
}, null, -1);

const _hoisted_3$6 = {
  key: 2
};

popScopeId();

const render$b = /*#__PURE__*/_withId$7((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("button", {
    class: ["cui-button", {
      danger: $props.danger,
      primary: $props.primary,
      warn: $props.warn,
      disabled: $props.disabled || $props.loading,
      loading: $props.loading,
      plain: $props.plain,
      white: $props.white
    }]
  }, [$props.loading ? (openBlock(), createBlock("div", _hoisted_1$b)) : createCommentVNode("", true), _hoisted_2$9, $props.icon !== '' ? (openBlock(), createBlock("i", {
    key: 1,
    class: $props.icon
  }, null, 2)) : createCommentVNode("", true), $props.label !== '' ? (openBlock(), createBlock("span", _hoisted_3$6, toDisplayString($props.label), 1)) : createCommentVNode("", true)], 2);
});

function styleInject(css, ref) {
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
}

var css_248z$c = "\n.cui-button[data-v-5b8231a1] {\n        height: 35px;\n        border: 0px;\n        margin: 5px;\n        border-radius: var(--cui-button-radius);\n        transition: all .2s ease;\n        position: relative;\n        user-select: none;\n        z-index: 1;\n        overflow: hidden;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        padding: 10px;\n        outline: none;\n        font-size: .8rem;\n        box-sizing: border-box;\n        background: var(--cui-dark);\n        color: white;\n        cursor: pointer;\n}\n.cui-button[data-v-5b8231a1]:not(.disabled):not(.plain):hover {\n        margin-top: 0px;\n        box-shadow: 0 10px 20px -10px var(--cui-dark);\n        margin-bottom: 10px\n}\n.cui-button.danger[data-v-5b8231a1] {\n        background: var(--cui-danger);\n}\n.cui-button.danger[data-v-5b8231a1]:not(.disabled):hover {\n        box-shadow: 0 10px 20px -10px var(--cui-danger);\n}\n.cui-button.primary[data-v-5b8231a1] {\n        background: var(--cui-primary);\n}\n.cui-button.primary[data-v-5b8231a1]:not(.disabled):hover {\n        box-shadow: 0 10px 20px -10px var(--cui-primary);\n}\n.cui-button.warn[data-v-5b8231a1] {\n        background: var(--cui-warn);\n}\n.cui-button.warn[data-v-5b8231a1]:not(.disabled):hover {\n        box-shadow: 0 10px 20px -10px var(--cui-warn);\n}\n.cui-button > i[data-v-5b8231a1]:not(:last-child) {\n        margin-right: 5px\n}\n.cui-button.disabled[data-v-5b8231a1] {\n        cursor: not-allowed;\n        opacity: 0.7;\n}\n.cui-button.loading[data-v-5b8231a1] {\n        color: rgba(255,255,255,0.5)\n}\n.cui-button.plain[data-v-5b8231a1] {\n        background: none;\n        color: var(--cui-font-color)\n}\n.cui-button.plain[data-v-5b8231a1]:hover {\n        background: var(--cui-gray-1)\n}\n.cui-button.white[data-v-5b8231a1] {\n        background: white;\n        color: var(--cui-font-color)\n}\n";
styleInject(css_248z$c);

script$b.render = render$b;
script$b.__scopeId = "data-v-5b8231a1";

var script$a = {
  name: 'ButtonGroup',
  methods: {
    changeValue(value) {
      this.$emit('change', value);
    }

  }
};

const _withId$6 = /*#__PURE__*/withScopeId("data-v-7469df4e");

pushScopeId("data-v-7469df4e");

const _hoisted_1$a = {
  class: "cui-button-group"
};

popScopeId();

const render$a = /*#__PURE__*/_withId$6((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1$a, [renderSlot(_ctx.$slots, "default")]);
});

var css_248z$b = "\n.cui-button-group[data-v-7469df4e] {\n        display:flex;\n        margin: 5px 0\n}\n";
styleInject(css_248z$b);

var css_248z$a = "\n.cui-button-group .cui-button  {\n        margin-left: 0;\n        margin-right: 0;\n        border-radius: 0\n}\n.cui-button-group .cui-button:first-of-type {\n        margin-left: 5px;\n        border-top-left-radius:15px;\n        border-bottom-left-radius: 15px;\n}\n.cui-button-group .cui-button:last-of-type {\n        border-top-left-radius: 0px!important;\n        border-bottom-left-radius: 0px!important;\n}\n\n";
styleInject(css_248z$a);

script$a.render = render$a;
script$a.__scopeId = "data-v-7469df4e";

var script$9 = {
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
    handelClick() {
      this.$parent.changeValue(this.value);
      let menuItems = document.querySelectorAll(".cui-button-group-item");
      menuItems.forEach(item => {
        item.classList.remove('selected');
      });
      this.$refs.item.classList.add("selected");
    }

  }
};

const _withId$5 = /*#__PURE__*/withScopeId("data-v-5085d32b");

pushScopeId("data-v-5085d32b");

const _hoisted_1$9 = /*#__PURE__*/createVNode("div", {
  class: "ripple"
}, null, -1);

const _hoisted_2$8 = {
  key: 1
};

popScopeId();

const render$9 = /*#__PURE__*/_withId$5((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", {
    class: "cui-button-group-item",
    onClick: _cache[1] || (_cache[1] = (...args) => $options.handelClick && $options.handelClick(...args)),
    ref: "item"
  }, [_hoisted_1$9, $props.icon !== '' ? (openBlock(), createBlock("i", {
    key: 0,
    class: $props.icon
  }, null, 2)) : createCommentVNode("", true), $props.label !== '' ? (openBlock(), createBlock("span", _hoisted_2$8, toDisplayString($props.label), 1)) : createCommentVNode("", true)], 512);
});

var css_248z$9 = "\n.cui-button-group-item[data-v-5085d32b] {\n        height: 35px;\n        border: 0px;\n        margin: 5px 0;\n        transition: all .2s ease;\n        position: relative;\n        user-select: none;\n        z-index: 1;\n        overflow: hidden;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        padding: 10px;\n        outline: none;\n        font-size: .8rem;\n        box-sizing: border-box;\n        background: white;\n        cursor: pointer;\n        border: solid 2px var(--cui-dark);\n        border-right: none\n}\n.cui-button-group-item[data-v-5085d32b]:first-of-type {\n        margin-left: 5px;\n        border-top-left-radius: var(--cui-button-radius);\n        border-bottom-left-radius: var(--cui-button-radius);\n}\n.cui-button-group-item[data-v-5085d32b]:last-of-type {\n        margin-right: 5px;\n        border-top-right-radius: var(--cui-button-radius);\n        border-bottom-right-radius: var(--cui-button-radius);\n        border-right: solid 2px var(--cui-dark)\n}\n.selected[data-v-5085d32b] {\n        background: var(--cui-dark);\n        color: white\n}\n.cui-button-group-item > i[data-v-5085d32b]:not(:last-child) {\n        margin-right: 5px\n}\n\n\n";
styleInject(css_248z$9);

script$9.render = render$9;
script$9.__scopeId = "data-v-5085d32b";

var script$8 = {
  name: 'CuiMenuBar',
  methods: {
    changeValue(value) {
      this.$emit('change', value);
    }

  }
};

const _withId$4 = /*#__PURE__*/withScopeId("data-v-47b2ae79");

pushScopeId("data-v-47b2ae79");

const _hoisted_1$8 = {
  class: "cui-menu-bar",
  ref: "menuBar"
};
const _hoisted_2$7 = {
  class: "menu-item"
};
const _hoisted_3$5 = {
  class: "menu-item"
};
const _hoisted_4$4 = {
  class: "menu-item"
};

popScopeId();

const render$8 = /*#__PURE__*/_withId$4((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1$8, [createVNode("div", _hoisted_2$7, [renderSlot(_ctx.$slots, "left")]), createVNode("div", _hoisted_3$5, [renderSlot(_ctx.$slots, "center")]), createVNode("div", _hoisted_4$4, [renderSlot(_ctx.$slots, "right")])], 512);
});

var css_248z$8 = "\n.cui-menu-bar[data-v-47b2ae79] {\n        background: var(--cui-dark);\n        height: 45px;\n        border-bottom-left-radius: 15px;\n        border-bottom-right-radius: 15px;\n        padding: 0 15px;\n        position: relative;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        color: var(--cui-gray-2);\n        font-weight: bold;\n        font-size: 16px;\n}\n.cui-menu-bar > .menu-item[data-v-47b2ae79] {\n        display: flex;\n}\n";
styleInject(css_248z$8);

script$8.render = render$8;
script$8.__scopeId = "data-v-47b2ae79";

var script$7 = {
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
    handelClick() {
      this.$parent.changeValue(this.value);
      let menuItems = document.querySelectorAll(".cui-menu-bar-item");
      menuItems.forEach(item => {
        item.classList.remove('selected');
      });
      this.$refs.item.classList.add("selected");
    }

  }
};

const _hoisted_1$7 = /*#__PURE__*/createVNode("div", {
  class: "ripple"
}, null, -1);

const _hoisted_2$6 = /*#__PURE__*/createVNode("div", {
  class: "menu-bar-line"
}, null, -1);

const _hoisted_3$4 = {
  class: "content"
};
const _hoisted_4$3 = {
  key: 1
};
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", {
    class: "cui-menu-bar-item",
    onClick: _cache[1] || (_cache[1] = (...args) => $options.handelClick && $options.handelClick(...args)),
    ref: "item"
  }, [_hoisted_1$7, _hoisted_2$6, createVNode("div", _hoisted_3$4, [$props.icon !== '' ? (openBlock(), createBlock("i", {
    key: 0,
    class: $props.icon
  }, null, 2)) : createCommentVNode("", true), $props.label !== '' ? (openBlock(), createBlock("span", _hoisted_4$3, toDisplayString($props.label), 1)) : createCommentVNode("", true)])], 512);
}

var css_248z$7 = "\n.cui-menu-bar-item {\n        height: 45px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin: 0 10px;\n        position: relative;\n        padding: 0 5px\n}\n.cui-menu-bar-item:hover {\n        cursor: pointer;\n        color: white;\n}\n.cui-menu-bar-item > .content {\n        transition: all .2s ease;\n}\n.cui-menu-bar-item:hover > .content {\n        padding-bottom: 5px;\n}\n.cui-menu-bar-item > i:not(:last-child) {\n        margin-right: 5px\n}\n.cui-menu-bar-item.selected {\n        color: white;\n}\n.menu-bar-line {\n        opacity: 0;\n        transition: all .2s;\n        background: white;\n        width: 100%;\n        height: 2px;\n        bottom: 0;\n        position: absolute;\n}\n.cui-menu-bar-item.selected > .menu-bar-line {\n        opacity: 100\n}\n";
styleInject(css_248z$7);

script$7.render = render$7;

var script$6 = {
  name: "CuiCard",
  props: {
    noPadding: {
      default: false,
      type: Boolean
    }
  },

  data() {
    return {
      test: false
    };
  }

};

const _hoisted_1$6 = {
  class: "cui-card"
};
const _hoisted_2$5 = {
  key: 0,
  class: "cui-card-header"
};
const _hoisted_3$3 = {
  key: 1,
  class: "footer"
};
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1$6, [_ctx.$slots.header ? (openBlock(), createBlock("div", _hoisted_2$5, [renderSlot(_ctx.$slots, "header")])) : createCommentVNode("", true), createVNode("div", {
    class: ["cui-card-body", {
      'no-padding': $props.noPadding
    }]
  }, [renderSlot(_ctx.$slots, "default")], 2), _ctx.$slots.footer ? (openBlock(), createBlock("div", _hoisted_3$3, [renderSlot(_ctx.$slots, "footer")])) : createCommentVNode("", true)]);
}

var css_248z$6 = "\n.cui-card {\n        border-radius: 20px;\n        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 30%);\n        margin: 10px;\n        overflow: hidden;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        background: white;\n}\n.cui-card:not(adaptive) {\n        height: calc(100% - 20px);\n        width: calc(100% - 20px);\n}\n.cui-card-header {\n        background: var(--cui-gray-0);\n        padding: 10px;\n        box-shadow: 1px 1px 4px 0px rgb(0 0 0 / 15%);\n        display: flex;\n        align-items: center;\n}\n.cui-card-body {\n        flex: 1;\n        overflow: auto;\n}\n.cui-card-body:not(.no-padding) {\n        padding: 10px\n}\n.cui-card > .footer {\n        padding: 10px;\n        display: flex;\n        align-items: center;\n}\n\n";
styleInject(css_248z$6);

script$6.render = render$6;

var script$5 = {
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

  data() {
    return {
      showContent: false
    };
  },

  methods: {
    handelClick(event) {
      if (event.target.matches('.cui-modal-content') && this.closable) {
        this.$emit('close');
      }
    }

  },
  watch: {
    visible() {
      if (this.visible) {
        setTimeout(function () {
          this.showContent = true;
        }.bind(this), 100);
      } else {
        this.showContent = false;
      }
    }

  }
};

const _hoisted_1$5 = {
  key: 0,
  class: "cui-modal-overlay"
};
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, {
    name: "modal-trans"
  }, {
    default: withCtx(() => [$props.visible ? (openBlock(), createBlock("div", _hoisted_1$5, [createVNode(Transition, {
      name: "modal-content-trans"
    }, {
      default: withCtx(() => [$data.showContent ? (openBlock(), createBlock("div", {
        key: 0,
        class: "cui-modal-content",
        onClick: _cache[1] || (_cache[1] = (...args) => $options.handelClick && $options.handelClick(...args))
      }, [renderSlot(_ctx.$slots, "default")])) : createCommentVNode("", true)]),
      _: 3
    })])) : createCommentVNode("", true)]),
    _: 1
  });
}

var css_248z$5 = "\n.cui-modal-overlay {\n        position: fixed;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        z-index: 100;\n        background: rgba(0,0,0,.2);\n        backdrop-filter: saturate(180%) blur(10px);\n        overflow: hidden\n}\n.cui-modal-content {\n        position: relative;\n        width: 100%;\n        height: 100%;\n        padding: 100px;\n        box-sizing: border-box;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n}\n.modal-trans-enter-active, \n    .modal-content-trans-enter-active {\n        transition: all .15s ease;\n}\n.modal-content-trans-enter-active {        \n        animation: rebound .3s\n}\n.modal-trans-leave-active, \n    .modal-content-trans-leave-active {\n        transition: all .15s ease\n}\n.modal-trans-enter-from,\n    .modal-trans-leave-to {\n        opacity: 0;\n}\n.modal-content-trans-enter-from,\n    .modal-content-trans-leave-to {\n        transform: scale(.7)\n}\n@keyframes rebound {\n0% {transform: scale(.8)}\n40% {transform: scale(1.08)}\n80% {transform: scale(0.98)}\n100% {transform: scale(1)}\n}\n";
styleInject(css_248z$5);

script$5.render = render$5;

var script$4 = {
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
    changeValue() {
      this.$emit('update:modelValue', this.modelValue);
    }

  },

  data() {
    return {
      trans: {
        required: '*必須'
      },
      error: ''
    };
  }

};

const _withId$3 = /*#__PURE__*/withScopeId("data-v-73c5365b");

pushScopeId("data-v-73c5365b");

const _hoisted_1$4 = {
  key: 0,
  class: "cui-input-label"
};
const _hoisted_2$4 = {
  style: {
    "margin-right": "10px"
  }
};
const _hoisted_3$2 = {
  key: 0
};
const _hoisted_4$2 = {
  style: {
    "position": "relative"
  }
};
const _hoisted_5$1 = {
  key: 0,
  class: "cui-input-append"
};
const _hoisted_6 = {
  class: "cui-input-note"
};

popScopeId();

const render$4 = /*#__PURE__*/_withId$3((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", null, [$props.label ? (openBlock(), createBlock("label", _hoisted_1$4, [createVNode("span", _hoisted_2$4, toDisplayString($props.label), 1), $props.required ? (openBlock(), createBlock("span", _hoisted_3$2, toDisplayString($data.trans.required), 1)) : createCommentVNode("", true)])) : createCommentVNode("", true), createVNode("div", _hoisted_4$2, [$props.append ? (openBlock(), createBlock("span", _hoisted_5$1, toDisplayString($props.append), 1)) : createCommentVNode("", true), withDirectives(createVNode("input", {
    class: ["cui-input", {
      'has-icon': $props.icon
    }],
    style: {
      width: $props.width
    },
    type: $props.type,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $props.modelValue = $event),
    onInput: _cache[2] || (_cache[2] = (...args) => $options.changeValue && $options.changeValue(...args)),
    disabled: $props.disabled,
    clearable: ""
  }, null, 46, ["type", "disabled"]), [[vModelDynamic, $props.modelValue]]), $props.icon ? (openBlock(), createBlock("span", {
    key: 1,
    class: $props.icon + ' cui-input-icon'
  }, null, 2)) : createCommentVNode("", true)]), createVNode("div", _hoisted_6, [createVNode("span", null, toDisplayString($data.error), 1)])]);
});

var css_248z$4 = "\n.cui-input-label[data-v-73c5365b] {\n        font-size: 14px;\n        margin-left: 10px\n}\n.cui-input[data-v-73c5365b] {\n        background: var(--cui-gray-0);\n        border: none;\n        border-radius: 12px;\n        height: 26px;\n        padding: 5px 10px;\n        transition: all .2s ease\n}\n.cui-input[data-v-73c5365b]:focus {\n        outline: none;\n        padding-left: 13px;\n        padding-right: 7px;\n        background: var(--cui-gray-1)\n}\n.cui-input-note[data-v-73c5365b] {\n        font-size: 12px;\n        margin-left: 10px;\n        color: var(--cui-danger);\n        height: 15px;\n        line-height: 12px;\n}\n.cui-input-icon[data-v-73c5365b] {\n        position: absolute;\n        left:0;\n        background: var(--cui-gray-0);\n        border-radius: 12px;\n        padding: 10px;\n        transition: all .2s ease;\n}\n.has-icon[data-v-73c5365b] {\n        text-indent: 28px;\n}\n.cui-input:focus + .cui-input-icon[data-v-73c5365b] {\n        margin: -3px;\n        box-shadow: 0 10px 20px -10px var(--cui-dark);\n        background: white;\n}\n.cui-input-append[data-v-73c5365b] {\n        position: absolute;\n        right: 0;\n        height: 34px;\n        background: white;\n        border-radius: 12px;\n        line-height: 34px;\n        padding: 0 10px;\n        border: solid 1px var(--cui-gray-1);\n        font-size: 14px\n}\n";
styleInject(css_248z$4);

script$4.render = render$4;
script$4.__scopeId = "data-v-73c5365b";

var script$3 = {
  name: 'CuiCheckbox',
  props: {
    modelValue: {
      default: false,
      type: Boolean
    }
  },

  data() {
    return {
      selected: false
    };
  }

};

const _hoisted_1$3 = {
  key: 0
};
const _hoisted_2$3 = {
  key: 1
};
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", null, [$props.modelValue ? (openBlock(), createBlock("span", _hoisted_1$3, "0")) : (openBlock(), createBlock("span", _hoisted_2$3, "S"))]);
}

script$3.render = render$3;

var script$2 = {
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

  data() {
    return {
      loading: false,
      trRefs: [],
      sort: {
        direction: null,
        prop: null
      }
    };
  },

  beforeUpdate() {
    this.trRefs = [];
  },

  methods: {
    setItemRef(el) {
      if (el) {
        this.trRefs.push(el);
      }
    },

    rowClick(row, index) {
      // this.$emit('click', {row: row, index: index})
      if (this.multipleSelect) {
        this.trRefs[index].selected = !this.trRefs[index].selected;
        let selectedItems = this.trRefs.filter(item => item.selected);
        this.$emit('select', {
          row: row,
          index: index,
          selectedItems: selectedItems
        });
      } else if (this.singleSelect) {
        this.trRefs.forEach(item => item.selected = false);
        this.trRefs[index].selected = true;
        this.$emit('select', {
          row: row,
          index: index,
          selected: this.trRefs[index].selected
        });
      }
    },

    toggleSort(direction, prop) {
      this.sort.direction = direction;
      this.sort.prop = prop;
    }

  },
  computed: {
    displayData() {
      let data = JSON.parse(JSON.stringify(this.data));
      let direction = this.sort.direction;
      let prop = this.sort.prop;

      if (direction === 'desc') {
        data.sort((a, b) => a[prop] > b[prop] ? 1 : -1);
      } else if (direction === 'asc') {
        data.sort((a, b) => a[prop] < b[prop] ? 1 : -1);
      }

      return data;
    }

  }
};

const _withId$2 = /*#__PURE__*/withScopeId("data-v-f6cea14e");

pushScopeId("data-v-f6cea14e");

const _hoisted_1$2 = {
  key: 0,
  class: "cui-table-header"
};
const _hoisted_2$2 = {
  class: "cui-table-container"
};
const _hoisted_3$1 = {
  key: 0
};
const _hoisted_4$1 = {
  ref: "body"
};
const _hoisted_5 = {
  key: 1,
  class: "cui-table-footer"
};

popScopeId();

const render$2 = /*#__PURE__*/_withId$2((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_cui_tr = resolveComponent("cui-tr");

  return openBlock(), createBlock("div", {
    class: ["cui-table", {
      striped: $props.striped
    }]
  }, [_ctx.$slots.header ? (openBlock(), createBlock("div", _hoisted_1$2, [renderSlot(_ctx.$slots, "header")])) : createCommentVNode("", true), createVNode("div", _hoisted_2$2, [createVNode("table", null, [createVNode("thead", null, [createVNode("tr", null, [$props.multipleSelect ? (openBlock(), createBlock("th", _hoisted_3$1)) : createCommentVNode("", true), renderSlot(_ctx.$slots, "thead")])]), createVNode("tbody", _hoisted_4$1, [(openBlock(true), createBlock(Fragment, null, renderList($options.displayData, (row, index) => {
    return openBlock(), createBlock(_component_cui_tr, {
      key: index,
      rowData: row,
      ref: $options.setItemRef,
      onClick: $event => $options.rowClick(row, index),
      multipleSelect: $props.multipleSelect,
      clickable: $props.clickable
    }, createSlots({
      parentRow: _withId$2(() => [renderSlot(_ctx.$slots, "row", {
        row: row
      })]),
      _: 2
    }, [_ctx.$slots.expand ? {
      name: "expand",
      fn: _withId$2(() => [renderSlot(_ctx.$slots, "expand", {
        expand: row
      })])
    } : undefined]), 1032, ["rowData", "onClick", "multipleSelect", "clickable"]);
  }), 128))], 512)])]), _ctx.$slots.footer ? (openBlock(), createBlock("div", _hoisted_5, [renderSlot(_ctx.$slots, "footer")])) : createCommentVNode("", true)], 2);
});

var css_248z$3 = "\n.cui-table[data-v-f6cea14e] {\n        border-radius: 20px;\n        overflow: hidden;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n}\n.cui-table-header[data-v-f6cea14e], \n    .cui-table-footer[data-v-f6cea14e] {\n        background: var(--cui-gray-0);\n        padding: 10px;\n        display: flex;\n        align-items: center\n}\n.cui-table table[data-v-f6cea14e] {\n        border-collapse: collapse;\n        width: 100%;\n}\n.cui-table thead tr[data-v-f6cea14e] {\n        background: var(--cui-gray-0);\n}\n.cui-table-container[data-v-f6cea14e] {\n        overflow: auto;\n        flex: 1\n}\n\n";
styleInject(css_248z$3);

var css_248z$2 = "\n.cui-table th:not([scope=row]) {\n        text-align: left;\n        position: -webkit-sticky;\n        position: sticky;\n        top: 0;\n        z-index: 2;\n        background: var(--cui-gray-0);\n        box-shadow: 0 2px 4px -2px rgb(0 0 0 / 15%)\n}\n.cui-table th,\n    .cui-table td {\n        padding: 3px 5px;\n}\n.cui-table tbody tr:not(.no-border) {\n        border-bottom: 1px solid var(--cui-gray-2);\n        transition: background .2s ease;\n}\n.cui-table tbody tr:not(.selected, .expanded):hover {\n        background: var(--cui-gray-2)!important;\n        font-weight: bold\n}\n.cui-table.striped tbody tr:nth-of-type(even) {\n        background-color: var(--cui-gray-0);\n}\n.cui-table tbody tr:last-of-type {\n        border-bottom: 2px solid var(--cui-gray-2);\n}\n";
styleInject(css_248z$2);

script$2.render = render$2;
script$2.__scopeId = "data-v-f6cea14e";

var script$1 = {
  name: 'CuiTh',
  props: {
    sort: {
      default: null,
      type: String
    }
  },

  data() {
    return {
      sortDirection: null
    };
  },

  methods: {
    toggleSort() {
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
};

const _withId$1 = /*#__PURE__*/withScopeId("data-v-67f07772");

pushScopeId("data-v-67f07772");

const _hoisted_1$1 = {
  class: "cui-th"
};

const _hoisted_2$1 = /*#__PURE__*/createVNode("div", {
  class: "ripple"
}, null, -1);

const _hoisted_3 = /*#__PURE__*/createVNode("i", {
  class: "cui-th-sort-icon-1 fas fa-chevron-up"
}, null, -1);

const _hoisted_4 = /*#__PURE__*/createVNode("i", {
  class: "cui-th-sort-icon-2 fas fa-chevron-down"
}, null, -1);

popScopeId();

const render$1 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("th", null, [createVNode("div", _hoisted_1$1, [renderSlot(_ctx.$slots, "default"), $props.sort ? (openBlock(), createBlock("div", {
    key: 0,
    class: ["cui-th-sort", {
      desc: $data.sortDirection === 'desc',
      asc: $data.sortDirection === 'asc'
    }],
    onClick: _cache[1] || (_cache[1] = (...args) => $options.toggleSort && $options.toggleSort(...args))
  }, [_hoisted_2$1, _hoisted_3, _hoisted_4], 2)) : createCommentVNode("", true)])]);
});

var css_248z$1 = "\n.cui-th[data-v-67f07772] {\n        display: flex\n}\n.cui-th-sort[data-v-67f07772] {\n        display: flex;\n        flex-direction: column;\n        font-size: 10px;\n        align-items: center;\n        justify-content: center;\n        margin-left: 5px;\n        cursor: pointer;\n        height: 23px;\n        overflow: hidden\n}\n.cui-th-sort i[data-v-67f07772] {\n        transition: all .2s ease\n}\n.cui-th-sort.desc .cui-th-sort-icon-2[data-v-67f07772],\n    .cui-th-sort.asc .cui-th-sort-icon-2[data-v-67f07772] {\n        opacity: 0;\n        transform: rotate(180deg);\n        margin-top: -11px\n}\n.cui-th-sort.desc .cui-th-sort-icon-1[data-v-67f07772] {\n        transform: rotate(180deg)\n}\n.cui-th-sort.asc .cui-th-sort-icon-1[data-v-67f07772] {\n        transform: rotate(0deg)\n}   \n\n";
styleInject(css_248z$1);

script$1.render = render$1;
script$1.__scopeId = "data-v-67f07772";

var script = {
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

  data() {
    return {
      selected: false,
      expanded: false
    };
  },

  methods: {
    handleClick() {
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

      handler() {
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
};

const _withId = /*#__PURE__*/withScopeId("data-v-41fcaf20");

pushScopeId("data-v-41fcaf20");

const _hoisted_1 = {
  key: 0,
  style: {
    "width": "15px"
  }
};
const _hoisted_2 = {
  colspan: "100%"
};

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_cui_checkbox = resolveComponent("cui-checkbox");

  return openBlock(), createBlock(Fragment, null, [createVNode("tr", {
    class: ["cui-tr-parent", {
      selected: $data.selected,
      clickable: $props.clickable || _ctx.$slots.expand,
      'no-border': $data.expanded
    }],
    onClick: _cache[2] || (_cache[2] = (...args) => $options.handleClick && $options.handleClick(...args))
  }, [$props.multipleSelect ? (openBlock(), createBlock("td", _hoisted_1, [createVNode(_component_cui_checkbox, {
    modelValue: $data.selected,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.selected = $event)
  }, null, 8, ["modelValue"])])) : createCommentVNode("", true), renderSlot(_ctx.$slots, "parentRow")], 2), _ctx.$slots.expand ? (openBlock(), createBlock("tr", {
    key: 0,
    class: ["cui-tr-expand", {
      expanded: $data.expanded
    }]
  }, [createVNode("td", _hoisted_2, [renderSlot(_ctx.$slots, "expand")])], 2)) : createCommentVNode("", true)], 64);
});

var css_248z = "\n@keyframes expand-41fcaf20{\nfrom{\n            opacity: 0;\n}\nto{\n            opacity: 1;\n}\n}\n.selected[data-v-41fcaf20] {\n        background-color: var(--cui-primary)!important;\n        color: white;\n        font-weight: bold;\n}\n.clickable[data-v-41fcaf20] {\n        cursor: pointer\n}\n.cui-tr-expand[data-v-41fcaf20] {\n        display: none;\n        transition: all .2s ease\n}\n.cui-tr-expand.expanded[data-v-41fcaf20] {\n        display: table-row;\n        animation: expand-41fcaf20 .2s linear 0s;\n}\n.cui-tr-expand.expanded td[data-v-41fcaf20] {\n        padding: 20px\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-41fcaf20";

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CuiButton: script$b,
    CuiButtonGroup: script$a,
    CuiButtonGroupItem: script$9,
    CuiMenuBar: script$8,
    CuiMenuBarItem: script$7,
    CuiCard: script$6,
    CuiModal: script$5,
    CuiInput: script$4,
    CuiCheckbox: script$3,
    CuiTable: script$2,
    CuiTh: script$1,
    CuiTr: script
});

// Import vue components

const install = function installCliniUiLib(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export default install;
export { script$b as CuiButton, script$a as CuiButtonGroup, script$9 as CuiButtonGroupItem, script$6 as CuiCard, script$3 as CuiCheckbox, script$4 as CuiInput, script$8 as CuiMenuBar, script$7 as CuiMenuBarItem, script$5 as CuiModal, script$2 as CuiTable, script$1 as CuiTh, script as CuiTr };

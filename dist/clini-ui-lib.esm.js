import { pushScopeId, popScopeId, openBlock, createBlock, createVNode, createCommentVNode, toDisplayString, withScopeId, renderSlot, Transition, withCtx, withDirectives, vModelDynamic, vModelCheckbox, resolveComponent, withModifiers, Fragment, renderList, createTextVNode, vModelText, mergeProps, createSlots, defineComponent, createApp } from 'vue';

var script$k = {
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
    },
    bigIcon: {
      default: true,
      type: Boolean
    }
  },
  emits: ['click'],
  methods: {
    handelClick() {
      if (!this.disabled) {
        this.$emit('click');
      }
    }

  }
};

const _withId$e = /*#__PURE__*/withScopeId("data-v-2de35a3c");

pushScopeId("data-v-2de35a3c");

const _hoisted_1$h = {
  key: 0,
  class: "loader-button"
};

const _hoisted_2$f = /*#__PURE__*/createVNode("div", {
  class: "ripple"
}, null, -1);

const _hoisted_3$9 = {
  key: 2
};

popScopeId();

const render$k = /*#__PURE__*/_withId$e((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", {
    class: ["cui-button-wrapper", {
      disabled: $props.disabled
    }],
    onClick: _cache[1] || (_cache[1] = (...args) => $options.handelClick && $options.handelClick(...args))
  }, [createVNode("button", {
    class: ["cui-button", {
      danger: $props.danger,
      primary: $props.primary,
      warn: $props.warn,
      disabled: $props.disabled || $props.loading,
      loading: $props.loading,
      plain: $props.plain,
      white: $props.white,
      bigIcon: $props.bigIcon
    }]
  }, [$props.loading ? (openBlock(), createBlock("div", _hoisted_1$h)) : createCommentVNode("", true), _hoisted_2$f, $props.icon !== '' ? (openBlock(), createBlock("i", {
    key: 1,
    class: $props.icon
  }, null, 2)) : createCommentVNode("", true), $props.label !== '' ? (openBlock(), createBlock("span", _hoisted_3$9, toDisplayString($props.label), 1)) : createCommentVNode("", true)], 2)], 2);
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

var css_248z$o = "\n.cui-button-wrapper[data-v-2de35a3c] {\n        width: fit-content;\n}\n.cui-button-wrapper[data-v-2de35a3c]:not(.disabled) {\n        cursor: pointer\n}\n.cui-button-wrapper:hover .cui-button[data-v-2de35a3c]:not(.disabled):not(.plain) {\n        transform: translate(0px, -5px);\n        margin-bottom: 5px;\n        box-shadow: 0 10px 20px -10px var(--cui-dark)\n}\n.cui-button[data-v-2de35a3c] {\n        height: 35px;\n        border: 0px;\n        margin: 5px;\n        border-radius: var(--cui-button-radius);\n        transition: all .2s ease;\n        position: relative;\n        user-select: none;\n        z-index: 1;\n        overflow: hidden;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        padding: 10px;\n        outline: none;\n        font-size: .8rem;\n        box-sizing: border-box;\n        background: var(--cui-dark);\n        color: white;\n        cursor: pointer\n}\n.cui-button.danger[data-v-2de35a3c] {\n        background: var(--cui-danger);\n}\n.cui-button.danger[data-v-2de35a3c]:not(.disabled):hover {\n        box-shadow: 0 10px 20px -10px var(--cui-danger);\n}\n.cui-button.primary[data-v-2de35a3c] {\n        background: var(--cui-primary);\n}\n.cui-button.primary[data-v-2de35a3c]:not(.disabled):hover {\n        box-shadow: 0 10px 20px -10px var(--cui-primary);\n}\n.cui-button.warn[data-v-2de35a3c] {\n        background: var(--cui-warn);\n}\n.cui-button.warn[data-v-2de35a3c]:not(.disabled):hover {\n        box-shadow: 0 10px 20px -10px var(--cui-warn);\n}\n.cui-button > i[data-v-2de35a3c]:not(:last-child) {\n        margin-right: 5px\n}\n.cui-button.disabled[data-v-2de35a3c] {\n        cursor: not-allowed;\n        opacity: 0.7;\n}\n.cui-button.loading[data-v-2de35a3c] {\n        color: rgba(255,255,255,0.5)\n}\n.cui-button.plain[data-v-2de35a3c] {\n        background: none;\n        color: var(--cui-font-color)\n}\n.cui-button.plain[data-v-2de35a3c]:hover {\n        background: var(--cui-gray-1)\n}\n.cui-button.white[data-v-2de35a3c] {\n        background: white;\n        color: var(--cui-font-color)\n}\n.loader-button[data-v-2de35a3c] {\n        justify-content: center;\n        align-items: center;\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        display: flex\n}\n.cui-button.bigIcon i[data-v-2de35a3c] {\n        font-size: 20px;\n}\n";
styleInject(css_248z$o);

script$k.render = render$k;
script$k.__scopeId = "data-v-2de35a3c";

var script$j = {
  name: 'ButtonGroup',
  props: {
    modelValue: {
      default: ''
    }
  },
  emits: ['update:modelValue', 'change'],
  methods: {
    changeValue(value) {
      this.$emit('change', value);
      this.$emit('update:modelValue', value);
    },

    selectItem() {
      let menuItems = document.querySelectorAll(".cui-button-group-item");
      menuItems.forEach(item => {
        item.classList.remove('selected');

        if (item.attributes.value.value == this.modelValue) {
          item.classList.add("selected");
        }
      });
    }

  },

  mounted() {
    this.selectItem();
  },

  watch: {
    modelValue() {
      this.selectItem();
    }

  }
};

const _withId$d = /*#__PURE__*/withScopeId("data-v-faeef8f4");

pushScopeId("data-v-faeef8f4");

const _hoisted_1$g = {
  class: "cui-button-group"
};

popScopeId();

const render$j = /*#__PURE__*/_withId$d((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1$g, [renderSlot(_ctx.$slots, "default")]);
});

var css_248z$n = "\n.cui-button-group[data-v-faeef8f4] {\n        display:flex;\n        margin: 5px 0\n}\n";
styleInject(css_248z$n);

var css_248z$m = "\n.cui-button-group .cui-button  {\n        margin-left: 0;\n        margin-right: 0;\n        border-radius: 0\n}\n.cui-button-group .cui-button:first-of-type {\n        margin-left: 5px;\n        border-top-left-radius:15px;\n        border-bottom-left-radius: 15px;\n}\n.cui-button-group .cui-button:last-of-type {\n        border-top-left-radius: 0px!important;\n        border-bottom-left-radius: 0px!important;\n}\n\n";
styleInject(css_248z$m);

script$j.render = render$j;
script$j.__scopeId = "data-v-faeef8f4";

var script$i = {
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
    }

  }
};

const _withId$c = /*#__PURE__*/withScopeId("data-v-1f8e1c39");

pushScopeId("data-v-1f8e1c39");

const _hoisted_1$f = /*#__PURE__*/createVNode("div", {
  class: "ripple"
}, null, -1);

const _hoisted_2$e = {
  key: 1
};

popScopeId();

const render$i = /*#__PURE__*/_withId$c((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", {
    class: "cui-button-group-item",
    onClick: _cache[1] || (_cache[1] = (...args) => $options.handelClick && $options.handelClick(...args)),
    ref: "item",
    value: $props.value
  }, [_hoisted_1$f, $props.icon !== '' ? (openBlock(), createBlock("i", {
    key: 0,
    class: $props.icon
  }, null, 2)) : createCommentVNode("", true), $props.label !== '' ? (openBlock(), createBlock("span", _hoisted_2$e, toDisplayString($props.label), 1)) : createCommentVNode("", true)], 8, ["value"]);
});

var css_248z$l = "\n.cui-button-group-item[data-v-1f8e1c39] {\n        height: 35px;\n        border: 0px;\n        margin: 5px 0;\n        transition: all .2s ease;\n        position: relative;\n        user-select: none;\n        z-index: 1;\n        overflow: hidden;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        padding: 10px;\n        outline: none;\n        font-size: .8rem;\n        box-sizing: border-box;\n        background: white;\n        cursor: pointer;\n        border: solid 2px var(--cui-dark);\n        border-right: none\n}\n.cui-button-group-item[data-v-1f8e1c39]:first-of-type {\n        margin-left: 5px;\n        border-top-left-radius: var(--cui-button-radius);\n        border-bottom-left-radius: var(--cui-button-radius);\n}\n.cui-button-group-item[data-v-1f8e1c39]:last-of-type {\n        margin-right: 5px;\n        border-top-right-radius: var(--cui-button-radius);\n        border-bottom-right-radius: var(--cui-button-radius);\n        border-right: solid 2px var(--cui-dark)\n}\n.selected[data-v-1f8e1c39] {\n        background: var(--cui-dark);\n        color: white\n}\n.cui-button-group-item > i[data-v-1f8e1c39]:not(:last-child) {\n        margin-right: 5px\n}\n\n\n";
styleInject(css_248z$l);

script$i.render = render$i;
script$i.__scopeId = "data-v-1f8e1c39";

var script$h = {
  props: {
    value: {
      default: null
    }
  },
  name: 'CuiMenuBar',

  mounted() {
    this.propChange();
  },

  methods: {
    changeValue(value) {
      this.$emit('change', value);
    },

    propChange() {
      let menuItems = document.querySelectorAll(".cui-menu-bar-item");
      menuItems.forEach(item => {
        item.classList.remove('selected');

        if (item.getAttribute("value") === this.value) {
          item.classList.add("selected");
        }
      });
    }

  },
  watch: {
    value() {
      this.propChange();
    }

  }
};

const _withId$b = /*#__PURE__*/withScopeId("data-v-4289ed8a");

pushScopeId("data-v-4289ed8a");

const _hoisted_1$e = {
  class: "cui-menu-bar",
  ref: "menuBar"
};
const _hoisted_2$d = {
  class: "menu-item"
};
const _hoisted_3$8 = {
  class: "menu-item"
};
const _hoisted_4$6 = {
  class: "menu-item"
};

popScopeId();

const render$h = /*#__PURE__*/_withId$b((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1$e, [createVNode("div", _hoisted_2$d, [renderSlot(_ctx.$slots, "left")]), createVNode("div", _hoisted_3$8, [renderSlot(_ctx.$slots, "center")]), createVNode("div", _hoisted_4$6, [renderSlot(_ctx.$slots, "right")])], 512);
});

var css_248z$k = "\n.cui-menu-bar[data-v-4289ed8a] {\n        background: var(--cui-dark);\n        height: 45px;\n        border-bottom-left-radius: 15px;\n        border-bottom-right-radius: 15px;\n        padding: 0 15px;\n        position: relative;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        color: var(--cui-gray-2);\n        font-weight: bold;\n        font-size: 16px;\n}\n.cui-menu-bar > .menu-item[data-v-4289ed8a] {\n        display: flex;\n        align-items: center;\n}\n";
styleInject(css_248z$k);

script$h.render = render$h;
script$h.__scopeId = "data-v-4289ed8a";

var script$g = {
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
    }

  }
};

const _hoisted_1$d = /*#__PURE__*/createVNode("div", {
  class: "ripple"
}, null, -1);

const _hoisted_2$c = /*#__PURE__*/createVNode("div", {
  class: "menu-bar-line"
}, null, -1);

const _hoisted_3$7 = {
  class: "cui-menu-bar-item-content"
};
const _hoisted_4$5 = {
  key: 1
};
function render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", {
    class: "cui-menu-bar-item",
    onClick: _cache[1] || (_cache[1] = (...args) => $options.handelClick && $options.handelClick(...args)),
    ref: "item",
    value: $props.value
  }, [_hoisted_1$d, _hoisted_2$c, createVNode("div", _hoisted_3$7, [$props.icon !== '' ? (openBlock(), createBlock("i", {
    key: 0,
    class: $props.icon
  }, null, 2)) : createCommentVNode("", true), $props.label !== '' ? (openBlock(), createBlock("span", _hoisted_4$5, toDisplayString($props.label), 1)) : createCommentVNode("", true)])], 8, ["value"]);
}

var css_248z$j = "\n.cui-menu-bar-item {\n        height: 45px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin: 0 10px;\n        position: relative;\n        padding: 0;\n        transition: all .2s ease\n}\n.cui-menu-bar-item:not(.selected):hover {\n        cursor: pointer;\n        color: white;\n        transform: translateY(-3px);\n}\n.cui-menu-bar-item > .content {\n        transition: all .2s ease;\n}\n.cui-menu-bar-item:hover > .content {\n        padding-bottom: 5px;\n}\n.cui-menu-bar-item > i:not(:last-child) {\n        margin-right: 5px\n}\n.cui-menu-bar-item.selected {\n        color: white;\n}\n.menu-bar-line {\n        opacity: 0;\n        transition: all .2s;\n        background: white;\n        width: 100%;\n        height: 2px;\n        bottom: 0;\n        position: absolute;\n}\n.cui-menu-bar-item.selected > .menu-bar-line {\n        opacity: 100\n}\n.cui-menu-bar-item-content i {\n        margin-right: 5px;\n}\n";
styleInject(css_248z$j);

script$g.render = render$g;

var script$f = {
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

const _hoisted_1$c = {
  class: "cui-card-padding"
};
const _hoisted_2$b = {
  class: "cui-card"
};
const _hoisted_3$6 = {
  key: 0,
  class: "cui-card-header"
};
const _hoisted_4$4 = {
  key: 1,
  class: "footer"
};
function render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1$c, [createVNode("div", _hoisted_2$b, [_ctx.$slots.header ? (openBlock(), createBlock("div", _hoisted_3$6, [renderSlot(_ctx.$slots, "header")])) : createCommentVNode("", true), createVNode("div", {
    class: ["cui-card-body", {
      'no-padding': $props.noPadding
    }]
  }, [renderSlot(_ctx.$slots, "default")], 2), _ctx.$slots.footer ? (openBlock(), createBlock("div", _hoisted_4$4, [renderSlot(_ctx.$slots, "footer")])) : createCommentVNode("", true)])]);
}

var css_248z$i = "\n.cui-card-padding {\n        padding: 10px;\n        width: calc(100% - 20px);\n        height: calc(100% - 20px)\n}\n.cui-card {\n        border-radius: 20px;\n        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 30%);\n        overflow: hidden;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        background: white;\n}\n.cui-card:not(.adaptive) {\n        height: calc(100%);\n        width: calc(100%);\n}\n.cui-card-header {\n        background: var(--cui-gray-0);\n        padding: 10px;\n        box-shadow: 1px 1px 4px 0px rgb(0 0 0 / 15%);\n        display: flex;\n        align-items: center;\n}\n.cui-card-body {\n        flex: 1;\n        overflow: auto;\n}\n.cui-card-body:not(.no-padding) {\n        padding: 10px\n}\n.cui-card > .footer {\n        padding: 10px;\n        display: flex;\n        align-items: center;\n}\n\n";
styleInject(css_248z$i);

script$f.render = render$f;

var script$e = {
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

const _hoisted_1$b = {
  key: 0,
  class: "cui-modal-overlay"
};
function render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, {
    name: "modal-trans"
  }, {
    default: withCtx(() => [$props.visible ? (openBlock(), createBlock("div", _hoisted_1$b, [createVNode(Transition, {
      name: "modal-content-trans"
    }, {
      default: withCtx(() => [$data.showContent ? (openBlock(), createBlock("div", {
        key: 0,
        class: "cui-modal-content",
        onMousedown: _cache[1] || (_cache[1] = (...args) => $options.handelClick && $options.handelClick(...args))
      }, [renderSlot(_ctx.$slots, "default")], 32)) : createCommentVNode("", true)]),
      _: 3
    })])) : createCommentVNode("", true)]),
    _: 1
  });
}

var css_248z$h = "\n.cui-modal-overlay {\n        position: fixed;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        z-index: 100;\n        background: rgba(0,0,0,.2);\n        backdrop-filter: saturate(180%) blur(10px);\n        overflow: hidden\n}\n.cui-modal-content {\n        position: relative;\n        width: 100%;\n        height: 100%;\n        padding: 100px;\n        box-sizing: border-box;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n}\n.modal-trans-enter-active, \n    .modal-content-trans-enter-active {\n        transition: all .15s ease;\n}\n.modal-content-trans-enter-active {        \n        animation: rebound .3s\n}\n.modal-trans-leave-active, \n    .modal-content-trans-leave-active {\n        transition: all .15s ease\n}\n.modal-trans-enter-from,\n    .modal-trans-leave-to {\n        opacity: 0;\n}\n.modal-content-trans-enter-from,\n    .modal-content-trans-leave-to {\n        transform: scale(.7)\n}\n@keyframes rebound {\n0% {transform: scale(.8)}\n40% {transform: scale(1.08)}\n80% {transform: scale(0.98)}\n100% {transform: scale(1)}\n}\n";
styleInject(css_248z$h);

script$e.render = render$e;

var script$d = {
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
    },
    placeholder: {
      default: ''
    },
    noNote: {
      default: false,
      type: Boolean
    },
    note: {
      default: '',
      type: String
    },
    darker: {
      default: false,
      type: Boolean
    },
    pattern: {
      default: '',
      type: String
    }
  },
  emits: ['update:modelValue'],
  methods: {
    changeValue() {
      this.noteDisplay = '';
      this.$emit('update:modelValue', this.modelValue);
    }

  },

  data() {
    return {
      trans: {
        required: '*必須'
      },
      noteDisplay: ''
    };
  },

  watch: {
    note() {
      this.noteDisplay = this.note;
    }

  }
};

const _withId$a = /*#__PURE__*/withScopeId("data-v-578a9eaa");

pushScopeId("data-v-578a9eaa");

const _hoisted_1$a = {
  key: 0,
  class: "cui-input-label"
};
const _hoisted_2$a = {
  style: {
    "margin-right": "10px"
  }
};
const _hoisted_3$5 = {
  key: 0
};
const _hoisted_4$3 = {
  style: {
    "position": "relative"
  }
};
const _hoisted_5$2 = {
  key: 0,
  class: "cui-input-append"
};
const _hoisted_6$2 = {
  key: 1,
  class: "cui-input-note"
};

popScopeId();

const render$d = /*#__PURE__*/_withId$a((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", null, [$props.label ? (openBlock(), createBlock("label", _hoisted_1$a, [createVNode("span", _hoisted_2$a, toDisplayString($props.label), 1), $props.required ? (openBlock(), createBlock("span", _hoisted_3$5, toDisplayString($data.trans.required), 1)) : createCommentVNode("", true)])) : createCommentVNode("", true), createVNode("div", _hoisted_4$3, [$props.append ? (openBlock(), createBlock("span", _hoisted_5$2, toDisplayString($props.append), 1)) : createCommentVNode("", true), withDirectives(createVNode("input", {
    class: ["cui-input", {
      'has-icon': $props.icon,
      disabled: $props.disabled,
      darker: $props.darker
    }],
    style: {
      width: $props.width
    },
    type: $props.type,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $props.modelValue = $event),
    onInput: _cache[2] || (_cache[2] = (...args) => $options.changeValue && $options.changeValue(...args)),
    disabled: $props.disabled,
    clearable: "",
    pattern: $props.pattern,
    placeholder: $props.placeholder
  }, null, 46, ["type", "disabled", "pattern", "placeholder"]), [[vModelDynamic, $props.modelValue]]), $props.icon ? (openBlock(), createBlock("span", {
    key: 1,
    class: $props.icon + ' cui-input-icon'
  }, null, 2)) : createCommentVNode("", true)]), !$props.noNote ? (openBlock(), createBlock("div", _hoisted_6$2, [createVNode("span", null, toDisplayString($data.noteDisplay), 1)])) : createCommentVNode("", true)]);
});

var css_248z$g = "\n.cui-input-label[data-v-578a9eaa] {\n        font-size: 14px;\n        margin-left: 10px\n}\n.cui-input[data-v-578a9eaa] {\n        background: var(--cui-gray-0);\n        border: none;\n        border-radius: 12px;\n        height: 26px;\n        padding: 5px 10px;\n        transition: all .2s ease\n}\n.cui-input.darker[data-v-578a9eaa] {\n        background: var(--cui-gray-3);\n}\n.cui-input.disabled[data-v-578a9eaa] {\n        color: var(--cui-gray-3)\n}\n.cui-input[data-v-578a9eaa]:focus {\n        outline: none;\n        padding-left: 13px;\n        padding-right: 7px;\n        background: var(--cui-gray-1)\n}\n.cui-input.darker[data-v-578a9eaa]:focus {\n        background: var(--cui-gray-4)\n}\n.cui-input.darker[data-v-578a9eaa]:hover {\n        background: var(--cui-gray-4)\n}\n.cui-input-note[data-v-578a9eaa] {\n        font-size: 12px;\n        margin-left: 10px;\n        color: var(--cui-danger);\n        height: 15px;\n        line-height: 12px;\n}\n.cui-input-icon[data-v-578a9eaa] {\n        position: absolute;\n        left:0;\n        background: var(--cui-gray-0);\n        border-radius: 12px;\n        padding: 10px;\n        transition: all .2s ease;\n}\n.has-icon[data-v-578a9eaa] {\n        text-indent: 28px;\n}\n.cui-input:focus + .cui-input-icon[data-v-578a9eaa] {\n        margin: -3px;\n        box-shadow: 0 10px 20px -10px var(--cui-dark);\n        background: white;\n}\n.cui-input-append[data-v-578a9eaa] {\n        position: absolute;\n        right: 0;\n        height: 34px;\n        background: white;\n        border-radius: 12px;\n        line-height: 34px;\n        padding: 0 10px;\n        border: solid 1px var(--cui-gray-1);\n        font-size: 14px\n}\n";
styleInject(css_248z$g);

script$d.render = render$d;
script$d.__scopeId = "data-v-578a9eaa";

var script$c = {
  name: 'CuiCheckbox',
  props: {
    modelValue: {
      default: false,
      type: Boolean
    },
    disabled: {
      default: false,
      type: Boolean
    },
    label: {
      default: ''
    }
  },
  emits: ['update:modelValue'],
  methods: {
    toggleSelected() {
      this.$emit('update:modelValue', this.modelValue);
    }

  },

  data() {
    return {
      id: null
    };
  },

  mounted() {
    this.id = Math.floor(Math.random() * 100000);
  }

};

const _withId$9 = /*#__PURE__*/withScopeId("data-v-6b76e5f7");

pushScopeId("data-v-6b76e5f7");

const _hoisted_1$9 = /*#__PURE__*/createVNode("div", {
  class: "cui-checkbox-con"
}, [/*#__PURE__*/createVNode("i", {
  class: "cui-checkbox-icon fas fa-check"
})], -1);

const _hoisted_2$9 = {
  class: "cui-checkbox-label"
};

popScopeId();

const render$c = /*#__PURE__*/_withId$9((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("label", {
    class: ["cui-checkbox-container", {
      selected: $props.modelValue,
      disabled: $props.disabled
    }],
    for: $data.id
  }, [_hoisted_1$9, withDirectives(createVNode("input", {
    onChange: _cache[1] || (_cache[1] = (...args) => $options.toggleSelected && $options.toggleSelected(...args)),
    class: "cui-checkbox",
    type: "checkbox",
    id: $data.id,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $props.modelValue = $event),
    disabled: $props.disabled
  }, null, 40, ["id", "disabled"]), [[vModelCheckbox, $props.modelValue]]), createVNode("div", _hoisted_2$9, toDisplayString($props.label), 1)], 10, ["for"]);
});

var css_248z$f = "\n\n    /* Base State */\n.cui-checkbox-container[data-v-6b76e5f7] {\n        display: flex;\n        align-items: center;\n        width: fit-content; \n        margin: 5px 0;\n        position: relative\n}\n.cui-checkbox-container[data-v-6b76e5f7]:not(.disabled) {\n        cursor: pointer\n}\n.cui-checkbox[data-v-6b76e5f7] {\n        display: none\n}\n.cui-checkbox-con[data-v-6b76e5f7] {\n        position: absolute;\n        width: 15px;\n        height: 15px;\n        border-radius: 5px;\n        border: solid 2px var(--cui-gray-2);\n        transition: all .2s ease;\n        display: flex\n}\n.cui-checkbox-label[data-v-6b76e5f7] {\n        padding-left: 25px\n}\n\n    /* Hover State */\n.cui-checkbox-container:not(.disabled):not(.selected):hover .cui-checkbox-con[data-v-6b76e5f7],\n    .cui-checkbox-container.disabled .cui-checkbox-con[data-v-6b76e5f7] {\n        background: var(--cui-gray-1)\n}\n\n    /* Selected State */\n.cui-checkbox-container.selected .cui-checkbox-con[data-v-6b76e5f7] {\n        background: var(--cui-primary);\n        border-color: var(--cui-primary);\n        box-shadow: 0 0 0 0 var(--cui-primary);\n}\n.cui-checkbox-icon[data-v-6b76e5f7] {\n        color: white;\n        transform: scale(.1);\n        opacity: 0;\n        transition: all .2s ease\n}\n.cui-checkbox-container.selected .cui-checkbox-icon[data-v-6b76e5f7] {\n        transform: scale(.8);\n        opacity: 1\n}\n\n\n";
styleInject(css_248z$f);

script$c.render = render$c;
script$c.__scopeId = "data-v-6b76e5f7";

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$2,
  requires: ['computeStyles']
};

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle$1(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle$1(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

var max = Math.max;
var min = Math.min;
var round = Math.round;

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$1(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(round(x * dpr) / dpr) || 0,
    y: round(round(y * dpr) / dpr) || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle$1(offsetParent).position !== 'static') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top) {
      sideY = bottom; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left) {
      sideX = right; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle$1(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle$1(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent$1(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent$1(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent$1(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function getVariation(placement) {
  return placement.split('-')[1];
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(referenceElement);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = popperOffsets[mainAxis] + overflow[mainSide];
    var max$1 = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? top : left;

      var _altSide = mainAxis === 'x' ? bottom : right;

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement);
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

//If multiple NEEDS to have slected key in object value!!
var script$b = {
  name: 'CuiSelect',
  props: {
    modelValue: {
      default: null
    },
    search: {
      default: false,
      type: Boolean
    },
    multiple: {
      default: false,
      type: Boolean
    },
    label: {
      default: null
    },
    required: {
      default: false,
      type: Boolean
    },
    data: {
      default: [],
      type: Array
    },
    placeholder: {
      default: '選択'
    },
    displayValueProp: {
      default: null
    },
    returnValueProp: {
      default: null
    },
    loading: {
      default: false,
      type: Boolean
    },
    color: {
      default: null,
      type: String
    },
    error: {
      default: '',
      type: String
    },
    noNote: {
      defaut: false,
      type: Boolean
    },
    disabled: {
      default: false,
      type: Boolean
    }
  },
  emits: ['update:modelValue', 'select', 'input'],

  data() {
    return {
      noteDisplay: '',
      value: null,
      focused: false,
      dropdownWidth: 100,
      retracting: false,
      searchValue: "",
      trans: {
        empty: 'データなし'
      },
      dropdownValues: []
    };
  },

  computed: {
    dataIsObject() {
      return typeof this.data[0] === 'object' && this.data[0] !== null;
    },

    displayValue() {
      let value = this.modelValue;

      if (this.multiple && this.dataIsObject) {
        value = value.map(function (item) {
          return item[this.displayValueProp];
        });
      } else {
        if (this.dataIsObject && this.returnValueProp) {
          value = this.data.find(o => o[this.returnValueProp] === value);
        }

        if (this.dataIsObject) {
          value = value[this.displayValueProp];
        }
      }

      return value;
    },

    selectBackground() {
      if (this.color && !this.focused) {
        return this.color;
      } else {
        return null;
      }
    }

  },

  mounted() {
    document.addEventListener('click', this.handleOutsideClick);
    this.setDropdownItems();
    this.setInitialValue();
  },

  watch: {
    data: {
      handler(val, oldVal) {
        this.setDropdownItems();
      },

      deep: true
    },

    note() {
      this.noteDisplay = this.note;
    }

  },
  methods: {
    setInitialValue() {
      if (this.dataIsObject) {
        const value = this.data.find(item => item[this.returnValueProp] === this.modelValue);
        this.value = value;
      } else {
        this.value = this.modelValue;
      }
    },

    setDropdownItems() {
      let arr = JSON.parse(JSON.stringify(this.data));

      if (this.multiple) {
        arr.forEach(element => {
          element.selected = element.selected ? element.selected : false;
        });
      }

      this.dropdownValues = arr;
    },

    handleClick() {
      if (this.disabled) {
        return;
      }

      this.dropdownWidth = this.$refs.select.clientWidth;
      const select = this.$refs.select;
      const dropdown = this.$refs.dropdown;

      if (this.focused) {
        this.closeDropdown();
      } else {
        this.focused = true;
        createPopper(select, dropdown, {
          placement: 'bottom'
        });
      }

      if (this.search) {
        setTimeout(function () {
          var _this$$refs$input;

          (_this$$refs$input = this.$refs.input) === null || _this$$refs$input === void 0 ? void 0 : _this$$refs$input.focus();
        }.bind(this), 100);
      }
    },

    closeDropdown() {
      this.retracting = true;
      setTimeout(function () {
        this.focused = false;
        this.retracting = false;
      }.bind(this), 50);
    },

    handleOutsideClick(event) {
      if (this.focused && this.multiple) {
        var _event$target;

        const target = event === null || event === void 0 ? void 0 : (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.classList[0];

        if (target !== 'cui-select-dropdown-item' && target !== 'cui-checkbox-con' && target !== 'cui-checkbox-icon' && target !== 'cui-checkbox') {
          this.closeDropdown();
        }
      } else if (this.focused) {
        this.closeDropdown();
      }
    },

    selectItem(item) {
      let returnValue = item;
      let emitValue = returnValue;

      if (this.multiple) {
        item.selected = !item.selected;
        returnValue = this.dropdownValues.filter(item => item.selected);
        emitValue = returnValue;

        if (this.returnValueProp) {
          emitValue = emitValue.map(function (item) {
            return item[this.returnValueProp];
          }.bind(this));
        }
      } else {
        this.closeDropdown();
      }

      if (this.returnValueProp && !this.multiple) {
        returnValue = returnValue[this.returnValueProp];
        emitValue = returnValue;
      }

      this.value = returnValue;
      this.$emit('update:modelValue', emitValue);
      this.$emit('select', emitValue);
    },

    searchInput() {
      this.$emit('input', this.searchValue);
    }

  }
};

const _withId$8 = /*#__PURE__*/withScopeId("data-v-0adb2f5b");

pushScopeId("data-v-0adb2f5b");

const _hoisted_1$8 = {
  key: 0,
  class: "cui-select-label"
};
const _hoisted_2$8 = {
  style: {
    "margin-right": "10px"
  }
};
const _hoisted_3$4 = {
  key: 0
};
const _hoisted_4$2 = {
  key: 0
};
const _hoisted_5$1 = {
  key: 0,
  class: "cui-placeholder"
};
const _hoisted_6$1 = {
  key: 1,
  class: "cui-select-multiple-cont"
};
const _hoisted_7$1 = {
  key: 2
};
const _hoisted_8$1 = {
  key: 1
};
const _hoisted_9$1 = {
  key: 0
};
const _hoisted_10$1 = {
  key: 1,
  class: "cui-placeholder"
};
const _hoisted_11$1 = {
  key: 2,
  class: "cui-select-multiple-cont"
};
const _hoisted_12$1 = {
  key: 3
};
const _hoisted_13 = {
  key: 0,
  class: "loader"
};
const _hoisted_14 = {
  key: 1
};
const _hoisted_15 = {
  key: 1
};
const _hoisted_16 = {
  key: 0
};
const _hoisted_17 = {
  key: 1
};
const _hoisted_18 = {
  key: 2
};
const _hoisted_19 = {
  class: "cui-select-empty"
};
const _hoisted_20 = {
  key: 1,
  class: "cui-select-note"
};

popScopeId();

const render$b = /*#__PURE__*/_withId$8((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_cui_tag = resolveComponent("cui-tag");

  const _component_cui_checkbox = resolveComponent("cui-checkbox");

  return openBlock(), createBlock("div", {
    class: ["cui-select-container", {
      disabled: $props.disabled
    }],
    onClick: _cache[5] || (_cache[5] = withModifiers((...args) => $options.handleClick && $options.handleClick(...args), ["stop"]))
  }, [$props.label ? (openBlock(), createBlock("label", _hoisted_1$8, [createVNode("span", _hoisted_2$8, toDisplayString($props.label), 1), $props.required ? (openBlock(), createBlock("span", _hoisted_3$4, toDisplayString($data.trans.required), 1)) : createCommentVNode("", true)])) : createCommentVNode("", true), createVNode("div", {
    ref: "select",
    class: ["cui-select", {
      focused: $data.focused,
      'has-color': $props.color,
      disabled: $props.disabled
    }],
    style: {
      background: $options.selectBackground
    }
  }, [!$data.focused ? (openBlock(), createBlock("div", _hoisted_4$2, [!$data.value || $data.value.length < 1 ? (openBlock(), createBlock("div", _hoisted_5$1, toDisplayString($props.placeholder), 1)) : $props.multiple ? (openBlock(), createBlock("div", _hoisted_6$1, [(openBlock(true), createBlock(Fragment, null, renderList($data.value, (valueItem, index) => {
    return openBlock(), createBlock(_component_cui_tag, {
      class: "cui-select-tag",
      key: index
    }, {
      default: _withId$8(() => [createTextVNode(toDisplayString(valueItem[$props.displayValueProp]) + " ", 1), createVNode("i", {
        class: "cui-select-tag-icon fas fa-times-circle",
        onClick: withModifiers($event => $options.selectItem(valueItem), ["stop"])
      }, null, 8, ["onClick"])]),
      _: 2
    }, 1024);
  }), 128))])) : (openBlock(), createBlock("div", _hoisted_7$1, toDisplayString($options.displayValue), 1))])) : (openBlock(), createBlock("div", _hoisted_8$1, [$props.search && !$props.multiple ? (openBlock(), createBlock("div", _hoisted_9$1, [withDirectives(createVNode("input", {
    ref: "input",
    class: "cui-select-input",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.searchValue = $event),
    onClick: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop"])),
    onInput: _cache[3] || (_cache[3] = (...args) => $options.searchInput && $options.searchInput(...args)),
    plcaeholder: $props.placeholder
  }, null, 40, ["plcaeholder"]), [[vModelText, $data.searchValue]])])) : !$data.value ? (openBlock(), createBlock("div", _hoisted_10$1, toDisplayString($props.placeholder), 1)) : $props.multiple ? (openBlock(), createBlock("div", _hoisted_11$1, [(openBlock(true), createBlock(Fragment, null, renderList($props.modelValue, (valueItem, index) => {
    return openBlock(), createBlock(_component_cui_tag, {
      class: "cui-select-tag",
      key: index
    }, {
      default: _withId$8(() => [createTextVNode(toDisplayString(valueItem[$props.displayValueProp]) + " ", 1), createVNode("i", {
        class: "cui-select-tag-icon fas fa-times-circle",
        onClick: withModifiers($event => $options.selectItem(valueItem), ["stop"])
      }, null, 8, ["onClick"])]),
      _: 2
    }, 1024);
  }), 128))])) : (openBlock(), createBlock("div", _hoisted_12$1, toDisplayString($options.displayValue), 1))])), createVNode("div", null, [createVNode("i", {
    class: ["cui-select-icon fas fa-chevron-down", {
      focused: $data.focused
    }]
  }, null, 2)])], 6), createVNode("div", {
    ref: "dropdown",
    class: ["cui-select-list", {
      expanded: $data.focused,
      retracted: $data.retracting
    }],
    style: {
      width: $data.dropdownWidth + 'px'
    }
  }, [$props.loading ? (openBlock(), createBlock("div", _hoisted_13)) : createCommentVNode("", true), $props.data.length > 0 ? (openBlock(), createBlock("div", _hoisted_14, [(openBlock(true), createBlock(Fragment, null, renderList($data.dropdownValues, (item, index) => {
    return openBlock(), createBlock("div", {
      class: "cui-select-dropdown-item",
      key: index,
      onClick: withModifiers($event => $options.selectItem(item, index), ["stop"])
    }, [$props.multiple ? (openBlock(), createBlock(_component_cui_checkbox, {
      key: 0,
      modelValue: item.selected,
      "onUpdate:modelValue": $event => item.selected = $event,
      onClick: _cache[4] || (_cache[4] = withModifiers(() => {}, ["stop"]))
    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true), !_ctx.$slots.dropdownItem ? (openBlock(), createBlock("span", _hoisted_15, [$options.dataIsObject ? (openBlock(), createBlock("span", _hoisted_16, toDisplayString(item[$props.displayValueProp]), 1)) : (openBlock(), createBlock("span", _hoisted_17, toDisplayString(item), 1))])) : createCommentVNode("", true), renderSlot(_ctx.$slots, "dropdownItem", {
      item: item
    })], 8, ["onClick"]);
  }), 128))])) : (openBlock(), createBlock("div", _hoisted_18, [createVNode("div", _hoisted_19, toDisplayString($data.trans.empty), 1)]))], 6), !$props.noNote ? (openBlock(), createBlock("div", _hoisted_20, [createVNode("span", null, toDisplayString($data.noteDisplay), 1)])) : createCommentVNode("", true)], 2);
});

var css_248z$e = "\n@keyframes expand-0adb2f5b{\nfrom{\n            margin-top: -10px;\n            opacity: 0\n}\nto{\n            opacity: 1\n}\n}\n@keyframes retract-0adb2f5b{\nfrom{\n            opacity: 1;\n}\nto{\n            margin-top: -10px;\n            opacity: 0;\n}\n}\n.cui-select-label[data-v-0adb2f5b] {\n        font-size: 14px;\n        margin-left: 10px\n}\n.cui-select[data-v-0adb2f5b] {\n        background: var(--cui-gray-0);\n        border-radius: 12px;\n        height: 26px;\n        padding: 2px 10px;\n        transition: all .2s ease;\n        font-size: 13.3333px;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        overflow: hidden;\n        height: fit-content;\n        min-height: 32px;\n        font-weight: normal !important;\n}\n.cui-select:not(.focused).has-color[data-v-0adb2f5b],\n    .cui-select:not(.focused).has-color .cui-placeholder[data-v-0adb2f5b],\n    .cui-select:not(.focused).has-color .cui-select-icon[data-v-0adb2f5b] {\n        color: white\n}\n.cui-select.focused[data-v-0adb2f5b] {\n        border-bottom-right-radius: 0;\n        border-bottom-left-radius: 0;\n}\n.cui-select-container[data-v-0adb2f5b] {\n        cursor: pointer\n}\n.cui-select-container.disabled[data-v-0adb2f5b], .cui-select.disabled[data-v-0adb2f5b] {\n        cursor: not-allowed\n}\n.cui-select-container:hover .cui-select[data-v-0adb2f5b]:not(.disabled),\n    .cui-select.focused[data-v-0adb2f5b] {\n        padding-left: 13px;\n        padding-right: 7px;\n        background: white;\n        transform: translate(0px, -4px);\n        box-shadow: 0px 5px 25px -4px var(--cui-gray-4);\n        cursor: pointer\n}\n.cui-select-list[data-v-0adb2f5b] {\n        display: none;\n        background: white;\n        border-bottom-right-radius: 12px;\n        border-bottom-left-radius: 12px;\n        box-shadow:0px 14px 13px 2px var(--cui-gray-4);\n        z-index: 10;\n        width: 240px;\n        overflow: auto;\n        max-height: 200px;\n}\n.cui-select-list.expanded[data-v-0adb2f5b] {\n        display: block;\n        animation: expand-0adb2f5b .2s ease-out 0s;\n}\n.cui-select-list.retracted[data-v-0adb2f5b] {\n        animation: retract-0adb2f5b .2s ease-out 0s;\n}\n.cui-select-dropdown-item[data-v-0adb2f5b] {\n        padding: 8px 10px;\n        transition: all .2s ease;\n        display: flex;\n        font-weight: normal !important;\n        color: var(--cui-font-color)!important\n}\n.cui-select-dropdown-item[data-v-0adb2f5b]:hover {\n        background: var(--cui-gray-1);\n        cursor: pointer\n}\n.cui-select-input[data-v-0adb2f5b],\n    .cui-select-input[data-v-0adb2f5b]:focus {\n        border: none;\n        outline: none\n}\n.cui-select-empty[data-v-0adb2f5b] {\n        padding: 8px 10px;\n        color: var(--cui-gray-5);\n        font-size: 12px\n}\n.cui-select-icon[data-v-0adb2f5b] {\n        transition: all .2s ease;\n        font-size: 12px;\n        color: var(--cui-gray-5);\n        padding: 5px\n}\n.cui-select-icon.focused[data-v-0adb2f5b] {\n        transform: rotate(180deg)\n}\n.cui-select-multiple-cont[data-v-0adb2f5b] {\n        display: flex;\n        align-items: center;\n        flex-wrap: wrap\n}\n.cui-select-tag-icon[data-v-0adb2f5b] {\n        margin-left: 2px;\n        color: var(--cui-font-color);\n        opacity: 0.6;\n        transition: all .2s ease;\n}\n.cui-select-tag-icon[data-v-0adb2f5b]:hover {\n        opacity: 1;\n}\n.cui-select-note[data-v-0adb2f5b] {\n        font-size: 12px;\n        margin-left: 10px;\n        color: var(--cui-danger);\n        height: 15px;\n        line-height: 12px;\n}\n\n";
styleInject(css_248z$e);

var css_248z$d = "\n.cui-select-tag {\n        font-size: 12px!important;\n        height: 28px!important;\n        background: var(--cui-gray-3)!important;\n        color: var(--cui-font-color)!important;\n        margin: 2px!important;\n        padding: 0 5px!important\n}\n";
styleInject(css_248z$d);

script$b.render = render$b;
script$b.__scopeId = "data-v-0adb2f5b";

function isDate(value) {
  return value instanceof Date || Object.prototype.toString.call(value) === '[object Date]';
}
function toDate(value) {
  if (isDate(value)) {
    return new Date(value.getTime());
  }

  if (value == null) {
    return new Date(NaN);
  }

  return new Date(value);
}
function isValidDate$1(value) {
  return isDate(value) && !isNaN(value.getTime());
}
function startOfWeek(value) {
  var firstDayOfWeek = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (!(firstDayOfWeek >= 0 && firstDayOfWeek <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6');
  }

  var date = toDate(value);
  var day = date.getDay();
  var diff = (day + 7 - firstDayOfWeek) % 7;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}
function startOfWeekYear(value) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$firstDayOfWeek = _ref.firstDayOfWeek,
      firstDayOfWeek = _ref$firstDayOfWeek === void 0 ? 0 : _ref$firstDayOfWeek,
      _ref$firstWeekContain = _ref.firstWeekContainsDate,
      firstWeekContainsDate = _ref$firstWeekContain === void 0 ? 1 : _ref$firstWeekContain;

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7');
  }

  var date = toDate(value);
  var year = date.getFullYear();
  var firstDateOfFirstWeek = new Date(0);

  for (var i = year + 1; i >= year - 1; i--) {
    firstDateOfFirstWeek.setFullYear(i, 0, firstWeekContainsDate);
    firstDateOfFirstWeek.setHours(0, 0, 0, 0);
    firstDateOfFirstWeek = startOfWeek(firstDateOfFirstWeek, firstDayOfWeek);

    if (date.getTime() >= firstDateOfFirstWeek.getTime()) {
      break;
    }
  }

  return firstDateOfFirstWeek;
}
function getWeek(value) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$firstDayOfWeek = _ref2.firstDayOfWeek,
      firstDayOfWeek = _ref2$firstDayOfWeek === void 0 ? 0 : _ref2$firstDayOfWeek,
      _ref2$firstWeekContai = _ref2.firstWeekContainsDate,
      firstWeekContainsDate = _ref2$firstWeekContai === void 0 ? 1 : _ref2$firstWeekContai;

  var date = toDate(value);
  var firstDateOfThisWeek = startOfWeek(date, firstDayOfWeek);
  var firstDateOfFirstWeek = startOfWeekYear(date, {
    firstDayOfWeek: firstDayOfWeek,
    firstWeekContainsDate: firstWeekContainsDate
  });
  var diff = firstDateOfThisWeek.getTime() - firstDateOfFirstWeek.getTime();
  return Math.round(diff / (7 * 24 * 3600 * 1000)) + 1;
}

var locale$1 = {
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  weekdaysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  firstDayOfWeek: 0,
  firstWeekContainsDate: 1
};

var REGEX_FORMAT = /\[([^\]]+)]|YYYY|YY?|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|Z{1,2}|S{1,3}|w{1,2}|x|X|a|A/g;

function pad(val) {
  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var output = "".concat(Math.abs(val));
  var sign = val < 0 ? '-' : '';

  while (output.length < len) {
    output = "0".concat(output);
  }

  return sign + output;
}

function formatTimezone(offset) {
  var delimeter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  return sign + pad(hours, 2) + delimeter + pad(minutes, 2);
}

var meridiem = function meridiem(h, _, isLowercase) {
  var word = h < 12 ? 'AM' : 'PM';
  return isLowercase ? word.toLocaleLowerCase() : word;
};

var formatFlags = {
  Y: function Y(date) {
    var y = date.getFullYear();
    return y <= 9999 ? "".concat(y) : "+".concat(y);
  },
  // Year: 00, 01, ..., 99
  YY: function YY(date) {
    return pad(date.getFullYear(), 4).substr(2);
  },
  // Year: 1900, 1901, ..., 2099
  YYYY: function YYYY(date) {
    return pad(date.getFullYear(), 4);
  },
  // Month: 1, 2, ..., 12
  M: function M(date) {
    return date.getMonth() + 1;
  },
  // Month: 01, 02, ..., 12
  MM: function MM(date) {
    return pad(date.getMonth() + 1, 2);
  },
  MMM: function MMM(date, locale) {
    return locale.monthsShort[date.getMonth()];
  },
  MMMM: function MMMM(date, locale) {
    return locale.months[date.getMonth()];
  },
  // Day of month: 1, 2, ..., 31
  D: function D(date) {
    return date.getDate();
  },
  // Day of month: 01, 02, ..., 31
  DD: function DD(date) {
    return pad(date.getDate(), 2);
  },
  // Hour: 0, 1, ... 23
  H: function H(date) {
    return date.getHours();
  },
  // Hour: 00, 01, ..., 23
  HH: function HH(date) {
    return pad(date.getHours(), 2);
  },
  // Hour: 1, 2, ..., 12
  h: function h(date) {
    var hours = date.getHours();

    if (hours === 0) {
      return 12;
    }

    if (hours > 12) {
      return hours % 12;
    }

    return hours;
  },
  // Hour: 01, 02, ..., 12
  hh: function hh() {
    var hours = formatFlags.h.apply(formatFlags, arguments);
    return pad(hours, 2);
  },
  // Minute: 0, 1, ..., 59
  m: function m(date) {
    return date.getMinutes();
  },
  // Minute: 00, 01, ..., 59
  mm: function mm(date) {
    return pad(date.getMinutes(), 2);
  },
  // Second: 0, 1, ..., 59
  s: function s(date) {
    return date.getSeconds();
  },
  // Second: 00, 01, ..., 59
  ss: function ss(date) {
    return pad(date.getSeconds(), 2);
  },
  // 1/10 of second: 0, 1, ..., 9
  S: function S(date) {
    return Math.floor(date.getMilliseconds() / 100);
  },
  // 1/100 of second: 00, 01, ..., 99
  SS: function SS(date) {
    return pad(Math.floor(date.getMilliseconds() / 10), 2);
  },
  // Millisecond: 000, 001, ..., 999
  SSS: function SSS(date) {
    return pad(date.getMilliseconds(), 3);
  },
  // Day of week: 0, 1, ..., 6
  d: function d(date) {
    return date.getDay();
  },
  // Day of week: 'Su', 'Mo', ..., 'Sa'
  dd: function dd(date, locale) {
    return locale.weekdaysMin[date.getDay()];
  },
  // Day of week: 'Sun', 'Mon',..., 'Sat'
  ddd: function ddd(date, locale) {
    return locale.weekdaysShort[date.getDay()];
  },
  // Day of week: 'Sunday', 'Monday', ...,'Saturday'
  dddd: function dddd(date, locale) {
    return locale.weekdays[date.getDay()];
  },
  // AM, PM
  A: function A(date, locale) {
    var meridiemFunc = locale.meridiem || meridiem;
    return meridiemFunc(date.getHours(), date.getMinutes(), false);
  },
  // am, pm
  a: function a(date, locale) {
    var meridiemFunc = locale.meridiem || meridiem;
    return meridiemFunc(date.getHours(), date.getMinutes(), true);
  },
  // Timezone: -01:00, +00:00, ... +12:00
  Z: function Z(date) {
    return formatTimezone(date.getTimezoneOffset(), ':');
  },
  // Timezone: -0100, +0000, ... +1200
  ZZ: function ZZ(date) {
    return formatTimezone(date.getTimezoneOffset());
  },
  // Seconds timestamp: 512969520
  X: function X(date) {
    return Math.floor(date.getTime() / 1000);
  },
  // Milliseconds timestamp: 512969520900
  x: function x(date) {
    return date.getTime();
  },
  w: function w(date, locale) {
    return getWeek(date, {
      firstDayOfWeek: locale.firstDayOfWeek,
      firstWeekContainsDate: locale.firstWeekContainsDate
    });
  },
  ww: function ww(date, locale) {
    return pad(formatFlags.w(date, locale), 2);
  }
};

function format(val, str) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var formatStr = str ? String(str) : 'YYYY-MM-DDTHH:mm:ss.SSSZ';
  var date = toDate(val);

  if (!isValidDate$1(date)) {
    return 'Invalid Date';
  }

  var locale = options.locale || locale$1;
  return formatStr.replace(REGEX_FORMAT, function (match, p1) {
    if (p1) {
      return p1;
    }

    if (typeof formatFlags[match] === 'function') {
      return "".concat(formatFlags[match](date, locale));
    }

    return match;
  });
}

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray$1(arr, i) { return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _nonIterableRest$1(); }

function _nonIterableRest$1() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit$1(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$1(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var formattingTokens = /(\[[^\[]*\])|(MM?M?M?|Do|DD?|ddd?d?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|S{1,3}|x|X|ZZ?|.)/g;
var match1 = /\d/; // 0 - 9

var match2 = /\d\d/; // 00 - 99

var match3 = /\d{3}/; // 000 - 999

var match4 = /\d{4}/; // 0000 - 9999

var match1to2 = /\d\d?/; // 0 - 99

var matchShortOffset = /[+-]\d\d:?\d\d/; // +00:00 -00:00 +0000 or -0000

var matchSigned = /[+-]?\d+/; // -inf - inf

var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
// const matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i; // Word

var YEAR = 'year';
var MONTH = 'month';
var DAY = 'day';
var HOUR = 'hour';
var MINUTE = 'minute';
var SECOND = 'second';
var MILLISECOND = 'millisecond';
var parseFlags = {};

var addParseFlag = function addParseFlag(token, regex, callback) {
  var tokens = Array.isArray(token) ? token : [token];
  var func;

  if (typeof callback === 'string') {
    func = function func(input) {
      var value = parseInt(input, 10);
      return _defineProperty$1({}, callback, value);
    };
  } else {
    func = callback;
  }

  tokens.forEach(function (key) {
    parseFlags[key] = [regex, func];
  });
};

var escapeStringRegExp = function escapeStringRegExp(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
};

var matchWordRegExp = function matchWordRegExp(localeKey) {
  return function (locale) {
    var array = locale[localeKey];

    if (!Array.isArray(array)) {
      throw new Error("Locale[".concat(localeKey, "] need an array"));
    }

    return new RegExp(array.map(escapeStringRegExp).join('|'));
  };
};

var matchWordCallback = function matchWordCallback(localeKey, key) {
  return function (input, locale) {
    var array = locale[localeKey];

    if (!Array.isArray(array)) {
      throw new Error("Locale[".concat(localeKey, "] need an array"));
    }

    var index = array.indexOf(input);

    if (index < 0) {
      throw new Error('Invalid Word');
    }

    return _defineProperty$1({}, key, index);
  };
};

addParseFlag('Y', matchSigned, YEAR);
addParseFlag('YY', match2, function (input) {
  var year = new Date().getFullYear();
  var cent = Math.floor(year / 100);
  var value = parseInt(input, 10);
  value = (value > 68 ? cent - 1 : cent) * 100 + value;
  return _defineProperty$1({}, YEAR, value);
});
addParseFlag('YYYY', match4, YEAR);
addParseFlag('M', match1to2, function (input) {
  return _defineProperty$1({}, MONTH, parseInt(input, 10) - 1);
});
addParseFlag('MM', match2, function (input) {
  return _defineProperty$1({}, MONTH, parseInt(input, 10) - 1);
});
addParseFlag('MMM', matchWordRegExp('monthsShort'), matchWordCallback('monthsShort', MONTH));
addParseFlag('MMMM', matchWordRegExp('months'), matchWordCallback('months', MONTH));
addParseFlag('D', match1to2, DAY);
addParseFlag('DD', match2, DAY);
addParseFlag(['H', 'h'], match1to2, HOUR);
addParseFlag(['HH', 'hh'], match2, HOUR);
addParseFlag('m', match1to2, MINUTE);
addParseFlag('mm', match2, MINUTE);
addParseFlag('s', match1to2, SECOND);
addParseFlag('ss', match2, SECOND);
addParseFlag('S', match1, function (input) {
  return _defineProperty$1({}, MILLISECOND, parseInt(input, 10) * 100);
});
addParseFlag('SS', match2, function (input) {
  return _defineProperty$1({}, MILLISECOND, parseInt(input, 10) * 10);
});
addParseFlag('SSS', match3, MILLISECOND);

function matchMeridiem(locale) {
  return locale.meridiemParse || /[ap]\.?m?\.?/i;
}

function defaultIsPM(input) {
  return "".concat(input).toLowerCase().charAt(0) === 'p';
}

addParseFlag(['A', 'a'], matchMeridiem, function (input, locale) {
  var isPM = typeof locale.isPM === 'function' ? locale.isPM(input) : defaultIsPM(input);
  return {
    isPM: isPM
  };
});

function offsetFromString(str) {
  var _ref8 = str.match(/([+-]|\d\d)/g) || ['-', '0', '0'],
      _ref9 = _slicedToArray$1(_ref8, 3),
      symbol = _ref9[0],
      hour = _ref9[1],
      minute = _ref9[2];

  var minutes = parseInt(hour, 10) * 60 + parseInt(minute, 10);

  if (minutes === 0) {
    return 0;
  }

  return symbol === '+' ? -minutes : +minutes;
}

addParseFlag(['Z', 'ZZ'], matchShortOffset, function (input) {
  return {
    offset: offsetFromString(input)
  };
});
addParseFlag('x', matchSigned, function (input) {
  return {
    date: new Date(parseInt(input, 10))
  };
});
addParseFlag('X', matchTimestamp, function (input) {
  return {
    date: new Date(parseFloat(input) * 1000)
  };
});
addParseFlag('d', match1, 'weekday');
addParseFlag('dd', matchWordRegExp('weekdaysMin'), matchWordCallback('weekdaysMin', 'weekday'));
addParseFlag('ddd', matchWordRegExp('weekdaysShort'), matchWordCallback('weekdaysShort', 'weekday'));
addParseFlag('dddd', matchWordRegExp('weekdays'), matchWordCallback('weekdays', 'weekday'));
addParseFlag('w', match1to2, 'week');
addParseFlag('ww', match2, 'week');

function to24hour(hour, isPM) {
  if (hour !== undefined && isPM !== undefined) {
    if (isPM) {
      if (hour < 12) {
        return hour + 12;
      }
    } else if (hour === 12) {
      return 0;
    }
  }

  return hour;
}

function getFullInputArray(input) {
  var backupDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var result = [0, 0, 1, 0, 0, 0, 0];
  var backupArr = [backupDate.getFullYear(), backupDate.getMonth(), backupDate.getDate(), backupDate.getHours(), backupDate.getMinutes(), backupDate.getSeconds(), backupDate.getMilliseconds()];
  var useBackup = true;

  for (var i = 0; i < 7; i++) {
    if (input[i] === undefined) {
      result[i] = useBackup ? backupArr[i] : result[i];
    } else {
      result[i] = input[i];
      useBackup = false;
    }
  }

  return result;
}

function createUTCDate() {
  var date;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var y = args[0];

  if (y < 100 && y >= 0) {
    args[0] += 400;
    date = new Date(Date.UTC.apply(Date, args)); // eslint-disable-next-line no-restricted-globals

    if (isFinite(date.getUTCFullYear())) {
      date.setUTCFullYear(y);
    }
  } else {
    date = new Date(Date.UTC.apply(Date, args));
  }

  return date;
}

function makeParser(dateString, format, locale) {
  var tokens = format.match(formattingTokens);

  if (!tokens) {
    throw new Error();
  }

  var length = tokens.length;
  var mark = {};

  for (var i = 0; i < length; i += 1) {
    var token = tokens[i];
    var parseTo = parseFlags[token];

    if (!parseTo) {
      var word = token.replace(/^\[|\]$/g, '');

      if (dateString.indexOf(word) === 0) {
        dateString = dateString.substr(word.length);
      } else {
        throw new Error('not match');
      }
    } else {
      var regex = typeof parseTo[0] === 'function' ? parseTo[0](locale) : parseTo[0];
      var parser = parseTo[1];
      var value = (regex.exec(dateString) || [])[0];
      var obj = parser(value, locale);
      mark = _objectSpread({}, mark, {}, obj);
      dateString = dateString.replace(value, '');
    }
  }

  return mark;
}

function parse(str, format) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  try {
    var _options$locale = options.locale,
        _locale = _options$locale === void 0 ? locale$1 : _options$locale,
        _options$backupDate = options.backupDate,
        backupDate = _options$backupDate === void 0 ? new Date() : _options$backupDate;

    var parseResult = makeParser(str, format, _locale);
    var year = parseResult.year,
        month = parseResult.month,
        day = parseResult.day,
        hour = parseResult.hour,
        minute = parseResult.minute,
        second = parseResult.second,
        millisecond = parseResult.millisecond,
        isPM = parseResult.isPM,
        date = parseResult.date,
        offset = parseResult.offset,
        weekday = parseResult.weekday,
        week = parseResult.week;

    if (date) {
      return date;
    }

    var inputArray = [year, month, day, hour, minute, second, millisecond];
    inputArray[3] = to24hour(inputArray[3], isPM); // check week

    if (week !== undefined && month === undefined && day === undefined) {
      // new Date(year, 3) make sure in current year
      var firstDate = startOfWeekYear(year === undefined ? backupDate : new Date(year, 3), {
        firstDayOfWeek: _locale.firstDayOfWeek,
        firstWeekContainsDate: _locale.firstWeekContainsDate
      });
      return new Date(firstDate.getTime() + (week - 1) * 7 * 24 * 3600 * 1000);
    }

    var utcDate = createUTCDate.apply(void 0, _toConsumableArray(getFullInputArray(inputArray, backupDate)));
    var offsetMilliseconds = (offset === undefined ? utcDate.getTimezoneOffset() : offset) * 60 * 1000;
    var parsedDate = new Date(utcDate.getTime() + offsetMilliseconds); // check weekday

    if (weekday !== undefined && parsedDate.getDay() !== weekday) {
      return new Date(NaN);
    }

    return parsedDate;
  } catch (e) {
    return new Date(NaN);
  }
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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
}

// new Date(10, 0, 1) The year from 0 to 99 will be incremented by 1900 automatically.
function createDate(y) {
  var M = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var d = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var h = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var m = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  var ms = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  var date = new Date(y, M, d, h, m, s, ms);

  if (y < 100 && y >= 0) {
    date.setFullYear(y);
  }

  return date;
}
function isValidDate(date) {
  return date instanceof Date && !isNaN(date);
}
function isValidRangeDate(date) {
  return Array.isArray(date) && date.length === 2 && date.every(isValidDate) && date[0] <= date[1];
}
function isValidDates(dates) {
  return Array.isArray(dates) && dates.every(isValidDate);
}
function getValidDate(value) {
  var date = new Date(value);

  if (isValidDate(date)) {
    return date;
  }

  for (var _len = arguments.length, backup = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    backup[_key - 1] = arguments[_key];
  }

  if (backup.length) {
    return getValidDate.apply(void 0, backup);
  }

  return new Date();
}
function startOfYear(value) {
  var date = new Date(value);
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}
function startOfMonth(value) {
  var date = new Date(value);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
}
function startOfDay(value) {
  var date = new Date(value);
  date.setHours(0, 0, 0, 0);
  return date;
}
function getCalendar(_ref) {
  var firstDayOfWeek = _ref.firstDayOfWeek,
      year = _ref.year,
      month = _ref.month;
  var arr = []; // change to the last day of the last month

  var calendar = createDate(year, month, 0);
  var lastDayInLastMonth = calendar.getDate(); // getDay() 0 is Sunday, 1 is Monday

  var firstDayInLastMonth = lastDayInLastMonth - (calendar.getDay() + 7 - firstDayOfWeek) % 7;

  for (var i = firstDayInLastMonth; i <= lastDayInLastMonth; i++) {
    arr.push(createDate(year, month, i - lastDayInLastMonth));
  } // change to the last day of the current month


  calendar.setMonth(month + 1, 0);
  var lastDayInCurrentMonth = calendar.getDate();

  for (var _i = 1; _i <= lastDayInCurrentMonth; _i++) {
    arr.push(createDate(year, month, _i));
  }

  var lastMonthLength = lastDayInLastMonth - firstDayInLastMonth + 1;
  var nextMonthLength = 6 * 7 - lastMonthLength - lastDayInCurrentMonth;

  for (var _i2 = 1; _i2 <= nextMonthLength; _i2++) {
    arr.push(createDate(year, month, lastDayInCurrentMonth + _i2));
  }

  return arr;
}
function setMonth(dirtyDate, dirtyMonth) {
  var date = new Date(dirtyDate);
  var month = Number(dirtyMonth);
  var year = date.getFullYear();
  var daysInMonth = createDate(year, month + 1, 0).getDate();
  var day = date.getDate();
  date.setMonth(month, Math.min(day, daysInMonth));
  return date;
}
function assignTime(target, source) {
  var date = new Date(target);
  var time = new Date(source);
  date.setHours(time.getHours(), time.getMinutes(), time.getSeconds());
  return date;
}

/**
 * chunk the array
 * @param {Array} arr
 * @param {Number} size
 */
function chunk(arr, size) {
  if (!Array.isArray(arr)) {
    return [];
  }

  var result = [];
  var len = arr.length;
  var i = 0;
  size = size || len;

  while (i < len) {
    result.push(arr.slice(i, i += size));
  }

  return result;
}
/**
 * isObject
 * @param {*} obj
 * @returns {Boolean}
 */

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
/**
 * pick object
 * @param {Object} obj
 * @param {Array|String} props
 */

function pick(obj, props) {
  if (!isObject(obj)) return {};

  if (!Array.isArray(props)) {
    props = [props];
  }

  var res = {};
  props.forEach(function (prop) {
    if (prop in obj) {
      res[prop] = obj[prop];
    }
  });
  return res;
}
/**
 * deep merge two object without merging array
 * @param {object} target
 * @param {object} source
 */

function mergeDeep(target, source) {
  if (!isObject(target)) {
    return {};
  }

  var result = target;

  if (isObject(source)) {
    Object.keys(source).forEach(function (key) {
      var value = source[key];

      if (isObject(value) && isObject(target[key])) {
        value = mergeDeep(target[key], value);
      }

      result = _objectSpread2(_objectSpread2({}, result), {}, _defineProperty({}, key, value));
    });
  }

  return result;
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule$1(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var en = createCommonjsModule$1(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var locale = {
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  weekdaysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  firstDayOfWeek: 0,
  firstWeekContainsDate: 1
};
var _default = locale;
exports["default"] = _default;
module.exports = exports.default;
});

var en$1 = /*@__PURE__*/getDefaultExportFromCjs(en);

var lang = {
  formatLocale: en$1,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true
};

var defaultLocale = 'en';
var locales = {};
locales[defaultLocale] = lang;
function locale(name, object, isLocal) {
  if (typeof name !== 'string') return locales[defaultLocale];
  var l = defaultLocale;

  if (locales[name]) {
    l = name;
  }

  if (object) {
    locales[name] = object;
    l = name;
  }

  if (!isLocal) {
    defaultLocale = l;
  }

  return locales[name] || locales[defaultLocale];
}
/**
 * get locale object
 * @param {string} name lang
 */

function getLocale(name) {
  return locale(name, null, true);
}

/* istanbul ignore file */
function rafThrottle(fn) {
  var isRunning = false;
  return function fnBinfRaf() {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (isRunning) return;
    isRunning = true;
    requestAnimationFrame(function () {
      isRunning = false;
      fn.apply(_this, args);
    });
  };
}

/**
 * get the hidden element width, height
 * @param {HTMLElement} element dom
 */
function getPopupElementSize(element) {
  var originalDisplay = element.style.display;
  var originalVisibility = element.style.visibility;
  element.style.display = 'block';
  element.style.visibility = 'hidden';
  var styles = window.getComputedStyle(element);
  var width = element.offsetWidth + parseInt(styles.marginLeft, 10) + parseInt(styles.marginRight, 10);
  var height = element.offsetHeight + parseInt(styles.marginTop, 10) + parseInt(styles.marginBottom, 10);
  element.style.display = originalDisplay;
  element.style.visibility = originalVisibility;
  return {
    width: width,
    height: height
  };
}
/**
 * get the popup position
 * @param {HTMLElement} el relative element
 * @param {Number} targetWidth target element's width
 * @param {Number} targetHeight target element's height
 * @param {Boolean} fixed
 */

function getRelativePosition(el, targetWidth, targetHeight, fixed) {
  var left = 0;
  var top = 0;
  var offsetX = 0;
  var offsetY = 0;
  var relativeRect = el.getBoundingClientRect();
  var dw = document.documentElement.clientWidth;
  var dh = document.documentElement.clientHeight;

  if (fixed) {
    offsetX = window.pageXOffset + relativeRect.left;
    offsetY = window.pageYOffset + relativeRect.top;
  }

  if (dw - relativeRect.left < targetWidth && relativeRect.right < targetWidth) {
    left = offsetX - relativeRect.left + 1;
  } else if (relativeRect.left + relativeRect.width / 2 <= dw / 2) {
    left = offsetX;
  } else {
    left = offsetX + relativeRect.width - targetWidth;
  }

  if (relativeRect.top <= targetHeight && dh - relativeRect.bottom <= targetHeight) {
    top = offsetY + dh - relativeRect.top - targetHeight;
  } else if (relativeRect.top + relativeRect.height / 2 <= dh / 2) {
    top = offsetY + relativeRect.height;
  } else {
    top = offsetY - targetHeight;
  }

  return {
    left: "".concat(left, "px"),
    top: "".concat(top, "px")
  };
}
function getScrollParent(node) {
  var until = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;

  if (!node || node === until) {
    return null;
  }

  var style = function style(value, prop) {
    return getComputedStyle(value, null).getPropertyValue(prop);
  };

  var regex = /(auto|scroll)/;
  var scroll = regex.test(style(node, 'overflow') + style(node, 'overflow-y') + style(node, 'overflow-x'));
  return scroll ? node : getScrollParent(node.parentNode, until);
}

var script$a = {
  name: 'Popup',
  inject: {
    prefixClass: {
      default: 'mx'
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    appendToBody: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      top: '',
      left: ''
    };
  },
  watch: {
    visible: {
      immediate: true,
      handler: function handler(val) {
        var _this = this;

        this.$nextTick(function () {
          if (val) {
            _this.displayPopup();
          }
        });
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    if (this.appendToBody) {
      document.body.appendChild(this.$el);
    }

    this._clickoutEvent = 'ontouchend' in document ? 'touchstart' : 'mousedown';
    document.addEventListener(this._clickoutEvent, this.handleClickOutside); // change the popup position when resize or scroll

    var relativeElement = this.$parent.$el;
    this._displayPopup = rafThrottle(function () {
      return _this2.displayPopup();
    });
    this._scrollParent = getScrollParent(relativeElement) || window;

    this._scrollParent.addEventListener('scroll', this._displayPopup);

    window.addEventListener('resize', this._displayPopup);
  },
  beforeUnmount: function beforeUnmount() {
    if (this.appendToBody && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }

    document.removeEventListener(this._clickoutEvent, this.handleClickOutside);

    this._scrollParent.removeEventListener('scroll', this._displayPopup);

    window.removeEventListener('resize', this._displayPopup);
  },
  methods: {
    handleClickOutside: function handleClickOutside(evt) {
      if (!this.visible) return;
      var target = evt.target;
      var el = this.$el;

      if (el && !el.contains(target)) {
        this.$emit('clickoutside', evt);
      }
    },
    displayPopup: function displayPopup() {
      if (!this.visible) return;
      var popup = this.$el;
      var relativeElement = this.$parent.$el;
      var appendToBody = this.appendToBody;

      if (!this._popupRect) {
        this._popupRect = getPopupElementSize(popup);
      }

      var _this$_popupRect = this._popupRect,
          width = _this$_popupRect.width,
          height = _this$_popupRect.height;

      var _getRelativePosition = getRelativePosition(relativeElement, width, height, appendToBody),
          left = _getRelativePosition.left,
          top = _getRelativePosition.top;

      this.left = left;
      this.top = top;
    }
  }
};

function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, {
    name: "".concat($options.prefixClass, "-zoom-in-down")
  }, {
    default: withCtx(function () {
      return [$props.visible ? (openBlock(), createBlock("div", {
        key: 0,
        class: "".concat($options.prefixClass, "-datepicker-main ").concat($options.prefixClass, "-datepicker-popup"),
        style: {
          top: $data.top,
          left: $data.left,
          position: 'absolute'
        }
      }, [renderSlot(_ctx.$slots, "default")], 6)) : createCommentVNode("", true)];
    }),
    _: 1
  }, 8, ["name"]);
}

script$a.render = render$a;

var _hoisted_1$7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  width: "1em",
  height: "1em"
};

var _hoisted_2$7 = /*#__PURE__*/createVNode("path", {
  d: "M940.218182 107.054545h-209.454546V46.545455h-65.163636v60.50909H363.054545V46.545455H297.890909v60.50909H83.781818c-18.618182 0-32.581818 13.963636-32.581818 32.581819v805.236363c0 18.618182 13.963636 32.581818 32.581818 32.581818h861.090909c18.618182 0 32.581818-13.963636 32.581818-32.581818V139.636364c-4.654545-18.618182-18.618182-32.581818-37.236363-32.581819zM297.890909 172.218182V232.727273h65.163636V172.218182h307.2V232.727273h65.163637V172.218182h176.872727v204.8H116.363636V172.218182h181.527273zM116.363636 912.290909V442.181818h795.927273v470.109091H116.363636z"
}, null, -1);

function render$1$1(_ctx, _cache) {
  return openBlock(), createBlock("svg", _hoisted_1$7, [_hoisted_2$7]);
}

var script$1$1 = {};
script$1$1.render = render$1$1;

var _hoisted_1$1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  width: "1em",
  height: "1em"
};

var _hoisted_2$1$1 = /*#__PURE__*/createVNode("path", {
  d: "M810.005333 274.005333l-237.994667 237.994667 237.994667 237.994667-60.010667 60.010667-237.994667-237.994667-237.994667 237.994667-60.010667-60.010667 237.994667-237.994667-237.994667-237.994667 60.010667-60.010667 237.994667 237.994667 237.994667-237.994667z"
}, null, -1);

function render$2$1(_ctx, _cache) {
  return openBlock(), createBlock("svg", _hoisted_1$1$1, [_hoisted_2$1$1]);
}

var script$2$1 = {};
script$2$1.render = render$2$1;

var script$3$1 = {
  inject: {
    prefixClass: {
      default: 'mx'
    }
  },
  props: {
    type: String
  }
};

function render$3$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("button", {
    type: "button",
    class: "".concat($options.prefixClass, "-btn ").concat($options.prefixClass, "-btn-text ").concat($options.prefixClass, "-btn-icon-").concat($props.type)
  }, [createVNode("i", {
    class: "".concat($options.prefixClass, "-icon-").concat($props.type)
  }, null, 2)], 2);
}

script$3$1.render = render$3$1;

var script$4$1 = {
  name: 'TableDate',
  components: {
    IconButton: script$3$1
  },
  inject: {
    getLocale: {
      default: function _default() {
        return getLocale;
      }
    },
    getWeek: {
      default: function _default() {
        return getWeek;
      }
    },
    prefixClass: {
      default: 'mx'
    }
  },
  props: {
    calendar: {
      type: Date,
      default: function _default() {
        return new Date();
      }
    },
    showWeekNumber: {
      type: Boolean,
      default: false
    },
    titleFormat: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    getRowClasses: {
      type: Function,
      default: function _default() {
        return [];
      }
    },
    getCellClasses: {
      type: Function,
      default: function _default() {
        return [];
      }
    }
  },
  emits: ['select', 'changepanel', 'changecalendar'],
  computed: {
    firstDayOfWeek: function firstDayOfWeek() {
      return this.getLocale().formatLocale.firstDayOfWeek || 0;
    },
    yearMonth: function yearMonth() {
      var _this$getLocale = this.getLocale(),
          yearFormat = _this$getLocale.yearFormat,
          monthBeforeYear = _this$getLocale.monthBeforeYear,
          _this$getLocale$month = _this$getLocale.monthFormat,
          monthFormat = _this$getLocale$month === void 0 ? 'MMM' : _this$getLocale$month;

      var yearLabel = {
        panel: 'year',
        label: this.formatDate(this.calendar, yearFormat)
      };
      var monthLabel = {
        panel: 'month',
        label: this.formatDate(this.calendar, monthFormat)
      };
      return monthBeforeYear ? [monthLabel, yearLabel] : [yearLabel, monthLabel];
    },
    days: function days() {
      var locale = this.getLocale();
      var days = locale.days || locale.formatLocale.weekdaysMin;
      return days.concat(days).slice(this.firstDayOfWeek, this.firstDayOfWeek + 7);
    },
    dates: function dates() {
      var year = this.calendar.getFullYear();
      var month = this.calendar.getMonth();
      var arr = getCalendar({
        firstDayOfWeek: this.firstDayOfWeek,
        year: year,
        month: month
      });
      return chunk(arr, 7);
    }
  },
  methods: {
    getNextCalendar: function getNextCalendar(diffMonth) {
      var year = this.calendar.getFullYear();
      var month = this.calendar.getMonth();
      return createDate(year, month + diffMonth);
    },
    handleIconLeftClick: function handleIconLeftClick() {
      this.$emit('changecalendar', this.getNextCalendar(-1), 'last-month');
    },
    handleIconRightClick: function handleIconRightClick() {
      this.$emit('changecalendar', this.getNextCalendar(1), 'next-month');
    },
    handleIconDoubleLeftClick: function handleIconDoubleLeftClick() {
      this.$emit('changecalendar', this.getNextCalendar(-12), 'last-year');
    },
    handleIconDoubleRightClick: function handleIconDoubleRightClick() {
      this.$emit('changecalendar', this.getNextCalendar(12), 'next-year');
    },
    handlePanelChange: function handlePanelChange(panel) {
      this.$emit('changepanel', panel);
    },
    handleCellClick: function handleCellClick(evt) {
      var target = evt.target;

      if (target.tagName.toUpperCase() === 'DIV') {
        target = target.parentNode;
      }

      var index = target.getAttribute('data-row-col');

      if (index) {
        var _index$split$map = index.split(',').map(function (v) {
          return parseInt(v, 10);
        }),
            _index$split$map2 = _slicedToArray(_index$split$map, 2),
            row = _index$split$map2[0],
            col = _index$split$map2[1];

        var date = this.dates[row][col];
        this.$emit('select', new Date(date));
      }
    },
    formatDate: function formatDate(date, fmt) {
      return format(date, fmt, {
        locale: this.getLocale().formatLocale
      });
    },
    getCellTitle: function getCellTitle(date) {
      var fmt = this.titleFormat;
      return this.formatDate(date, fmt);
    },
    getWeekNumber: function getWeekNumber(date) {
      return this.getWeek(date, this.getLocale().formatLocale);
    }
  }
};

function render$4$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_icon_button = resolveComponent("icon-button");

  return openBlock(), createBlock("div", {
    class: "".concat($options.prefixClass, "-calendar ").concat($options.prefixClass, "-calendar-panel-date")
  }, [createVNode("div", {
    class: "".concat($options.prefixClass, "-calendar-header")
  }, [createVNode(_component_icon_button, {
    type: "double-left",
    onClick: $options.handleIconDoubleLeftClick
  }, null, 8, ["onClick"]), createVNode(_component_icon_button, {
    type: "left",
    onClick: $options.handleIconLeftClick
  }, null, 8, ["onClick"]), createVNode(_component_icon_button, {
    type: "double-right",
    onClick: $options.handleIconDoubleRightClick
  }, null, 8, ["onClick"]), createVNode(_component_icon_button, {
    type: "right",
    onClick: $options.handleIconRightClick
  }, null, 8, ["onClick"]), createVNode("span", {
    class: "".concat($options.prefixClass, "-calendar-header-label")
  }, [(openBlock(true), createBlock(Fragment, null, renderList($options.yearMonth, function (item) {
    return openBlock(), createBlock("button", {
      key: item.panel,
      type: "button",
      class: "".concat($options.prefixClass, "-btn ").concat($options.prefixClass, "-btn-text ").concat($options.prefixClass, "-btn-current-").concat(item.panel),
      onClick: function onClick($event) {
        return $options.handlePanelChange(item.panel);
      }
    }, toDisplayString(item.label), 11, ["onClick"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 2)], 2), createVNode("div", {
    class: "".concat($options.prefixClass, "-calendar-content")
  }, [createVNode("table", {
    class: "".concat($options.prefixClass, "-table ").concat($options.prefixClass, "-table-date")
  }, [createVNode("thead", null, [createVNode("tr", null, [$props.showWeekNumber ? (openBlock(), createBlock("th", {
    key: 0,
    class: "".concat($options.prefixClass, "-week-number-header")
  }, null, 2)) : createCommentVNode("", true), (openBlock(true), createBlock(Fragment, null, renderList($options.days, function (day) {
    return openBlock(), createBlock("th", {
      key: day
    }, toDisplayString(day), 1);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]), createVNode("tbody", {
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.handleCellClick.apply($options, arguments);
    })
  }, [(openBlock(true), createBlock(Fragment, null, renderList($options.dates, function (row, i) {
    return openBlock(), createBlock("tr", {
      key: i,
      class: ["".concat($options.prefixClass, "-date-row"), $props.getRowClasses(row)]
    }, [$props.showWeekNumber ? (openBlock(), createBlock("td", {
      key: 0,
      "data-row-col": "".concat(i, ",0"),
      class: "".concat($options.prefixClass, "-week-number")
    }, toDisplayString($options.getWeekNumber(row[0])), 11, ["data-row-col"])) : createCommentVNode("", true), (openBlock(true), createBlock(Fragment, null, renderList(row, function (cell, j) {
      return openBlock(), createBlock("td", {
        key: j,
        "data-row-col": "".concat(i, ",").concat(j),
        class: ["cell", $props.getCellClasses(cell)],
        title: $options.getCellTitle(cell)
      }, [createVNode("div", null, toDisplayString(cell.getDate()), 1)], 10, ["data-row-col", "title"]);
    }), 128
    /* KEYED_FRAGMENT */
    ))], 2);
  }), 128
  /* KEYED_FRAGMENT */
  ))])], 2)], 2)], 2);
}

script$4$1.render = render$4$1;

var script$5$1 = {
  name: 'TableMonth',
  components: {
    IconButton: script$3$1
  },
  inject: {
    getLocale: {
      default: function _default() {
        return getLocale;
      }
    },
    prefixClass: {
      default: 'mx'
    }
  },
  props: {
    calendar: {
      type: Date,
      default: function _default() {
        return new Date();
      }
    },
    getCellClasses: {
      type: Function,
      default: function _default() {
        return [];
      }
    }
  },
  emits: ['select', 'changecalendar', 'changepanel'],
  computed: {
    calendarYear: function calendarYear() {
      return this.calendar.getFullYear();
    },
    months: function months() {
      var locale = this.getLocale();
      var monthsLocale = locale.months || locale.formatLocale.monthsShort;
      var months = monthsLocale.map(function (text, month) {
        return {
          text: text,
          month: month
        };
      });
      return chunk(months, 3);
    }
  },
  methods: {
    getNextCalendar: function getNextCalendar(diffYear) {
      var year = this.calendar.getFullYear();
      var month = this.calendar.getMonth();
      return createDate(year + diffYear, month);
    },
    handleIconDoubleLeftClick: function handleIconDoubleLeftClick() {
      this.$emit('changecalendar', this.getNextCalendar(-1), 'last-year');
    },
    handleIconDoubleRightClick: function handleIconDoubleRightClick() {
      this.$emit('changecalendar', this.getNextCalendar(1), 'next-year');
    },
    handlePanelChange: function handlePanelChange() {
      this.$emit('changepanel', 'year');
    },
    handleClick: function handleClick(evt) {
      var target = evt.target;

      if (target.tagName.toUpperCase() === 'DIV') {
        target = target.parentNode;
      }

      var month = target.getAttribute('data-month');

      if (month) {
        this.$emit('select', parseInt(month, 10));
      }
    }
  }
};

function render$5$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_icon_button = resolveComponent("icon-button");

  return openBlock(), createBlock("div", {
    class: "".concat($options.prefixClass, "-calendar ").concat($options.prefixClass, "-calendar-panel-month")
  }, [createVNode("div", {
    class: "".concat($options.prefixClass, "-calendar-header")
  }, [createVNode(_component_icon_button, {
    type: "double-left",
    onClick: $options.handleIconDoubleLeftClick
  }, null, 8, ["onClick"]), createVNode(_component_icon_button, {
    type: "double-right",
    onClick: $options.handleIconDoubleRightClick
  }, null, 8, ["onClick"]), createVNode("span", {
    class: "".concat($options.prefixClass, "-calendar-header-label")
  }, [createVNode("button", {
    type: "button",
    class: "".concat($options.prefixClass, "-btn ").concat($options.prefixClass, "-btn-text"),
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.handlePanelChange.apply($options, arguments);
    })
  }, toDisplayString($options.calendarYear), 3)], 2)], 2), createVNode("div", {
    class: "".concat($options.prefixClass, "-calendar-content")
  }, [createVNode("table", {
    class: "".concat($options.prefixClass, "-table ").concat($options.prefixClass, "-table-month"),
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.handleClick.apply($options, arguments);
    })
  }, [(openBlock(true), createBlock(Fragment, null, renderList($options.months, function (row, i) {
    return openBlock(), createBlock("tr", {
      key: i
    }, [(openBlock(true), createBlock(Fragment, null, renderList(row, function (cell, j) {
      return openBlock(), createBlock("td", {
        key: j,
        "data-month": cell.month,
        class: ["cell", $props.getCellClasses(cell.month)]
      }, [createVNode("div", null, toDisplayString(cell.text), 1)], 10, ["data-month"]);
    }), 128
    /* KEYED_FRAGMENT */
    ))]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 2)], 2)], 2);
}

script$5$1.render = render$5$1;

var script$6$1 = {
  name: 'TableYear',
  components: {
    IconButton: script$3$1
  },
  inject: {
    prefixClass: {
      default: 'mx'
    }
  },
  props: {
    calendar: {
      type: Date,
      default: function _default() {
        return new Date();
      }
    },
    getCellClasses: {
      type: Function,
      default: function _default() {
        return [];
      }
    },
    getYearPanel: {
      type: Function
    }
  },
  emits: ['select', 'changecalendar'],
  computed: {
    years: function years() {
      var calendar = new Date(this.calendar);

      if (typeof this.getYearPanel === 'function') {
        return this.getYearPanel(calendar);
      }

      return this.getYears(calendar);
    },
    firstYear: function firstYear() {
      return this.years[0][0];
    },
    lastYear: function lastYear() {
      var last = function last(arr) {
        return arr[arr.length - 1];
      };

      return last(last(this.years));
    }
  },
  methods: {
    getYears: function getYears(calendar) {
      var firstYear = Math.floor(calendar.getFullYear() / 10) * 10;
      var years = [];

      for (var i = 0; i < 10; i++) {
        years.push(firstYear + i);
      }

      return chunk(years, 2);
    },
    getNextCalendar: function getNextCalendar(diffYear) {
      var year = this.calendar.getFullYear();
      var month = this.calendar.getMonth();
      return createDate(year + diffYear, month);
    },
    handleIconDoubleLeftClick: function handleIconDoubleLeftClick() {
      this.$emit('changecalendar', this.getNextCalendar(-10), 'last-decade');
    },
    handleIconDoubleRightClick: function handleIconDoubleRightClick() {
      this.$emit('changecalendar', this.getNextCalendar(10), 'next-decade');
    },
    handleClick: function handleClick(evt) {
      var target = evt.target;

      if (target.tagName.toUpperCase() === 'DIV') {
        target = target.parentNode;
      }

      var year = target.getAttribute('data-year');

      if (year) {
        this.$emit('select', parseInt(year, 10));
      }
    }
  }
};

function render$6$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_icon_button = resolveComponent("icon-button");

  return openBlock(), createBlock("div", {
    class: "".concat($options.prefixClass, "-calendar ").concat($options.prefixClass, "-calendar-panel-year")
  }, [createVNode("div", {
    class: "".concat($options.prefixClass, "-calendar-header")
  }, [createVNode(_component_icon_button, {
    type: "double-left",
    onClick: $options.handleIconDoubleLeftClick
  }, null, 8, ["onClick"]), createVNode(_component_icon_button, {
    type: "double-right",
    onClick: $options.handleIconDoubleRightClick
  }, null, 8, ["onClick"]), createVNode("span", {
    class: "".concat($options.prefixClass, "-calendar-header-label")
  }, [createVNode("span", null, toDisplayString($options.firstYear), 1), createVNode("span", {
    class: "".concat($options.prefixClass, "-calendar-decade-separator")
  }, null, 2), createVNode("span", null, toDisplayString($options.lastYear), 1)], 2)], 2), createVNode("div", {
    class: "".concat($options.prefixClass, "-calendar-content")
  }, [createVNode("table", {
    class: "".concat($options.prefixClass, "-table ").concat($options.prefixClass, "-table-year"),
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.handleClick.apply($options, arguments);
    })
  }, [(openBlock(true), createBlock(Fragment, null, renderList($options.years, function (row, i) {
    return openBlock(), createBlock("tr", {
      key: i
    }, [(openBlock(true), createBlock(Fragment, null, renderList(row, function (cell, j) {
      return openBlock(), createBlock("td", {
        key: j,
        "data-year": cell,
        class: ["cell", $props.getCellClasses(cell)]
      }, [createVNode("div", null, toDisplayString(cell), 1)], 10, ["data-year"]);
    }), 128
    /* KEYED_FRAGMENT */
    ))]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 2)], 2)], 2);
}

script$6$1.render = render$6$1;

var CalendarPanel = {
  name: 'CalendarPanel',
  inject: {
    prefixClass: {
      default: 'mx'
    },
    dispatchDatePicker: {
      default: function _default() {
        return function () {};
      }
    }
  },
  props: {
    value: {},
    defaultValue: {
      default: function _default() {
        var date = new Date();
        date.setHours(0, 0, 0, 0);
        return date;
      }
    },
    defaultPanel: {
      type: String
    },
    disabledDate: {
      type: Function,
      default: function _default() {
        return false;
      }
    },
    type: {
      type: String,
      default: 'date'
    },
    getClasses: {
      type: Function,
      default: function _default() {
        return [];
      }
    },
    showWeekNumber: {
      type: Boolean,
      default: undefined
    },
    getYearPanel: {
      type: Function
    },
    titleFormat: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    calendar: Date,
    // update date when select year or month
    partialUpdate: {
      type: Boolean,
      default: false
    }
  },
  emits: ['select', 'update:calendar'],
  data: function data() {
    var panels = ['date', 'month', 'year'];
    var index = Math.max(panels.indexOf(this.type), panels.indexOf(this.defaultPanel));
    var panel = index !== -1 ? panels[index] : 'date';
    return {
      panel: panel,
      innerCalendar: new Date()
    };
  },
  computed: {
    innerValue: function innerValue() {
      var value = Array.isArray(this.value) ? this.value : [this.value];
      var map = {
        year: startOfYear,
        month: startOfMonth,
        date: startOfDay
      };
      var start = map[this.type] || map.date;
      return value.filter(isValidDate).map(function (v) {
        return start(v);
      });
    },
    calendarYear: function calendarYear() {
      return this.innerCalendar.getFullYear();
    },
    calendarMonth: function calendarMonth() {
      return this.innerCalendar.getMonth();
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: 'initCalendar'
    },
    calendar: {
      handler: 'initCalendar'
    },
    defaultValue: {
      handler: 'initCalendar'
    }
  },
  methods: {
    initCalendar: function initCalendar() {
      var calendarDate = this.calendar;

      if (!isValidDate(calendarDate)) {
        var length = this.innerValue.length;
        calendarDate = getValidDate(length > 0 ? this.innerValue[length - 1] : this.defaultValue);
      }

      this.innerCalendar = startOfMonth(calendarDate);
    },
    isDisabled: function isDisabled(date) {
      return this.disabledDate(new Date(date), this.innerValue);
    },
    emitDate: function emitDate(date, type) {
      if (!this.isDisabled(date)) {
        this.$emit('select', date, type, this.innerValue); // someone need get the first selected date to set range value. (#429)

        this.dispatchDatePicker('pick', date, type);
      }
    },
    handleCalendarChange: function handleCalendarChange(calendar, type) {
      var oldCalendar = new Date(this.innerCalendar);
      this.innerCalendar = calendar;
      this.$emit('update:calendar', calendar);
      this.dispatchDatePicker('calendar-change', calendar, oldCalendar, type);
    },
    handelPanelChange: function handelPanelChange(panel) {
      var oldPanel = this.panel;
      this.panel = panel;
      this.dispatchDatePicker('panel-change', panel, oldPanel);
    },
    handleSelectYear: function handleSelectYear(year) {
      if (this.type === 'year') {
        var date = this.getYearCellDate(year);
        this.emitDate(date, 'year');
      } else {
        this.handleCalendarChange(createDate(year, this.calendarMonth), 'year');
        this.handelPanelChange('month');

        if (this.partialUpdate && this.innerValue.length === 1) {
          var _date = new Date(this.innerValue[0]);

          _date.setFullYear(year);

          this.emitDate(_date, 'year');
        }
      }
    },
    handleSelectMonth: function handleSelectMonth(month) {
      if (this.type === 'month') {
        var date = this.getMonthCellDate(month);
        this.emitDate(date, 'month');
      } else {
        this.handleCalendarChange(createDate(this.calendarYear, month), 'month');
        this.handelPanelChange('date');

        if (this.partialUpdate && this.innerValue.length === 1) {
          var _date2 = new Date(this.innerValue[0]);

          _date2.setFullYear(this.calendarYear);

          this.emitDate(setMonth(_date2, month), 'month');
        }
      }
    },
    handleSelectDate: function handleSelectDate(date) {
      this.emitDate(date, this.type === 'week' ? 'week' : 'date');
    },
    getMonthCellDate: function getMonthCellDate(month) {
      return createDate(this.calendarYear, month);
    },
    getYearCellDate: function getYearCellDate(year) {
      return createDate(year, 0);
    },
    getDateClasses: function getDateClasses(cellDate) {
      var notCurrentMonth = cellDate.getMonth() !== this.calendarMonth;
      var classes = [];

      if (cellDate.getTime() === new Date().setHours(0, 0, 0, 0)) {
        classes.push('today');
      }

      if (notCurrentMonth) {
        classes.push('not-current-month');
      }

      var state = this.getStateClass(cellDate);

      if (!(state === 'active' && notCurrentMonth)) {
        classes.push(state);
      }

      return classes.concat(this.getClasses(cellDate, this.innerValue, classes.join(' ')));
    },
    getMonthClasses: function getMonthClasses(month) {
      if (this.type !== 'month') {
        return this.calendarMonth === month ? 'active' : '';
      }

      var classes = [];
      var cellDate = this.getMonthCellDate(month);
      classes.push(this.getStateClass(cellDate));
      return classes.concat(this.getClasses(cellDate, this.innerValue, classes.join(' ')));
    },
    getYearClasses: function getYearClasses(year) {
      if (this.type !== 'year') {
        return this.calendarYear === year ? 'active' : '';
      }

      var classes = [];
      var cellDate = this.getYearCellDate(year);
      classes.push(this.getStateClass(cellDate));
      return classes.concat(this.getClasses(cellDate, this.innerValue, classes.join(' ')));
    },
    getStateClass: function getStateClass(cellDate) {
      if (this.isDisabled(cellDate)) {
        return 'disabled';
      }

      if (this.innerValue.some(function (v) {
        return v.getTime() === cellDate.getTime();
      })) {
        return 'active';
      }

      return '';
    },
    getWeekState: function getWeekState(row) {
      if (this.type !== 'week') return '';
      var start = row[0].getTime();
      var end = row[6].getTime();
      var active = this.innerValue.some(function (v) {
        var time = v.getTime();
        return time >= start && time <= end;
      });
      return active ? "".concat(this.prefixClass, "-active-week") : '';
    }
  },
  render: function render() {
    var panel = this.panel,
        innerCalendar = this.innerCalendar;

    if (panel === 'year') {
      return createVNode(script$6$1, {
        "calendar": innerCalendar,
        "getCellClasses": this.getYearClasses,
        "getYearPanel": this.getYearPanel,
        "onSelect": this.handleSelectYear,
        "onChangecalendar": this.handleCalendarChange
      }, null);
    }

    if (panel === 'month') {
      return createVNode(script$5$1, {
        "calendar": innerCalendar,
        "getCellClasses": this.getMonthClasses,
        "onSelect": this.handleSelectMonth,
        "onChangepanel": this.handelPanelChange,
        "onChangecalendar": this.handleCalendarChange
      }, null);
    }

    return createVNode(script$4$1, {
      "class": _defineProperty({}, "".concat(this.prefixClass, "-calendar-week-mode"), this.type === 'week'),
      "calendar": innerCalendar,
      "getCellClasses": this.getDateClasses,
      "getRowClasses": this.getWeekState,
      "titleFormat": this.titleFormat,
      "showWeekNumber": typeof this.showWeekNumber === 'boolean' ? this.showWeekNumber : this.type === 'week',
      "onSelect": this.handleSelectDate,
      "onChangepanel": this.handelPanelChange,
      "onChangecalendar": this.handleCalendarChange
    }, null);
  }
};

var CalendarRange = {
  name: 'CalendarRange',
  inject: {
    prefixClass: {
      default: 'mx'
    }
  },
  props: _objectSpread2({}, CalendarPanel.props),
  emits: ['select'],
  data: function data() {
    return {
      innerValue: [],
      calendars: []
    };
  },
  computed: {
    // Minimum difference between start and end calendars
    calendarMinDiff: function calendarMinDiff() {
      var map = {
        date: 1,
        // type:date  min 1 month
        month: 1 * 12,
        // type:month min 1 year
        year: 10 * 12 // type:year  min 10 year

      };
      return map[this.type] || map.date;
    },
    calendarMaxDiff: function calendarMaxDiff() {
      return Infinity;
    },
    defaultValues: function defaultValues() {
      return Array.isArray(this.defaultValue) ? this.defaultValue : [this.defaultValue, this.defaultValue];
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: function handler() {
        var _this = this;

        this.innerValue = isValidRangeDate(this.value) ? this.value : [new Date(NaN), new Date(NaN)];
        var calendars = this.innerValue.map(function (v, i) {
          return startOfMonth(getValidDate(v, _this.defaultValues[i]));
        });
        this.updateCalendars(calendars);
      }
    }
  },
  methods: {
    handleSelect: function handleSelect(date, type) {
      var _this$innerValue = _slicedToArray(this.innerValue, 2),
          startValue = _this$innerValue[0],
          endValue = _this$innerValue[1];

      if (isValidDate(startValue) && !isValidDate(endValue)) {
        if (startValue.getTime() > date.getTime()) {
          this.innerValue = [date, startValue];
        } else {
          this.innerValue = [startValue, date];
        }

        this.emitDate(this.innerValue, type);
      } else {
        this.innerValue = [date, new Date(NaN)];
      }
    },
    emitDate: function emitDate(dates, type) {
      this.$emit('select', dates, type);
    },
    updateStartCalendar: function updateStartCalendar(value) {
      this.updateCalendars([value, this.calendars[1]], 1);
    },
    updateEndCalendar: function updateEndCalendar(value) {
      this.updateCalendars([this.calendars[0], value], 0);
    },
    updateCalendars: function updateCalendars(calendars) {
      var adjustIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var gap = this.getCalendarGap(calendars);

      if (gap) {
        var calendar = new Date(calendars[adjustIndex]);
        calendar.setMonth(calendar.getMonth() + (adjustIndex === 0 ? -gap : gap));
        calendars[adjustIndex] = calendar;
      }

      this.calendars = calendars;
    },
    getCalendarGap: function getCalendarGap(calendars) {
      var _calendars = _slicedToArray(calendars, 2),
          calendarLeft = _calendars[0],
          calendarRight = _calendars[1];

      var yearDiff = calendarRight.getFullYear() - calendarLeft.getFullYear();
      var monthDiff = calendarRight.getMonth() - calendarLeft.getMonth();
      var diff = yearDiff * 12 + monthDiff;
      var min = this.calendarMinDiff;
      var max = this.calendarMaxDiff;

      if (diff < min) {
        return min - diff;
      }

      if (diff > max) {
        return max - diff;
      }

      return 0;
    },
    getRangeClasses: function getRangeClasses(cellDate, currentDates, classnames) {
      var classes = [].concat(this.getClasses(cellDate, currentDates, classnames));

      if (!/disabled|active|not-current-month/.test(classnames) && currentDates.length === 2 && cellDate.getTime() > currentDates[0].getTime() && cellDate.getTime() < currentDates[1].getTime()) {
        classes.push('in-range');
      }

      return classes;
    }
  },
  render: function render() {
    var _this2 = this;

    var calendarRange = this.calendars.map(function (calendar, index) {
      var props = _objectSpread2(_objectSpread2({}, _this2.$props), {}, {
        calendar: calendar,
        value: _this2.innerValue,
        defaultValue: _this2.defaultValues[index],
        getClasses: _this2.getRangeClasses,
        // don't update when range is true
        partialUpdate: false,
        onSelect: _this2.handleSelect,
        'onUpdate:calendar': index === 0 ? _this2.updateStartCalendar : _this2.updateEndCalendar
      });

      return createVNode(CalendarPanel, props, null);
    });
    var prefixClass = this.prefixClass;
    return createVNode("div", {
      "class": "".concat(prefixClass, "-range-wrapper")
    }, [calendarRange]);
  }
};

var scrollBarWidth;
function getScrollbarWidth () {
  if (typeof window === 'undefined') return 0;
  if (scrollBarWidth !== undefined) return scrollBarWidth;
  var outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  outer.style.width = '100px';
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  document.body.appendChild(outer);
  var inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);
  scrollBarWidth = outer.offsetWidth - inner.offsetWidth;
  outer.parentNode.removeChild(outer);
  return scrollBarWidth;
}

/* istanbul ignore file */
var script$7$1 = {
  inject: {
    prefixClass: {
      default: 'mx'
    }
  },
  data: function data() {
    return {
      scrollbarWidth: 0,
      thumbTop: '',
      thumbHeight: ''
    };
  },
  created: function created() {
    this.scrollbarWidth = getScrollbarWidth();
    document.addEventListener('mouseup', this.handleDragend);
  },
  beforeUnmount: function beforeUnmount() {
    document.addEventListener('mouseup', this.handleDragend);
  },
  mounted: function mounted() {
    this.$nextTick(this.getThumbSize);
  },
  methods: {
    getThumbSize: function getThumbSize() {
      var wrap = this.$refs.wrap;
      if (!wrap) return;
      var heightPercentage = wrap.clientHeight * 100 / wrap.scrollHeight;
      this.thumbHeight = heightPercentage < 100 ? "".concat(heightPercentage, "%") : '';
    },
    handleScroll: function handleScroll(evt) {
      var el = evt.currentTarget;
      var scrollHeight = el.scrollHeight,
          scrollTop = el.scrollTop;
      this.thumbTop = "".concat(scrollTop * 100 / scrollHeight, "%");
    },
    handleDragstart: function handleDragstart(evt) {
      evt.stopImmediatePropagation();
      this._draggable = true;
      var offsetTop = this.$refs.thumb.offsetTop;
      this._prevY = evt.clientY - offsetTop;
      document.addEventListener('mousemove', this.handleDraging);
    },
    handleDraging: function handleDraging(evt) {
      if (!this._draggable) return;
      var clientY = evt.clientY;
      var wrap = this.$refs.wrap;
      var scrollHeight = wrap.scrollHeight,
          clientHeight = wrap.clientHeight;
      var offsetY = clientY - this._prevY;
      var top = offsetY * scrollHeight / clientHeight;
      wrap.scrollTop = top;
    },
    handleDragend: function handleDragend() {
      if (this._draggable) {
        this._draggable = false;
        document.removeEventListener('mousemove', this.handleDraging);
      }
    }
  }
};

function render$7$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", {
    class: "".concat($options.prefixClass, "-scrollbar"),
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, [createVNode("div", {
    ref: "wrap",
    class: "".concat($options.prefixClass, "-scrollbar-wrap"),
    style: {
      marginRight: "-".concat($data.scrollbarWidth, "px")
    },
    onScroll: _cache[1] || (_cache[1] = function () {
      return $options.handleScroll.apply($options, arguments);
    })
  }, [renderSlot(_ctx.$slots, "default")], 38), createVNode("div", {
    class: "".concat($options.prefixClass, "-scrollbar-track")
  }, [createVNode("div", {
    ref: "thumb",
    class: "".concat($options.prefixClass, "-scrollbar-thumb"),
    style: {
      height: $data.thumbHeight,
      top: $data.thumbTop
    },
    onMousedown: _cache[2] || (_cache[2] = function () {
      return $options.handleDragstart.apply($options, arguments);
    })
  }, null, 38)], 2)], 2);
}

script$7$1.render = render$7$1;

var padNumber = function padNumber(value) {
  value = parseInt(value, 10);
  return value < 10 ? "0".concat(value) : "".concat(value);
};

var generateOptions = function generateOptions(length, step, options) {
  if (Array.isArray(options)) {
    return options.filter(function (v) {
      return v >= 0 && v < length;
    });
  }

  if (step <= 0) {
    step = 1;
  }

  var arr = [];

  for (var i = 0; i < length; i += step) {
    arr.push(i);
  }

  return arr;
};

var scrollTo = function scrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  // jump to target if duration zero
  if (duration <= 0) {
    requestAnimationFrame(function () {
      element.scrollTop = to;
    });
    return;
  }

  var difference = to - element.scrollTop;
  var tick = difference / duration * 10;
  requestAnimationFrame(function () {
    var scrollTop = element.scrollTop + tick;

    if (scrollTop >= to) {
      element.scrollTop = to;
      return;
    }

    element.scrollTop = scrollTop;
    scrollTo(element, to, duration - 10);
  });
};

var script$8$1 = {
  name: 'ListColumns',
  components: {
    ScrollbarVertical: script$7$1
  },
  inject: {
    prefixClass: {
      default: 'mx'
    }
  },
  props: {
    date: Date,
    scrollDuration: {
      type: Number,
      default: 100
    },
    getClasses: {
      type: Function,
      default: function _default() {
        return [];
      }
    },
    hourOptions: Array,
    minuteOptions: Array,
    secondOptions: Array,
    showHour: {
      type: Boolean,
      default: true
    },
    showMinute: {
      type: Boolean,
      default: true
    },
    showSecond: {
      type: Boolean,
      default: true
    },
    hourStep: {
      type: Number,
      default: 1
    },
    minuteStep: {
      type: Number,
      default: 1
    },
    secondStep: {
      type: Number,
      default: 1
    },
    use12h: {
      type: Boolean,
      default: false
    }
  },
  emits: ['select'],
  computed: {
    columns: function columns() {
      var cols = [];
      if (this.showHour) cols.push({
        type: 'hour',
        list: this.getHoursList()
      });
      if (this.showMinute) cols.push({
        type: 'minute',
        list: this.getMinutesList()
      });
      if (this.showSecond) cols.push({
        type: 'second',
        list: this.getSecondsList()
      });
      if (this.use12h) cols.push({
        type: 'ampm',
        list: this.getAMPMList()
      });
      return cols.filter(function (v) {
        return v.list.length > 0;
      });
    }
  },
  watch: {
    date: {
      handler: function handler() {
        var _this = this;

        this.$nextTick(function () {
          _this.scrollToSelected(_this.scrollDuration);
        });
      }
    }
  },
  mounted: function mounted() {
    this.scrollToSelected(0);
  },
  methods: {
    getHoursList: function getHoursList() {
      var _this2 = this;

      return generateOptions(this.use12h ? 12 : 24, this.hourStep, this.hourOptions).map(function (num) {
        var date = new Date(_this2.date);
        var text = padNumber(num);

        if (_this2.use12h) {
          if (num === 0) {
            text = '12';
          }

          if (date.getHours() >= 12) {
            num += 12;
          }
        }

        var value = date.setHours(num);
        return {
          value: value,
          text: text
        };
      });
    },
    getMinutesList: function getMinutesList() {
      var _this3 = this;

      return generateOptions(60, this.minuteStep, this.minuteOptions).map(function (num) {
        var value = new Date(_this3.date).setMinutes(num);
        return {
          value: value,
          text: padNumber(num)
        };
      });
    },
    getSecondsList: function getSecondsList() {
      var _this4 = this;

      return generateOptions(60, this.secondStep, this.secondOptions).map(function (num) {
        var value = new Date(_this4.date).setSeconds(num);
        return {
          value: value,
          text: padNumber(num)
        };
      });
    },
    getAMPMList: function getAMPMList() {
      var _this5 = this;

      return ['AM', 'PM'].map(function (text, i) {
        var date = new Date(_this5.date);
        var value = date.setHours(date.getHours() % 12 + i * 12);
        return {
          text: text,
          value: value
        };
      });
    },
    scrollToSelected: function scrollToSelected(duration) {
      var elements = this.$el.querySelectorAll('.active');

      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var scrollElement = getScrollParent(element, this.$el);

        if (scrollElement) {
          var to = element.offsetTop;
          scrollTo(scrollElement, to, duration);
        }
      }
    },
    handleSelect: function handleSelect(evt) {
      var target = evt.target,
          currentTarget = evt.currentTarget;
      if (target.tagName.toUpperCase() !== 'LI') return;
      var type = currentTarget.getAttribute('data-type');
      var colIndex = parseInt(currentTarget.getAttribute('data-index'), 10);
      var cellIndex = parseInt(target.getAttribute('data-index'), 10);
      var value = this.columns[colIndex].list[cellIndex].value;
      this.$emit('select', value, type);
    }
  }
};

function render$8$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_scrollbar_vertical = resolveComponent("scrollbar-vertical");

  return openBlock(), createBlock("div", {
    class: "".concat($options.prefixClass, "-time-columns")
  }, [(openBlock(true), createBlock(Fragment, null, renderList($options.columns, function (col, i) {
    return openBlock(), createBlock(_component_scrollbar_vertical, {
      key: i,
      class: "".concat($options.prefixClass, "-time-column")
    }, {
      default: withCtx(function () {
        return [createVNode("ul", {
          class: "".concat($options.prefixClass, "-time-list"),
          "data-type": col.type,
          "data-index": i,
          onClick: _cache[1] || (_cache[1] = function () {
            return $options.handleSelect.apply($options, arguments);
          })
        }, [(openBlock(true), createBlock(Fragment, null, renderList(col.list, function (item, j) {
          return openBlock(), createBlock("li", {
            key: item.value,
            "data-index": j,
            class: ["".concat($options.prefixClass, "-time-item"), $props.getClasses(item.value)]
          }, toDisplayString(item.text), 11, ["data-index"]);
        }), 128
        /* KEYED_FRAGMENT */
        ))], 10, ["data-type", "data-index"])];
      }),
      _: 2
    }, 1032, ["class"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 2);
}

script$8$1.render = render$8$1;

function parseOption() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var values = time.split(':');

  if (values.length >= 2) {
    var hours = parseInt(values[0], 10);
    var minutes = parseInt(values[1], 10);
    return {
      hours: hours,
      minutes: minutes
    };
  }

  return null;
}

var scrollTo$1 = function scrollTo(element, to) {
  if (element) {
    element.scrollTop = to;
  }
};

var script$9$1 = {
  name: 'ListOptions',
  components: {
    ScrollbarVertical: script$7$1
  },
  inject: {
    getLocale: {
      default: function _default() {
        return getLocale;
      }
    },
    prefixClass: {
      default: 'mx'
    }
  },
  props: {
    date: Date,
    options: {
      type: [Object, Function],
      default: function _default() {
        return [];
      }
    },
    format: {
      type: String,
      default: 'HH:mm:ss'
    },
    getClasses: {
      type: Function,
      default: function _default() {
        return [];
      }
    }
  },
  emits: ['select'],
  computed: {
    list: function list() {
      var result = [];
      var options = this.options;

      if (typeof options === 'function') {
        return options() || [];
      }

      var start = parseOption(options.start);
      var end = parseOption(options.end);
      var step = parseOption(options.step);
      var fmt = options.format || this.format;

      if (start && end && step) {
        var startMinutes = start.minutes + start.hours * 60;
        var endMinutes = end.minutes + end.hours * 60;
        var stepMinutes = step.minutes + step.hours * 60;
        var len = Math.floor((endMinutes - startMinutes) / stepMinutes);

        for (var i = 0; i <= len; i++) {
          var timeMinutes = startMinutes + i * stepMinutes;
          var hours = Math.floor(timeMinutes / 60);
          var minutes = timeMinutes % 60;
          var value = new Date(this.date).setHours(hours, minutes, 0);
          result.push({
            value: value,
            text: this.formatDate(value, fmt)
          });
        }
      }

      return result;
    }
  },
  mounted: function mounted() {
    this.scrollToSelected();
  },
  methods: {
    formatDate: function formatDate(date, fmt) {
      return format(date, fmt, {
        locale: this.getLocale().formatLocale
      });
    },
    scrollToSelected: function scrollToSelected() {
      var element = this.$el.querySelector('.active');
      if (!element) return;
      var scrollElement = getScrollParent(element, this.$el);
      if (!scrollElement) return;
      var to = element.offsetTop;
      scrollTo$1(scrollElement, to);
    },
    handleSelect: function handleSelect(value) {
      this.$emit('select', value, 'time');
    }
  }
};

function render$9$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_scrollbar_vertical = resolveComponent("scrollbar-vertical");

  return openBlock(), createBlock(_component_scrollbar_vertical, null, {
    default: withCtx(function () {
      return [(openBlock(true), createBlock(Fragment, null, renderList($options.list, function (item) {
        return openBlock(), createBlock("div", {
          key: item.value,
          class: ["".concat($options.prefixClass, "-time-option"), $props.getClasses(item.value)],
          onClick: function onClick($event) {
            return $options.handleSelect(item.value);
          }
        }, toDisplayString(item.text), 11, ["onClick"]);
      }), 128
      /* KEYED_FRAGMENT */
      ))];
    }),
    _: 1
  });
}

script$9$1.render = render$9$1;

var script$a$1 = {
  name: 'TimePanel',
  components: {
    ListColumns: script$8$1,
    ListOptions: script$9$1
  },
  inject: {
    getLocale: {
      default: function _default() {
        return getLocale;
      }
    },
    prefixClass: {
      default: 'mx'
    }
  },
  props: {
    value: {},
    defaultValue: {
      default: function _default() {
        var date = new Date();
        date.setHours(0, 0, 0, 0);
        return date;
      }
    },
    format: {
      default: 'HH:mm:ss'
    },
    timeTitleFormat: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    showTimeHeader: {
      type: Boolean,
      default: false
    },
    disabledTime: {
      type: Function,
      default: function _default() {
        return false;
      }
    },
    timePickerOptions: {
      type: [Object, Function],
      default: function _default() {
        return null;
      }
    },
    hourOptions: Array,
    minuteOptions: Array,
    secondOptions: Array,
    hourStep: {
      type: Number,
      default: 1
    },
    minuteStep: {
      type: Number,
      default: 1
    },
    secondStep: {
      type: Number,
      default: 1
    },
    showHour: {
      type: Boolean,
      default: undefined
    },
    showMinute: {
      type: Boolean,
      default: undefined
    },
    showSecond: {
      type: Boolean,
      default: undefined
    },
    use12h: {
      type: Boolean,
      default: undefined
    },
    scrollDuration: {
      type: Number,
      default: 100
    }
  },
  emits: ['select', 'clicktitle'],
  computed: {
    innerValue: function innerValue() {
      return getValidDate(this.value, this.defaultValue);
    },
    title: function title() {
      var titleFormat = this.timeTitleFormat;
      var date = new Date(this.innerValue);
      return this.formatDate(date, titleFormat);
    },
    innerForamt: function innerForamt() {
      return typeof this.format === 'string' ? this.format : 'HH:mm:ss';
    },
    ShowHourMinuteSecondAMPM: function ShowHourMinuteSecondAMPM() {
      var _this = this;

      var fmt = this.innerForamt;
      var defaultProps = {
        showHour: /[HhKk]/.test(fmt),
        showMinute: /m/.test(fmt),
        showSecond: /s/.test(fmt),
        use12h: /a/i.test(fmt)
      };
      var obj = {};
      Object.keys(defaultProps).forEach(function (key) {
        obj[key] = typeof _this[key] === 'boolean' ? _this[key] : defaultProps[key];
      });
      return obj;
    }
  },
  methods: {
    formatDate: function formatDate(date, fmt) {
      return format(date, fmt, {
        locale: this.getLocale().formatLocale
      });
    },
    isDisabled: function isDisabled(date) {
      return this.disabledTime(new Date(date));
    },
    handleSelect: function handleSelect(value, type) {
      var date = new Date(value);

      if (!this.isDisabled(value)) {
        this.$emit('select', date, type);
      }
    },
    handleClickTitle: function handleClickTitle() {
      this.$emit('clicktitle');
    },
    getClasses: function getClasses(value) {
      var cellDate = new Date(value);

      if (this.isDisabled(value)) {
        return 'disabled';
      }

      if (cellDate.getTime() === this.innerValue.getTime()) {
        return 'active';
      }

      return '';
    }
  }
};

function render$a$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_list_options = resolveComponent("list-options");

  var _component_list_columns = resolveComponent("list-columns");

  return openBlock(), createBlock("div", {
    class: "".concat($options.prefixClass, "-time")
  }, [$props.showTimeHeader ? (openBlock(), createBlock("div", {
    key: 0,
    class: "".concat($options.prefixClass, "-time-header")
  }, [createVNode("button", {
    type: "button",
    class: "".concat($options.prefixClass, "-btn ").concat($options.prefixClass, "-btn-text ").concat($options.prefixClass, "-time-header-title"),
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.handleClickTitle.apply($options, arguments);
    })
  }, toDisplayString($options.title), 3)], 2)) : createCommentVNode("", true), createVNode("div", {
    class: "".concat($options.prefixClass, "-time-content")
  }, [$props.timePickerOptions ? (openBlock(), createBlock(_component_list_options, {
    key: 0,
    date: $options.innerValue,
    "get-classes": $options.getClasses,
    options: $props.timePickerOptions,
    format: $options.innerForamt,
    onSelect: $options.handleSelect
  }, null, 8, ["date", "get-classes", "options", "format", "onSelect"])) : (openBlock(), createBlock(_component_list_columns, mergeProps({
    key: 1,
    date: $options.innerValue,
    "get-classes": $options.getClasses,
    "hour-options": $props.hourOptions,
    "minute-options": $props.minuteOptions,
    "second-options": $props.secondOptions,
    "hour-step": $props.hourStep,
    "minute-step": $props.minuteStep,
    "second-step": $props.secondStep,
    "scroll-duration": $props.scrollDuration
  }, $options.ShowHourMinuteSecondAMPM, {
    onSelect: $options.handleSelect
  }), null, 16, ["date", "get-classes", "hour-options", "minute-options", "second-options", "hour-step", "minute-step", "second-step", "scroll-duration", "onSelect"]))], 2)], 2);
}

script$a$1.render = render$a$1;

var TimeRange = {
  name: 'TimeRange',
  inject: {
    prefixClass: {
      default: 'mx'
    }
  },
  emits: ['select'],
  props: _objectSpread2({}, script$a$1.props),
  data: function data() {
    return {
      startValue: new Date(NaN),
      endValue: new Date(NaN)
    };
  },
  watch: {
    value: {
      immediate: true,
      handler: function handler() {
        if (isValidRangeDate(this.value)) {
          var _this$value = _slicedToArray(this.value, 2),
              startValue = _this$value[0],
              endValue = _this$value[1];

          this.startValue = startValue;
          this.endValue = endValue;
        } else {
          this.startValue = new Date(NaN);
          this.endValue = new Date(NaN);
        }
      }
    }
  },
  methods: {
    emitChange: function emitChange(type, index) {
      var date = [this.startValue, this.endValue];
      this.$emit('select', date, type === 'time' ? 'time-range' : type, index);
    },
    handleSelectStart: function handleSelectStart(date, type) {
      this.startValue = date; // check the NaN

      if (!(this.endValue.getTime() >= date.getTime())) {
        this.endValue = date;
      }

      this.emitChange(type, 0);
    },
    handleSelectEnd: function handleSelectEnd(date, type) {
      // check the NaN
      this.endValue = date;

      if (!(this.startValue.getTime() <= date.getTime())) {
        this.startValue = date;
      }

      this.emitChange(type, 1);
    },
    disabledStartTime: function disabledStartTime(date) {
      return this.disabledTime(date, 0);
    },
    disabledEndTime: function disabledEndTime(date) {
      return date.getTime() < this.startValue.getTime() || this.disabledTime(date, 1);
    }
  },
  render: function render() {
    var defaultValues = Array.isArray(this.defaultValue) ? this.defaultValue : [this.defaultValue, this.defaultValue];
    var prefixClass = this.prefixClass;
    return createVNode("div", {
      "class": "".concat(prefixClass, "-range-wrapper")
    }, [createVNode(script$a$1, mergeProps(this.$props, this.$attrs, {
      "value": this.startValue,
      "defaultValue": defaultValues[0],
      "disabledTime": this.disabledStartTime,
      "onSelect": this.handleSelectStart
    }), null), createVNode(script$a$1, mergeProps(this.$props, this.$attrs, {
      "value": this.endValue,
      "defaultValue": defaultValues[1],
      "disabledTime": this.disabledEndTime,
      "onSelect": this.handleSelectEnd
    }), null)]);
  }
};

var DatetimePanel = {
  name: 'DatetimePanel',
  inject: {
    prefixClass: {
      default: 'mx'
    }
  },
  props: _objectSpread2(_objectSpread2(_objectSpread2({}, CalendarPanel.props), script$a$1.props), {}, {
    showTimePanel: {
      type: Boolean,
      default: undefined
    }
  }),
  emits: ['select', 'update:showTimePanel'],
  data: function data() {
    return {
      defaultTimeVisible: false,
      currentValue: this.value
    };
  },
  computed: {
    timeVisible: function timeVisible() {
      return typeof this.showTimePanel === 'boolean' ? this.showTimePanel : this.defaultTimeVisible;
    }
  },
  watch: {
    value: function value(val) {
      this.currentValue = val;
    },
    defaultTimeVisible: function defaultTimeVisible(val) {
      this.$emit('update:showTimePanel', val);
    }
  },
  methods: {
    closeTimePanel: function closeTimePanel() {
      this.defaultTimeVisible = false;
    },
    openTimePanel: function openTimePanel() {
      this.defaultTimeVisible = true;
    },
    emitDate: function emitDate(date, type) {
      this.$emit('select', date, type);
    },
    handleSelect: function handleSelect(date, type) {
      if (type === 'date') {
        this.openTimePanel();
      }

      var datetime = assignTime(date, getValidDate(this.value, this.defaultValue));

      if (this.disabledTime(new Date(datetime))) {
        // set the time of defalutValue;
        datetime = assignTime(date, this.defaultValue);

        if (this.disabledTime(new Date(datetime))) {
          // if disabled don't emit date
          this.currentValue = datetime;
          return;
        }
      }

      this.emitDate(datetime, type);
    }
  },
  render: function render() {
    var calendarProps = _objectSpread2(_objectSpread2({}, pick(this.$props, Object.keys(CalendarPanel.props))), {}, {
      type: 'date',
      value: this.currentValue,
      onSelect: this.handleSelect
    });

    var timeProps = _objectSpread2(_objectSpread2({}, pick(this.$props, Object.keys(script$a$1.props))), {}, {
      showTimeHeader: true,
      value: this.currentValue,
      onSelect: this.emitDate,
      onClicktitle: this.closeTimePanel
    });

    var prefixClass = this.prefixClass;
    return createVNode("div", null, [createVNode(CalendarPanel, calendarProps, null), this.timeVisible && createVNode(script$a$1, mergeProps({
      "class": "".concat(prefixClass, "-calendar-time")
    }, timeProps), null)]);
  }
};

var DatetimeRange = {
  name: 'DatetimeRange',
  inject: {
    prefixClass: {
      default: 'mx'
    }
  },
  props: _objectSpread2(_objectSpread2(_objectSpread2({}, CalendarRange.props), TimeRange.props), {}, {
    showTimePanel: {
      type: Boolean,
      default: undefined
    }
  }),
  emits: ['select', 'update:showTimePanel'],
  data: function data() {
    return {
      defaultTimeVisible: false,
      currentValue: this.value
    };
  },
  computed: {
    timeVisible: function timeVisible() {
      return typeof this.showTimePanel === 'boolean' ? this.showTimePanel : this.defaultTimeVisible;
    }
  },
  watch: {
    value: function value(val) {
      this.currentValue = val;
    },
    defaultTimeVisible: function defaultTimeVisible(val) {
      this.$emit('update:showTimePanel', val);
    }
  },
  methods: {
    closeTimePanel: function closeTimePanel() {
      this.defaultTimeVisible = false;
    },
    openTimePanel: function openTimePanel() {
      this.defaultTimeVisible = true;
    },
    emitDate: function emitDate(dates, type) {
      this.$emit('select', dates, type);
    },
    handleSelect: function handleSelect(dates, type) {
      var _this = this;

      if (type === 'date') {
        this.openTimePanel();
      }

      var defaultValues = Array.isArray(this.defaultValue) ? this.defaultValue : [this.defaultValue, this.defaultValue];
      var datetimes = dates.map(function (date, i) {
        var time = isValidRangeDate(_this.value) ? _this.value[i] : defaultValues[i];
        return assignTime(date, time);
      });

      if (datetimes[1].getTime() < datetimes[0].getTime()) {
        datetimes = [datetimes[0], datetimes[0]];
      }

      if (datetimes.some(this.disabledTime)) {
        datetimes = dates.map(function (date, i) {
          return assignTime(date, defaultValues[i]);
        });

        if (datetimes.some(this.disabledTime)) {
          this.currentValue = datetimes;
          return;
        }
      }

      this.emitDate(datetimes, type);
    }
  },
  render: function render() {
    var calendarProps = _objectSpread2(_objectSpread2({}, pick(this.$props, Object.keys(CalendarRange.props))), {}, {
      type: 'date',
      value: this.currentValue,
      onSelect: this.handleSelect
    });

    var timeProps = _objectSpread2(_objectSpread2({}, pick(this.$props, Object.keys(TimeRange.props))), {}, {
      value: this.currentValue,
      showTimeHeader: true,
      onSelect: this.emitDate,
      onClicktitle: this.closeTimePanel
    });

    var prefixClass = this.prefixClass;
    return createVNode("div", null, [createVNode(CalendarRange, calendarProps, null), this.timeVisible && createVNode(TimeRange, mergeProps({
      "class": "".concat(prefixClass, "-calendar-time")
    }, timeProps), null)]);
  }
};

var componentMap = {
  default: CalendarPanel,
  time: script$a$1,
  datetime: DatetimePanel
};
var componentRangeMap = {
  default: CalendarRange,
  time: TimeRange,
  datetime: DatetimeRange
};
var DatePicker = {
  name: 'DatePicker',
  provide: function provide() {
    var _this = this;

    return {
      // make locale reactive
      getLocale: function getLocale() {
        return _this.locale;
      },
      getWeek: this.getWeek,
      prefixClass: this.prefixClass,
      dispatchDatePicker: this.$emit.bind(this)
    };
  },
  props: _objectSpread2(_objectSpread2({}, DatetimePanel.props), {}, {
    modelValue: {},
    valueType: {
      type: String,
      default: 'date' // date, format, timestamp, or token like 'YYYY-MM-DD'

    },
    type: {
      type: String,
      // ['date', 'datetime', 'time', 'year', 'month', 'week']
      default: 'date'
    },
    format: {
      type: String
    },
    formatter: {
      type: Object
    },
    range: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    rangeSeparator: {
      type: String
    },
    lang: {
      type: [String, Object]
    },
    placeholder: {
      type: String,
      default: ''
    },
    editable: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: true
    },
    prefixClass: {
      type: String,
      default: 'mx'
    },
    inputClass: {},
    inputAttr: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    open: {
      type: Boolean,
      default: undefined
    },
    popupClass: {},
    popupStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    inline: {
      type: Boolean,
      default: false
    },
    confirm: {
      type: Boolean,
      default: false
    },
    confirmText: {
      type: String,
      default: 'OK'
    },
    renderInputText: {
      type: Function
    },
    shortcuts: {
      type: Array,
      validator: function validator(value) {
        return Array.isArray(value) && value.every(function (v) {
          return isObject(v) && typeof v.text === 'string' && typeof v.onClick === 'function';
        });
      },
      default: function _default() {
        return [];
      }
    }
  }),
  emits: ['update:modelValue', 'input', 'change', 'clear', 'confirm', 'open', 'close', 'update:open', 'blur', 'focus', 'pick', 'input-error', 'calendar-change', 'panel-change', 'inputError', 'calendarChange', 'panelChange'],
  data: function data() {
    return {
      // cache the innervalue, wait to confirm
      currentValue: null,
      userInput: null,
      defaultOpen: false
    };
  },
  computed: {
    popupVisible: function popupVisible() {
      return !this.disabled && (typeof this.open === 'boolean' ? this.open : this.defaultOpen);
    },
    innerRangeSeparator: function innerRangeSeparator() {
      return this.rangeSeparator || (this.multiple ? ',' : ' ~ ');
    },
    innerFormat: function innerFormat() {
      var map = {
        date: 'YYYY-MM-DD',
        datetime: 'YYYY-MM-DD HH:mm:ss',
        year: 'YYYY',
        month: 'YYYY-MM',
        time: 'HH:mm:ss',
        week: 'w'
      };
      return this.format || map[this.type] || map.date;
    },
    innerValue: function innerValue() {
      var value = this.modelValue !== undefined ? this.modelValue : this.value;

      if (this.validMultipleType) {
        value = Array.isArray(value) ? value : [];
        return value.map(this.value2date);
      }

      if (this.range) {
        value = Array.isArray(value) ? value.slice(0, 2) : [null, null];
        return value.map(this.value2date);
      }

      return this.value2date(value);
    },
    text: function text() {
      var _this2 = this;

      if (this.userInput !== null) {
        return this.userInput;
      }

      if (typeof this.renderInputText === 'function') {
        return this.renderInputText(this.innerValue);
      }

      if (!this.isValidValue(this.innerValue)) {
        return '';
      }

      if (Array.isArray(this.innerValue)) {
        return this.innerValue.map(function (v) {
          return _this2.formatDate(v);
        }).join(this.innerRangeSeparator);
      }

      return this.formatDate(this.innerValue);
    },
    showClearIcon: function showClearIcon() {
      return !this.disabled && this.clearable && this.text;
    },
    locale: function locale() {
      if (isObject(this.lang)) {
        return mergeDeep(getLocale(), this.lang);
      }

      return getLocale(this.lang);
    },
    validMultipleType: function validMultipleType() {
      var types = ['date', 'month', 'year'];
      return this.multiple && !this.range && types.indexOf(this.type) !== -1;
    }
  },
  watch: {
    innerValue: {
      immediate: true,
      handler: function handler(val) {
        this.currentValue = val;
      }
    }
  },
  created: function created() {
    if (_typeof(this.format) === 'object') {
      console.warn("[vue2-datepicker]: The prop `format` don't support Object any more. You can use the new prop `formatter` to replace it");
    }
  },
  methods: {
    handleClickOutSide: function handleClickOutSide(evt) {
      var target = evt.target;

      if (!this.$el.contains(target)) {
        this.closePopup();
      }
    },
    getFormatter: function getFormatter(key) {
      return isObject(this.formatter) && this.formatter[key] || isObject(this.format) && this.format[key];
    },
    getWeek: function getWeek$1(date, options) {
      if (typeof this.getFormatter('getWeek') === 'function') {
        return this.getFormatter('getWeek')(date, options);
      }

      return getWeek(date, options);
    },
    parseDate: function parseDate(value, fmt) {
      fmt = fmt || this.innerFormat;

      if (typeof this.getFormatter('parse') === 'function') {
        return this.getFormatter('parse')(value, fmt);
      }

      var backupDate = new Date();
      return parse(value, fmt, {
        locale: this.locale.formatLocale,
        backupDate: backupDate
      });
    },
    formatDate: function formatDate(date, fmt) {
      fmt = fmt || this.innerFormat;

      if (typeof this.getFormatter('stringify') === 'function') {
        return this.getFormatter('stringify')(date, fmt);
      }

      return format(date, fmt, {
        locale: this.locale.formatLocale
      });
    },
    // transform the outer value to inner date
    value2date: function value2date(value) {
      switch (this.valueType) {
        case 'date':
          return value instanceof Date ? new Date(value.getTime()) : new Date(NaN);

        case 'timestamp':
          return typeof value === 'number' ? new Date(value) : new Date(NaN);

        case 'format':
          return typeof value === 'string' ? this.parseDate(value) : new Date(NaN);

        default:
          return typeof value === 'string' ? this.parseDate(value, this.valueType) : new Date(NaN);
      }
    },
    // transform the inner date to outer value
    date2value: function date2value(date) {
      if (!isValidDate(date)) return null;

      switch (this.valueType) {
        case 'date':
          return date;

        case 'timestamp':
          return date.getTime();

        case 'format':
          return this.formatDate(date);

        default:
          return this.formatDate(date, this.valueType);
      }
    },
    emitValue: function emitValue(date, type) {
      // fix IE11/10 trigger input event when input is focused. (placeholder !== '')
      this.userInput = null;
      var value = Array.isArray(date) ? date.map(this.date2value) : this.date2value(date);
      this.$emit('update:modelValue', value);
      this.$emit('input', value);
      this.$emit('change', value, type);
      this.afterEmitValue(type);
      return value;
    },
    afterEmitValue: function afterEmitValue(type) {
      // this.type === 'datetime', click the time should close popup
      if (!type || type === this.type || type === 'time') {
        this.closePopup();
      }
    },
    isValidValue: function isValidValue(value) {
      if (this.validMultipleType) {
        return isValidDates(value);
      }

      if (this.range) {
        return isValidRangeDate(value);
      }

      return isValidDate(value);
    },
    isValidValueAndNotDisabled: function isValidValueAndNotDisabled(value) {
      if (!this.isValidValue(value)) {
        return false;
      }

      var disabledDate = typeof this.disabledDate === 'function' ? this.disabledDate : function () {
        return false;
      };
      var disabledTime = typeof this.disabledTime === 'function' ? this.disabledTime : function () {
        return false;
      };

      if (!Array.isArray(value)) {
        value = [value];
      }

      return value.every(function (v) {
        return !disabledDate(v) && !disabledTime(v);
      });
    },
    handleMultipleDates: function handleMultipleDates(date, dates) {
      if (this.validMultipleType && dates) {
        var nextDates = dates.filter(function (v) {
          return v.getTime() !== date.getTime();
        });

        if (nextDates.length === dates.length) {
          nextDates.push(date);
        }

        return nextDates;
      }

      return date;
    },
    handleSelectDate: function handleSelectDate(val, type, dates) {
      val = this.handleMultipleDates(val, dates);

      if (this.confirm) {
        this.currentValue = val;
      } else {
        this.emitValue(val, this.validMultipleType ? "multiple-".concat(type) : type);
      }
    },
    clear: function clear() {
      this.emitValue(this.range ? [null, null] : null);
      this.$emit('clear');
    },
    handleClear: function handleClear(evt) {
      evt.stopPropagation();
      this.clear();
    },
    handleConfirmDate: function handleConfirmDate() {
      var value = this.emitValue(this.currentValue);
      this.$emit('confirm', value);
    },
    handleSelectShortcut: function handleSelectShortcut(evt) {
      var index = evt.currentTarget.getAttribute('data-index');
      var item = this.shortcuts[parseInt(index, 10)];

      if (isObject(item) && typeof item.onClick === 'function') {
        var date = item.onClick(this);

        if (date) {
          this.emitValue(date);
        }
      }
    },
    openPopup: function openPopup(evt) {
      if (this.popupVisible) return;
      this.defaultOpen = true;
      this.$emit('open', evt);
      this.$emit('update:open', true);
    },
    closePopup: function closePopup() {
      if (!this.popupVisible) return;
      this.defaultOpen = false;
      this.$emit('close');
      this.$emit('update:open', false);
    },
    blur: function blur() {
      // when use slot input
      if (this.$refs.input) {
        this.$refs.input.blur();
      }
    },
    focus: function focus() {
      if (this.$refs.input) {
        this.$refs.input.focus();
      }
    },
    handleInputChange: function handleInputChange() {
      var _this3 = this;

      if (!this.editable || this.userInput === null) return;
      var text = this.userInput.trim();
      this.userInput = null;

      if (text === '') {
        this.clear();
        return;
      }

      var date;

      if (this.validMultipleType) {
        date = text.split(this.innerRangeSeparator).map(function (v) {
          return _this3.parseDate(v.trim());
        });
      } else if (this.range) {
        var arr = text.split(this.innerRangeSeparator);

        if (arr.length !== 2) {
          // Maybe the separator during the day is the same as the separator for the date
          // eg: 2019-10-09-2020-01-02
          arr = text.split(this.innerRangeSeparator.trim());
        }

        date = arr.map(function (v) {
          return _this3.parseDate(v.trim());
        });
      } else {
        date = this.parseDate(text);
      }

      if (this.isValidValueAndNotDisabled(date)) {
        this.emitValue(date);
        this.blur();
      } else {
        this.$emit('input-error', text);
      }
    },
    handleInputInput: function handleInputInput(evt) {
      this.userInput = typeof evt === 'string' ? evt : evt.target.value;
    },
    handleInputKeydown: function handleInputKeydown(evt) {
      var keyCode = evt.keyCode; // Tab 9 or Enter 13

      if (keyCode === 9) {
        this.closePopup();
      } else if (keyCode === 13) {
        this.handleInputChange();
      }
    },
    handleInputBlur: function handleInputBlur(evt) {
      // tab close
      this.$emit('blur', evt);
    },
    handleInputFocus: function handleInputFocus(evt) {
      this.openPopup(evt);
      this.$emit('focus', evt);
    },
    hasSlot: function hasSlot(name) {
      return this.$slots[name];
    },
    renderSlot: function renderSlot(name, fallback, props) {
      var slotFn = this.$slots[name];
      return slotFn ? slotFn(props) : fallback;
    },
    renderInput: function renderInput() {
      var prefixClass = this.prefixClass;

      var props = _objectSpread2(_objectSpread2({
        name: 'date',
        type: 'text',
        autocomplete: 'off',
        value: this.text,
        class: this.inputClass || "".concat(this.prefixClass, "-input"),
        readonly: !this.editable,
        disabled: this.disabled,
        placeholder: this.placeholder
      }, this.inputAttr), {}, {
        onKeydown: this.handleInputKeydown,
        onFocus: this.handleInputFocus,
        onBlur: this.handleInputBlur,
        onInput: this.handleInputInput,
        onChange: this.handleInputChange
      });

      var input = this.renderSlot('input', createVNode("input", mergeProps(props, {
        "ref": "input"
      }), null), props);
      return createVNode("div", {
        "class": "".concat(prefixClass, "-input-wrapper"),
        "onMousedown": this.openPopup
      }, [input, this.showClearIcon ? createVNode("i", {
        "class": "".concat(prefixClass, "-icon-clear"),
        "onMousedown": this.handleClear
      }, [this.renderSlot('icon-clear', createVNode(script$2$1, null, null))]) : null, createVNode("i", {
        "class": "".concat(prefixClass, "-icon-calendar")
      }, [this.renderSlot('icon-calendar', createVNode(script$1$1, null, null))])]);
    },
    renderContent: function renderContent() {
      var map = this.range ? componentRangeMap : componentMap;
      var Component = map[this.type] || map.default;

      var props = _objectSpread2(_objectSpread2(_objectSpread2({}, pick(this.$props, Object.keys(Component.props))), pick(this.$attrs, (Component.emits || []).map(function (v) {
        return "on".concat(capitalize(v));
      }))), {}, {
        value: this.currentValue,
        onSelect: this.handleSelectDate
      });

      var content = createVNode(Component, mergeProps(props, {
        "ref": "picker"
      }), null);
      return createVNode("div", {
        "class": "".concat(this.prefixClass, "-datepicker-body")
      }, [this.renderSlot('content', content, {
        value: this.currentValue,
        emit: this.handleSelectDate
      })]);
    },
    renderSidebar: function renderSidebar() {
      var _this4 = this;

      var prefixClass = this.prefixClass;
      return createVNode("div", {
        "class": "".concat(prefixClass, "-datepicker-sidebar")
      }, [this.renderSlot('sidebar', null, {
        value: this.currentValue,
        emit: this.handleSelectDate
      }), this.shortcuts.map(function (v, i) {
        return createVNode("button", {
          "key": i,
          "data-index": i,
          "type": "button",
          "class": "".concat(prefixClass, "-btn ").concat(prefixClass, "-btn-text ").concat(prefixClass, "-btn-shortcut"),
          "onClick": _this4.handleSelectShortcut
        }, [v.text]);
      })]);
    },
    renderHeader: function renderHeader() {
      return createVNode("div", {
        "class": "".concat(this.prefixClass, "-datepicker-header")
      }, [this.renderSlot('header', null, {
        value: this.currentValue,
        emit: this.handleSelectDate
      })]);
    },
    renderFooter: function renderFooter() {
      var prefixClass = this.prefixClass;
      return createVNode("div", {
        "class": "".concat(prefixClass, "-datepicker-footer")
      }, [this.renderSlot('footer', null, {
        value: this.currentValue,
        emit: this.handleSelectDate
      }), this.confirm ? createVNode("button", {
        "type": "button",
        "class": "".concat(prefixClass, "-btn ").concat(prefixClass, "-datepicker-btn-confirm"),
        "onClick": this.handleConfirmDate
      }, [this.confirmText]) : null]);
    }
  },
  render: function render() {
    var _ref;

    var prefixClass = this.prefixClass,
        inline = this.inline,
        disabled = this.disabled;
    var sidedar = this.hasSlot('sidebar') || this.shortcuts.length ? this.renderSidebar() : null;
    var content = createVNode("div", {
      "class": "".concat(prefixClass, "-datepicker-content")
    }, [this.hasSlot('header') ? this.renderHeader() : null, this.renderContent(), this.hasSlot('footer') || this.confirm ? this.renderFooter() : null]);
    return createVNode("div", {
      "class": (_ref = {}, _defineProperty(_ref, "".concat(prefixClass, "-datepicker"), true), _defineProperty(_ref, "".concat(prefixClass, "-datepicker-range"), this.range), _defineProperty(_ref, "".concat(prefixClass, "-datepicker-inline"), inline), _defineProperty(_ref, "disabled", disabled), _ref)
    }, [!inline ? this.renderInput() : null, !inline ? createVNode(script$a, {
      "ref": "popup",
      "class": this.popupClass,
      "style": this.popupStyle,
      "visible": this.popupVisible,
      "appendToBody": this.appendToBody,
      "onClickoutside": this.handleClickOutSide
    }, {
      default: function _default() {
        return [sidedar, content];
      }
    }) : createVNode("div", {
      "class": "".concat(prefixClass, "-datepicker-main")
    }, [sidedar, content])]);
  }
};

DatePicker.locale = locale;

DatePicker.install = function install(app) {
  app.component(DatePicker.name, DatePicker);
};

_extends(DatePicker, {
  CalendarPanel: CalendarPanel,
  CalendarRange: CalendarRange,
  TimePanel: script$a$1,
  TimeRange: TimeRange,
  DatetimePanel: DatetimePanel,
  DatetimeRange: DatetimeRange
});

var index_esm = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': DatePicker
});

var css_248z$c = ".mx-icon-left:before,.mx-icon-right:before,.mx-icon-double-left:before,.mx-icon-double-right:before,.mx-icon-double-left:after,.mx-icon-double-right:after{content:\"\";position:relative;top:-1px;display:inline-block;width:10px;height:10px;vertical-align:middle;border-style:solid;border-color:currentColor;border-width:2px 0 0 2px;border-radius:1px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(-45deg) scale(0.7);transform:rotate(-45deg) scale(0.7)}.mx-icon-double-left:after{left:-4px}.mx-icon-double-right:before{left:4px}.mx-icon-right:before,.mx-icon-double-right:before,.mx-icon-double-right:after{-webkit-transform:rotate(135deg) scale(0.7);transform:rotate(135deg) scale(0.7)}.mx-btn{-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1;font-size:14px;font-weight:500;padding:7px 15px;margin:0;cursor:pointer;background-color:transparent;outline:none;border:1px solid rgba(0,0,0,.1);border-radius:4px;color:#73879c;white-space:nowrap}.mx-btn:hover{border-color:#1284e7;color:#1284e7}.mx-btn-text{border:0;padding:0 4px;text-align:left;line-height:inherit}.mx-scrollbar{height:100%}.mx-scrollbar:hover .mx-scrollbar-track{opacity:1}.mx-scrollbar-wrap{height:100%;overflow-x:hidden;overflow-y:auto}.mx-scrollbar-track{position:absolute;top:2px;right:2px;bottom:2px;width:6px;z-index:1;border-radius:4px;opacity:0;-webkit-transition:opacity .24s ease-out;transition:opacity .24s ease-out}.mx-scrollbar-track .mx-scrollbar-thumb{position:absolute;width:100%;height:0;cursor:pointer;border-radius:inherit;background-color:rgba(144,147,153,.3);-webkit-transition:background-color .3s;transition:background-color .3s}.mx-zoom-in-down-enter-active,.mx-zoom-in-down-leave-active{opacity:1;-webkit-transform:scaleY(1);transform:scaleY(1);-webkit-transition:opacity .3s cubic-bezier(0.23, 1, 0.32, 1),-webkit-transform .3s cubic-bezier(0.23, 1, 0.32, 1);transition:opacity .3s cubic-bezier(0.23, 1, 0.32, 1),-webkit-transform .3s cubic-bezier(0.23, 1, 0.32, 1);transition:transform .3s cubic-bezier(0.23, 1, 0.32, 1),opacity .3s cubic-bezier(0.23, 1, 0.32, 1);transition:transform .3s cubic-bezier(0.23, 1, 0.32, 1),opacity .3s cubic-bezier(0.23, 1, 0.32, 1),-webkit-transform .3s cubic-bezier(0.23, 1, 0.32, 1);-webkit-transform-origin:center top;transform-origin:center top}.mx-zoom-in-down-enter,.mx-zoom-in-down-leave-to{opacity:0;-webkit-transform:scaleY(0);transform:scaleY(0)}.mx-datepicker{position:relative;display:inline-block;width:210px}.mx-datepicker svg{width:1em;height:1em;vertical-align:-0.15em;fill:currentColor;overflow:hidden}.mx-datepicker-range{width:320px}.mx-datepicker-inline{width:auto}.mx-input-wrapper{position:relative}.mx-input-wrapper .mx-icon-clear{display:none}.mx-input-wrapper:hover .mx-icon-clear{display:block}.mx-input-wrapper:hover .mx-icon-clear+.mx-icon-calendar{display:none}.mx-input{display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:34px;padding:6px 30px;padding-left:10px;font-size:14px;line-height:1.4;color:#555;background-color:#fff;border:1px solid #ccc;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.mx-input:hover,.mx-input:focus{border-color:#409aff}.mx-input:disabled,.mx-input.disabled{color:#ccc;background-color:#f3f3f3;border-color:#ccc;cursor:not-allowed}.mx-input:focus{outline:none}.mx-input::-ms-clear{display:none}.mx-icon-calendar,.mx-icon-clear{position:absolute;top:50%;right:8px;-webkit-transform:translateY(-50%);transform:translateY(-50%);font-size:16px;line-height:1;color:rgba(0,0,0,.5);vertical-align:middle}.mx-icon-clear{cursor:pointer}.mx-icon-clear:hover{color:rgba(0,0,0,.8)}.mx-datepicker-main{font:14px/1.5 \"Helvetica Neue\",Helvetica,Arial,\"Microsoft Yahei\",sans-serif;color:#73879c;background-color:#fff;border:1px solid #e8e8e8}.mx-datepicker-popup{position:absolute;margin-top:1px;margin-bottom:1px;-webkit-box-shadow:0 6px 12px rgba(0,0,0,.175);box-shadow:0 6px 12px rgba(0,0,0,.175);z-index:2001}.mx-datepicker-sidebar{float:left;-webkit-box-sizing:border-box;box-sizing:border-box;width:100px;padding:6px;overflow:auto}.mx-datepicker-sidebar+.mx-datepicker-content{margin-left:100px;border-left:1px solid #e8e8e8}.mx-datepicker-body{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mx-btn-shortcut{display:block;padding:0 6px;line-height:24px}.mx-range-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex}@media(max-width: 750px){.mx-range-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}.mx-datepicker-header{padding:6px 8px;border-bottom:1px solid #e8e8e8}.mx-datepicker-footer{padding:6px 8px;text-align:right;border-top:1px solid #e8e8e8}.mx-calendar{-webkit-box-sizing:border-box;box-sizing:border-box;width:248px;padding:6px 12px}.mx-calendar+.mx-calendar{border-left:1px solid #e8e8e8}.mx-calendar-header,.mx-time-header{-webkit-box-sizing:border-box;box-sizing:border-box;height:34px;line-height:34px;text-align:center;overflow:hidden}.mx-btn-icon-left,.mx-btn-icon-double-left{float:left}.mx-btn-icon-right,.mx-btn-icon-double-right{float:right}.mx-calendar-header-label{font-size:14px}.mx-calendar-decade-separator{margin:0 2px}.mx-calendar-decade-separator:after{content:\"~\"}.mx-calendar-content{position:relative;height:224px;-webkit-box-sizing:border-box;box-sizing:border-box}.mx-calendar-content .cell{cursor:pointer}.mx-calendar-content .cell:hover{color:#73879c;background-color:#f3f9fe}.mx-calendar-content .cell.active{color:#fff;background-color:#1284e7}.mx-calendar-content .cell.in-range{color:#73879c;background-color:#dbedfb}.mx-calendar-content .cell.disabled{cursor:not-allowed;color:#ccc;background-color:#f3f3f3}.mx-calendar-week-mode .mx-date-row{cursor:pointer}.mx-calendar-week-mode .mx-date-row:hover{background-color:#f3f9fe}.mx-calendar-week-mode .mx-date-row.mx-active-week{background-color:#dbedfb}.mx-calendar-week-mode .mx-date-row .cell:hover{color:inherit;background-color:transparent}.mx-calendar-week-mode .mx-date-row .cell.active{color:inherit;background-color:transparent}.mx-week-number{opacity:.5}.mx-table{table-layout:fixed;border-collapse:separate;border-spacing:0;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;vertical-align:middle}.mx-table th{padding:0;font-weight:500}.mx-table td{padding:0}.mx-table-date td,.mx-table-date th{height:32px;font-size:12px}.mx-table-date .today{color:#2a90e9}.mx-table-date .cell.not-current-month{color:#ccc}.mx-time{-webkit-box-flex:1;-ms-flex:1;flex:1;width:224px;background:#fff}.mx-time+.mx-time{border-left:1px solid #e8e8e8}.mx-calendar-time{position:absolute;top:0;left:0;width:100%;height:100%}.mx-time-header{border-bottom:1px solid #e8e8e8}.mx-time-content{height:224px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.mx-time-columns{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;height:100%;overflow:hidden}.mx-time-column{-webkit-box-flex:1;-ms-flex:1;flex:1;position:relative;border-left:1px solid #e8e8e8;text-align:center}.mx-time-column:first-child{border-left:0}.mx-time-column .mx-time-list{margin:0;padding:0;list-style:none}.mx-time-column .mx-time-list::after{content:\"\";display:block;height:192px}.mx-time-column .mx-time-item{cursor:pointer;font-size:12px;height:32px;line-height:32px}.mx-time-column .mx-time-item:hover{color:#73879c;background-color:#f3f9fe}.mx-time-column .mx-time-item.active{color:#1284e7;background-color:transparent;font-weight:700}.mx-time-column .mx-time-item.disabled{cursor:not-allowed;color:#ccc;background-color:#f3f3f3}.mx-time-option{cursor:pointer;padding:8px 10px;font-size:14px;line-height:20px}.mx-time-option:hover{color:#73879c;background-color:#f3f9fe}.mx-time-option.active{color:#1284e7;background-color:transparent;font-weight:700}.mx-time-option.disabled{cursor:not-allowed;color:#ccc;background-color:#f3f3f3}\n";
styleInject(css_248z$c);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

var require$$0 = /*@__PURE__*/getAugmentedNamespace(index_esm);

createCommonjsModule(function (module, exports) {
(function (global, factory) {
	module.exports = factory(require$$0) ;
}(commonjsGlobal, (function (DatePicker) {
	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var DatePicker__default = /*#__PURE__*/_interopDefaultLegacy(DatePicker);

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, basedir, module) {
		return module = {
			path: basedir,
			exports: {},
			require: function (path, base) {
				return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
			}
		}, fn(module, module.exports), module.exports;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	var ja = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;
	var locale = {
	  months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
	  monthsShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
	  weekdays: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
	  weekdaysShort: ['日', '月', '火', '水', '木', '金', '土'],
	  weekdaysMin: ['日', '月', '火', '水', '木', '金', '土'],
	  firstDayOfWeek: 0,
	  firstWeekContainsDate: 6
	};
	var _default = locale;
	exports["default"] = _default;
	module.exports = exports.default;
	});

	var ja$1 = /*@__PURE__*/getDefaultExportFromCjs(ja);

	var lang = {
	  formatLocale: ja$1,
	  yearFormat: 'YYYY',
	  monthFormat: 'MMM',
	  monthBeforeYear: false
	};
	DatePicker__default['default'].locale('ja', lang);

	return lang;

})));
});

var script$9 = {
  name: 'CuiDatepicker',
  components: {
    DatePicker
  },
  props: {
    modelValue: {
      default: ''
    },
    label: {
      default: null
    },
    placeholder: {
      default: '選択'
    },
    range: {
      default: false,
      type: Boolean
    },
    format: {
      default: 'YYYY年MM月DD日'
    },
    valueFormat: {
      default: 'YYYY-MM-DD'
    },
    required: {
      default: false,
      type: Boolean
    },
    disabled: {
      default: false,
      type: Boolean
    },
    timePickerOptions: {
      default: {},
      Type: Object
    },
    type: {
      default: 'date',
      type: String
    },
    note: {
      default: '',
      type: String
    }
  },
  emits: ['update:modelValue', 'change'],
  methods: {
    changeValue() {
      this.noteDisplay = '';
      this.$emit('update:modelValue', this.modelValue);
      this.$emit('change', this.modelValue);
    }

  },

  data() {
    return {
      date: null,
      trans: {
        required: '*必須'
      },
      noteDisplay: ''
    };
  },

  watch: {
    note() {
      this.noteDisplay = this.note;
    }

  }
};

const _withId$7 = /*#__PURE__*/withScopeId("data-v-513df46f");

pushScopeId("data-v-513df46f");

const _hoisted_1$6 = {
  key: 0,
  class: "cui-datepicker-label"
};
const _hoisted_2$6 = {
  style: {
    "margin-right": "10px"
  }
};
const _hoisted_3$3 = {
  key: 0
};
const _hoisted_4$1 = {
  class: "cui-datepicker-note"
};

popScopeId();

const render$9 = /*#__PURE__*/_withId$7((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_date_picker = resolveComponent("date-picker");

  return openBlock(), createBlock("div", null, [$props.label ? (openBlock(), createBlock("label", _hoisted_1$6, [createVNode("span", _hoisted_2$6, toDisplayString($props.label), 1), $props.required ? (openBlock(), createBlock("span", _hoisted_3$3, toDisplayString($data.trans.required), 1)) : createCommentVNode("", true)])) : createCommentVNode("", true), createVNode(_component_date_picker, {
    disabled: $props.disabled,
    modelValue: $props.modelValue,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $props.modelValue = $event),
    placeholder: $props.placeholder,
    format: $props.format,
    type: $props.type,
    timePickerOptions: $props.timePickerOptions,
    range: $props.range,
    onInput: $options.changeValue,
    "value-type": $props.valueFormat,
    "input-class": "cui-datepicker-input",
    "popup-class": "cui-datepicker-popup",
    class: "cui-datepicker"
  }, null, 8, ["disabled", "modelValue", "placeholder", "format", "type", "timePickerOptions", "range", "onInput", "value-type"]), createVNode("div", _hoisted_4$1, [createVNode("span", null, toDisplayString($data.noteDisplay), 1)])]);
});

var css_248z$b = "\n.cui-datepicker-note[data-v-513df46f] {\n        font-size: 12px;\n        margin-left: 10px;\n        color: var(--cui-danger);\n        height: 15px;\n        line-height: 12px\n}\n";
styleInject(css_248z$b);

var css_248z$a = "\n.cui-datepicker-label {\n        font-size: 14px;\n        margin-left: 10px\n}\n.cui-datepicker {\n        background: var(--cui-gray-0);\n        border: none;\n        border-radius: 12px;\n        height: 26px;\n        padding: 5px 10px;\n        transition: all .2s ease;\n        width: calc(100% - 20px);\n}\n.cui-datepicker-input {\n        background: var(--cui-gray-0);\n        border: none;\n        border-radius: 12px;\n        height: 26px;\n        padding: 0;\n        transition: all .2s ease\n}\n.cui-datepicker-input:focus {\n        outline: none;\n        padding-left: 13px;\n        padding-right: 7px;\n}\n.cui-datepicker-popup {\n            border-radius: 12px;\n            color: var(--cui-font-color);\n            overflow: hidden\n}\n.cui-datepicker-popup .cell,\n    .mx-time-option {\n        transition: all .1s ease\n}\n.cui-datepicker-popup .mx-time-option.active {\n        color: var(--cui-primary)\n}\n.cui-datepicker-popup .cell.today {\n        color: var(--cui-primary);\n}\n.cui-datepicker-popup .cell.active,\n    .cui-datepicker-popup .cell.in-range,\n    .cui-datepicker-popup .cell:hover,\n    .mx-time-option:hover {\n        background: var(--cui-primary);\n        color: white;\n}\n\n";
styleInject(css_248z$a);

script$9.render = render$9;
script$9.__scopeId = "data-v-513df46f";

var script$8 = {
  props: {
    label: {
      type: String,
      default: "",
      required: true
    },
    modelValue: {
      default: ""
    },
    value: {
      default: null
    },
    disabled: {
      default: false,
      type: Boolean
    },
    caption: {
      default: null
    }
  },
  emits: ["update:modelValue", "select"],
  computed: {
    isChecked() {
      return this.modelValue == this.value;
    }

  },
  methods: {
    select() {
      this.$emit('select', this.value);
      this.$emit("update:modelValue", this.value);
    }

  }
};

const _withId$6 = /*#__PURE__*/withScopeId("data-v-fa1c4062");

pushScopeId("data-v-fa1c4062");

const _hoisted_1$5 = {
  style: {
    "margin": "10px 0"
  }
};
const _hoisted_2$5 = {
  key: 0,
  class: "cui-radio-label"
};
const _hoisted_3$2 = {
  style: {
    "margin-right": "10px"
  }
};

popScopeId();

const render$8 = /*#__PURE__*/_withId$6((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1$5, [$props.caption ? (openBlock(), createBlock("div", _hoisted_2$5, [createVNode("span", _hoisted_3$2, toDisplayString($props.caption), 1)])) : createCommentVNode("", true), createVNode("label", {
    class: ["cui-radio", {
      disabled: $props.disabled
    }]
  }, [createVNode("input", {
    type: "radio",
    checked: $options.isChecked,
    value: $props.value,
    onChange: _cache[1] || (_cache[1] = (...args) => $options.select && $options.select(...args)),
    disabled: $props.disabled
  }, null, 40, ["checked", "value", "disabled"]), createVNode("span", null, toDisplayString($props.label), 1)], 2)]);
});

var css_248z$9 = "\n.cui-radio-label[data-v-fa1c4062] {\n    font-size: 14px;\n    margin-left: 10px;\n    margin-bottom: 5px\n}\n.cui-radio[data-v-fa1c4062] {\n  margin: 0;\n  display: block;\n  cursor: pointer;\n  font-size: 14px;\n}\n.cui-radio.disabled[data-v-fa1c4062] {\n  cursor: not-allowed;\n}\n.cui-radio input[data-v-fa1c4062] {\n  display: none;\n}\n.cui-radio input + span[data-v-fa1c4062] {\n  line-height: 18px;\n  height: 18px;\n  padding-left: 18px;\n  display: block;\n  position: relative;\n}\n.cui-radio input + span[data-v-fa1c4062]:not(:empty) {\n  padding-left: 25px;\n}\n.cui-radio input + span[data-v-fa1c4062]:before,\n.cui-radio input + span[data-v-fa1c4062]:after {\n  content: \"\";\n  width: 18px;\n  height: 18px;\n  display: block;\n  border-radius: 50%;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.cui-radio input + span[data-v-fa1c4062]:before {\n  background: var(--cui-gray-5);\n  transition: background 0.2s ease,\n    transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 2);\n}\n.cui-radio.disabled input + span[data-v-fa1c4062]:before {\n  background: var(--cui-gray-2);\n}\n.cui-radio input + span[data-v-fa1c4062]:after {\n  background: #fff;\n  transform: scale(0.78);\n  transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.4);\n}\n.cui-radio input:checked + span[data-v-fa1c4062]:before {\n  transform: scale(1.04);\n  background: var(--cui-primary);\n}\n.cui-radio input:checked + span[data-v-fa1c4062]:after {\n  transform: scale(0.4);\n  transition: transform 0.3s ease;\n}\n.cui-radio:not(.disabled):hover input + span[data-v-fa1c4062]:before {\n  transform: scale(0.92);\n}\n.cui-radio:not(.disabled):hover input + span[data-v-fa1c4062]:after {\n  transform: scale(0.74);\n}\n.cui-radio:not(.disabled):hover input:checked + span[data-v-fa1c4062]:after {\n  transform: scale(0.4);\n}\n";
styleInject(css_248z$9);

script$8.render = render$8;
script$8.__scopeId = "data-v-fa1c4062";

var script$7 = {
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
    },
    loading: {
      default: false,
      type: Boolean
    },
    square: {
      default: false,
      type: Boolean
    }
  },

  data() {
    return {
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
      if (this.loading) {
        return [];
      }

      let data = this.data; // JSON.parse(JSON.stringify(this.data))

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

const _withId$5 = /*#__PURE__*/withScopeId("data-v-dce7b21a");

pushScopeId("data-v-dce7b21a");

const _hoisted_1$4 = {
  key: 0,
  class: "cui-table-header"
};
const _hoisted_2$4 = {
  class: "cui-table-container"
};
const _hoisted_3$1 = {
  key: 0
};
const _hoisted_4 = {
  ref: "body"
};
const _hoisted_5 = {
  key: 0
};
const _hoisted_6 = {
  colspan: "999",
  class: "cui-table-loader-td"
};
const _hoisted_7 = {
  key: 0,
  class: "table-loader loader"
};
const _hoisted_8 = {
  key: 1,
  class: "noHover"
};
const _hoisted_9 = {
  colspan: "900"
};
const _hoisted_10 = {
  class: "cui-table-empty-content"
};

const _hoisted_11 = /*#__PURE__*/createVNode("b", null, "データなし", -1);

const _hoisted_12 = {
  key: 1,
  class: "cui-table-footer"
};

popScopeId();

const render$7 = /*#__PURE__*/_withId$5((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_cui_tr = resolveComponent("cui-tr");

  return openBlock(), createBlock("div", {
    class: ["cui-table", {
      striped: $props.striped,
      select: $props.singleSelect,
      square: $props.square
    }]
  }, [_ctx.$slots.header ? (openBlock(), createBlock("div", _hoisted_1$4, [renderSlot(_ctx.$slots, "header")])) : createCommentVNode("", true), createVNode("div", _hoisted_2$4, [createVNode("table", {
    class: {
      loading: $props.loading
    }
  }, [createVNode("thead", null, [createVNode("tr", null, [$props.multipleSelect ? (openBlock(), createBlock("th", _hoisted_3$1)) : createCommentVNode("", true), renderSlot(_ctx.$slots, "thead")])]), createVNode("tbody", _hoisted_4, [$props.loading ? (openBlock(), createBlock("tr", _hoisted_5, [createVNode("td", _hoisted_6, [$props.loading ? (openBlock(), createBlock("div", _hoisted_7)) : createCommentVNode("", true)])])) : createCommentVNode("", true), $props.data.length < 1 && !$props.loading ? (openBlock(), createBlock("tr", _hoisted_8, [createVNode("td", _hoisted_9, [createVNode("div", _hoisted_10, [renderSlot(_ctx.$slots, "emptyImage"), _hoisted_11])])])) : createCommentVNode("", true), (openBlock(true), createBlock(Fragment, null, renderList($options.displayData, (row, index) => {
    return openBlock(), createBlock(_component_cui_tr, {
      key: index,
      rowData: row,
      ref: $options.setItemRef,
      onClick: $event => $options.rowClick(row, index),
      multipleSelect: $props.multipleSelect,
      clickable: $props.clickable
    }, createSlots({
      parentRow: _withId$5(() => [renderSlot(_ctx.$slots, "row", mergeProps({
        row: Object.assign(row, {
          _index: index
        })
      }, row))]),
      _: 2
    }, [_ctx.$slots.expand ? {
      name: "expand",
      fn: _withId$5(() => [renderSlot(_ctx.$slots, "expand", {
        expand: row
      })])
    } : undefined]), 1032, ["rowData", "onClick", "multipleSelect", "clickable"]);
  }), 128))], 512)], 2)]), _ctx.$slots.footer ? (openBlock(), createBlock("div", _hoisted_12, [renderSlot(_ctx.$slots, "footer")])) : createCommentVNode("", true)], 2);
});

var css_248z$8 = "\n.cui-table[data-v-dce7b21a] {\n        border-radius: 20px;\n        overflow: hidden;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n}\n.cui-table.square[data-v-dce7b21a] {\n        border-radius: 0\n}\n.cui-table-header[data-v-dce7b21a], \n    .cui-table-footer[data-v-dce7b21a] {\n        background: var(--cui-gray-0);\n        padding: 10px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center\n}\n.cui-table table[data-v-dce7b21a] {\n        border-collapse: collapse;\n        width: 100%;\n}\n.cui-table thead tr[data-v-dce7b21a] {\n        background: var(--cui-gray-0);\n}\n.cui-table-container[data-v-dce7b21a] {\n        overflow: auto;\n        flex: 1\n}\n.cui-table-empty-content[data-v-dce7b21a] {\n        display: flex;\n        flex-direction: column;\n        align-items: center\n}\n.cui-table-loader-td[data-v-dce7b21a] {\n        position: relative;\n        height: 100px\n}\n";
styleInject(css_248z$8);

var css_248z$7 = "\n.cui-table th:not([scope=row]) {\n        position: -webkit-sticky;\n        position: sticky;\n        top: 0;\n        z-index: 2;\n        background: var(--cui-gray-0);\n        box-shadow: 0 2px 4px -2px rgb(0 0 0 / 15%)\n}\n.cui-table th,\n    .cui-table td {\n        text-align: left;\n        padding: 10px\n}\n.cui-table.select tbody tr {\n        cursor: pointer\n}\n.cui-table tbody tr:not(.no-border, .noHover) {\n        border-bottom: 1px solid var(--cui-gray-2);\n        transition: background .2s ease;\n}\n.cui-table tbody tr:not(.selected, .expanded, .noHover):hover {\n        background: var(--cui-gray-1)!important;\n        font-weight: bold\n}\n.cui-table.striped tbody tr:nth-of-type(even) {\n        background-color: var(--cui-gray-0);\n}\n.cui-table tbody tr:last-of-type {\n        border-bottom: 2px solid var(--cui-gray-2);\n}\n";
styleInject(css_248z$7);

script$7.render = render$7;
script$7.__scopeId = "data-v-dce7b21a";

var script$6 = {
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

const _withId$4 = /*#__PURE__*/withScopeId("data-v-33b1bfbf");

pushScopeId("data-v-33b1bfbf");

const _hoisted_1$3 = {
  class: "cui-th"
};

const _hoisted_2$3 = /*#__PURE__*/createVNode("i", {
  class: "cui-th-sort-icon-1 fas fa-chevron-up"
}, null, -1);

const _hoisted_3 = /*#__PURE__*/createVNode("i", {
  class: "cui-th-sort-icon-2 fas fa-chevron-down"
}, null, -1);

popScopeId();

const render$6 = /*#__PURE__*/_withId$4((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("th", null, [createVNode("div", _hoisted_1$3, [renderSlot(_ctx.$slots, "default"), $props.sort ? (openBlock(), createBlock("div", {
    key: 0,
    class: ["cui-th-sort", {
      desc: $data.sortDirection === 'desc',
      asc: $data.sortDirection === 'asc'
    }],
    onClick: _cache[1] || (_cache[1] = (...args) => $options.toggleSort && $options.toggleSort(...args))
  }, [_hoisted_2$3, _hoisted_3], 2)) : createCommentVNode("", true)])]);
});

var css_248z$6 = "\n.cui-th[data-v-33b1bfbf] {\n        display: flex\n}\n.cui-th-sort[data-v-33b1bfbf] {\n        display: flex;\n        flex-direction: column;\n        font-size: 10px;\n        align-items: center;\n        justify-content: center;\n        margin-left: 5px;\n        cursor: pointer;\n        height: 23px;\n        overflow: hidden\n}\n.cui-th-sort i[data-v-33b1bfbf] {\n        transition: all .2s ease\n}\n.cui-th-sort.desc .cui-th-sort-icon-2[data-v-33b1bfbf],\n    .cui-th-sort.asc .cui-th-sort-icon-2[data-v-33b1bfbf] {\n        opacity: 0;\n        transform: rotate(180deg);\n        margin-top: -11px\n}\n.cui-th-sort.desc .cui-th-sort-icon-1[data-v-33b1bfbf] {\n        transform: rotate(180deg)\n}\n.cui-th-sort.asc .cui-th-sort-icon-1[data-v-33b1bfbf] {\n        transform: rotate(0deg)\n}   \n\n";
styleInject(css_248z$6);

script$6.render = render$6;
script$6.__scopeId = "data-v-33b1bfbf";

var script$5 = {
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

const _withId$3 = /*#__PURE__*/withScopeId("data-v-3e3bb049");

pushScopeId("data-v-3e3bb049");

const _hoisted_1$2 = {
  key: 0,
  style: {
    "width": "15px"
  }
};
const _hoisted_2$2 = {
  colspan: "100%"
};

popScopeId();

const render$5 = /*#__PURE__*/_withId$3((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_cui_checkbox = resolveComponent("cui-checkbox");

  return openBlock(), createBlock(Fragment, null, [createVNode("tr", {
    class: ["cui-tr-parent", {
      selected: $data.selected,
      clickable: $props.clickable || _ctx.$slots.expand,
      'no-border': $data.expanded
    }],
    onClick: _cache[3] || (_cache[3] = (...args) => $options.handleClick && $options.handleClick(...args))
  }, [$props.multipleSelect ? (openBlock(), createBlock("td", _hoisted_1$2, [createVNode(_component_cui_checkbox, {
    onClick: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"])),
    modelValue: $data.selected,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $data.selected = $event)
  }, null, 8, ["modelValue"])])) : createCommentVNode("", true), renderSlot(_ctx.$slots, "parentRow")], 2), _ctx.$slots.expand ? (openBlock(), createBlock("tr", {
    key: 0,
    class: ["cui-tr-expand", {
      expanded: $data.expanded
    }]
  }, [createVNode("td", _hoisted_2$2, [renderSlot(_ctx.$slots, "expand")])], 2)) : createCommentVNode("", true)], 64);
});

var css_248z$5 = "\n@keyframes expand-3e3bb049{\nfrom{\n            opacity: 0;\n}\nto{\n            opacity: 1;\n}\n}\n.selected[data-v-3e3bb049] {\n        background-color: var(--cui-primary)!important;\n        color: white;\n        font-weight: bold;\n}\n.clickable[data-v-3e3bb049] {\n        cursor: pointer\n}\n.cui-tr-expand[data-v-3e3bb049] {\n        display: none;\n        transition: all .2s ease\n}\n.cui-tr-expand.expanded[data-v-3e3bb049] {\n        display: table-row;\n        animation: expand-3e3bb049 .2s linear 0s;\n}\n.cui-tr-expand.expanded td[data-v-3e3bb049] {\n        padding: 20px\n}\n";
styleInject(css_248z$5);

script$5.render = render$5;
script$5.__scopeId = "data-v-3e3bb049";

var script$4 = {
  name: "CuiTag",
  props: {
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
    }
  }
};

const _withId$2 = /*#__PURE__*/withScopeId("data-v-4f05fbf4");

const render$4 = /*#__PURE__*/_withId$2((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("span", {
    class: ["cui-tag", {
      danger: $props.danger,
      primary: $props.primary,
      warn: $props.warn
    }]
  }, [renderSlot(_ctx.$slots, "default")], 2);
});

var css_248z$4 = "\n.cui-tag[data-v-4f05fbf4] {\n        height: 35px;\n        border: 0px;\n        margin: 5px;\n        border-radius: var(--cui-button-radius);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: .8rem;\n        background: var(--cui-dark);\n        color: white;\n        width: fit-content;\n        padding: 0 10px;\n        font-weight: normal;\n}\n.cui-tag.danger[data-v-4f05fbf4] {\n        background: var(--cui-danger);\n}\n.cui-tag.primary[data-v-4f05fbf4] {\n        background: var(--cui-primary);\n}\n.cui-tag.warn[data-v-4f05fbf4] {\n        background: var(--cui-warn);\n}\n\n";
styleInject(css_248z$4);

script$4.render = render$4;
script$4.__scopeId = "data-v-4f05fbf4";

var script$3 = {
  name: "CuiAvatar",
  props: {
    image: {
      default: '',
      type: String
    }
  },
  computed: {
    src() {
      return 'url(' + this.image + ')';
    }

  }
};

const _withId$1 = /*#__PURE__*/withScopeId("data-v-2d42819a");

const render$3 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("span", {
    class: "cui-avatar",
    style: {
      'background-image': $options.src
    }
  }, null, 4);
});

var css_248z$3 = "\n.cui-avatar[data-v-2d42819a] {\n        height: 35px;\n        width: 35px;\n        background-size: cover;\n        background-position: center;\n        display: inline-block;\n        border-radius: var(--cui-button-radius)\n}\n\n";
styleInject(css_248z$3);

script$3.render = render$3;
script$3.__scopeId = "data-v-2d42819a";

var script$2 = {
  name: 'CuiTooltip',
  props: {
    position: {
      default: 'bottom'
    }
  },

  mounted() {
    document.addEventListener('click', this.handleOutsideClick);
  },

  data() {
    return {
      isVisible: false
    };
  },

  methods: {
    toggleTooltip() {
      this.isVisible = true;
      const parent = this.$refs.parent;
      const tooltip = this.$refs.tooltip;
      createPopper(parent, tooltip, {
        placement: this.position,
        modifiers: [{
          name: 'preventOverflow',
          options: {
            mainAxis: false
          }
        }]
      });
    },

    handleOutsideClick(event) {
      if (this.isVisible) {
        var _event$target;

        const target = event === null || event === void 0 ? void 0 : (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.classList[0];

        if (target !== 'tooltip-cont') {
          this.isVisible = false;
        }
      }
    }

  }
};

const _withId = /*#__PURE__*/withScopeId("data-v-14d4a248");

const render$2 = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", null, [createVNode("div", {
    ref: "parent",
    onClick: _cache[1] || (_cache[1] = withModifiers((...args) => $options.toggleTooltip && $options.toggleTooltip(...args), ["stop"]))
  }, [renderSlot(_ctx.$slots, "default")], 512), createVNode("div", {
    ref: "tooltip",
    class: ["tooltip-cont", {
      visible: $data.isVisible
    }]
  }, [renderSlot(_ctx.$slots, "tooltip"), createVNode("div", {
    class: ["arrow", $props.position]
  }, null, 2)], 2)]);
});

var css_248z$2 = "\n.tooltip-cont[data-v-14d4a248] {\n        display: none;\n        padding: 10px;\n        background: white;\n        border-radius: 20px;\n        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 30%);\n        z-index: 5\n}\n.visible[data-v-14d4a248] {\n        display: block;\n}\n.arrow[data-v-14d4a248],\n    .arrow[data-v-14d4a248]::before {\n        position: absolute;\n        width: 8px;\n        height: 8px;\n        background: inherit;\n}\n.arrow[data-v-14d4a248] {\n        visibility: hidden;\n}\n.arrow[data-v-14d4a248]::before {\n        visibility: visible;\n        content: '';\n        transform: rotate(45deg);\n}\n.arrow.top[data-v-14d4a248] {\n        bottom: -4px;\n        left: calc(50% - 4px);\n}\n.arrow.bottom[data-v-14d4a248] {\n        top: -4px;\n        left: calc(50% - 4px);\n}\n.arrow.left[data-v-14d4a248] {\n        right: -4px;\n        top: calc(50% - 4px);\n}\n.arrow.right[data-v-14d4a248] {\n        left: -4px;\n        top: calc(50% - 4px);\n}\n\n";
styleInject(css_248z$2);

script$2.render = render$2;
script$2.__scopeId = "data-v-14d4a248";

var script$1 = {
  components: {
    Table: script$7
  },
  emits: ['change'],
  props: {
    title: {
      default: 'ファイルアップロード',
      type: String
    },
    accept: {
      default: ['.txt', '.csv', '.bmp', '.png', '.jpeg', '.jpg', '.pdf', '.pptx', '.xlsx', '.docx'],
      type: Array
    },
    note: {
      default: '',
      type: String
    }
  },

  data() {
    return {
      files: [],
      fileTypes: {
        'text/plain': 'far fa-file-alt',
        'text/csv': 'fas fa-file-csv',
        'image/bmp': 'far fa-file-image',
        'image/png': 'far fa-file-image',
        'image/jpeg': 'far fa-file-image',
        'application/pdf': 'far fa-file-pdf',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'far fa-file-powerpoint',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'far fa-file-word',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'far fa-file-excel'
      },
      noteDisplay: ''
    };
  },

  methods: {
    triggerFileSelect() {
      this.$refs.file.click();
    },

    addFile() {
      let file = this.$refs.file.files[0];
      let ext = file.name.split('.');
      let last = ext.length - 1;
      ext = '.' + ext[last];

      if (this.accept.includes(ext)) {
        this.files.push(file);
      }

      this.$emit('change', this.files);
    },

    removeFile(index) {
      this.files.splice(index, 1);
      this.$emit('change', this.files);
    }

  },
  computed: {
    acceptedFiles() {
      let string = "";
      this.accept.forEach(element => {
        string = string + element + ',';
      });
      string = string.slice(0, -1);
      return string;
    }

  },
  watch: {
    note() {
      this.noteDisplay = this.note;
    }

  }
};

const _hoisted_1$1 = {
  class: "cui-file-upload-header"
};
const _hoisted_2$1 = {
  class: "cui-file-upload-note"
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_cui_button = resolveComponent("cui-button");

  const _component_Table = resolveComponent("Table");

  return openBlock(), createBlock(_component_Table, {
    data: $data.files
  }, {
    header: withCtx(() => [createVNode("div", _hoisted_1$1, [createTextVNode(toDisplayString($props.title) + " ", 1), createVNode(_component_cui_button, {
      style: {
        "margin-left": "20px"
      },
      label: "ファイル選択",
      onClick: $options.triggerFileSelect
    }, null, 8, ["onClick"]), createVNode("input", {
      accept: $options.acceptedFiles,
      class: "cui-file-upload-native-input",
      type: "file",
      ref: "file",
      onChange: _cache[1] || (_cache[1] = $event => $options.addFile())
    }, null, 40, ["accept"])])]),
    row: withCtx(row => [createVNode("td", null, [createVNode("i", {
      class: $data.fileTypes[row.type],
      style: {
        "margin-right": "10px",
        "font-size": "20px"
      }
    }, null, 2), createTextVNode(" " + toDisplayString(row.name), 1)]), createVNode("td", null, [createVNode(_component_cui_button, {
      icon: "far fa-trash-alt",
      danger: "",
      onClick: $event => $options.removeFile(row._index)
    }, null, 8, ["onClick"])])]),
    footer: withCtx(() => [createVNode("div", _hoisted_2$1, [createVNode("span", null, toDisplayString($data.noteDisplay), 1)])]),
    _: 1
  }, 8, ["data"]);
}

var css_248z$1 = "\n.cui-file-upload-header {\n        display: flex;\n        align-items: center;\n}\n.cui-file-upload-native-input {\n        display: none;\n}\n.cui-file-upload-note {\n        font-size: 12px;\n        margin-left: 10px;\n        color: var(--cui-danger);\n        height: 15px;\n        line-height: 12px;\n}\n\n";
styleInject(css_248z$1);

script$1.render = render$1;

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CuiButton: script$k,
    CuiButtonGroup: script$j,
    CuiButtonGroupItem: script$i,
    CuiMenuBar: script$h,
    CuiMenuBarItem: script$g,
    CuiCard: script$f,
    CuiModal: script$e,
    CuiInput: script$d,
    CuiCheckbox: script$c,
    CuiSelect: script$b,
    CuiDatepicker: script$9,
    CuiRadio: script$8,
    CuiTable: script$7,
    CuiTh: script$6,
    CuiTr: script$5,
    CuiTag: script$4,
    CuiAvatar: script$3,
    CuiTooltip: script$2,
    CuiFileUpload: script$1
});

var script = {
  name: 'CuiNotification',

  data() {
    return {
      show: false
    };
  },

  created() {
    setTimeout(function () {
      this.show = true;
    }.bind(this), 10);
    setTimeout(function () {
      this.show = false;
    }.bind(this), this.duration - 160);
  }

};

const _hoisted_1 = {
  class: "cui-notification-parent"
};
const _hoisted_2 = {
  key: 0,
  class: "cui-notification-animation"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1, [createVNode(Transition, {
    name: "notification"
  }, {
    default: withCtx(() => [$data.show ? (openBlock(), createBlock("div", _hoisted_2, [createVNode("div", {
      class: ["cui-notification", _ctx.color]
    }, toDisplayString(_ctx.text), 3)])) : createCommentVNode("", true)]),
    _: 1
  })]);
}

var css_248z = "\n.cui-notification-parent {\n        position: absolute;\n        top: 0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 100%;\n        height: 100px\n}\n.cui-notification {\n        position: absolute;\n        z-index: 100;\n        width: 300px;\n        background: red;\n        padding: 20px;\n        border-radius: 24px;\n        text-align: center\n}\n.cui-notification.white {\n        background: white;\n        color: var(--cui-font-color);\n        box-shadow: 1px 1px 4px 0px rgb(0 0 0 / 15%);\n}\n.cui-notification.primary {\n        background: var(--cui-primary);\n        color: white;\n        box-shadow: 1px 1px 4px 0px rgb(0 0 0 / 15%);\n}\n.cui-notification.danger {\n        background: var(--cui-danger);\n        color: white;\n        box-shadow: 1px 1px 4px 0px rgb(0 0 0 / 15%);\n}\n.cui-notification.warn {\n        background: var(--cui-warn);\n        color: white;\n        box-shadow: 1px 1px 4px 0px rgb(0 0 0 / 15%);\n}\n.cui-notification-animation {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-radius: 50%;\n        position: absolute;\n        overflow: hidden;\n        width: 460px;\n        height: 460px\n}\n.notification-enter-active,\n    .notification-leave-active {\n        transition: all .15s ease-in;\n}\n.notification-enter-from,\n    .notification-leave-to {\n        opacity: 0;\n        transform: translateY(-50px);\n        width: 0px;\n        height: 0px\n}\n";
styleInject(css_248z);

script.render = render;

function notification(props) {
  const notificationView = defineComponent({
    extends: script,
    name: 'Notification',

    data() {
      return {
        title: props.title ? props.title : null,
        text: props.text ? props.text : '',
        color: props.color ? props.color : 'white',
        duration: props.duration ? props.duration : 3000
      };
    }

  });
  const div = document.createElement('div');
  document.body.appendChild(div);
  var notifApp = createApp(notificationView);
  notifApp.mount(div);
  setTimeout(function () {
    notifApp.unmount();
    notifApp = null;
    document.body.removeChild(div);
  }.bind(this), props.duration ? props.duration : 3000);
}

var Functions = /*#__PURE__*/Object.freeze({
    __proto__: null,
    notification: notification
});

// Import vue components

const install = function installCliniUiLib(app) {
  app.config.globalProperties.$cui = Functions;
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export default install;
export { script$3 as CuiAvatar, script$k as CuiButton, script$j as CuiButtonGroup, script$i as CuiButtonGroupItem, script$f as CuiCard, script$c as CuiCheckbox, script$9 as CuiDatepicker, script$1 as CuiFileUpload, script$d as CuiInput, script$h as CuiMenuBar, script$g as CuiMenuBarItem, script$e as CuiModal, script$8 as CuiRadio, script$b as CuiSelect, script$7 as CuiTable, script$4 as CuiTag, script$6 as CuiTh, script$2 as CuiTooltip, script$5 as CuiTr };

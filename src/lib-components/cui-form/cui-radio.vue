<template>
  <div style="margin: 10px 0">
    <div class="cui-radio-label" v-if="caption">
        <span style="margin-right: 10px"> {{ caption }} </span>
    </div>
    <label class="cui-radio" v-bind:class="{ disabled }">
      <input
        type="radio"
        :checked="isChecked"
        :value="value"
        @change="select"
        :disabled="disabled"
      />
      <span>{{ label }}</span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    label: { type: String, default: "", required: true },
    modelValue: { default: "" },
    value: { default: null },
    disabled: { default: false, type: Boolean },
    caption: {default: null}
  },
  emits: ["update:modelValue", "select"],
  computed: {
    isChecked() {
      return this.modelValue == this.value;
    },
  },
  methods: {
    select() {
      this.$emit("update:modelValue", this.value);
    },
  },
};
</script>

<style scoped>
.cui-radio-label {
    font-size: 14px;
    margin-left: 10px;
    margin-bottom: 5px
}

.cui-radio {
  margin: 0;
  display: block;
  cursor: pointer;
  font-size: 14px;
}
.cui-radio.disabled {
  cursor: not-allowed;
}
.cui-radio input {
  display: none;
}
.cui-radio input + span {
  line-height: 18px;
  height: 18px;
  padding-left: 18px;
  display: block;
  position: relative;
}
.cui-radio input + span:not(:empty) {
  padding-left: 25px;
}
.cui-radio input + span:before,
.cui-radio input + span:after {
  content: "";
  width: 18px;
  height: 18px;
  display: block;
  border-radius: 50%;
  left: 0;
  top: 0;
  position: absolute;
}
.cui-radio input + span:before {
  background: var(--cui-gray-5);
  transition: background 0.2s ease,
    transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 2);
}
.cui-radio.disabled input + span:before {
  background: var(--cui-gray-2);
}

.cui-radio input + span:after {
  background: #fff;
  transform: scale(0.78);
  transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.4);
}
.cui-radio input:checked + span:before {
  transform: scale(1.04);
  background: var(--cui-primary);
}
.cui-radio input:checked + span:after {
  transform: scale(0.4);
  transition: transform 0.3s ease;
}
.cui-radio:not(.disabled):hover input + span:before {
  transform: scale(0.92);
}
.cui-radio:not(.disabled):hover input + span:after {
  transform: scale(0.74);
}
.cui-radio:not(.disabled):hover input:checked + span:after {
  transform: scale(0.4);
}
</style>
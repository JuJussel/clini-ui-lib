<template>
  <label class="radio" v-bind:class="{ disabled }">
    <input
      type="radio"
      :checked="isChecked"
      :value="value"
      @change="select"
      :disabled="disabled"
    />
    <span>{{ label }}</span>
  </label>
</template>

<script>
export default {
  props: {
    label: { type: String, default: "", required: true },
    modelValue: { default: "" },
    value: { type: String, default: undefined },
    disabled: { default: false, type: Boolean },
  },
  emits: ["update:modelValue", "select"],
  computed: {
    isChecked() {
      return this.modelValue == this.value;
    },
  },
  methods: {
    select() {
      console.log(this.value);
      this.$emit("update:modelValue", this.value);
    },
  },
};
</script>

<style scoped>
.radio {
  margin: 16px 0;
  display: block;
  cursor: pointer;
}
.radio.disabled {
  cursor: not-allowed;
}
.radio input {
  display: none;
}
.radio input + span {
  line-height: 22px;
  height: 22px;
  padding-left: 22px;
  display: block;
  position: relative;
}
.radio input + span:not(:empty) {
  padding-left: 30px;
}
.radio input + span:before,
.radio input + span:after {
  content: "";
  width: 22px;
  height: 22px;
  display: block;
  border-radius: 50%;
  left: 0;
  top: 0;
  position: absolute;
}
.radio input + span:before {
  background: var(--cui-gray-5);
  transition: background 0.2s ease,
    transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 2);
}
.radio.disabled input + span:before {
  background: var(--cui-gray-2);
}

.radio input + span:after {
  background: #fff;
  transform: scale(0.78);
  transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.4);
}
.radio input:checked + span:before {
  transform: scale(1.04);
  background: var(--cui-primary);
}
.radio input:checked + span:after {
  transform: scale(0.4);
  transition: transform 0.3s ease;
}
.radio:not(.disabled):hover input + span:before {
  transform: scale(0.92);
}
.radio:not(.disabled):hover input + span:after {
  transform: scale(0.74);
}
.radio:not(.disabled):hover input:checked + span:after {
  transform: scale(0.4);
}
</style>
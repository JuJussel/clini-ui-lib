<template>
    <div>
        <label class="cui-datepicker-label" v-if="label">
            <span style="margin-right: 10px"> {{ label }} </span>
            <span v-if="required"> {{ trans.required }} </span>
        </label>
        <date-picker
            :disabled="disabled"
            v-model="modelValue"
            :placeholder="placeholder"
            :format="format"
            range
            @input="changeValue"
            :value-type="valueFormat"
            input-class="cui-datepicker-input"
            popup-class="cui-datepicker-popup"
            class="cui-datepicker"
         ></date-picker>
    </div>
</template>

<script>

import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

export default {
    name: 'CuiDatepicker',
    components: { DatePicker },
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
        format: {
            default: 'YYYY年MM月DD日'
        },
        valueFormat: {
            default: 'YYYY-MM-DD'
        }
    },
    emits: ['update:modelValue'],
    methods: {
        changeValue() {
            this.$emit('update:modelValue', this.modelValue)
            this.$emit('change', this.modelValue)
        }
    },
    data() {
        return {
            date: null
        }
    }
}
</script>

<style>
    .cui-datepicker-label {
        font-size: 14px;
        margin-left: 10px
    }
    .cui-datepicker {
        background: var(--cui-gray-0);
        border: none;
        border-radius: 12px;
        height: 26px;
        padding: 5px 10px;
        transition: all .2s ease;
        width: calc(100% - 20px);
    }
    .cui-datepicker-input {
        background: var(--cui-gray-0);
        border: none;
        border-radius: 12px;
        height: 26px;
        padding: 0;
        transition: all .2s ease  
    }
    .cui-datepicker-input:focus {
        outline: none;
        padding-left: 13px;
        padding-right: 7px;
    }
    .cui-datepicker-popup {
            border-radius: 12px;
            color: var(--cui-font-color)
    }
    .cui-datepicker-popup .cell {
        transition: all .2s ease
    }
    .cui-datepicker-popup .cell.today {
        color: var(--cui-primary);
    }
    .cui-datepicker-popup .cell.active,
    .cui-datepicker-popup .cell.in-range,
    .cui-datepicker-popup .cell:hover {
        background: var(--cui-primary);
        color: white;
    }


</style>
<template>
    <div>
        <label class="cui-input-label" v-if="label">
            <span style="margin-right: 10px"> {{ label }} </span>
            <span v-if="required"> {{ trans.required }} </span>
        </label>
        <div style="position: relative">
            <span class="cui-input-append" v-if="append"> {{ append }} </span>
            <input
                class="cui-input" 
                v-bind:class="{'has-icon': icon, disabled, darker}"
                v-bind:style="{width: width}"
                :type="type" 
                v-model="modelValue" 
                @input="changeValue"
                :disabled="disabled"
                clearable
                :placeholder="placeholder"
            >
            <span :class="icon + ' cui-input-icon'" v-if="icon"></span>

        </div>
        <div class="cui-input-note" v-if="!noNote">
            <span> {{ error }} </span>
        </div>
    </div>
</template>

<script>
export default {
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
        darker: {
            default: false,
            type: Boolean
        }
    },
    emits: ['update:modelValue'],
    methods: {
        changeValue() {
            this.$emit('update:modelValue', this.modelValue)
        }
    },
    data() {
        return {
            trans: {
                required: '*必須'
            },
            error: ''
        }
    }
}
</script>

<style scoped>
    .cui-input-label {
        font-size: 14px;
        margin-left: 10px
    }
    .cui-input {
        background: var(--cui-gray-0);
        border: none;
        border-radius: 12px;
        height: 26px;
        padding: 5px 10px;
        transition: all .2s ease
    }
    .cui-input.darker {
        background: var(--cui-gray-3);
    }
    .cui-input.disabled {
        color: var(--cui-gray-3)
    }
    .cui-input:focus {
        outline: none;
        padding-left: 13px;
        padding-right: 7px;
        background: var(--cui-gray-1)
    }
    .cui-input.darker:focus {
        background: var(--cui-gray-4)
    }
    .cui-input.darker:hover {
        background: var(--cui-gray-4)
    }
    .cui-input-note {
        font-size: 12px;
        margin-left: 10px;
        color: var(--cui-danger);
        height: 15px;
        line-height: 12px;
    }
    .cui-input-icon {
        position: absolute;
        left:0;
        background: var(--cui-gray-0);
        border-radius: 12px;
        padding: 10px;
        transition: all .2s ease;
    }
    .has-icon {
        text-indent: 28px;
    }
    .cui-input:focus + .cui-input-icon {
        margin: -3px;
        box-shadow: 0 10px 20px -10px var(--cui-dark);
        background: white;
    }
    .cui-input-append {
        position: absolute;
        right: 0;
        height: 34px;
        background: white;
        border-radius: 12px;
        line-height: 34px;
        padding: 0 10px;
        border: solid 1px var(--cui-gray-1);
        font-size: 14px
    }
</style>
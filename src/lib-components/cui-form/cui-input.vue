<template>
    <div>
        <label :for="prop" class="cui-input-label" v-if="label">
            <span style="margin-right: 10px"> {{ label }} </span>
            <span v-if="required"> {{ trans.required }} </span>
        </label>
        <input class="cui-input" :id="prop" :type="type" v-model="modelValue" @input="changeValue">
        <div class="cui-input-note">
            <span> {{ note }} </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CuiInput',
    props: {
        prop: {
            default: Math.floor(Math.random() * 10000)
        },
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
            note: ''
        }
    }
}
</script>

<style>
    .cui-input-label {
        font-size: 14px;
        margin-left: 10px
    }
    .cui-input {
        background: var(--cui-gray-0);
        border: none;
        border-radius: 12px;
        height: 25px;
        padding: 5px 10px;
        transition: all .2s ease

    }
    .cui-input:focus {
        outline: none;
        padding-left: 13px;
        padding-right: 7px;
        background: var(--cui-gray-1);
    }
    .cui-input-note {
        font-size: 12px;
        margin-left: 10px;
        color: var(--cui-danger);
        height: 15px
    }
</style>
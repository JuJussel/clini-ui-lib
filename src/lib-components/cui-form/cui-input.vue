<template>
    <div>
        <label :for="prop" class="cui-input-label" v-if="label">
            <span style="margin-right: 10px"> {{ label }} </span>
            <span v-if="required"> {{ trans.required }} </span>
        </label>
        <div>
            <span :class="icon + ' cui-input-icon'" v-if="icon"></span>
            <input
                class="cui-input" 
                v-bind:class="{'has-icon': icon}"
                v-bind:style="{width: width}"
                :type="type" 
                v-model="modelValue" 
                @input="changeValue"
            >
        </div>
        <div class="cui-input-note">
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
            default: 'calc(100% - 40px)'
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
    .cui-input-icon {
        position: absolute;
        background: white;
        border-radius: 12px;
        padding: 9px;
    }
    .has-icon {
        text-indent: 30px;
    }
</style>
<template>
        <div class="cui-switch-wrapper">
            <label class="cui-switch-label" v-if="label">
                <span style="margin-right: 10px"> {{ label }} </span>
            </label>
            <div class="cui-switch-button">
                <input @change="toggleSelected" class="cui-switch-checkbox" type="checkbox" :id="id" v-model="modelValue" :disabled="disabled"/>
                <div 
                    class="cui-switch-knobs" 
                    :true-label="trueLabel"
                    :false-label="falseLabel"
                ></div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'CuiSwitch',
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
        },
        trueLabel: {
            default: 'あり'
        },
        falseLabel: {
            default: 'なし'
        }
    },
    emits: ['update:modelValue'],
    methods: {
        toggleSelected() {
            this.$emit('update:modelValue', this.modelValue)
        }
    },
    data() {
        return {
            id: null,
            color: 'red'

        }
    },
    mounted() {
        this.id = Math.floor(Math.random() * 100000)
    }
}
</script>

<style scoped>
    .cui-switch-wrapper {
        display: flex;
        align-items: center;
    }
    .cui-switch-label {
        font-size: 14px;
        margin-left: 10px
    }

    .cui-switch-button
    {
        position: relative;
        width: 74px;
        height: 36px;
        overflow: hidden;
        background: var(--cui-gray-2);
    }

    .cui-switch-button, .cui-switch-button {
        border-radius: 100px;
    }

    .cui-switch-checkbox
    {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        cursor: pointer;
        z-index: 3;
    }

    .cui-switch-knobs
    {
        z-index: 2;
    }
    .cui-switch-knobs:before
    {
        content: attr(false-label);
        position: absolute;
        top: 4px;
        left: 4px;
        width: 20px;
        height: 10px;
        color: #fff;
        font-size: 10px;
        font-weight: bold;
        text-align: center;
        line-height: 1;
        padding: 9px 4px;
        background-color: var(--cui-gray-5);
        border-radius: 50%;
        transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
    }

    .cui-switch-checkbox:active + .cui-switch-knobs:before
    {
        width: 46px;
        border-radius: 100px;
    }

    .cui-switch-checkbox:checked:active + .cui-switch-knobs:before
    {
        margin-left: -26px;
    }

    .cui-switch-checkbox:checked + .cui-switch-knobs:before
    {
        content: attr(true-label);
        left: 42px;
        background-color: var(--cui-primary);
    }

</style>
<template>
    <div class="cui-button-wrapper" @click="handelClick" v-bind:class="{disabled}">
        <button
            class="cui-button"
            v-bind:class="{
                danger: danger,
                primary: primary,
                warn: warn,
                disabled: disabled || loading,
                loading: loading,
                plain: plain,
                white: white,
                bigIcon: bigIcon
            }"
            >
            <div class="loader-button" v-if="loading"></div>
            <div class="ripple"></div>
            <i :class="icon" v-if="icon !== ''"></i>
            <span v-if="label !==''"> {{ label }} </span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'CuiButton',
    props: {
        label: {
            default: '',
            type: String
        },
        icon: {
            default: '',
            type: String,
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
            if (!this.disabled && !this.loading) {
                this.$emit('click')
            }
        }
    }
}
</script>

<style scoped>
    .cui-button-wrapper {
        width: fit-content;
    }
    .cui-button-wrapper:not(.disabled) {
        cursor: pointer
    }
    .cui-button-wrapper:hover .cui-button:not(.disabled):not(.plain) {
        transform: translate(0px, -5px);
        margin-bottom: 5px;
        box-shadow: 0 10px 20px -10px var(--cui-dark)
    }
    .cui-button {
        height: 35px;
        border: 0px;
        margin: 5px;
        border-radius: var(--cui-button-radius);
        transition: all .2s ease;
        position: relative;
        user-select: none;
        z-index: 1;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px;
        outline: none;
        font-size: .8rem;
        font-weight: bold;
        box-sizing: border-box;
        background: var(--cui-dark);
        color: white;
        cursor: pointer
    }
    .cui-button.danger {
        background: var(--cui-danger);
    }
    .cui-button.danger:not(.disabled):hover {
        box-shadow: 0 10px 20px -10px var(--cui-danger);
    }
    .cui-button.primary {
        background: var(--cui-primary);
    }
    .cui-button.primary:not(.disabled):hover {
        box-shadow: 0 10px 20px -10px var(--cui-primary);
    }
    .cui-button.warn {
        background: var(--cui-warn);
    }
    .cui-button.warn:not(.disabled):hover {
        box-shadow: 0 10px 20px -10px var(--cui-warn);
    }
    .cui-button > i:not(:last-child) {
        margin-right: 5px
    }
    .cui-button.disabled {
        cursor: not-allowed;
        opacity: 0.7;
    }
    .cui-button.loading {
        color: rgba(255,255,255,0.5)
    }
    .cui-button.plain {
        background: none;
        color: var(--cui-font-color);
        font-weight: normal;
    }
    .cui-button.plain:hover {
        background: var(--cui-gray-1)
    }
    .cui-button.white {
        background: white;
        color: var(--cui-font-color)
    }
    .loader-button {
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex
    }
    .cui-button.bigIcon i {
        font-size: 20px;
    }
</style>
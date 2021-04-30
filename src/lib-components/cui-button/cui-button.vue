<template>
    <div>
        <button 
            class="cui-button"
            v-bind:class="{
                danger: danger,
                primary: primary,
                warn: warn,
                disabled: disabled || loading,
                loading: loading,
                plain: plain
            }"
            @click="$emit('click')"
            >
            <i :class="icon" v-if="icon !== ''"></i>
            <span> {{ label }} </span> 
            <div class="loader" v-if="loading"></div>
            <div class="ripple"></div>
        </button>
    </div>
</template>

<script>
export default {
    name: 'CuiButton',
    props: {
        label: {
            default: 'Label',
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
}
</script>

<style>
.cui-button {
    border: 0px;
    margin: 5px;
    border-radius: 12px;
    transition: all .40s ease;
    position: relative;
    user-select: none;
    z-index: 1;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    outline: none;
    font-size: .8rem;
    box-sizing: border-box;
    background: var(--dark);
    color: white;
    cursor: pointer;
}
.cui-button:not(.disabled):not(.plain):hover {
    margin-top: -3px;
    box-shadow: 0 10px 20px -10px var(--dark);
}
.cui-button.danger {
    background: var(--danger);
}
.cui-button.danger:not(.disabled):hover {
    box-shadow: 0 10px 20px -10px var(--danger);
}
.cui-button.primary {
    background: var(--primary);
}
.cui-button.primary:not(.disabled):hover {
    box-shadow: 0 10px 20px -10px var(--primary);
}
.cui-button.warn {
    background: var(--warn);
}
.cui-button.warn:not(.disabled):hover {
    box-shadow: 0 10px 20px -10px var(--warn);
}
.cui-button > i {
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
    color: var(--font-color)
}
.cui-button.plain:hover {
    background: var(--gray-1)
}
</style>
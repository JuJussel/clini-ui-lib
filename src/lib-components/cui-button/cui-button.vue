<template>
    <div>
        <button 
            class="cui-button"
            v-bind:class="{
                danger: danger,
                primary: primary,
                warn: warn
            }"
            > 
            <i :class="icon" v-if="icon !== ''"></i>
            <span> {{ label }} </span> 
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
        }
    },
    data() {
        return {
            
        }
    }
}
</script>

<style>
.cui-button {
    border: 0px;
    margin: 5px;
    border-radius: 12px;
    transition: all .35s ease;
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
    cursor: pointer
}
.cui-button:hover {
    margin-top: -3px;
    box-shadow: 0 10px 20px -10px var(--dark);
}
.cui-button.danger {
    background: var(--danger);
}
.cui-button.danger:hover {
    box-shadow: 0 10px 20px -10px var(--danger);
}
.cui-button.primary {
    background: var(--primary);
}
.cui-button.primary:hover {
    box-shadow: 0 10px 20px -10px var(--primary);
}
.cui-button.warn {
    background: var(--warn);
}
.cui-button.warn:hover {
    box-shadow: 0 10px 20px -10px var(--warn);
}
.cui-button > i {
    margin-right: 5px
}
</style>
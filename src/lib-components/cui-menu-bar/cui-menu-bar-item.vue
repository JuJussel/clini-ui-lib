<template>
    <span class="cui-menu-bar-item" @click="handelClick" ref="item" :value="value">
        <div class="ripple"></div>
        <div class="cui-menu-bar-item-content">
            <i :class="icon + ' item-icon'" v-bind:class="{'plain-icon': plainIcon}" v-if="icon !== ''"></i>
            <span v-if="label !==''"> {{ label }} </span>
        </div>
    </span>
</template>

<script>
export default {
    name: 'CuiMenuBarItem',
    props: {
        label: {
            default: '',
            type: String
        },
        icon: {
            default: '',
            type: String,
        },
        value: {
            default: null
        },
        plainIcon: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handelClick() {
            this.$parent.changeValue(this.value)
        }
    }
}
</script>

<style scoped>
    .cui-menu-bar-item {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
        margin:  10px 5px;
        position: relative;
        padding: 10px 20px;
        transition: all .2s ease;
        color: var(--cui-gray-5)
    }
    .cui-menu-bar-item:not(.selected):hover {
        cursor: pointer;
        transform: translateY(-3px);
    }
    .cui-menu-bar-item > .content {
        transition: all .2s ease;
    }
    .cui-menu-bar-item:hover > .content {
        padding-bottom: 5px;
    }
    .cui-menu-bar-item-content {
        display: flex;
        align-items: center;
    }
    .cui-menu-bar-item-content .item-icon {
        color: var(--cui-primary);
        margin-right: 12px;
        border-radius: 12px;
        background-color: white;
        height: 30px;
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .selected {
        background-color: white;
        box-shadow: rgb(0 0 0 / 4%) 0px 7px 11px;
        color: var(--cui-font-color);
    }
    .selected .item-icon {
        background-color: var(--cui-primary);
        color: white;
    }
    .plain-icon {
        color: var(--cui-gray-5)!important;
        background-color: transparent!important;
        margin-right: 0!important;
    }
</style>
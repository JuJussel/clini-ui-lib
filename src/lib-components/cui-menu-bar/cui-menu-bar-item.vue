<template>
    <span class="cui-menu-bar-item" @click="handelClick" ref="item" :value="value">
        <div class="ripple"></div>
        <div class="menu-bar-line"></div>
        <div class="cui-menu-bar-item-content">
            <i :class="icon" v-if="icon !== ''"></i>
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
        }
    },
    methods: {
        handelClick() {
            this.$parent.changeValue(this.value)
        }
    }
}
</script>

<style>
    .cui-menu-bar-item {
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 10px;
        position: relative;
        padding: 0 5px
    }
    .cui-menu-bar-item:hover {
        cursor: pointer;
        color: white;
    }
    .cui-menu-bar-item > .content {
        transition: all .2s ease;
    }
    .cui-menu-bar-item:hover > .content {
        padding-bottom: 5px;
    }
    .cui-menu-bar-item > i:not(:last-child) {
        margin-right: 5px
    }
    .cui-menu-bar-item.selected {
        color: white;
    }
    .menu-bar-line {
        opacity: 0;
        transition: all .2s;
        background: white;
        width: 100%;
        height: 2px;
        bottom: 0;
        position: absolute;
    }
    .cui-menu-bar-item.selected > .menu-bar-line {
        opacity: 100
    }
    .cui-menu-bar-item-content i {
        margin-right: 5px;
    }
</style>
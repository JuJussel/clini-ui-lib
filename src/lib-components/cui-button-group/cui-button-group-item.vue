<template>
    <div class="cui-button-group-item" @click="handelClick" ref="item" :value="value">
        <div class="ripple"></div>
        <i :class="icon" v-if="icon !== ''"></i>
        <span v-if="label !==''"> {{ label }} </span> 
    </div>
</template>

<script>

export default {
    name: 'ButtonGroupItem',
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
            default: null,
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
    .cui-button-group-item {
        height: 35px;
        border: 0px;
        margin: 5px 0;
        transition: all .2s ease;
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
        background: white;
        cursor: pointer;
        border: solid 2px var(--cui-dark);
        border-right: none
    }
    .cui-button-group-item:first-of-type {
        margin-left: 5px;
        border-top-left-radius: var(--cui-button-radius);
        border-bottom-left-radius: var(--cui-button-radius);
    }
    .cui-button-group-item:last-of-type {
        margin-right: 5px;
        border-top-right-radius: var(--cui-button-radius);
        border-bottom-right-radius: var(--cui-button-radius);
        border-right: solid 2px var(--cui-dark)
    }
    .selected {
        background: var(--cui-dark);
        color: white
    }
    .cui-button-group-item > i:not(:last-child) {
        margin-right: 5px
    }


</style>
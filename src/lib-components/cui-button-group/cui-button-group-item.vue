<template>
    <div class="cui-button-group-item" @click="handelClick" ref="item" :value="value">
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
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
        position: relative;
        padding: 10px;
        transition: all .2s ease;
        color: var(--cui-gray-5);
        cursor: pointer;
        font-size: 14px;
        flex-grow: 0
    }
    .cui-button-group-item:not(.selected):hover {
        cursor: pointer;
        transform: translateY(-3px);
    }
    .cui-button-group-item i {
        color: var(--cui-primary);
        margin-right: 5px;
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
        box-shadow: rgb(0 0 0 / 4%) 0px 0px 11px 2px;
        color: var(--cui-font-color);
        font-weight: bold;
    }
    .selected i {
        background-color: var(--cui-primary);
        color: white;
    }

</style>
<template>
    <label class="cui-select-label" v-if="label">
        <span style="margin-right: 10px"> {{ label }} </span>
        <span v-if="required"> {{ trans.required }} </span>
    </label>

    <div class="cui-select">

    </div>
</template>

<script>
export default {
    name: 'CuiSelect',
    props: {
        remote: {
            default: false,
            type: Boolean
        },
        multiple: {
            default: false,
            type: Boolean
        },
        label: {
            default: null
        },
        required: {
            default: false,
            type: Boolean
        }
    }
}
</script>

<style scoped>
    .cui-select-label {
        font-size: 14px;
        margin-left: 10px
    }
    .cui-select {
        background: var(--cui-gray-0);
        border-radius: 12px;
        height: 26px;
        padding: 5px 10px;
        transition: all .2s ease
    }
    .cui-select:hover,
    .cui-select:focus {
        padding-left: 13px;
        padding-right: 7px;
        background: white;
        transform: translate(0px, -4px);
        box-shadow: 0px 5px 25px -4px var(--cui-gray-3);
        cursor: pointer
    }

</style>
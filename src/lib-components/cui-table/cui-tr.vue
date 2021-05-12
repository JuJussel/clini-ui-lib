<template>
    <tr 
        class="cui-tr-parent" 
        v-bind:class="{
            selected: selected, 
            clickable: clickable || $slots.expand,
            'no-border': expanded
        }" 
        @click="handleClick"
        >
        <td style="width: 15px" v-if="multipleSelect">
            <cui-checkbox @click.stop="" v-model="selected"/>
        </td>
        <slot name="parentRow"></slot>
    </tr>
    <tr class="cui-tr-expand" v-bind:class="{expanded: expanded}" v-if="$slots.expand">
        <td colspan="100%">
            <slot name="expand"></slot>
        </td>
    </tr>
</template>

<script>
export default {
    name: 'CuiTr',
    emits: ["click"],
    props: {
        multipleSelect: {
            default: false,
            type: Boolean
        },
        clickable: {
            default: false,
            type: Boolean
        },
        rowData: {
            default: null,
        }
    },
    data() {
        return {
            selected: false,
            expanded: false
        }
    },
    methods: {
        handleClick() {
            this.$emit('click')
            if (this.$slots.expand) {
                this.expanded = !this.expanded
            }
        }
    },
    watch: {
        rowData: {
            deep: true,
            immediate: true,
            handler() {
                if (this.rowData?.selected !== undefined) {
                    this.selected = this.rowData.selected
                }
                if (this.rowData?.expanded !== undefined) {
                    this.expanded = this.rowData.expanded
                }

            }
        }
    }
}
</script>

<style scoped>
    @keyframes expand{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    .selected {
        background-color: var(--cui-primary)!important;
        color: white;
        font-weight: bold;
    }
    .clickable {
        cursor: pointer
    }
    .cui-tr-expand {
        display: none;
        transition: all .2s ease
    }
    .cui-tr-expand.expanded {
        display: table-row;
        animation: expand .2s linear 0s;
    }
    .cui-tr-expand.expanded td {
        padding: 20px
    }
</style>
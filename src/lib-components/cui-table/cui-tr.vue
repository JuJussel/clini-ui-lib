<template>
    <tr v-bind:class="{selected: selected, clickable: clickable}">
        <td style="width: 15px" v-if="multipleSelect">
            <cui-checkbox v-model="selected"/>
        </td>
        <slot></slot>
    </tr>
</template>

<script>
export default {
    name: 'CuiTr',
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
            selected: false
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
            }
        }
    }
}
</script>

<style scoped>
    .selected {
        background-color: var(--cui-primary)!important;
        color: white;
        font-weight: bold;
    }
    .clickable {
        cursor: pointer
    }
</style>
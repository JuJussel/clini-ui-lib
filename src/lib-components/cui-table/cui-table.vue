<template>
    <div class="cui-table" v-bind:class="{striped: striped}">
        <div class="cui-table-header" v-if="$slots.header">
            <slot name="header"></slot>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th v-if="multipleSelect"></th>
                        <slot name="thead"></slot>
                    </tr>
                </thead>
                <tbody ref="body">
                    <cui-tr
                        v-for="(row, index) in data"
                        :key="index"
                        :rowData="row"
                        :ref="setItemRef"
                        @click="rowClick(row, index)"
                        :multipleSelect="multipleSelect"
                        :clickable="clickable"
                        >
                        <slot name="tbody" :row="row"></slot>
                    </cui-tr>
                </tbody>
            </table>
        </div>
        <div class="cui-table-footer" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CuiTable',
    props: {
        data: {
            default: [],
            type: Array
        },
        striped: {
            default: false,
            type:Boolean
        },
        singleSelect: {
            default: false,
            type: Boolean
        },
        multipleSelect: {
            default: false,
            type: Boolean
        },
        clickable: {
            default: false,
            type: Boolean
        }
    },
    data() {
        return {
            trRefs: []
        }
    },
      beforeUpdate() {
        this.trRefs = []
    },
    methods: {
        setItemRef(el) {
            if (el) {
                this.trRefs.push(el)
            }
        },
        rowClick(row, index) {
            // this.$emit('click', {row: row, index: index})
            if (this.multipleSelect) {
                this.trRefs[index].selected = !this.trRefs[index].selected
                let selectedItems = this.trRefs.filter(item =>item.selected)
                this.$emit('select', {row: row, index: index, selectedItems: selectedItems})
            } else if (this.singleSelect) {
                this.trRefs.forEach(item => item.selected = false)
                this.trRefs[index].selected = true
                this.$emit('select', {row: row, index: index, selected: this.trRefs[index].selected})
            }
        }
    }   
}
</script>

<style scoped>
    .cui-table {
        border-radius: 20px;
        overflow: hidden;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .cui-table-header, 
    .cui-table-footer {
        background: var(--cui-gray-0);
        padding: 10px;
        display: flex;
        align-items: center
    }
    .cui-table table {
        border-collapse: collapse;
        width: 100%;
    }
    .cui-table thead tr {
        background: var(--cui-gray-0);
        box-shadow: 0 2px 4px -2px rgb(0 0 0 / 15%);
    }

</style>

<style >
    .cui-table th {
        text-align: left;
    }
    .cui-table th,
    .cui-table td {
        padding: 3px 5px;
    }
    .cui-table tbody tr {
        border-bottom: 1px solid var(--cui-gray-2);
        transition: all .2s ease
    }
    .cui-table tbody tr:not(.selected):hover {
        background: var(--cui-gray-2)!important;
        font-weight: bold
    }

    .cui-table.striped tbody tr:nth-of-type(even) {
        background-color: var(--cui-gray-0);
    }

    .cui-table tbody tr:last-of-type {
        border-bottom: 2px solid var(--cui-gray-2);
    }
</style>
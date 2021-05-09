<template>
    <div class="cui-table" v-bind:class="{striped: striped}">
        <!-- <div class="loader" v-if="loading"></div> -->
        <div class="cui-table-header" v-if="$slots.header">
            <slot name="header"></slot>
        </div>
        <div class="cui-table-container">
            <table>
                <thead>
                    <tr>
                        <th v-if="multipleSelect"></th>
                        <slot name="thead"></slot>
                    </tr>
                </thead>
                <tbody ref="body">
                    <cui-tr
                        v-for="(row, index) in displayData"
                        :key="index"
                        :rowData="row"
                        :ref="setItemRef"
                        v-on:click="rowClick(row, index)"
                        :multipleSelect="multipleSelect"
                        :clickable="clickable"
                        >
                        <template #parentRow>
                            <slot name="row" :row="row"></slot>
                        </template>
                        <template #expand v-if="$slots.expand">
                            <slot name="expand" :expand="row"></slot>
                        </template>
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
            loading: false,
            trRefs: [],
            sort: {
                direction: null,
                prop: null
            }
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
        },
        toggleSort(direction, prop) {
            this.sort.direction = direction
            this.sort.prop = prop
        }
    },
    computed: {
        displayData() {

            let data = JSON.parse(JSON.stringify(this.data))
            let direction = this.sort.direction
            let prop = this.sort.prop
            if (direction === 'desc') {
                data.sort((a,b) => (a[prop] > b[prop]) ? 1 : -1)
            } else if (direction === 'asc') {
                data.sort((a,b) => (a[prop] < b[prop]) ? 1 : -1)
            }

            return data
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
        
    }
    .cui-table-container {
        overflow: auto;
        flex: 1
    }

</style>

<style >
    .cui-table th:not([scope=row]) {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 2;
        background: var(--cui-gray-0);
        box-shadow: 0 2px 4px -2px rgb(0 0 0 / 15%)
    }
    .cui-table th,
    .cui-table td {
        text-align: left;
        padding: 3px 5px;
    }
    .cui-table tbody tr:not(.no-border) {
        border-bottom: 1px solid var(--cui-gray-2);
        transition: background .2s ease;
    }
    .cui-table tbody tr:not(.selected, .expanded):hover {
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
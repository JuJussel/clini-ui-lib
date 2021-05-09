<template>
    <th>
        <div class="cui-th">
            <slot></slot>
            <div 
                class="cui-th-sort" 
                v-bind:class="{
                    desc: sortDirection === 'desc',
                    asc: sortDirection === 'asc'
                }" 
                @click="toggleSort"
                v-if="sort"
                >
                <div class="ripple"></div>
                <i class="cui-th-sort-icon-1 fas fa-chevron-up"></i>
                <i class="cui-th-sort-icon-2 fas fa-chevron-down"></i>
            </div>
        </div>
    </th>
</template>

<script>
export default {
    name: 'CuiTh',
    props: {
        sort: {
            default: null,
            type: String
        }
    },
    data() {
        return {
            sortDirection: null
        }
    },
    methods: {
        toggleSort() {
            if (!this.sortDirection) {
                this.sortDirection = 'desc'
            } else if (this.sortDirection === 'desc') {
                this.sortDirection = 'asc'
            } else {
                this.sortDirection = null
            }
            this.$parent.toggleSort(this.sortDirection, this.sort)
        }
    }
}
</script>

<style scoped>
    .cui-th {
        display: flex
    }
    .cui-th-sort {
        display: flex;
        flex-direction: column;
        font-size: 10px;
        align-items: center;
        justify-content: center;
        margin-left: 5px;
        cursor: pointer;
        height: 23px;
        overflow: hidden
    }
    .cui-th-sort i {
        transition: all .2s ease
    }
    .cui-th-sort.desc .cui-th-sort-icon-2,
    .cui-th-sort.asc .cui-th-sort-icon-2 {
        opacity: 0;
        transform: rotate(180deg);
        margin-top: -11px
    }
    .cui-th-sort.desc .cui-th-sort-icon-1 {
        transform: rotate(180deg)
    }   
    .cui-th-sort.asc .cui-th-sort-icon-1 {
        transform: rotate(0deg)
    }   

</style>
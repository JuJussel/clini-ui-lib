<template>
    <div class="cui-menu-bar" ref="menuBar">
        <div class="menu-item">
            <slot name="left"></slot>
        </div>
        <div class="menu-item">
            <slot name="center"></slot>
        </div>
        <div class="menu-item">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            default: null
        }
    },
    name: 'CuiMenuBar',
    mounted() {
        this.propChange()
    },
    methods: {
        changeValue(value) {
            this.$emit('change', value)   
        },
        propChange() {
            let menuItems = document.querySelectorAll(".cui-menu-bar-item");
            menuItems.forEach(item => {
                item.classList.remove('selected')
                if (item.getAttribute("value") === this.value) {
                    item.classList.add("selected")
                }
            })
        }
    },
    watch: {
        value() {
            this.propChange()
        }
    }
}
</script>

<style scoped>
    .cui-menu-bar {
        /* background: var(--cui-dark); */
        /* height: 45px; */
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        padding: 0 15px;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--cui-font-color);
        font-weight: bold;
        font-size: 16px;
    }
    .cui-menu-bar > .menu-item {
        display: flex;
        align-items: center;
    }
</style>
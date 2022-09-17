<template>
    <div :class="'cui-side-bar-main ' + position">
        <!-- <div class="cui-side-bar-label-box">
            <i :class="icon + ' item-icon'"></i>
        </div> -->
        <div
            class="cui-sidebar-header"
            style="margin-left: -10px"
            v-if="position === 'left'"
        >
            <cui-button :icon="icon + ' item-icon'" plain></cui-button>
            <h2>{{ sidebar }}</h2>
        </div>
        <div class="cui-sidebar-header" style="margin-left: -10px" v-else>
            <cui-button :icon="icon + ' item-icon'" plain></cui-button>
            <h2>{{ sidebar }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        position: {
            type: String,
            default: "right",
        },
        marginTop: {
            type: String,
            default: "50px",
        },
        icon: {
            type: String,
            default: "fa-solid fa-bars",
        },
        sidebar: {
            default: "Sidebar",
        },
    },
    name: "CuiSideBar",
    computed: {
        marginBottom() {
            let px = this.marginTop.slice(0, this.marginTop.length - 2);
            px = parseInt(px, 10) + 10;
            console.log(px);
            return px + "px";
        },
    },
};
</script>

<style scoped>
.cui-side-bar-main {
    background: white;
    position: fixed;
    height: calc(100vh - v-bind("marginBottom"));
    width: 250px;
    margin-top: v-bind("marginTop");
    z-index: 100;
    border-radius: 15px;
    box-shadow: rgb(0 0 0 / 20%) 0px 0px 20px 4px;
}
.cui-side-bar-main.right {
    right: 0;
    margin-right: -15px;
    padding-left: 5px;
}
.cui-side-bar-main.left {
    left: 0;
    margin-left: -15px;
    padding-left: 20px;
}
.cui-side-bar-label-box {
    height: 50px;
    background: white;
    position: absolute;
    left: -50px;
    width: 200px;
    border-radius: 15px;
    padding: 5px;
    display: flex;
    align-items: center;
}
.item-icon {
    color: var(--cui-dark);
    margin-right: 12px;
    border-radius: 12px;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.cui-sidebar-header {
    display: flex;
    align-items: center;
}
</style>
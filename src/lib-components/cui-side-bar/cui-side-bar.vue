<template>
    <div :class="'cui-side-bar-main ' + position">TEST</div>
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
    background: red;
    position: fixed;
    height: calc(100vh - v-bind("marginBottom"));
    width: 250px;
    margin-top: v-bind("marginTop");
    z-index: 100;
    border-radius: 15px;
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
</style>
<template>
    <div
        :class="'cui-side-bar-main ' + position"
        v-bind:class="{ collapsed: isCollapsed }"
    >
        <div
            :class="'cui-side-bar-label-box ' + position"
            v-bind:class="{ open: !isCollapsed }"
            v-if="!noButton"
        >
            <cui-button
                :icon="icon + ' item-icon'"
                plain
                @click="isCollapsed = !isCollapsed"
            ></cui-button>
        </div>
        <div
            class="cui-sidebar-header"
            style="margin-left: -10px"
            v-if="position === 'left'"
        >
            <cui-button :icon="icon + ' item-icon'" plain></cui-button>
            <h2>{{ sidebar }}</h2>
        </div>
        <div class="cui-sidebar-header" style="margin-left: -10px" v-else>
            <cui-button
                :icon="icon + ' item-icon'"
                plain
                @click="isCollapsed = !isCollapsed"
            ></cui-button>
            <h2>{{ sidebar }}</h2>
        </div>
        <slot></slot>
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
        width: {
            type: String,
            default: "250px",
        },
        collapsed: {
            type: Boolean,
            default: true,
        },
        noButton: {
            type: Boolean,
            default: false,
        },
    },
    name: "CuiSideBar",
    data() {
        return {
            isCollapsed: false,
        };
    },
    created() {
        this.isCollapsed = this.collapsed;
    },
    computed: {
        marginBottom() {
            let px = this.marginTop.slice(0, this.marginTop.length - 2);
            px = parseInt(px, 10) + 10;
            return px + "px";
        },
    },
    methods: {
        toggle() {
            this.isCollapsed = !this.isCollapsed;
        },
    },
};
</script>

<style scoped>
.cui-side-bar-main {
    background: white;
    position: fixed;
    height: calc(100vh - v-bind("marginBottom"));
    width: v-bind("width");
    margin-top: v-bind("marginTop");
    z-index: 100;
    border-radius: 15px;
    box-shadow: rgb(0 0 0 / 20%) 0px 0px 20px 4px;
    transition: all ease 0.5s;
    top: 0;
}
.cui-side-bar-main.right {
    right: 0;
    margin-right: -15px;
    padding-left: 5px;
}
.cui-side-bar-main.right.collapsed {
    right: calc(0px - v-bind("width"));
}
.cui-side-bar-main.left {
    left: 0;
    margin-left: -15px;
    padding-left: 20px;
}
.cui-side-bar-main.left.collapsed {
    left: calc(-10px - v-bind("width"));
}
.cui-side-bar-label-box {
    background: white;
    position: absolute;
    border-radius: 15px;
    display: flex;
    align-items: center;
    transition: all ease 0.5s;
}
.cui-side-bar-label-box.right {
    left: -80px;
}
.cui-side-bar-label-box.right.open {
    opacity: 0;
    left: v-bind("width");
    z-index: -1;
}
.cui-side-bar-label-box.left {
    right: -80px;
}
.cui-side-bar-label-box.left.open {
    opacity: 0;
    right: v-bind("width");
    z-index: -1;
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
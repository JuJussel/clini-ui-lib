<template>
    <ul class="tree">
        <span style="margin-left: -28px" v-if="$slots.title">
            <slot name="title"></slot>
        </span>
        <li
            v-for="(node, index) of localNode"
            :key="index"
            class="cui-tree-node"
        >
            <span @click="handleClick(node, index)">
                <span v-if="node.icon">
                    <i :class="node.icon" style="width: 24px"></i>
                </span>
                <span v-else>
                    <i
                        v-if="node.children && node.expanded"
                        class="fa-regular fa-folder-open"
                        style="width: 24px"
                    ></i>
                    <i
                        v-else-if="node.children"
                        class="fa-regular fa-folder"
                        style="width: 24px"
                    ></i>
                    <i
                        v-else
                        class="fa-regular fa-file"
                        style="width: 24px"
                    ></i>
                </span>
                <span class="name">{{ node.name }}</span>
                <span>
                    <i class="fa-solid fa-plus action-icon"></i>
                    <i class="fa-solid fa-pen-to-square action-icon"></i>
                    <i class="fa-solid fa-trash-can action-icon"></i>
                </span>
            </span>
            <cui-tree
                v-if="node.children"
                :nodes="node.children"
                class="child-nodes"
                @select="triggerEmit"
                v-bind:class="{ closed: !node.expanded }"
            />
        </li>
    </ul>
</template>

<script>
export default {
    name: "CuiTree",
    props: {
        nodes: {
            type: Array,
            default: [],
        },
        showFoldersOnly: {
            type: Boolean,
            default: false,
        },
    },
    emits: [
       'select'
    ],
    data() {
        return {
            localNode: null,
        };
    },
    created() {
        let localNodeObj = {
            expanded: false,
            selected: false,
            disabled: false,
            icon: null,
            canDelete: false,
            canAdd: false,
            canEdit: false,
        };
        this.localNode = JSON.parse(JSON.stringify(this.nodes));
        if (this.showFoldersOnly)
            this.localNode = this.localNode.filter((i) => i.children);
        this.localNode.forEach((i) => {
            i = Object.assign(localNodeObj, i);
        });
    },
    methods: {
        handleClick(node, index) {
            if (node.children) {
                node.expanded = !node.expanded;
            }
            this.triggerEmit(node, index)
        },
        triggerEmit(node, index) {
            this.$emit('select', node, index)
        }
    },
};
</script>

<style scoped>
/* original idea http://www.bootply.com/phf8mnMtpe */

.tree {
    padding-inline-start: 28px;
}

.tree li {
    list-style-type: none;
    margin: 0;
    padding: 10px 5px 0 5px;
    position: relative;
}
.tree li::before,
.tree li::after {
    content: "";
    left: -20px;
    position: absolute;
    right: auto;
}
.tree li::before {
    border-left: 1px dashed #999;
    bottom: 50px;
    height: 100%;
    top: 0;
    width: 1px;
}
.tree li::after {
    border-top: 1px dashed #999;
    height: 20px;
    top: 20px;
    width: 20px;
}
.tree li:last-child::before {
    height: 20px;
}

.cui-tree-node:hover > 

.cui-tree-node > span {
    cursor: pointer;
    transition: all ease 0.1s;
}

.cui-tree-node > span:hover {
    font-weight: bold;
    padding-left: 2px;
}

.child-nodes {
    opacity: 1;
    transition: all ease 0.2s;
}

.child-nodes.closed {
    opacity: 0;
    height: 0;
}

.child-nodes.closed > .cui-tree-node {
    transform: scaleY(0);
}
.action-icon {
    opacity: 0;
    margin: 0 5px 0 5px
}

.action-icon:hover {
    transform: scale3d(1.2, 1.2, 1.2)
}
</style>
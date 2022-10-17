<template>
    <ul class="tree">
        <li v-for="(node,index) of localNode" :key="index" class="cui-tree-node">
            <span @click="handleClick(node, index)">
                <i v-if="node.children && node.expanded" class="fa-regular fa-folder-open" style="width: 24px"></i>
                <i v-else-if="node.children" class="fa-regular fa-folder" style="width: 24px"></i>
                <i v-else class="fa-regular fa-file" style="width: 24px"></i>
                <span class="name">{{ node.name }}</span>
            </span>
            <cui-tree
                v-if="node.children"
                :nodes="node.children"
                class="child-nodes"
                v-bind:class="{closed: !node.expanded}"
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
            default: []
        },
        showFoldersOnly: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            localNode: null
        }
    },
    created() {
        let localNodeObj = {
            expanded: false,
            selected: false,
            disabled: false
        };
        this.localNode = JSON.parse(JSON.stringify(this.nodes))
        if (this.showFoldersOnly) this.localNode = this.localNode.filter(i => i.children)
        this.localNode.forEach(i => {
            i = Object.assign(i, localNodeObj)
        });

    },
    methods: {
        handleClick(node, index) {
            if(node.children) {
                node.expanded = !node.expanded
            }
            else {

            }

        }
    }
}
</script>

<style scoped>

/* original idea http://www.bootply.com/phf8mnMtpe */

.tree {
    padding-inline-start: 28px
}

.tree li {
    list-style-type:none;
    margin:0;
    padding:10px 5px 0 5px;
    position:relative
}
.tree li::before, .tree li::after {
    content:'';
    left:-20px;
    position:absolute;
    right:auto
}
.tree li::before {
    border-left:1px dashed #999;
    bottom:50px;
    height:100%;
    top:0;
    width:1px
}
.tree li::after {
    border-top:1px dashed #999;
    height:20px;
    top:20px;
    width:20px
}
.tree li:last-child::before {
    height:20px
}

.cui-tree-node>span {
    cursor: pointer
}

.cui-tree-node>span:hover {
    font-weight: bold
}

.child-nodes.closed {
    display: none
}

</style>
<template>
    <ul class="tree">
        <li v-for="(node,index) of nodes" :key="index" class="cui-tree-node">
            <i class="fa-regular fa-folder" style="margin-right: 5px"></i>
            <span class="name">{{ node.name }}</span>
            <cui-tree
                v-if="node.children"
                :nodes="node.children"
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
        }
    },
    computed: {
        localNode() {
            let localNodeObj = {
                expanded: false,
                selected: false,
                disabled: false
            };
            this.nodes.forEach(i => {
                i = Object.assign(i, localNodeObj)
            });
            return this.nodes
        }
    }
}
</script>

<style scoped>

/* original idea http://www.bootply.com/phf8mnMtpe */

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
.tree li.parent_li>span {
    cursor:pointer
}
.tree>ul>li::before, .tree>ul>li::after {
    border:0
}
.tree li:last-child::before {
    height:20px
}
</style>
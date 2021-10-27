<template>
    <span style="position: relative">
        <span class="cui-badge-badge" v-bind:class="{visible}" />
       <slot></slot> 
    </span>
</template>

<script>
export default {
    props: {
        visible: {
            default: false,
            type: Boolean
        }
    }
}
</script>

<style scoped>
    .cui-badge-badge {
        display: block;
        position: absolute;
        width: 10px;
        height: 10px;
        background: var(--cui-danger);
        border-radius: 5px;
        right: -3px;
        top: 0px;
        opacity: 0
    }
    .visible {
        opacity: 1;
    }
</style>
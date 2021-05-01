<template>
    <div class="cui-card">
        <div class="header">
            <slot name="header"></slot>
        </div>
        <div class="body" v-bind:class="{'no-padding': noPadding}">
            <slot></slot>
        </div>
        <div class="footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "CuiCard",
    props: {
        noPadding: {
            default: false,
            type: Boolean
        }
    }
}
</script>

<style>
    .cui-card {
        border-radius: 20px;
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 30%);
        margin: 10px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .cui-card:not(adaptive) {
        height: calc(100% - 20px);
        width: calc(100% - 20px);
    }
    .cui-card > .header {
        background: var(--cui-gray-0);
        padding: 10px;
        box-shadow: 1px 1px 4px 0px rgb(0 0 0 / 15%);
        display: flex;
        align-items: center;
    }
    .cui-card > .body {
        flex: 1
    }
    .cui-card > .body:not(.no-padding) {
        padding: 10px
    }
    .cui-card > .footer {
        padding: 10px;
        display: flex;
        align-items: center;
    }

</style>
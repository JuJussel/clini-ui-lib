<template>
    <div class="cui-card-padding">
        <div class="cui-card">
            <div class="cui-card-header" v-if="$slots.header">
                <slot name="header"></slot>
            </div>
            <div class="cui-card-body" v-bind:class="{'no-padding': noPadding}">
                <slot></slot>
            </div>
            <div class="footer" v-if="$slots.footer">
                <slot name="footer"></slot>
            </div>
        </div>
        <div class="loader" v-if="loading"></div>

    </div>
</template>

<script>
export default {
    name: "CuiCard",
    props: {
        noPadding: {
            default: false,
            type: Boolean
        },
        loading: {
            default: false,
            type: Boolean
        }
    },
    data() {
        return { test: false}
    }
}
</script>

<style>
    .cui-card-padding {
        padding: 10px;
        width: calc(100% - 20px);
        height: calc(100% - 20px);
        position: relative;
    }
    .cui-card {
        border-radius: 20px;
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 30%);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: white;
    }
    .cui-card:not(.adaptive) {
        height: calc(100%);
        width: calc(100%);
    }
    .cui-card-header {
        background: var(--cui-gray-0);
        padding: 10px;
        box-shadow: 1px 1px 4px 0px rgb(0 0 0 / 15%);
        display: flex;
        align-items: center;
    }
    .cui-card-body {
        flex: 1;
        overflow: auto;
    }
    .cui-card-body:not(.no-padding) {
        padding: 10px
    }
    .cui-card > .footer {
        padding: 10px;
        display: flex;
        align-items: center;
    }

</style>
<template>
    <div class="cui-card-padding">
        <div class="cui-card">
            <div class="cui-card-header" v-if="$slots.header">
                <slot name="header"></slot>
            </div>
            <div class="cui-card-body" v-bind:class="{ 'no-padding': noPadding }">
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
        return { test: false }
    }
}
</script>

<style>
.cui-card-padding {
    padding: 10px;
}

.cui-card {
    border-radius: 20px;
    box-shadow: rgb(0 0 0 / 5%) 0px 3.5px 5.5px;
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
    display: flex;
    align-items: center;
    font-weight: bold;
    height: 50px;
}

.cui-card-body {
    flex: 1;
    overflow: auto;
    box-shadow: 0 0 5px 0px rgb(0 0 0 / 15%);
    z-index: 1;
}

.cui-card-body:not(.no-padding) {
    padding: 10px;
}

.cui-card>.footer {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--cui-gray-0);
    height: 50px;

}
</style>
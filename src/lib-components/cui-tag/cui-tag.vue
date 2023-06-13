<template>
    <span
        class="cui-tag"
        v-bind:class="{
            danger: danger,
            primary: primary,
            warn: warn
        }"
        >
        {{ label }}
    </span>
</template>

<script>
export default {
    name: "CuiTag",
    props: {
        label: {
            default: ""
        },
        danger: {
            default: false,
            type: Boolean
        },
        primary: {
            default: false,
            type: Boolean
        },
        warn: {
            default: false,
            type: Boolean
        }
    }
}
</script>

<style scoped>
    .cui-tag {
        height: 35px;
        border: 0px;
        margin: 5px;
        border-radius: var(--cui-button-radius);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: .8rem;
        background: var(--cui-dark);
        color: white;
        width: fit-content;
        padding: 0 10px;
        font-weight: normal;
    }
    .cui-tag.danger {
        background: var(--cui-danger);
    }
    .cui-tag.primary {
        background: var(--cui-primary);
    }
    .cui-tag.warn {
        background: var(--cui-warn);
    }

</style>
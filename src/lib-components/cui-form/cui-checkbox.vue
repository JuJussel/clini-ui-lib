<template>
    <div>
        <span v-if="modelValue">0</span>
        <span v-else>S</span>
    </div>
</template>

<script>
export default {
    name: 'CuiCheckbox',
    props: {
        modelValue: {
            default: false,
            type: Boolean
        }
    },
    data() {
        return {
            selected: false
        }
    }
}
</script>
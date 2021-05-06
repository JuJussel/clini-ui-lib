<template>
    <div>
        <input type="text" :value="this.value">
    </div>
</template>

<script>
export default {
    name: 'CuiInput',
    props: {
        value: {
            default: ''
        }
    },
    data() {
        return {
             
        }
    }
}
</script>
<template>
    <div class="cui-button-group">
        <slot></slot>
    </div>
</template>

<script>

export default {
    name: 'ButtonGroup',
    methods: {
        changeValue(value) {
            this.$emit('change', value)            
        }
    }
}
</script>

<style scoped>
    .cui-button-group {
        display:flex;
        margin: 5px 0
    }
</style>

<style>
    .cui-button-group .cui-button  {
        margin-left: 0;
        margin-right: 0;
        border-radius: 0
    }  
    .cui-button-group .cui-button:first-of-type {
        margin-left: 5px;
        border-top-left-radius:15px;
        border-bottom-left-radius: 15px;
    }
    .cui-button-group .cui-button:last-of-type {
        border-top-left-radius: 0px!important;
        border-bottom-left-radius: 0px!important;
    }

</style>
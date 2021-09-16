<template>
    <div :class="'cui-button-group ' + id">
        <slot></slot>
    </div>
</template>

<script>

export default {
    name: 'ButtonGroup',
    props: {
        modelValue: {
            default: ''
        }
    },
    emits: ['update:modelValue', 'change'],
    data() {
        return {
            id: null
        }
    },
    methods: {
        changeValue(value) {
            this.$emit('change', value)
            this.$emit('update:modelValue', value)
        },
        selectItem() {
            let menuItems = document.querySelectorAll("." + this.id + " .cui-button-group-item");
            menuItems.forEach(item => {
                item.classList.remove('selected')
                if (item.attributes.value.value == this.modelValue) {
                    item.classList.add("selected")
                }
            })
        }
    },
    mounted() {
        this.selectItem();
        this.id = 'c' + Math.random().toString(36).substring(2,7);
    },
    watch: {
        modelValue() {
            this.selectItem()
        }
    }
}
</script>

<style scoped>
    .cui-button-group {
        display:flex;
        margin: 5px 0;
        flex-wrap: wrap;
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
        border-bottom-left-radius: 15px
    }
    .cui-button-group .cui-button:last-of-type {
        border-top-left-radius: 0px!important;
        border-bottom-left-radius: 0px!important
    }

</style>
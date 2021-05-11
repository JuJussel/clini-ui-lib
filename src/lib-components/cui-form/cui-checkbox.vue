<template>
    <div class="cui-checkbox-container" v-bind:class="{selected: modelValue, disabled: disabled}">
        <div class="cui-checkbox-con">
            <i class="cui-checkbox-icon fas fa-check"></i>
        </div>
        <input @change="toggleSelected" class="cui-checkbox" type="checkbox" id="checkbox" v-model="modelValue" :disabled="disabled"/>
        <label class="cui-checkbox-label" for="checkbox">
            {{ label }}    
        </label>  
    </div>
</template>

<script>
export default {
    name: 'CuiCheckbox',
    props: {
        modelValue: {
            default: false,
            type: Boolean
        },
        disabled: {
            default: false,
            type: Boolean
        },
        label: {
            default: ''
        }
    },
    emits: ['update:modelValue'],
    methods: {
        toggleSelected() {
            this.$emit('update:modelValue', this.modelValue)
        }
    }
}
</script>

<style scoped>

    /* Base State */
    .cui-checkbox-container {
        display: flex;
        align-items: center;
        width: fit-content; 
        margin: 5px 0;
        position: relative
    }
    .cui-checkbox-container:not(.disabled) label {
        cursor: pointer
    }
    .cui-checkbox {
        opacity: 0;
        margin: 0
    }
    .cui-checkbox-container:not(.disabled) .cui-checkbox {
        cursor: pointer
    }
    .cui-checkbox-con {
        position: absolute;
        width: 15px;
        height: 15px;
        border-radius: 5px;
        border: solid 2px var(--cui-gray-2);
        transition: all .2s ease;
        display: flex
    }
    .cui-checkbox-label {
        padding-left: 10px
    }

    /* Hover State */
    .cui-checkbox-container:not(.disabled):not(.selected):hover .cui-checkbox-con,
    .cui-checkbox-container.disabled .cui-checkbox-con {
        background: var(--cui-gray-1)
    }

    /* Selected State */
    .cui-checkbox-container.selected .cui-checkbox-con {
        background: var(--cui-primary);
        border-color: var(--cui-primary);
        box-shadow: 0 0 0 0 var(--cui-primary);
    }
    .cui-checkbox-icon {
        color: white;
        transform: scale(.1);
        opacity: 0;
        transition: all .2s ease
    }
    .cui-checkbox-container.selected .cui-checkbox-icon {
        transform: scale(.8);
        opacity: 1
    }


</style>
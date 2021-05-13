<template>
    <div class="cui-select-container">
        <label class="cui-select-label" v-if="label">
            <span style="margin-right: 10px"> {{ label }} </span>
            <span v-if="required"> {{ trans.required }} </span>
        </label>
        <div  ref="select" class="cui-select" @click.stop="handleClick" v-bind:class="{focused: focused}">
            <!-- non focused state -->
            <div v-if="!focused">
                <div class="cui-placeholder" v-if="!value || value.length < 1"> {{ placeholder }} </div>
                <div v-else-if="multiple" class="cui-select-multiple-cont">
                    <cui-tag class="cui-select-tag" v-for="(valueItem, index) in modelValue" :key="index"> 
                        {{ valueItem[prop] }} 
                        <i class="cui-select-tag-icon fas fa-times-circle" @click.stop="selectItem(valueItem)"></i>
                    </cui-tag>
                </div>
                <div v-else> {{ displayValue }} </div>
            </div>
            <!-- focused state -->
            <div v-else>
                <div v-if="search && !multiple">
                    <input 
                        ref="input" 
                        class="cui-select-input" 
                        v-model="searchValue"
                        @click.stop=""
                        @input="searchInput"
                    >
                </div>
                <div v-else-if="!value" class="cui-placeholder"> {{ placeholder }} </div>
                <div v-else-if="multiple" class="cui-select-multiple-cont">
                    <cui-tag class="cui-select-tag" v-for="(valueItem, index) in modelValue" :key="index"> 
                        {{ valueItem[prop] }}
                        <i class="cui-select-tag-icon fas fa-times-circle" @click.stop="selectItem(valueItem)"></i>
                    </cui-tag>
                </div>
                <div v-else> {{ displayValue }} </div>
            </div>
            <div>
                <i 
                    class="cui-select-icon fas fa-chevron-down"
                    v-bind:class="{focused: focused}"
                ></i>
            </div>
        </div>
        <div 
            ref="dropdown" 
            class="cui-select-list" 
            v-bind:class="{
                expanded: focused,
                retracted: retracting
            }"
            v-bind:style="{width: dropdownWidth + 'px'}"
        >
            <div class="loader" v-if="loading"></div>

            <div v-if="data.length > 0">
                <div
                    class="cui-select-dropdown-item"
                    v-for="(item, index) in dropdownValues"
                    :key="index"
                    @click.stop="selectItem(item, index)"
                >
                    <cui-checkbox v-if="multiple" v-model="item.selected" @click.stop=""></cui-checkbox>
                    <span v-if="dataIsObject"> {{ item[prop] }} </span>
                    <span v-else> {{ item }} </span>
                </div>
            </div>
            <div v-else>
                <div class="cui-select-empty">
                    {{ trans.empty }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>

//If multiple NEEDS to have slected key in object value!!

import { createPopper } from '@popperjs/core'
 

export default {
    name: 'CuiSelect',
    props: {
        modelValue: {
            default: null
        },
        search: {   
            default: false,
            type: Boolean
        },
        multiple: {
            default: false,
            type: Boolean
        },
        label: {
            default: null
        },
        required: {
            default: false,
            type: Boolean
        },
        data: {
            default: [],
            type: Array
        },
        placeholder: {
            default: '選択'
        },
        prop: {
            default: null
        },
        loading: {
            default: false,
            type: Boolean
        }
    },
    emits: ['update:modelValue', 'select', 'input'],
    data() {
        return {
            value: null,
            focused: false,
            dropdownWidth: 100,
            retracting: false,
            searchValue: "",
            trans: {
                empty: 'データなし'
            },
            dropdownValues: []

        }
    },
    computed: {
        dataIsObject() {
            return typeof this.data[0] === 'object' && this.data[0] !== null
        },
        displayValue() {
            let value = this.modelValue
            if (this.multiple) {
                value = value.map(function(item) {
                    return item.name
                })
            } else {
                if (this.dataIsObject) {
                    value = value[this.prop]
                }
            }
            return value
        }
    },
    mounted() {
        document.addEventListener('click', this.handleOutsideClick)
        let arr = JSON.parse(JSON.stringify(this.data))
        if(this.multiple) {
            arr.forEach(element => {
                element.selected = element.selected? element.selected : false
            })
        }
        this.dropdownValues = arr

    },
    methods: {
        handleClick() {
            this.dropdownWidth = this.$refs.select.clientWidth
            const select = this.$refs.select
            const dropdown = this.$refs.dropdown
            if (this.focused) {
                this.closeDropdown()
            } else {
                this.focused = true
                createPopper(select, dropdown, {
                    placement: 'bottom',
                })
            }
            if (this.search) {
                setTimeout(function() {
                    this.$refs.input?.focus()
                }.bind(this), 100)
            }
        },
        closeDropdown() {
            this.retracting = true
            setTimeout(function() {
                this.focused = false
                this.retracting = false
            }.bind(this), 50)
        },
        handleOutsideClick(event) {
            if (this.focused && this.multiple) {
                const target = event?.target?.classList[0]
                if (
                    target !== 'cui-select-dropdown-item' &&
                    target !== 'cui-checkbox-con' &&
                    target !== 'cui-checkbox-icon' &&
                    target !== 'cui-checkbox' 
                ) {  
                    this.closeDropdown()
                }
            }
        },
        selectItem(item) {
            if (this.multiple) {
                item.selected = !item.selected
                this.value = this.dropdownValues.filter(item => item.selected)
            } else {
                this.value = item
                this.closeDropdown()
            }
            this.$emit('update:modelValue', this.value)
            this.$emit('select', this.value)
        },
        searchInput() {
            this.$emit('input', this.searchValue)
        }
    }
}
</script>

<style scoped>
    @keyframes expand{
        from{
            margin-top: -10px;
            opacity: 0
        }
        to{
            opacity: 1
        }
    }
    @keyframes retract{
        from{
            opacity: 1;
        }
        to{
            margin-top: -10px;
            opacity: 0;
        }
    }
    .cui-select-label {
        font-size: 14px;
        margin-left: 10px
    }
    .cui-select {
        background: var(--cui-gray-0);
        border-radius: 12px;
        height: 26px;
        padding: 2px 10px;
        transition: all .2s ease;
        font-size: 13.3333px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;
        height: fit-content;
        min-height: 32px
    }
    .cui-select.focused {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }
    .cui-select:hover,
    .cui-select.focused {
        padding-left: 13px;
        padding-right: 7px;
        background: white;
        transform: translate(0px, -4px);
        box-shadow: 0px 5px 25px -4px var(--cui-gray-4);
        cursor: pointer
    }
    .cui-select-list {
        display: none;
        background: white;
        border-bottom-right-radius: 12px;
        border-bottom-left-radius: 12px;
        box-shadow:0px 14px 13px 2px var(--cui-gray-4);
        z-index: 10;
        width: 240px;
        overflow: auto;
        max-height: 200px;
    }
    .cui-select-list.expanded {
        display: block;
        animation: expand .2s ease-out 0s;
    }
    .cui-select-list.retracted {
        animation: retract .2s ease-out 0s;
    }
    .cui-select-dropdown-item {
        padding: 8px 10px;
        transition: all .2s ease;
        display: flex
    }
    .cui-select-dropdown-item:hover {
        background: var(--cui-gray-1);
        cursor: pointer
    }
    .cui-select-input,
    .cui-select-input:focus {
        border: none;
        outline: none
    }
    .cui-select-empty {
        padding: 8px 10px;
        color: var(--cui-gray-5);
        font-size: 12px
    }
    .cui-select-icon {
        transition: all .2s ease;
        font-size: 12px;
        color: var(--cui-gray-5);
        padding: 5px
    }
    .cui-select-icon.focused {
        transform: rotate(180deg)
    }
    .cui-select-multiple-cont {
        display: flex;
        align-items: center;
        flex-wrap: wrap
    }
    .cui-select-tag-icon {
        margin-left: 2px;
        color: var(--cui-font-color);
        opacity: 0.6;
        transition: all .2s ease;
    }
    .cui-select-tag-icon:hover {
        opacity: 1;
    }


</style>

<style >
    .cui-select-tag {
        font-size: 12px!important;
        height: 28px!important;
        background: var(--cui-gray-3)!important;
        color: var(--cui-font-color)!important;
        margin: 2px!important;
        padding: 0 5px!important
    }
</style>
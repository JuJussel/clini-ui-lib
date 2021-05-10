<template>
    <div class="cui-select-container">
        <label class="cui-select-label" v-if="label">
            <span style="margin-right: 10px"> {{ label }} </span>
            <span v-if="required"> {{ trans.required }} </span>
        </label>
        <div  ref="select" class="cui-select" @click="handleClick" v-bind:class="{focused: focused}">
            <div v-if="!focused">
                <div class="cui-placeholder" v-if="!value"> {{ placeholder }} </div>
                <div v-else-if="multiple"></div>
                <div v-else> {{ displayValue }} </div>
            </div>
            <div v-else>
                <div v-if="search">
                    <input>
                </div>
                <div v-else-if="!value" class="cui-placeholder"> {{ placeholder }} </div>
                <div v-else-if="multiple"></div>
                <div v-else> {{ displayValue }} </div>
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
            <div v-for="(item, index) in data" :key="index">
                <span v-if="dataIsObject"> {{ item[prop] }} </span>
                <span v-else> {{ item }} </span>
            </div>
        </div>
    </div>
</template>

<script>

import { createPopper } from '@popperjs/core'
 

export default {
    name: 'CuiSelect',
    props: {
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
        }
    },
    data() {
        return {
            value: null,
            focused: false,
            displayValue: null,
            dropdownWidth: 100,
            retracting: false
        }
    },
    computed: {
        dataIsObject() {
            return typeof this.data[0] === 'object' && this.data[0] !== null
        }
    },
    methods: {
        handleClick() {
            this.dropdownWidth = this.$refs.select.clientWidth - 20
            const select = this.$refs.select
            const dropdown = this.$refs.dropdown
            if (this.focused) {
                this.retracting = true
                setTimeout(function() {
                    this.focused = false
                    this.retracting = false
                }.bind(this), 150)
            } else {
                this.focused = true
                createPopper(select, dropdown, {
                    placement: 'bottom',
                })
            }
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
        padding: 5px 10px;
        transition: all .2s ease;
        font-size: 13.3333px;
        display: flex;
        align-items: center;
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
        padding: 10px;
        z-index: 10;
        width: 240px;
        border-top: solid 1px var(--cui-gray-1);
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

</style>
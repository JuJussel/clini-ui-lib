<template>
    <div ref="parent" @mouseover="handleMouseover" @mouseleave="handleMouseleave" @click.stop="handleClick">
        <slot></slot>
    </div>
    <div ref="tooltip" class="tooltip-cont" v-bind:class="{visible: isVisible}">
        <slot name="tooltip"></slot>
        <!-- <div class="arrow" :class="position"></div> -->
    </div>
</template>

<script>

import { thisExpression } from '@babel/types'
import { createPopper } from '@popperjs/core'

export default {
    name: 'CuiTooltip',
    props: {
        position: {
            default: 'bottom'
        },
        onHover: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
        document.addEventListener('click', this.handleOutsideClick)
    },

    data() {
        return {
            isVisible: false,
            isFixed: false
        }
    }, 
    methods: {
        handleMouseover() {
            this.onHover ? this.showTooltip() : false
        },
        handleMouseleave() {
            this.onHover && !this.isFixed ? this.isVisible = false : false
        },
        handleClick() {
            this.isFixed = true
            this.showTooltip()
        },
        showTooltip() {
            this.isVisible = true
            const parent = this.$refs.parent
            const tooltip = this.$refs.tooltip
            createPopper(parent, tooltip, {
                placement: this.position,
                // modifiers: [
                //     {
                //         name: 'preventOverflow',
                //         options: {
                //             mainAxis: false
                //         },
                //     }
                // ]
            })
        },
        handleOutsideClick(event) {
            if (this.isVisible) {
                this.isFixed = false
                const target = event?.target?.classList[0]
                if (
                    target !== 'tooltip-cont'
                ) {  
                    this.isVisible = false
                }
            }
        }
    }
}
</script>

<style scoped>
    .tooltip-cont {
        display: none;
        padding: 10px;
        background: white;
        border-radius: 20px;
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 30%);
        z-index: 5
    }
    .visible {
        display: block;
    }
    /* .arrow,
    .arrow::before {
        position: absolute;
        width: 8px;
        height: 8px;
        background: inherit;
    }

    .arrow {
        visibility: hidden;
    }

    .arrow::before {
        visibility: visible;
        content: '';
        transform: rotate(45deg);
    }

    .arrow.top {
        bottom: -4px;
        left: calc(50% - 4px);
    }

    .arrow.bottom {
        top: -4px;
        left: calc(50% - 4px);
    }

    .arrow.left {
        right: -4px;
        top: calc(50% - 4px);
    }

    .arrow.right {
        left: -4px;
        top: calc(50% - 4px);
    } */

</style>
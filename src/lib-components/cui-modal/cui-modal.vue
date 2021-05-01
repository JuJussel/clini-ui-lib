<template>
    <transition name="modal-trans">
        <div class="cui-modal-overlay" v-if="visible">
            <transition name="modal-content-trans">
                <div class="cui-modal-content" v-if="showContent" @click="handelClick">
                    <slot></slot>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'CuiModal',
    props: {
        visible: {
            default: false,
            type: Boolean
        },
        closable: {
            default: true,
            type: Boolean
        }
    },
    data() {
        return {
            showContent: false
        }
    },
    methods: {
        handelClick(event) {
            if (event.target.matches('.cui-modal-content') && this.closable) {
                this.$emit('close')
            }
        }
    },
    watch: {
        visible() {
            if (this.visible) {
                setTimeout(function() {
                    this.showContent = true
                }.bind(this), 100)
            } else {
                this.showContent = false
            }
        }
    }
}
</script>

<style>
    .cui-modal-overlay {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 100;
        background: rgba(0,0,0,.2);
        backdrop-filter: saturate(180%) blur(10px);
        overflow: hidden
    }
    .cui-modal-content {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 100px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal-trans-enter-active, 
    .modal-content-trans-enter-active {
        transition: all .15s ease;
    }
    .modal-content-trans-enter-active {        
        animation: rebound .3s
    }
    .modal-trans-leave-active, 
    .modal-content-trans-leave-active {
        transition: all .15s ease
    }
    .modal-trans-enter-from,
    .modal-trans-leave-to {
        opacity: 0;
    }
    .modal-content-trans-enter-from,
    .modal-content-trans-leave-to {
        transform: scale(.7)
    }
    @keyframes rebound {
        0% {transform: scale(.8)}
        40% {transform: scale(1.08)}
        80% {transform: scale(0.98)}
        100% {transform: scale(1)}
    }
</style>
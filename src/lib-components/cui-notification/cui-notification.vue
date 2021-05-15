<template>
    <div class="cui-notification-parent">
        <transition name="notification">
            <div class="cui-notification-animation" v-if="show">
                <div class="cui-notification" :class="color">
                    {{ text }}
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'CuiNotification',
    data() {
        return {
            show: false
        }
    },
    created() {
        setTimeout(function() {
            this.show = true
        }.bind(this), 10)
        setTimeout(function() {
            this.show = false;
        }.bind(this), this.duration - 160)
    },
}
</script>

<style>
    .cui-notification-parent {
        position: absolute;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100px
    }
    .cui-notification {
        position: absolute;
        z-index: 100;
        width: 300px;
        background: red;
        padding: 30px;
        border-radius: 24px;
        text-align: center
    }
    .cui-notification.white {
        background: white;
        color: var(--cui-font-color);
        box-shadow: 1px 1px 4px 0px rgb(0 0 0 / 15%);
    }
    .cui-notification.primary {
        background: var(--cui-primary);
        color: white;
        box-shadow: 1px 1px 4px 0px rgb(0 0 0 / 15%);
    }
    .cui-notification.danger {
        background: var(--cui-danger);
        color: white;
        box-shadow: 1px 1px 4px 0px rgb(0 0 0 / 15%);
    }
    .cui-notification.warn {
        background: var(--cui-warn);
        color: white;
        box-shadow: 1px 1px 4px 0px rgb(0 0 0 / 15%);
    }

    .cui-notification-animation {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        position: absolute;
        overflow: hidden;
        width: 460px;
        height: 460px
    }

    .notification-enter-active,
    .notification-leave-active {
        transition: all .15s ease-in;
    }

    .notification-enter-from,
    .notification-leave-to {
        opacity: 0;
        transform: translateY(-50px);
        width: 0px;
        height: 0px

}
</style>
<template>
    <span
        class="cui-avatar"
        v-bind:style="{
            'background-image': src
        }"
        >
    </span>
</template>

<script>
export default {
    name: "CuiAvatar",
    props: {
        image: {
            default: '',
            type: String
        }
    },
    computed: {
        src() {
            return 'url(' + this.image + ')'
        } 
    }
}
</script>

<style scoped>
    .cui-avatar {
        height: 35px;
        width: 35px;
        background-size: cover;
        background-position: center;
        display: inline-block;
        border-radius: var(--cui-button-radius)
    }

</style>
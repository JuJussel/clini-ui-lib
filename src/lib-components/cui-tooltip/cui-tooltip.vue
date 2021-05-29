<template>
    <div>
        <slot ref="parent"></slot>
        <slot name="tooltip" ref="tooltip"></slot>
    </div>
</template>

<script>
export default {
    name: 'CuiTooltip',
    props: {

    },
    methods: {
        toggleTooltip() {
            const parent = this.$refs.parent
            const tooltip = this.$refs.tooltip
            createPopper(parent, tooltip, {
                placement: 'bottom',
            })

        }
    }
}
</script>
<template>
    <div ref="form">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'CuiForm',
    props: {
        rules: {
            default: null,
            type: Object
        }
    },
    methods: {
        validate() {
            if (this.default) {
                let formItems = this.$slots.default()
                formItems.forEach(item => {
                    let prop = item.props.prop
    
                    if (prop) {
                        console.log(prop);
                    }
                });                
            }
        }
    }
}
</script>
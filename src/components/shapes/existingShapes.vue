<template>
  <div 
    :style="individualShape"
    @mousemove="onHoverShape"/>
</template>

<script>
export default {
    props: {
        shapeInfo: {
            type: Object,
            default: () => {},
        }
    },
    computed: {
        individualShape() {
            return { 
                top: `${this.shapeInfo.top}${this.measurementUnit}`,
                left: `${this.shapeInfo.left}${this.measurementUnit}`,
                width: `${this.shapeInfo.width}${this.measurementUnit}`,
                height: `${this.shapeInfo.height}${this.measurementUnit}`,
                backgroundColor: `${this.shapeInfo.backgroundColor}`,
                position: 'absolute',
            };
        }
    },
    data() {
        return {
            measurementUnit: 'px',
        }
    },
    methods: {
        onHoverShape(event) {
            this.$emit('onHoverShape', this.shapeInfo, event)
        }
    }
}
</script>

<style>

</style>
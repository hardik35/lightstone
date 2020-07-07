<template>
  <div class="shapeInfoBar">
      <div>Name: {{ currentActiveShapeInfo.name }}</div>
      <div>
          Coordinates: 
          {{ currentActiveShapeInfo.coordinates.shapeDimension.x }} 
          {{ currentActiveShapeInfo.coordinates.shapeDimension.y }}
          {{ currentActiveShapeInfo.coordinates.mouse.x }}
          {{ currentActiveShapeInfo.coordinates.mouse.y }}
        </div>

  </div>
</template>

<script>
export default {
    props: {
        currentActiveShapeInfo: {
            type: Object,
            default: () => {},
        }
    }
}
</script>

<style>
    .shapeInfoBar {
        position: fixed; 
        right: 0px; 
        top: 0px; 
        padding: 2rem; 
        background-color: bisque;
    }
</style>
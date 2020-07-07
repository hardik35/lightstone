<template>
  <div 
    class="container"
    @click="showNewShapeModal">
    <shapeInfoBar
      :currentActiveShapeInfo="currentActiveShapeInfo"/>
    <div style="position: relative">
      <existingShapes 
        v-for="(shapeInfo, index) in existingShapesInfo"
        :key="index"
        :shapeInfo="shapeInfo"
        @onHoverShape="assignShapeInfo"/>
    </div>
    <newShapeModal
      :isNewShapeModalVisible.sync="isNewShapeModalVisible"
      @onShapeAddition="onShapeAddition"/>
  </div>
</template>

<script>

import existingShapes from './existingShapes';
import shapeInfoBar from './shapeInfoBar';
import newShapeModal from './newShapeModal';

export default {
  name: 'shapes',
  components: {
    existingShapes,
    shapeInfoBar,
    newShapeModal,
  },
  data() {
    return {
      existingShapesInfo: [
        {
          top: 50, 
          left: 345, 
          width: 100, 
          height: 144,
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          name: 'Head'
        },
        {
          top: 150, 
          left: 250, 
          width: 250, 
          height: 344,
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          name: 'Body'
        },
        {
          top: 200, 
          left: 145, 
          width: 100, 
          height: 344,
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          name: 'Arm'
        }
      ],
      currentActiveShapeInfo: {
        name: null,
        coordinates: {
          mouse: {
            x: null,
            y: null,
          },
          shapeDimension: {
            x: null,
            y: null,
          }
        }
      },
      isNewShapeModalVisible: false,
    }
  },
  methods: {
    assignShapeInfo(shapeInfo, event) {
      this.currentActiveShapeInfo.name = shapeInfo.name;
      this.currentActiveShapeInfo.coordinates.shapeDimension.x = event.offsetX;
      this.currentActiveShapeInfo.coordinates.shapeDimension.y = shapeInfo.height - event.offsetY;
      this.currentActiveShapeInfo.coordinates.mouse.x = event.clientX;
      this.currentActiveShapeInfo.coordinates.mouse.y = shapeInfo.top + 2 * shapeInfo.height - event.offsetY;
    },
    showNewShapeModal() {
      if (!this.isNewShapeModalVisible) {
        this.isNewShapeModalVisible = true;
      }
    },
    onShapeAddition({ top, left, width, height, name, backgroundColor = 'rgba(0, 0, 0, 0.2)' }) {
      this.existingShapesInfo.push({
        top,
        width,
        left,
        height,
        name,
        backgroundColor,
      })
    }
  }
}
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
}
</style>

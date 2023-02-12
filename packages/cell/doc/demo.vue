<template>
<ysyz-card>
  <my-cell-group>
    <my-cell to="button">1</my-cell>
    <my-cell disabled>2</my-cell>
    <my-cell selected>3</my-cell>
  </my-cell-group>
</ysyz-card>
</template>

<script>
import myCellGroup from '../../cellGroup/index.vue'
import myCell from '../index.vue'

export default {
    name: "demo",
    components: {
        myCell,
        myCellGroup
    }
}
</script>

<style scoped lang="scss">
.container {
  padding: 10px 0 10px 10px;
}
</style>

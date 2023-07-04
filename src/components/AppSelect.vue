<script>
import { store } from '../data/store.js'
export default {
  props: {
    type: String
  },
  data() {
    return {
      store
    }
  }

}
</script>
<template>
  <select class="form-select" aria-label="Default select example">
    <option selected>{{ type }}</option>
    <option v-for="tipo in  store.type1 " :value="tipo" @click="$emit('tipo')">{{ tipo }}</option>

  </select>
</template>
<style scoped>
select {
  margin: 30px 0;
}
</style>
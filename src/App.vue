<script>
import Header from './components/Header.vue'

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
    }
  },
  methods: {
   
  }
}  
</script>

<template>
<router-view/>
</template>

<style lang="scss" scoped>
@use './styles/general.scss' as *;
</style>

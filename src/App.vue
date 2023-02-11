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
<div class="Page">
    <Header>
    
    </Header>
    <main>
    
    </main>
</div>
</template>

<style scoped>
.Page {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
</style>

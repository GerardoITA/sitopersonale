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
    margin: 0 auto;
    width: 100%;
    padding: 0 30px;
  }

@media screen and (min-width: 1280px) {
  .Page {
    margin: 0 auto;
    width: 1280px;

  }
}
</style>

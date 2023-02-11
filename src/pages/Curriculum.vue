<script>
import Header from '../components/Header.vue'

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
        <div class="container">
            <h1>
                Lorem ipsum dolor
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolorem rerum maiores! Dicta atque quaerat nulla deserunt ratione architecto laborum molestiae iure, ipsum inventore maxime, et, dolor officiis magnam numquam!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique nisi facilis? Repudiandae odio animi corporis excepturi cumque quas blanditiis incidunt maiores ullam. Possimus saepe inventore expedita consectetur perferendis atque.
            </p>
        </div>
    </main>
</div>
</template>
<style lang="scss" scoped>
@use '../styles/general.scss' as *;

.container {
    border: 1px solid $MineShaft;
    height: 800px;
    width: 100%;
    padding: 1rem;
    border-radius: 10px;
}

</style>
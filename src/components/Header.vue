<script>
import myLogo from './microcomponents/myLogo.vue';
export default {
    name: "Header",
    components: {
        myLogo,
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="topBar">
        <myLogo></myLogo>
        <nav>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Portfolio
                </li>
            </ul>
        </nav>
    </div>
    
   
</template>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.topBar {
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
nav {
    ul {
        display: flex;
        gap: 30px;
        
        li {
            text-decoration-style: none;
            list-style-type: none;
            font-size: 1.5rem;
        }
    }
}
</style>
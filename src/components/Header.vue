<script>
import myLogo from './microcomponents/myLogo.vue';
export default {
    name: "Header",
    components: {
        myLogo,
    },
    data() {
        return {
            links: [
                {
                    name: 'Home',
                    route: '/',
                },
                {
                    name: 'About',
                    route: '/about',
                },
                {
                    name: 'Curriculum',
                    route: '/curriculum',
                },
                {
                    name: 'Contatti',
                    route: '/contatti',
                }
            ]
        }
    },
    methods: {

    },
    computed: {
        activeLink() {
            switch (this.$route.path) {
                case '/':
                    return 0;
                case '/about':
                    return 1;
                case '/curriculum':
                    return 2;
                case '/contatti':
                    return 3;
                default:
                    return 0;
            }
        }
    }
}
</script>

<template>
    <div class="topBar">
        <myLogo></myLogo>
        <nav>
            <ul>
                <li v-for="link, number in links"  :class="activeLink === number ? 'linkActive' : '' ">
                    <router-link class="routerLink" :to="link.route">
                        {{link.name}}
                    </router-link>
                </li>

            </ul>
        </nav>
    </div>
    
   
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
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
            padding-bottom: 1rem;
            box-sizing: content-box;
            &:hover {
                    border-bottom: 0.125rem solid $MineShaft;
                }
            
        }
    }
}
</style>
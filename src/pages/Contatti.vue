<script>
import Header from '../components/Header.vue'

export default {
    name: "Contatti",
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
        <h2>Qui puoi trovare i miei contatti</h2>
        <hr>
        <section>
            <h3>Github</h3>
            <a href="https://github.com/GerardoITA" target="_blank">https://github.com/GerardoITA</a>
            <p>A questo link puoi trovare il mio account github, con all'interno tutti i miei progetti, sia personali che del corso Boolean, dai primi 'Hello World' su html fino ai più recenti, tra cui questo sito.</p>
        </section>
        <hr class="smallerHr">
        <section>
            <h3>Email</h3>
            <i>email@myemail.it</i>
            <p>Per contattarmi puoi scrivere un'email a questo indirizzo.</p>
        </section>
        <hr class="smallerHr">
        <section>
            <h3>Cellulare</h3>
            <i>13456789</i>
            <p>Puoi scrivermi su Whatsapp a questo numero - risponderò il prima possibile.</p>
        </section>
        <hr class="smallerHr">
    </main>
</div>
</template>
<style lang="scss" scoped>
@use '../styles/general.scss' as *;
main {
    hr {
        color: $MineShaft;
        margin: 3rem 0 3rem;
    }
    * {
        margin: 0.5rem 0;
    }
    a {
        color: $ButterflyBush;
    }
}
</style>
<script>
import store from '../store';
import AppHero from './AppHero.vue';

export default {
    components: {
        AppHero,
    },
    data(){
        return {
            store,
        }
    }
}

</script>

<template>

    <main class="main">
        <AppHero />

    </main>


</template>

<style scoped>


</style>
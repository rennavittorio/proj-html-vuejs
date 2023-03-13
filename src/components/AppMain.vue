<script>
import store from '../store';
import AppHero from './AppHero.vue';
import AppPopularRecipes from './AppPopularRecipes.vue';

export default {
    components: {
        AppHero,
        AppPopularRecipes,
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

        <AppPopularRecipes />



    </main>


</template>

<style scoped>


</style>
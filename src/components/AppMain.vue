<script>
import store from '../store';
import AppHero from './AppHero.vue';
import AppPopularRecipes from './AppPopularRecipes.vue';
import AppCulinaryCollection from './AppCulinaryCollection.vue';

export default {
    components: {
        AppHero,
        AppPopularRecipes,
        AppCulinaryCollection,
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

        <AppCulinaryCollection />



    </main>


</template>

<style scoped>


</style>
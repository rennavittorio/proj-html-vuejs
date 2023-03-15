<script>
import store from '../store';
import AppHero from './main-sections/AppHero.vue';
import AppPopularRecipes from './main-sections/AppPopularRecipes.vue';
import AppCulinaryCollection from './main-sections/AppCulinaryCollection.vue';
import AppBlog from './main-sections/AppBlog.vue';
import AppSubscribe from './main-sections/AppSubscribe.vue';

export default {
    components: {
        AppHero,
        AppPopularRecipes,
        AppCulinaryCollection,
        AppBlog,
        AppSubscribe,
    },
    data(){
        return {
            store,
        }
    }
}

</script>

<template>

    <main class="main bg-bg-grey">

        <AppHero />

        <AppPopularRecipes />

        <AppCulinaryCollection />

        <AppBlog />

        <AppSubscribe />



    </main>


</template>

<style scoped>


</style>
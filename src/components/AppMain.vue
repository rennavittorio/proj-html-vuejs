<script>
import store from '../store';
import AppHero from './AppHero.vue';
import AppPopularRecipes from './AppPopularRecipes.vue';
import AppCulinaryCollection from './AppCulinaryCollection.vue';
import AppBlog from './AppBlog.vue';
import AppSubscribe from './AppSubscribe.vue';

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
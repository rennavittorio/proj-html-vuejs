<script>
import store from '../store';
import AppBtn from './AppBtn.vue';

export default {
    components: {
        AppBtn,
    },
    data(){
        return {
            store,
        }
    }
}

</script>

<template>

    <section class="blog pt-[200px]">

        <div class="container mb-16">
            <div class="grid grid-cols-3 gap-14">
                <div class="wrapper-text col-span-2">
                    <h1 class="section__title">
                        Farm to table
                    </h1>
                    <p class="section__description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, unde!
                        Optio odio molestias excepturi ullam praesentium necessitatibus? Dicta, nisi magni.
                    </p>
                </div>
                <div class="wrapper-btn flex justify-end">
                    <AppBtn 
                    class="w-fit h-fit"
                    :btnText="'Read our blog'"
                    :btnLink="'#'"
                    :btnIcon="'fa-book-open-reader'"
                    />
                </div>
            </div>
        </div>

        <div class="container">
            <div class="grid grid-cols-3 gap-14">
                <div class="main-blog col-span-2 bg-orange">
                    Blog...
                </div>

                <aside class="bg-grey">
                    Aside...
                </aside>


            </div>
        </div>

    </section>

</template>

<style scoped>


</style>
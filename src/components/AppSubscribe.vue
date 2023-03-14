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

    <section class="subscribe-section h-[700px] flex justify-center items-center">

        <div class="container bg-white py-5">
            <h1 class="section__title text-center font-serif text-2xl mb-5">
                Subscribe <span class="text-orange">&</span> Receive A Free eBook
            </h1>
            <p class="section__description text-center mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem vel nisi corrupti labore laudantium velit.
            </p>

            <div class="form-wrapper flex justify-center items-center gap-5">
                <div class="mail-wrapper group">
                    <input type="mail" placeholder="Insert your mail" class="w-[550px] block border-slate-300 rounded py-2 pl-9 pr-3 shadow-sm focus-visible:outline-lightorange focus:outline-orange sm:text-sm">
                </div>
                <AppBtn 
                :btnText="'Subscribe'"
                :btnLink="'#'"
                />
            </div>



        </div>

    </section>

</template>

<style scoped>
.subscribe-section {
    background: url('/images/receipe-2.jpg');
}

</style>
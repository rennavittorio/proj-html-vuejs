<script>
import store from '../../store';
import AppBtn from '../../components/AppBtn.vue';
import AppCardImg from '../../components/AppCardImg.vue';

export default {
    components: {
        AppBtn,
        AppCardImg,
    },
    data(){
        return {
            store,
            needCover: false,
        }
    },
    computed: {
        topFourPopular(){
            let filteredList = [...this.store.foodieJournal].slice(0,4);
            return filteredList;
        },
    }
}

</script>

<template>

    <section class="subscribe-section h-[700px] flex justify-center items-center relative">

        <div class="container bg-white py-10">
            <h1 class="section__title text-center font-serif text-2xl mb-6">
                Subscribe <span class="text-orange">&</span> Receive A Free eBook
            </h1>
            <p class="section__description text-center text-lightgrey mb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem vel nisi corrupti labore laudantium velit.
            </p>

            <div class="form-wrapper flex justify-center items-center gap-5 mb-6">
                <div class="mail-wrapper group">
                    <input type="mail" placeholder="Insert your mail" class="w-[550px] block border-slate-300 rounded py-2 pl-9 pr-3 shadow-sm focus-visible:outline-lightorange focus:outline-orange sm:text-sm">
                </div>
                <AppBtn 
                class="bg-orange uppercase rounded-sm"
                :btnText="'Subscribe'"
                :btnLink="'#'"
                />
            </div>

            <p class="section__footer text-center text-xs text-lightgrey">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quisquam!
            </p>

        </div>

    </section>

    <section class="top-four-elements">
        <div class="grid grid-cols-4">
            <AppCardImg 
            class="text-center"
            v-for="article in topFourPopular" :key="article.articleName"
            :cardImgImage="article.articleCover"
            :cardImgTitle="article.articleName"
            :needCover="needCover"
            />

        </div>
    </section>

</template>

<style scoped>
.subscribe-section {
    background: url('/images/fi-organic-breakfast.jpg');
    background-position: center;
}
</style>
<script>
import store from '../store';
import AppCard from './AppCard.vue';

export default {
    components: {
        AppCard,
    },

    data(){
        return {
            store,
        }
    },

    computed: {
        firstArticle(){
            return this.store.foodieJournal[0];
        },
        topThreeArticles(){
            let filteredList = [...this.store.foodieJournal].slice(0, 3)
            return filteredList;
        }
    }
}

</script>

<template>

    <section class="hero-banner flex flex-col items-center relative">
        <div class="hero-bg absolute w-[100%] h-[700px]">
            <!-- trovare modo migliore -->
        </div>

        <div class="container">
            <div class="hero__cta bg-bg-grey w-[700px] h-[230px] rounded mx-auto my-[200px] flex flex-col justify-center items-center relative px-[90px] py-[50px]">
                <h1 class="hero__title font-serif font-bold text-4xl text-center mb-2 hover:text-orange hover:cursor-pointer">
                    {{ firstArticle.articleName }}
                </h1>
                <p class="hero__date text-lightgrey ">
                    {{ firstArticle.articleDate }}
                </p>
                <h3 class="hero__tag bg-orange text-white px-5 py-2 rounded absolute -top-5 left-50">
                    Today's pick
                </h3>
            </div>
        </div>
        
        <div class="container bg-white relative z-0">
            <h1 class="journal__title px-8 pt-8 text-center text-2xl uppercase flex items-center">
                <span class="px-8 shrink-0">Foodie journal</span>
            </h1>
            <div class="grid-section grid grid-cols-3 gap-8 p-8">

                <AppCard
                v-for="card in topThreeArticles" :key="card.articleName" 
                :cardImage="card.articleCover"
                :cardTitle="card.articleName"
                :cardAuthor="card.articleAuthor"
                :cardDate="card.articleDate"
                />
    
            </div>
        </div>


    </section>




</template>

<style scoped>
.hero-bg {
    background: url('/images/fi-water-side-rest-1200x790.jpg') white;
    background-repeat: no-repeat no-repeat;
    background-size: cover;
    background-position: center;
}

.journal__title:before,
.journal__title:after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    border: 2px dashed #9C9894;
    opacity: 0.2;
}


</style>
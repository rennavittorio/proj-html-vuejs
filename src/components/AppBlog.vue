<script>
import store from '../store';
import AppBtn from './AppBtn.vue';
import AppCard from './AppCard.vue';

export default {
    components: {
        AppBtn,
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
        otherArticles(){
            let filteredList = [...this.store.foodieJournal].slice(1,7)
            return filteredList;
        }
    }
}

</script>

<template>

    <section class="blog pt-[200px]">

        <div class="container mb-16">
            <div class="grid grid-cols-3 gap-14">
                <div class="wrapper-text col-span-2">
                    <h1 class="section__title uppercase">
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
                <div class="main-blog col-span-2">
                    <div class="top-article mb-10 shadow-lg">
                        <AppCard 
                        class="card-blog text-start"
                        :cardImage="firstArticle.articleCover"
                        :cardTitle="firstArticle.articleName"
                        :cardAuthor="firstArticle.articleAuthor"
                        :cardDate="firstArticle.articleDate"
                        />

                        <p class="card__description mb-8 px-3">
                            {{ firstArticle.articleDescription }}
                        </p>

                        <div class="card__footer flex justify-between items-center pb-8 px-3">
                            <div class="btn-link">
                                <a href="#" class="hover:text-orange">
                                    Read more >
                                </a>
                            </div>
                            <div class="comment-count flex justify-end items-center hover:text-orange hover:cursor-pointer">
                                <div class="icon-wrapper px-3">
                                    <font-awesome-icon icon="fa-regular fa-comments" />
                                </div>
                                <div class="counter">
                                    {{ firstArticle.totalReads }}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="other-articles grid grid-cols-2 gap-9">
                        <AppCard
                        class="shadow-lg"
                        v-for="article in otherArticles" :key="article.articleName"
                        :cardImage="article.articleCover"
                        :cardTitle="article.articleName"
                        :cardAuthor="article.articleAuthor"
                        :cardDate="article.articleDate"
                        />
                    </div>
                </div>



                <aside class="bg-grey">
                    Aside...
                </aside>


            </div>
        </div>

    </section>

</template>

<style scoped>
.card__description::before {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    border: 2px dashed #f5f5f1;
    margin: 20px 0;

}

</style>
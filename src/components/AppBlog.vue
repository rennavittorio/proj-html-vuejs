<script>
import store from '../store';
import AppBtn from './AppBtn.vue';
import AppCard from './AppCard.vue';
import AppCardSm from './AppCardSm.vue';
import AppSocialBar from './AppSocialBar.vue';

export default {
    components: {
        AppBtn,
        AppCard,
        AppCardSm,
        AppSocialBar,
    },
    data(){
        return {
            store,
            otherArticlesMaxNum: 5,
            selectedArticles: 'popular',
        }
    },
    methods: {
        increaseMaxNum(){
            this.otherArticlesMaxNum +=2;
            console.log(this.otherArticlesMaxNum);
        }
    },
    
    computed: {
        firstArticle(){
            return this.store.foodieJournal[0];
        },
        otherArticles(){
            let filteredList = [...this.store.foodieJournal].slice(1,this.otherArticlesMaxNum);
            return filteredList;
        },
        topThreePopular(){
            let filteredList = [...this.store.foodieJournal].slice(0,3);
            return filteredList;
        },
        topThreeRecent(){
            let filteredList = [...this.store.foodieJournal].slice(4,7);
            return filteredList;
        },
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

                    <div class="other-articles grid grid-cols-2 gap-9 mb-8">
                        <AppCard
                        class="shadow-lg"
                        v-for="article in otherArticles" :key="article.articleName"
                        :cardImage="article.articleCover"
                        :cardTitle="article.articleName"
                        :cardAuthor="article.articleAuthor"
                        :cardDate="article.articleDate"
                        />
                    </div>


                    <div class="btn-more mb-8">
                        <AppBtn 
                        @click="increaseMaxNum()"
                        :class="['uppercase', 'text-center', 'bg-lightgrey', 'hover:bg-grey', 'hover:text-white', otherArticlesMaxNum > 8 ? 'hidden' : '']"
                        :btnText="'load more post'"
                        :btnLink="'#'"
                        />
                    </div>


                </div>



                <aside>
                    <div class="ad__section relative">
                        <a href="#" class="relative">
                            <div class="img-wrapper">
                                <img src="/images/aside-1.jpg" alt="">
                            </div>
                            <h1 class="ad__cta text-2xl uppercase text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                View or latest recipes
                            </h1>
                        </a>
                    </div>

                    <div class="city__section">
                        <a href="#" class="relative">
                            <div class="img-wrapper">
                                <img src="/images/aside-2.jpg" alt="">
                            </div>
                            <h1 class="ad__cta text-2xl uppercase text-center bg-grey text-white p-2 absolute bottom-[10%]">
                                City guide: Singapore
                            </h1>
                        </a>
                        <AppBtn 
                        class="text-center uppercase bg-orange"
                        :btnText="'View all city guides'"
                        :btnLink="'#'"
                        :btnIcon="'fa-earth-americas'"
                        />
                    </div>

                    <div
                    :class="['searchbar', 'justify-center', 'items-center']">
                        <label class="relative block">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                            <div class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="text-lightgrey"/>
                            </div>
                        </span>
                            <input class="w-[100%] block bg-white border border-lightgrey border-slate-300 rounded py-5 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm" placeholder="Search..." type="text" name="search"/>
                        </label>
                    </div>

                    <div class="social__section">
                        <h1 class="section__title capitalize text-orange font-serif text-2xl">
                            Follow us
                        </h1>
                        <AppSocialBar 
                        class="modified-social-bar"
                        />
                    </div>

                    <div class="popular-recent__section">

                        <div class="btn-wrapper grid grid-cols-2 font-serif text-center hover:cursor-pointer mb-6">
                            <div @click="() => selectedArticles = 'popular'" 
                            class="btn__popular border-r-2 border-r-lightgrey py-5 hover:bg-white hover:cursor-pointer">
                                Popular
                            </div>

                            <div @click="() => selectedArticles = 'recent'" 
                            class="btn__recent border-l-2 border-l-lightgrey py-5 hover:bg-white hover:cursor-pointer">
                                Recent
                            </div>
                        </div>

                        <div v-if="selectedArticles === 'popular'" 
                        class="popular-articles">

                            <AppCardSm 
                            class="mb-6"
                            v-for="article in topThreePopular"
                            :cardSmImg="article.articleCover"
                            :cardSmText="article.articleName"
                            :cardSmDate="article.articleDate"
                            />

                        </div>

                        
                        <div v-else 
                        class="recent-articles">

                            <AppCardSm 
                            class="mb-6"
                            v-for="article in topThreeRecent"
                            :cardSmImg="article.articleCover"
                            :cardSmText="article.articleName"
                            :cardSmDate="article.articleDate"
                            />

                        </div>

                    </div>


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
    border: 2px dashed #9C9894;
    margin: 20px 0;

}

aside > * {
    margin-bottom: 48px;
}

.ad__cta {
    opacity: 0.8;
}

.city__section:after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    border: 2px solid #9C9894;
    margin: 48px 0;

}
</style>
<script>
import store from '../../store';
import AppCategoryCard from '../../components/AppCategoryCard.vue';

export default {
    components: {
        AppCategoryCard,
    },
    data(){
        return {
            store,
            categoryList: [
                {
                    categoryName: 'Drink',
                    categoryCover: '/images/culinary-1.png',
                    categoryLink: '#',
                },
                {
                    categoryName: 'Soup',
                    categoryCover: '/images/culinary-2.png',
                    categoryLink: '#',
                },
                {
                    categoryName: 'Bakery',
                    categoryCover: '/images/culinary-3.png',
                    categoryLink: '#',
                },
                {
                    categoryName: 'Dinner',
                    categoryCover: '/images/culinary-4.png',
                    categoryLink: '#',
                },
                {
                    categoryName: 'Healthy',
                    categoryCover: '/images/culinary-5.png',
                    categoryLink: '#',
                },
                {
                    categoryName: 'Staff picks',
                    categoryCover: '/images/culinary-6.png',
                    categoryLink: '#',
                },
                {
                    categoryName: 'Appetisers',
                    categoryCover: '/images/culinary-7.png',
                    categoryLink: '#',
                },
                {
                    categoryName: 'Quick & easy',
                    categoryCover: '/images/culinary-8.png',
                    categoryLink: '#',
                },
            ]
        }
    }
}

</script>

<template>

    <section class="culinary-collection pt-[160px]">
        <div class="container mb-8">
            <div class="text-wrapper text-center">
                <h1 class="section__title uppercase font-semibold mb-8">
                    Culinary collection
                </h1>
                <p class="section__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quia!
                    Minima obcaecati nostrum asperiores dolore doloremque sed unde eos libero.
                </p>
            </div>
        </div>

        <div class="container">
            <div class="grid grid-cols-4 gap-10">

                <AppCategoryCard 
                v-for="category in categoryList" :key="category.cateogryName"
                :categoryImg="category.categoryCover"
                :categoryName="category.categoryName"
                :categoryLink="category.categoryLink"
                />

            </div>
        </div>
    </section>

</template>

<style scoped>


</style>
<script>
import store from '../store';
import AppCardLg from './AppCardLg.vue';
import AppCardImg from './AppCardImg.vue';

export default {
    components: {
        AppCardLg,
        AppCardImg,
    },
    data(){
        return {
            store,
            recipesList: [
                {
                    recipeName: 'Lunch Favourite with Salad, Naan And Beans',
                    recipeCover: '/images/receipe-1.jpg',
                    recipeTags: ['tag1', 'tag2'],
                    recipeDescription: 'Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id',
                },
                {
                    recipeName: 'Lunch Favourite with Salad, Naan And Beans',
                    recipeCover: '/images/receipe-2.jpg',
                    recipeTags: ['tag1', 'tag2'],
                    recipeDescription: 'Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id',
                },
                {
                    recipeName: 'Lunch Favourite with Salad, Naan And Beans',
                    recipeCover: '/images/receipe-3.jpg',
                    recipeTags: ['tag1', 'tag2'],
                    recipeDescription: 'Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id',
                },
                {
                    recipeName: 'Lunch Favourite with Salad, Naan And Beans',
                    recipeCover: '/images/receipe-4.jpg',
                    recipeTags: ['tag1', 'tag2'],
                    recipeDescription: 'Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id',
                },
                {
                    recipeName: 'Lunch Favourite with Salad, Naan And Beans',
                    recipeCover: '/images/receipe-5.jpg',
                    recipeTags: ['tag1', 'tag2'],
                    recipeDescription: 'Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id',
                },
                {
                    recipeName: 'Lunch Favourite with Salad, Naan And Beans',
                    recipeCover: '/images/receipe-6.jpg',
                    recipeTags: ['tag1', 'tag2'],
                    recipeDescription: 'Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id',
                },
                {
                    recipeName: 'Lunch Favourite with Salad, Naan And Beans',
                    recipeCover: '/images/receipe-7.jpg',
                    recipeTags: ['tag1', 'tag2'],
                    recipeDescription: 'Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id',
                },
                {
                    recipeName: 'Lunch Favourite with Salad, Naan And Beans',
                    recipeCover: '/images/receipe-8.jpg',
                    recipeTags: ['tag1', 'tag2'],
                    recipeDescription: 'Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id',
                },
                {
                    recipeName: 'Lunch Favourite with Salad, Naan And Beans',
                    recipeCover: '/images/receipe-9.jpg',
                    recipeTags: ['tag1', 'tag2'],
                    recipeDescription: 'Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id',
                },
            ]
        }
    },
    computed: {
        firstReceipe(){
            return this.recipesList[0];
        },

        otherReceipes(){
            let filteredList = [...this.recipesList].slice(1)
            return filteredList;
        }
    }
}

</script>

<template>
    
    <section class="popular-recipes">

        <div class="container mx-auto">
            <div class="w-[540px] mx-auto text-center pt-[110px] pb-[62px]">
                <h1 class="section__title uppercase mb-8 ">
                    Popular recipes
                </h1> 
                <p class="section__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum, maiores maxime expedita magnam consectetur.
                </p>
            </div>
        </div>
    
        <div class="container mx-auto grid grid-cols-2 gap-x-12">
            <div class="main-card">
                <AppCardLg
                :cardImage="firstReceipe.recipeCover"
                :cardTitle="firstReceipe.recipeName"
                :cardTags="firstReceipe.recipeTags[0]"
                :cardDescription="firstReceipe.recipeDescription"
                />
            </div>
            <div class="other-cards grid grid-cols-2 gap-8">
                <AppCardImg
                class="text-center"
                v-for="receipe in otherReceipes" :key="receipe.recipeName"
                :cardImgImage="receipe.recipeCover"
                :cardImgTitle="receipe.recipeName"
                />
            </div>
        </div>

    </section>


</template>

<style scoped>


</style>
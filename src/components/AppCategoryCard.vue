<script>
import store from '../store';

export default {
    props: {
        categoryImg: {
            type: String,
            required: true,
        },
        categoryName: {
            type: String,
            required: true,
        },
        categoryLink: {
            type: String,
            required: true,
        }
    },
    data(){
        return {
            store,
        }
    }
}

</script>

<template>

    <div class="category-wrapper shadow-lg p-2">
        <div class="icon__wrapper flex justify-center items-center mb-3 hover:cursor-pointer hover:scale-110">
            <img :src="categoryImg" alt="">
        </div>
        <div class="category__name text-center uppercase py-4 hover:bg-orange hover:text-white hover:cursor-pointer">
            <a :href="categoryLink">{{ categoryName }}</a> 
        </div>
    </div>

</template>

<style scoped>


</style>
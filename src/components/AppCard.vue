<script>
import store from '../store';
import AppCardImg from './AppCardImg.vue';

export default {
    components: {
        AppCardImg,
    },
    props: {
        cardImage: {
            type: String,
            required: true,
        },
        cardTitle: {
            type: String,
            required: true,
        },
        cardAuthor: {
            type: String,
            required: true,
        },
        cardDate: {
            type: String,
            required: true,
        },
    },

    data(){
        return {
            store,
        }
    }
}

</script>

<template>

    <div class="card text-center pb-5">
        <AppCardImg 
        :cardImgImage="cardImage"
        :cardImgTitle="cardTitle"
        />

        <h3 class="card__title p-3 text-2xl font-serif hover:text-orange hover:cursor-pointer">
            {{ cardTitle }}
        </h3>
        <div class="card__info text-lightgrey text-sm px-3">
            <span class="card__author after:content-['|'] after:mx-1">{{ cardAuthor }}</span>
            <span class="card__date">{{ cardDate }}</span>
        </div>
    </div>

</template>

<style scoped>


</style>
<script>
import store from '../store';

export default {
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

    <div class="card text-center">
        <div class="img-wrapper group relative">
            <img :src="cardImage" alt="">
            <div class="img-overlay w-full h-full absolute top-0 left-0 hidden group-hover:flex group-hover:cursor-pointer flex-col justify-center items-center">

                <div class="icon-wrapper w-[40px] h-[40px] p-1 bg-white text-orange rounded-full flex justify-center items-center mx-auto">
                    <font-awesome-icon icon="fa-solid fa-link"/>
                </div>
                <div class="title__overlay p-3 text-2xl font-serif text-white">
                    {{ cardTitle }}
                </div>

            </div>
        </div>
        <h3 class="card__title p-3 text-2xl font-serif hover:text-orange hover:cursor-pointer">
            {{ cardTitle }}
        </h3>
        <div class="card__info text-lightgrey text-sm">
            <span class="card__author after:content-['|'] after:mx-1">{{ cardAuthor }}</span>
            <span class="card__date">{{ cardDate }}</span>
        </div>
    </div>

</template>

<style scoped>
.img-wrapper:hover .img-overlay {
    background: linear-gradient(
        to top,
        rgba(255,76,0, 0.9) 35%,
        rgba(255,76,0, 0.75) 75%,
        rgba(163,0,148, 0.1) 100%,

        transparent
    );
}

</style>
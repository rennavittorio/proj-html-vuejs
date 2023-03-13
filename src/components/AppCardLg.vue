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
        cardTags: {
            type: String,
            required: true,
        },
        cardDescription: {
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

    <div class="card">
        <AppCardImg 
        :cardImgImage="cardImage"
        :cardImgTitle="cardTitle"
        />

        <div class="card__text p-6">
            <h3 class="card__title text-2xl font-serif hover:text-orange hover:cursor-pointer">
                {{ cardTitle }}
            </h3>
            <p class="card__info text-lightgrey text-sm">
                {{ cardTags }}
            </p>
            <p class="card__description">
                {{ cardDescription }}
            </p>
            <div class="btn py-2 px-6 bg-orange hover:bg-dark-orange hover:cursor-pointer text-white w-fit">
                Learn more
            </div>

        </div>
    </div>


</template>

<style scoped>
.card__text > * {
    margin-bottom: 20px;
}

.card__info::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    border: 2px dashed #f5f5f1;
    margin-top: 20px;
}


</style>
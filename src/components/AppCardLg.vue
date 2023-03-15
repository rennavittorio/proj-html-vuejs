<script>
import store from '../store';
import AppCardImg from './AppCardImg.vue';
import AppBtn from './AppBtn.vue';

export default {
    components: {
        AppCardImg,
        AppBtn,
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
            type: Array,
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
            <h3 class="card__title text-2xl font-serif hover:text-orange hover:animate-smoothchange hover:cursor-pointer">
                {{ cardTitle }}
            </h3>
            <p class="card__info text-lightgrey text-sm">
                <span v-for="tag in cardTags" :key="tag" class="tag__info">
                    {{ tag }} 
                </span> 
            </p>
            <p class="card__description">
                {{ cardDescription }}
            </p>

            <AppBtn
            class="w-fit bg-orange"
            :btnText="'Learn more'"
            :btnLink="'#'" 
            />
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
    border: 2px dashed #9C9894;
    margin-top: 20px;
}

.tag__info:not(:last-child)::after {
    content: ', ';
}


</style>
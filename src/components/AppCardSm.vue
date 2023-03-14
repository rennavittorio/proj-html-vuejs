<script>
import store from '../store';

export default {
    props: {
        cardSmImg: {
            type: String,
            required: true,
        },
        cardSmText: {
            type: String,
            required: true,
        },
        cardSmDate: {
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
    <div class="card-sm flex items-center">
        <div class="img-wrapper shrink-0 mr-2 hover:cursor-pointer">
            <img :src="cardSmImg" alt="" class="w-[50px] h-[50px] rounded-full object-cover object-center">
        </div>
        <div class="text-wrapper">
            <h1 class="article__title hover:text-orange hover:cursor-pointer">
                {{ cardSmText }}
            </h1>
            <p class="article__date text-lightgrey">
                {{ cardSmDate }}
            </p>
        </div>
    </div>
</template>

<style scoped>


</style>
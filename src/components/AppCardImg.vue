<script>
import store from '../store';

export default {
    props: {
        cardImgImage: {
            type: String,
            required: true,
        },
        cardImgTitle: {
            type: String,
            required: true,
        },
        needCover: {
            type: Boolean,
            required: false,
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

    <div class="img-wrapper group relative">
        <img :src="cardImgImage" alt="" :class="[ needCover===true ? 'object-cover' : '', 'object-center', 'w-[100%]', 'h-[100%]']">
        <div class="img-overlay w-full h-full absolute top-0 left-0 hidden group-hover:flex group-hover:cursor-pointer flex-col justify-center items-center">

            <div class="icon-wrapper w-[40px] h-[40px] p-1 bg-white text-orange rounded-full flex justify-center items-center mx-auto">
                <font-awesome-icon icon="fa-solid fa-link"/>
            </div>
            <div class="title__overlay p-3 text-xl font-serif text-white">
                {{ cardImgTitle }}
            </div>

        </div>
    </div>

</template>

<style scoped>
.img-wrapper:hover .img-overlay {
    background: linear-gradient(
        to top,
        rgba(255,76,0, 0.9) 35%,
        rgba(255,76,0, 0.75) 75%,
        rgba(255,76,0, 0.5) 100%
    );

    filter: opacity(1);

    animation: smoothappear 350ms ease-out;

}


@keyframes smoothappear {
    0%{
        filter: opacity(0);
    }
    100%{
        filter: opacity(1);
    }
}

</style>
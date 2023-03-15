<script>
import store from '../store';
import AppSocialBar from '../components/AppSocialBar.vue';

export default {
    components: {
        AppSocialBar,
    },
    data(){
        return {
            store,
        }
    }
}

</script>

<template>

    <footer class="footer">

        <section class="footer-main">

            <div class="container">
                <div class="grid grid-cols-4 py-10">
                    <div class="footer__brands border-r-2 border-r-bg-grey">
                        <div class="img-wrapper mb-8">
                            <img src="/images/avada-food-logo-mob-2x-200x87.png" alt="">
                        </div>
                        <AppSocialBar />
                    </div>

                    <div class="footer__menu px-5 border-r-2 border-r-bg-grey">
                        <ul class="list__menu flex flex-col justify-around h-[100%]" >
                            <li 
                            v-for="link in store.navLinks" :key="link.linkName" 
                            class="list__item hover:text-orange hover:animate-smoothchange hover:cursor-pointer relative">
                               <a href="#">{{ link.linkName }}</a> 
                            </li>
                        </ul>
                    </div>

                    <div class="footer__contacts px-5 border-r-2 border-r-bg-grey">
                        <h1 class="footer__title text-orange uppercase font-semibold">
                            Contact
                        </h1>
                        <ul class="list__menu my-3">
                            <li class="list__item mb-4">
                                <div class="item-wrapper flex gap-3 mb-2 text-s">
                                    <div class="icon-wrapper">
                                        <font-awesome-icon icon="fa-solid fa-location-dot" class="text-orange" />
                                    </div>
                                    <div class="item__text">
                                        775 New York Ave, Brooklyn, Kings, New York 11203
                                    </div>

                                </div>
                            </li>

                            <li class="list__item mb-4">
                                <div class="item-wrapper flex gap-3 mb-2 text-s">
                                    <div class="icon-wrapper">
                                        <font-awesome-icon icon="fa-solid fa-phone-flip" class="text-orange" />
                                    </div>
                                    <div class="item__text">
                                        + 0100-505-0000
                                    </div>

                                </div>
                            </li>

                            <li class="list__item mb-4">
                                <div class="item-wrapper flex gap-3 mb-2 text-s">
                                    <div class="icon-wrapper">
                                        <font-awesome-icon icon="fa-solid fa-envelope" class="text-orange" />
                                    </div>
                                    <div class="item__text">
                                        info@your-domain.com
                                    </div>

                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="footer__apps px-5 ">
                        <h1 class="footer__title text-orange uppercase font-semibold mb-2">
                            Get our app
                        </h1>

                        <div class="img-wrapper mb-2">
                            <a href="#">
                                <img src="/images/download-android.png" alt="">
                            </a> 
                        </div>

                        <div class="img-wrapper mb-2">
                            <a href="#">
                                <img src="/images/download-app-store.png" alt="">
                            </a> 
                        </div>
                    </div>

                </div>
            </div>

        </section>

        <section class="copyright bg-lightgrey text-center text-xs py-10">

            <div class="container">
                <p class="copyright-text">
                    © Copyright 2012 - 2019 • Avada Food by Theme Fusion • All Rights Reserved • Powered by WordPress
                </p>

            </div>

        </section>

    </footer>

</template>

<style scoped>
.footer__menu .list__item:hover::after {
    content: '';
    display: block;
    width: 1px;
    height: 100%;
    background-color: #FF4D00;

    position: absolute;
    top: 0;
    right: 0;

    animation: 250ms ease-in-out appear ;
}

@keyframes appear {
    0% {
        right: 50%;
        background-color: transparent;
    }
    100% {
        right: 0;
        background-color: #FF4D00;
    }
}


.footer__contacts .list__item::after {
    content: '';
    display: block;
    width: 100%;
    padding: 1px;
    background-color: #f5f5f1;
}

</style>
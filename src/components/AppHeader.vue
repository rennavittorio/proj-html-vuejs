<script>
import store from '../store';
import AppSocialBar from './AppSocialBar.vue';
import AppNavbar from './AppNavbar.vue';

export default {
    components: {
        AppSocialBar,
        AppNavbar,
    },

    data(){
        return {
            store,
        }
    }
}

</script>

<template>

    <header class="header bg-bg-grey">

        <div class="container">

            <div class="upper-bar flex justify-between items-start py-5">
                
                <div class="dowload-action flex items-center gap-x-6">
                    <p class="download__app hover:text-orange hover:cursor-pointer">
                        Download App 
                        <span class="bg-orange text-white rounded p-1">
                            iOS
                        </span>
                    </p>
                    <p class="advertise hover:text-orange hover:cursor-pointer">
                        Advertise with us
                    </p>
                </div>

                <AppSocialBar />

            </div>

            <div class="logo-wrapper -mt-16">
                <img src="/images/avada-food-logo-2x.png" alt="logo" class="w-36 mx-auto my-2">
            </div>

            <AppNavbar />

        </div>

    </header>

</template>

<style scoped>


</style>
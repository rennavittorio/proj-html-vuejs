<script>
import store from '../store';

export default {
    data(){
        return {
            store,
            socials: [
                {
                    socialName: 'Facebook',
                    iconName: 'fa-facebook-f',
                    externalLink: '',
                },
                {
                    socialName: 'Instagram',
                    iconName: 'fa-instagram',
                    externalLink: '',
                },
                {
                    socialName: 'Twitter',
                    iconName: 'fa-twitter',
                    externalLink: '',
                },
                {
                    socialName: 'Youtube',
                    iconName: 'fa-youtube',
                    externalLink: '',
                },
                {
                    socialName: 'TikTok',
                    iconName: 'fa-tiktok',
                    externalLink: '',
                },
                {
                    socialName: 'Pinterest',
                    iconName: 'fa-pinterest-p',
                    externalLink: '',
                },
            ]
        }
    }
}

</script>

<template>
  <div class="social-action flex gap-x-1 -mx-2">
    <div v-for="social in socials" :key="social.socialName" 
    class="social-icon text-lightgrey p-2 hover:text-grey hover:bg-white rounded-md hover:cursor-pointer relative group">
        <font-awesome-icon :icon="['fa-brands', social.iconName]" />
        <div class="social__text hidden group-hover:flex flex-col justify-center items-center absolute bottom-[-75%] right-[50%] translate-x-[50%]">
            <div class="icon-wrap">
                <font-awesome-icon icon="fa-solid fa-caret-up" class="text-grey"/>
            </div>
            <div class="text-wrap bg-grey text-white rounded-sm text-sm px-1 mt-[-10px]">
                {{ social.socialName }}
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>


</style>
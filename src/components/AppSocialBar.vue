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
    class="social-icon text-lightgrey p-2 hover:text-orange hover:cursor-pointer">
        <font-awesome-icon :icon="['fa-brands', social.iconName]" />
    </div>
  </div>
</template>

<style scoped>


</style>
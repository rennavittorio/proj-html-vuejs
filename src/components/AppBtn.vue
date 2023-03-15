<script>
import store from '../store';

export default {
    props:{
        btnText: {
            type: String,
            required: true,
        },
        btnLink: {
            type: String,
            required: true,
        },
        btnIcon: {
            type: String,
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

    <div class="btn py-2 px-6 hover:bg-dark-orange hover:cursor-pointer text-white">
        <a :href="btnLink">{{ btnText }}</a>
        <span v-if="btnIcon" class="ml-2">
            <font-awesome-icon :icon="['fa-solid', btnIcon]" />
        </span>
    </div>

</template>

<style scoped>


</style>
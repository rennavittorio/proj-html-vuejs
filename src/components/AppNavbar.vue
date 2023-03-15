<script>
import store from '../store';

export default {
    data(){
        return {
            store,
            activeSearch: false,
        }
    },

    methods: {
        toggleActiveSearch(){
            if (this.activeSearch === false){
                this.activeSearch = true;
                console.log('now is true');
            } else {
                this.activeSearch = false;
                console.log('now is false');
            }
        },
    }
}

</script>

<template>
    <div class="menu-wrapper h-[75px]">
        <ul 
        :class="['nav-bar', 'justify-center', 'gap-5','py-2', activeSearch === false ? 'flex' : 'hidden']">
    
            <li v-for="(link, i) in store.navLinks" :key="link.linkName"
            :class="['nav__item', 'px-3', 'py-5','hover:text-orange', 'hover:animate-smoothchange', i === 0 ? 'active' : '']">
                <a :href="link.externalLink">
                    {{ link.linkName }}
                </a>
            </li>
            <li 
            @click="toggleActiveSearch()" 
            class="nav__item px-3 py-5 hover:text-orange hover:cursor-pointer">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </li>
    
        </ul>
    
        <div
        :class="['searchbar', 'justify-center', 'items-center','py-2', activeSearch === false ? 'hidden' : 'flex']">
            <label class="relative block">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <div class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="text-lightgrey"/>
                </div>
            </span>
                <input class="w-[550px] block bg-white border border-lightgrey border-slate-300 rounded py-5 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm" placeholder="Search..." type="text" name="search"/>
            </label>
            <div 
            @click="toggleActiveSearch()"
            class="btn-close p-3 font-bold hover:cursor-pointer">
                X
            </div>
    
        </div>

    </div>


</template>

<style scoped>
.nav__item {
    position: relative;
}

.nav__item.active {
    color: #fc7523;
}

.nav__item.active::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: #fc7523;
    position: absolute;
    bottom: 0;
    left: 0;
}

.nav__item:hover a::after{
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: #fc7523;
    position: absolute;
    bottom: 0;
    left: 0;

    animation: 350ms ease-in-out slidein ;
}

@keyframes slidein {
    0% {
        width: 0%;
    }
    100% {
        width: 100%;
    }
}

</style>
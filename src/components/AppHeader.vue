<script>
import store from '../store';

export default {
    data(){
        return {
            store,
        }
    }
}

</script>

<template>

    <header class="header">

        <div class="container">

            <div class="upper-bar flex justify-between items-center">
                
                <div class="dowload-action flex items-center gap-x-1">
                    <p class="download__app">
                        Download App 
                        <span class="bg-orange text-white rounded p-1">
                            iOS
                        </span>
                    </p>
                    <p class="advertise">
                        Advertise with us
                    </p>
                </div>

                <div class="social-action">
                    <font-awesome-icon icon="fa-solid fa-user-secret" />
                </div>

            </div>

            <div class="nav-bar">
                nav.bar
            </div>

        </div>

    </header>

</template>

<style scoped>
.container {
    border: 2px dashed orange;
}

</style>
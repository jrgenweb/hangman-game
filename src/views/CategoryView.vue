<script setup>
import { onMounted, ref } from 'vue';
import * as fn from '../functions/functions';



const categories = ref([]);

onMounted(() => {
    categories.value = fn.getCategories();
});

</script>
<template>
    <div class="wrapper">
        <div class="container">
            <nav>
                <button class="btn-circle" @click="$router.push('/')">
                    <img src="../assets/images/icon-back.svg" alt="">
                </button>

                <h1>Category</h1>
            </nav>

            <div class="categories">

                <button class="btn-category" @click="$router.push('/game/' + category)" v-bind:key="category"
                    v-for="category in categories">{{ category }}</button>
                <!-- 
                <button class="btn-category" @click="$router.push('/game')">Movies</button>
                <button class="btn-category">TV Shows</button>
                <button class="btn-category">Countries</button>
                <button class="btn-category">Capital cities</button>
                <button class="btn-category">Animals</button>
                <button class="btn-category">Sports</button> -->
            </div>
        </div>
    </div>

</template>
<style scoped>
nav {
    margin-bottom: 5rem;
}

.categories {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    & button {
        width: 100%;
    }
}

@media (min-width:37.5rem) {
    .categories {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}

@media (min-width:69.375rem) {
    .categories {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
}
</style>
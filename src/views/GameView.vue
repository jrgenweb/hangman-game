<script setup>
import router from '@/router';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import * as fn from '../functions/functions'


import { useWordStore } from '@/stores/words';

const route = useRoute();

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const word = ref("ALMAFAVIRÁGA");
const wordReveal = ref([]);
const disabledKeyBoard = ref([]);

const pushedLetter = ref('');

const maxAttempt = 3; //10 attempt allowed
let attempt = 0;


const modal = ref({
    visible: false,
    title: 'Paused'//display: Paused | You Win | You Lose
});




onMounted(() => {

    fn.init();
    word.value = fn.getWord(route.params.category);


    console.log(useWordStore.data)

    //get a random word

})

function find(letter) {


    //ha tartalmazza az adott betűt

    let hit = false;
    for (let i = 0; i < word.value.length; i++) {
        if (letter.toLowerCase() === word.value[i].toLowerCase()) {
            wordReveal.value[i] = true;
            hit = true;
        }
    }

    for (let i = 0; i < letters.length; i++) {
        if (letters[i].toLowerCase() === letter.toLowerCase()) {
            disabledKeyBoard.value[i] = true;
        }
    }

    //ha nem volt találat akkor növeljük az életet
    if (!hit) {
        attempt++;
    }

    checkAttempt()



    console.log(disabledKeyBoard.value);



    console.log(letter, word.value)
}


function checkAttempt() {
    console.log(word.value.length, ' és ez', checkWordRevealLength());
    console.log(wordReveal.value);


    //game over
    if (attempt === maxAttempt) {
        modal.value.title = "Game Over"
        modal.value.visible = true;
        console.log('vége')
    }


    if (word.value.length === checkWordRevealLength()) {
        modal.value.title = "You Win"
        modal.value.visible = true;
        console.log('nyertél')
    }
}

function checkWordRevealLength() {

    let count = 0;

    wordReveal.value.forEach(item => {
        count++;
    })


    return count;
    /*  const word = ref("ALMAFAVIRÁGA");
     const wordReveal = ref([]); */
    /* 
        for (let i = 0; i < word.value.length; i++) {
            for (wordReveal)
        }
        word.value */
}



</script>
<template>
    <div class="wrapper">
        <div class="container">
            <nav>
                <button class="btn-circle" @click="modal.visible = !modal.visible">
                    <img src="../assets/images/icon-menu.svg" alt="menu icon">
                </button>
                <h2>{{ route.params.category }}</h2>
                <div class="health-bar">
                    <div class="health-bar-outer">
                        <div class="health-bar-inner"></div>
                    </div>
                    <img src="../assets/images/icon-heart.svg" alt="hearth icon">
                </div>

            </nav>

            <div class="word-wrapper">
                <button v-bind:key="index" v-for="letter, index in word" class="letter" :disabled="!wordReveal[index]">
                    <span> {{ letter }}</span></button>
            </div>
            <div class="keyboard">
                <button v-bind:key="index" v-for="letter, index in letters" class="keyboard-letter"
                    :disabled="disabledKeyBoard[index]" @click="find(letter)">{{ letter
                    }}</button>
            </div>

            <div class="modal" v-if="modal.visible">
                <div class="header">
                    <h1> {{ modal.title }}</h1>
                </div>

                <button class="btn-primary" @click="modal.visible = false" v-if="attempt < maxAttempt">Continue</button>
                <button class="btn-primary" @click="$router.push('/category')" v-else>Play Again</button>
                <button class="btn-primary" @click="$router.push('/category')">New Category</button>
                <button class="btn-secondary" @click="$router.push('/')">Quit Game</button>


            </div>
            <div class="drop" v-if="modal.visible"></div>
        </div>
    </div>
</template>
<style scoped>
.drop {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(#1A043A 0%, #151278 70%, #2B1677 100%);

    top: 0;
    left: 0;
    opacity: 0.75;

}

.modal {
    position: absolute;




    z-index: 10;
}



h2 {
    color: var(--clr-white);
    font-size: 40px;
}

.word-wrapper {
    margin-top: 5rem;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    column-gap: 12px;
    row-gap: 18px;
}

.keyboard {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    column-gap: 0.5rem;
    row-gap: 1.5rem;
}

@media (min-width:48rem) {
    .keyboard {
        column-gap: 1rem;
    }
}



.health-bar {
    display: flex;
    gap: 1rem;
    align-items: center;

    & .health-bar-outer {
        background-color: var(--clr-white);
        border-radius: 96px;
        width: 57px;
        height: 20px;
        padding: 4px;

        & .health-bar-inner {
            background-color: var(--clr-primary);
            width: 31%;
            height: 100%;
            border-radius: 96px;
        }
    }

    & img {
        width: 26px;
    }
}


@media (min-width: 48rem) {
    h2 {
        font-size: 3rem;
    }

    .health-bar {
        & .health-bar-outer {
            width: 160px;
        }

        & img {
            width: 53px;
        }
    }

}

@media (min-width: 69.375rem) {
    h2 {
        font-size: 88px;
    }

    .health-bar {
        & .health-bar-outer {
            width: 240px;
        }

    }

}
</style>
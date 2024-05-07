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

const maxTrying = ref(10);
const trying = ref(0);


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

    for (let i = 0; i < word.value.length; i++) {
        if (letter.toLowerCase() === word.value[i].toLowerCase()) {
            wordReveal.value[i] = true;
        }
    }


    for (let i = 0; i < letters.length; i++) {
        if (letters[i].toLowerCase() === letter.toLowerCase()) {
            disabledKeyBoard.value[i] = true;
        }
    }

    console.log(disabledKeyBoard.value);


    pushedLetter.value = letter;
    console.log(letter, word.value)
}

function isDisabled(letter) {
    console.log(pushedLetter)

    for (let item in pushedLetter.value) {
        if (letter === item)
            return true
    }

    return false
    //
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
                    <h1> Paused</h1>
                </div>
                <button class="btn-primary" @click="modal.visible = false">Continue</button>
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
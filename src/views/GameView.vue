<script setup>
import router from '@/router';
import { ref } from 'vue';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const word = "ALMAFAVIRÁGA";



const modalVisible = ref(false);
const modalTitle = ref('');//display: Paused | You Win | You Lose


</script>
<template>
    <div class="wrapper">
        <div class="container">
            <nav>
                <button class="btn-circle" @click="modalVisible = !modalVisible">
                    <img src="../assets/images/icon-menu.svg" alt="menu icon">
                </button>
                <h2>Counteries</h2>
                <div class="health-bar">
                    <div class="health-bar-outer">
                        <div class="health-bar-inner"></div>
                    </div>
                    <img src="../assets/images/icon-heart.svg" alt="hearth icon">
                </div>

            </nav>

            <div class="word-wrapper">
                <button v-bind:key="index" v-for="letter, index in word" class="letter">
                    <span>
                        {{ letter
                        }}</span></button>
            </div>
            <div class="keyboard">
                <button v-bind:key="index" v-for="letter, index in letters" class="keyboard-letter ">{{ letter
                    }}</button>
            </div>

            <div class="modal" v-if="modalVisible">
                <div class="header">
                    <h1> Paused</h1>
                </div>
                <button class="btn-primary" @click="modalVisible = false">Continue</button>
                <button class="btn-primary" @click="$router.push('/category')">New Category</button>
                <button class="btn-secondary" @click="$router.push('/')">Quit Game</button>


            </div>
            <div class="drop" v-if="modalVisible"></div>
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
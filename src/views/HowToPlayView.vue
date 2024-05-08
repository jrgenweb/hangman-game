<script setup>

</script>
<template>
    <div class="wrapper">
        <div class="container">
            <nav>
                <button class="btn-circle" @click="$router.push('/')">
                    <img src="../assets/images/icon-back.svg" alt="">
                </button>

                <h1>How to Play</h1>
            </nav>


            <div class="flex">
                <div class="description">

                    <h2>01</h2>
                    <h3>Choose a category</h3>
                    <p>
                        First, choose a word category, like animals or movies.
                        The computer then randomly selects a secret word from that
                        topic and shows you blanks for each letter of the word.

                    </p>

                </div>
                <div class="description">

                    <h2>02</h2>
                    <h3>Guess letters</h3>
                    <p>
                        Take turns guessing letters. The computer fills in the
                        relevant blank spaces if your guess is correct. If it's
                        wrong, you lose some health, which empties after eight
                        incorrect guesses.

                    </p>

                </div>
                <div class="description">


                    <h2>03</h2>
                    <h3> Win or lose</h3>
                    <p>

                        You win by guessing all the letters in the word before your
                        health runs out. If the health bar empties before you guess
                        the word, you lose.
                    </p>

                </div>

            </div>
        </div>
    </div>
</template>
<style scoped>
.flex {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;


}

.description {
    background-color: var(--clr-white);
    border-radius: 40px;
    padding: 32px;



    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1.5rem;


}

h2 {
    font-size: var(--fs-800);
    color: var(--clr-secondary);
    text-transform: uppercase;

}

h3 {
    font-size: 1.5rem;
    text-transform: uppercase;
    color: var(--clr-primary);
}

p {
    grid-row: 2 / 3;
    grid-column: 1/3;
    color: #887DC0;
    font-size: var(--fs-400);
    line-height: 120%;
    letter-spacing: 1px;
}


@media (min-width:37.5rem) {
    .description {
        padding: 40px;


    }

    h2 {
        grid-row: 1/3;
        grid-column: 1/2;
    }

    h3 {
        grid-row: 1/2;
        grid-column: 2/3;
        font-size: 40px;
    }

    p {
        grid-row: 2/3;
        grid-column: 2/3;
    }




}

@media (min-width:48rem) {
    .description {
        padding: 48px;

    }


}

@media (min-width:69.375rem) {
    .flex {
        flex-direction: row;
        text-align: center;
    }

    .description {
        padding: 48px;
    }

    h3 {
        font-size: 3rem;
    }

    h2 {
        grid-row: 1/2;
        grid-column: 1/3;
    }

    h3 {
        grid-row: 2/3;
        grid-column: 1/3;
        font-size: 40px;
    }

    p {
        grid-row: 3/4;
        grid-column: 1/3;
    }
}
</style>

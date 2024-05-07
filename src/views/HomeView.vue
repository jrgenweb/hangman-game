<script setup>

</script>

<template>

  <div class="modal">

    <div class="header">
      <img src="../assets/images/logo.svg" alt="game logo">
    </div>
    <button class="btn-play" @click="$router.push('/category')">
      <img src="../assets/images/icon-play.svg" alt="play button logo">
    </button>
    <button class="btn-primary" @click="$router.push('/howtoplay')">How To Play</button>
  </div>

</template>

<style scoped>
.btn-primary {
  margin-top: 3rem;
}
</style>

<script setup></script>

<template>
  <div id="app">
    <app-header></app-header>
    <router-view />
    <app-footer></app-footer>
  </div>
</template>

<script>

import headerComp from './components/header.vue';
import footerComp from './components/footer.vue';

export default {
  name: 'App',
  components: {
    'app-header': headerComp,
    'app-footer': footerComp
  }
}
</script>

<style scoped>
#app {
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  max-width: 100%;
  padding: 0;
}

</style>

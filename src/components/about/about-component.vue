<template>
  <div class="about-container">
    <div class="row">
      <about-card
        name="Thiago Ribeiro Goveia"
        nUsp="nUsp: 10835942"
        img="src/assets/jigglypuff.png"
      />
    </div>
    <div class="row">
      <about-card
        name="Paulo Roberto Domingues dos Santos"
        nUsp="nUsp: 11838721"
        img="src/assets/metagross.png"
      />
    </div>
    <div class="row">
      <about-card
        name="Matheus Odebrecht Oliveira"
        nUsp="nUsp: 11832670"
        img="src/assets/pikachu.jpg"
      />
    </div>
  </div>
</template>
<script>
import aboutCard from "./about-card.vue";
export default {
  components: {
    aboutCard,
  },
};
</script>
<style>
.about-container {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.row {
  margin-top: 20px;
}
</style>

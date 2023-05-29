<template>
  <header>
    <div class="logo">
      <img src="src/assets/icmc_logo.png" alt="Logo" />
    </div>
    <div class="header-text">
      <h1>Trabalho de Web Dev</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: "header",
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  background-color: #4992db;
  max-height: 100px;
}

.logo img {
  height: 70px;
}

.header-text {
  font-size: larger;
  align-self: center;
}

@media screen and (min-width: 1022px) {
  header.app-header {
    width: 100%;
  }
}
</style>

<template>
  <header>
    <div class="logo">
      <img src="src/assets/icmc_logo.png" alt="Logo" />
    </div>
    <div class="header-text">
      <h1>Trabalho de Web Dev</h1>
    </div>
    <div class="menu">
      <img src="src/assets/menu.png" alt="menu">
    </div>
  </header>
</template>

<script>
export default {
  name: "headerComp",
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.menu{
  display: none;
}

@media only screen and (max-width: 1020px) {
  .header-text{
    display: none;
  }
  .menu{
    display: block;
    width: 40px;
    padding: 5px;
    margin: 5px;
  }
}
</style>

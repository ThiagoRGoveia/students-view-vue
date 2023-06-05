<template>
  <header>
    <div class="logo">
      <img src="src/assets/icmc_logo.png" alt="Logo" />
    </div>
    <div class="header-text">
      <b-dropdown aria-role="list">
        <template #trigger="{ active }">
          <b-button
            label="Menu"
            type="is-dark"
            :icon-right="active ? 'menu-up' : 'menu-down'"
          />
        </template>

        <b-dropdown-item
          aria-role="listitem"
          @click="$router.push({ name: 'home' })"
          >Dissertações</b-dropdown-item
        >
        <b-dropdown-item
          aria-role="listitem"
          @click="$router.push({ name: 'about' })"
          >Alunos</b-dropdown-item
        >
      </b-dropdown>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-text h1 {
  margin-right: 20px;
  margin-bottom: 5px;
}
.menu {
  display: block;
  width: 40px;
  padding: 5px;
  margin: 5px;
  cursor: pointer;
}
</style>

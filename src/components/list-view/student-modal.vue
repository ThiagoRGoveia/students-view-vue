<template>
  <div class="card student-modal">
    <header class="card-header">
      <h1 class="card-header-title">Detalhes do Estudante</h1>
    </header>
    <div class="card-content">
      <div class="content px-3 py-5">
        <div class="columns">
          <b-field class="column" label="Curso">
            <p class="control">{{ data.Curso }}</p>
          </b-field>
          <b-field class="column" label="Programa">
            <p class="control">{{ data.Programa }}</p>
          </b-field>
        </div>
        <div class="columns">
          <b-field class="column" label="Ordem">
            <p class="control">{{ data.Ordem }}</p>
          </b-field>
          <b-field class="column" label="Nome">
            <p class="control">{{ data.Nome }}</p>
          </b-field>
        </div>
        <div class="columns">
          <b-field class="column" label="Data">
            <p class="control">{{ data.Data }}</p>
          </b-field>
        </div>
      </div>
    </div>
    <div class="card-footer btn-container">
      <b-button
        icon-left="close"
        type="is-danger"
        size="is-small"
        @click="() => $emit('close')"
      >
        Fechar
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>
<style scoped>
.student-modal {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.btn-container {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
}
</style>

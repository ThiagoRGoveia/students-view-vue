<template>
  <div>
    <b-field grouped label="Buscar por:">
      <b-input
        v-model="internalValue"
        type="search"
        icon="magnify"
        placeholder="Buscar"
      ></b-input>
      <b-radio
        @change="updateFilter"
        name="filter"
        native-value="Curso"
        v-model="internalFilter"
      >
        Curso
      </b-radio>

      <b-radio
        @change="updateFilter"
        name="filter"
        v-model="internalFilter"
        native-value="Programa"
      >
        Programa
      </b-radio>
    </b-field>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    filter: {
      type: String,
      required: true,
    },
  },
  computed: {
    internalValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("update:value", newValue);
      },
    },
    internalFilter: {
      get() {
        return this.filter;
      },
      set(newValue) {
        this.$emit("update:filter", newValue);
      },
    },
  },
  methods: {
    updateFilter(value) {
      this.internalFilter = value;
    },
  },
};
</script>

<template>
  <div class="table">
    <thesis-table />
  </div>
</template>

<script>
import ThesisTable from "@/components/list-view/thesis-table.vue";
export default {
  components: {
    ThesisTable,
  },
};
</script>

<style>
.table {
  max-width: 1000px;
  margin: auto;
}
</style>
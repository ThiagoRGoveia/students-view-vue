<template>
  <section>
    <b-modal v-model="isModalActive">
      <student-modal :data="selectedStudent" @close="handleModalClose" />
    </b-modal>
    <students-filter :value.sync="searchValue" :filter.sync="searchFilter" />
    <b-table
      :data="filteredStudents"
      bordered
      striped
      narrowed
      hoverable
      paginated
      :per-page="15"
      :loading="isLoading"
    >
      <b-table-column
        v-for="header in headers"
        :key="header.value"
        :label="header.text"
        sortable
        v-slot="props"
      >
        {{ props.row[header.value] }}
      </b-table-column>

      <b-table-column label="Ver" v-slot="props">
        <b-button
          icon-left="eye"
          type="is-primary"
          size="is-small"
          @click="() => handleSelect(props.row)"
        >
        </b-button>
      </b-table-column>
    </b-table>
  </section>
</template>

<script>
import StudentsFilter from "./students-filter.vue";
import StudentModal from "./student-modal.vue";
export default {
  data() {
    return {
      students: [],
      headers: [],
      searchValue: "",
      searchFilter: "Curso",
      isLoading: false,
      isModalActive: false,
      selectedStudent: null,
    };
  },

  components: {
    StudentsFilter,
    StudentModal,
  },

  methods: {
    async getStudents() {
      try {
        this.isLoading = true;
        const { data, headers } = await this.$thanosClient.getStudents();
        this.students = data;
        this.headers = headers;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },

    handleSelect(selected) {
      this.selectedStudent = selected;
      this.isModalActive = true;
    },

    handleModalClose() {
      this.isModalActive = false;
    },
  },

  computed: {
    filteredStudents() {
      if (!this.searchValue) return this.students;
      else {
        return this.students.filter((student) => {
          return student[this.searchFilter].includes(this.searchValue);
        });
      }
    },
  },

  created() {
    this.getStudents();
  },
};
</script>

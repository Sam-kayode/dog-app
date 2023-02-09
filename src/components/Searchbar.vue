<template>
  <v-row class="search">
    <v-col cols="12" sm="5" class="autocomplete">
      <v-autocomplete
        placeholder="Search for Dog breed"
        prepend-inner-icon="mdi-magnify"
        auto-select-first
        clearable
        variant="solo"
        density="compact"
      ></v-autocomplete
    ></v-col>
    <div class="filter-cont">
      <v-combobox
        variant="solo"
        placeholder="count"
        :items="['poo', 'lop']"
        density="compact"
        class="filter"
      ></v-combobox></div
  ></v-row>
</template>

<script>
export default {};
</script>

<style lang="scss">
.search {
  margin-top: 30px;
  padding: 0 10px;
  display: flex !important;
  align-items: center;
  justify-content: flex-end;

  .autocomplete {
    @include mobile {
      padding: 0;
    }
  }
}

.filter-cont {
  width: 105px !important;
  padding: 0 !important;
}

.v-progress-linear__determinate,
.v-progress-linear__indeterminate {
  background: #806565 !important;
}
</style>
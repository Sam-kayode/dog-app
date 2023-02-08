<template>
  <v-row class="search">
    <v-col cols="12" sm="5" class="ml-auto">
      <v-autocomplete
        placeholder="Search for Dog breed"
        prepend-inner-icon="mdi-magnify"
        auto-select-first
        clearable
        variant="solo"
        density="compact"
        loading
      ></v-autocomplete
    ></v-col>
    <div>
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

<style>
.search {
  margin-top: 30px;
  display: flex;
  align-items: center;
}

.filter{
    width:105px;
}

.v-progress-linear__determinate,
.v-progress-linear__indeterminate {
  background: #806565 !important;
}
</style>
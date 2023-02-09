<template>
  <v-row class="search" v-if="!$store.state.load">
    <v-col cols="12" sm="5" class="autocomplete">
      <v-autocomplete
        placeholder="Search for Dog breed"
        prepend-inner-icon="mdi-magnify"
        auto-select-first
        clearable
        variant="solo"
        density="compact"
        :items="$store.getters.allBreeds"
        v-model="breed"
        :loading="loading"
      ></v-autocomplete
    ></v-col>
  </v-row>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return { breed: "", loading: false };
  },
  watch: {
    breed() {
      if (this.breed) {
        this.imagesByBreed();
      } else {
        this.$store.commit("REPLACE_IMAGES", []);
      }
    },
  },
  computed: {},
  methods: {
    async imagesByBreed() {
      this.loading = true;
      try {
        const res = await axios.get(`/breed/${this.breed}/images`);
        const data = res.data.message;
        this.$store.commit("REPLACE_IMAGES", data);
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
    },
    getRandomImages() {
      this.$store.dispatch("getRandomImages", 50);
    },
  },
};
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
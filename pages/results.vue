<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      container
    >
      <v-card class="w-100">
        <v-card-title class="headline">
          Search Results
          <v-spacer />
          <v-btn to="/" outlined color="success">
            Search Again
          </v-btn>
        </v-card-title>
        <v-card-text class="">
          <v-row class="row movies-area">
            <v-col cols="12" class="row align-start">
              <div v-if="searchError" class="alert alert-danger col" role="alert">
                {{ searchError }}
              </div>
              <movie
                v-for="(movie, index) in searchResults"
                :key="index"
                class="ma-2"
                :movie="movie"
              />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'

import Movie from '@/components/Movie.vue'

export default {
  name: 'SearchResults',

  components: {
    Movie
  },

  computed: {
    ...mapGetters(['searchResults', 'searchError'])
  }
}
</script>

<style>
.movies-area {
  justify-content: space-around;
  align-items: flex-start;
}
</style>

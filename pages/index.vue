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
        <v-card-title class="headline d-flex align-baseline">
          <v-text-field
            v-model="searchTerm"
            class="ma-2"
            dense
            label="Search"
            outlined
            placeholder="Enter a movie title."
          />
          <v-btn
            class="ma-2"
            tile
            outlined
            color="success"
            @click="getResults"
          >
            <v-icon left>
              mdi-magnify
            </v-icon> Search
          </v-btn>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Home',

  data: () => ({
    searchTerm: '',
    watchLater: []
  }),

  methods: {
    ...mapActions(['search']),

    async getResults () {
      await this.search(this.searchTerm)
      this.$router.push('/results')
    }
  }
}
</script>

<style>
.movies-area {
  justify-content: space-around;
  align-items: flex-start;
}
</style>

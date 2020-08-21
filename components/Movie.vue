<template>
  <v-card>
    <v-card-title class="headline">
      {{ movie.Title }}
    </v-card-title>

    <v-card-text>
      <img v-if="movie.Poster !== 'N/A'" class="card-img-top" :src="movie.Poster" :alt="movie.Title">
      <p class="card-text">
        {{ movie.Year }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
}
</script>

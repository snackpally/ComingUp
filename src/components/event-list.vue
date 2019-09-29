<template>
  <div v-if="getArtists != undefined" md="6">
    <div v-for="artist in getArtists" v-bind:key="artist.id">
      <b-card
        :img-src="artist.images.filter(x => x.height === 56)[0].url"
        img-alt="Card image"
        img-left
        class="mb-3"
      >
        <b-card-text>{{ artist.name }}</b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getArtists() {
      return this.$store.getters.artists;
    }
  }
};
</script>
<template>
  <div v-if="getArtists != undefined" md="6">
    <div v-for="artist in getArtists" v-bind:key="artist.id">
      <b-card
        :img-src="artist.images.filter(x => x.height === 56)[0].url"
        img-alt="Card image"
        img-left
        class="mb-3 shadow-sm"
      >
        <b-card-text>{{ artist.name }} coming to the {{ artist._embedded.venues[0].name }} on {{ artist.dates.start.dateTime.split("T")[0].slice(5)}}</b-card-text>
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


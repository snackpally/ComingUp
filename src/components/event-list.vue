<template>
  <b-container class="mt-5">
    <b-card class="mt-3 mb-2 shadow" header="Search Result:">
      <div v-if="getArtists != undefined" md="6" style="max-height: 400px; overflow-y: scroll;">
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
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: "Events",
  mounted() {
    //method to get token from server will be here
    this.initiatePlayer();
  },
  computed: {
    getArtists() {
      return this.$store.getters.artists;
    }
  },
  methods: {
    waitForSpotifyWebPlaybackSDKToLoad: async function() {
      return new Promise(resolve => {
        if (window.Spotify) {
          resolve(window.Spotify);
        } else {
          window.onSpotifyWebPlaybackSDKReady = () => {
            resolve(window.Spotify);
          };
        }
      });
    },
    initiatePlayer: async function() {
      const token =
        "BQCwORmFSS-QA4mQ2Scg27qt-Frn9MpTrxOmym8bBZGu-NR6ilP28yUiAHIPAcDkoTgJZNxaaJDbY_Y_15Cd8CEQqMKheDOe6ulfju6Z7Op5Zd8LdYPD1W7zZk-WLDSGslOU85EdEKGQp8yBchyQfViyvbTdfWyN7zNQN9pX";
      const { Player } = await this.waitForSpotifyWebPlaybackSDKToLoad();
      const sdk = new Player({
        name: "Test Web Playback SDK",
        volume: 1.0,
        getOAuthToken: callback => {
          callback(token);
        }
      });
      console.log(JSON.stringify(sdk));
      // Error handling
      sdk.addListener("initialization_error", ({ message }) => {
        console.log("Initialization_error: " + message);
      });
      sdk.addListener("authentication_error", ({ message }) => {
        console.log("Authentication_error: " + message);
      });
      sdk.addListener("account_error", ({ message }) => {
        console.log("Account_error: " + message);
      });
      sdk.addListener("playback_error", ({ message }) => {
        console.log("Playback_error: " + message);
      });
      // Playback status updates
      sdk.addListener("player_state_changed", state => {
        // Update UI information on player state changed
      });
      // Ready
      sdk.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device Id: ", device_id);
      });
      // Not Ready
      sdk.addListener("not_ready", ({ device_id }) => {
        console.log("Not ready with device Id: ", device_id);
      });
      sdk.connect();
    }
  }
};
</script>


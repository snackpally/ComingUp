<template>
  <div id="app">
    <HeaderBreak />
    <b-container class="mt-2">
      <Search />
    </b-container>
  </div>
</template>

<script>
import HeaderBar from "@/components/header-bar.vue";
import Search from "@/components/search-event.vue";
import HeaderBreak from "@/components/header-break.vue";
// import Event from "@/components/event-list.vue";
export default {
  name: "app",
  components: {
    HeaderBar,
    Search,
    HeaderBreak
    // Event
  }
};
</script>

<style>
#app {
  margin: 0 !important;
}
#spacer {
  height: 45vh;
  margin-top: 10vh;
}

h1 {
  font-size: 1.4em;
}
</style>

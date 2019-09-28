<template>
  <div id="app">
    <HeaderBar />
    <b-container class="mt-2">
      <Search />
    </b-container>
  </div>
</template>

<script>
import HeaderBar from "@/components/header-bar.vue";
import Search from "@/components/search-event.vue";
export default {
  name: "app",
  components: {
    HeaderBar,
    Search
  }
};
</script>

<style>
#app {
  margin: 0 !important;
}
</style>

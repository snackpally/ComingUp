<template>
  <div id="app">
    <HeaderBreak />
    <b-container class="mt-2">
      <Search />
    </b-container>
  </div>
</template>

<script>
import Search from "@/components/search-event.vue";
import HeaderBreak from "@/components/header-break.vue";
// import Event from "@/components/event-list.vue";
export default {
  name: "app",
  components: {
    Search,
    HeaderBreak
    // Event
  }
};
</script>

<style>
#app {
  margin: 0 !important;
  /* background: #948b8b14; */
}
#spacer {
  height: 15vw;
  margin-top: 10vh;
}

h1 {
  font-size: 1.4em;
}
/* override datepicker form */
.input-group > .form-control {
  background: white !important;
}
</style>

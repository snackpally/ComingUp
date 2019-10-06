<template>
  <div id="app">
    <HeaderBar />
    <b-container class="mt-5" id="mainWrapper">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </b-container>

    <!-- <footer class="footer">&copy; Zack Viente 2019</footer> -->
  </div>
</template>

<script>
import HeaderBar from "@/components/header-bar.vue";
const img = "~/assets/background-right.png";
export default {
  computed: {
    styles() {
      return {
        "background-image": `url(${img}})`,
        "background-repeat": "no-repeat",
        "background-size": "cover"
      };
    }
  },
  name: "app",
  components: {
    HeaderBar
  }
  // data() {
  //   return {
  //     cssProps: {
  //       backgroundImage: `url(${img}})`
  //     }
  //   };
  // }
};
</script>

<style>
@import "./styles/main.css";
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

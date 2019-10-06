<template>
  <div id="app">
    <HeaderBar />
    <b-container class="mt-5" id="mainWrapper">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </b-container>
    <div>
      <footer class="footer">&copy; Zack Viente 2019</footer>
    </div>
  </div>
</template>

<script>
import HeaderBar from "@/components/header-bar.vue";
export default {
  name: "app",
  components: {
    HeaderBar
  }
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

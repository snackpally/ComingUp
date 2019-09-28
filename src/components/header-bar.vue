<template>
  <header>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <HeaderBarBrand />
    </b-navbar>
  </header>
</template>

<script>
import HeaderBarBrand from "@/components/header-brand.vue";
export default {
  name: "Headerbar",
  components: { HeaderBarBrand }
};
</script>

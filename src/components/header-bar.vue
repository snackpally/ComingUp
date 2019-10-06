<template>
  <header>
    <b-navbar toggleable="lg" type="light" style="background: #e9ecef;">
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

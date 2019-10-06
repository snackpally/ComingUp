<template>
  <div>
    <b-jumbotron>
      <template v-slot:header>BootstrapVue</template>

      <template v-slot:lead>
        This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
        featured content or information.
      </template>

      <hr class="my-4" />

      <p>
        It uses utility classes for typography and spacing to space content out within the larger
        container.
      </p>

      <b-button variant="primary" to="/search">Search for upcoming shows</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: "Landing"
};
</script>
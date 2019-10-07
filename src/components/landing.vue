<template>
  <b-container class="mt-5">
    <div>
      <b-jumbotron>
        <template v-slot:header>Coming Up Next</template>

        <template v-slot:lead>Easily discover and explore artists coming to a town nere you |</template>

        <hr class="my-4" />

        <p>
          We'll select a sample of songs for upcoming shows and even deliver you a custom curated playlist so you can listen
          and decide if that show is right for you!
        </p>

        <b-button variant="primary" to="/search">Search for upcoming shows</b-button>
      </b-jumbotron>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Landing"
};
</script>
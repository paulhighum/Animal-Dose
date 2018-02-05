<template>
  <div id="AnimalCard">
    <h2>{{fact.name}}</h2>
    <p id="scientific-name">{{fact.scientific_name}}</p>
    <img :src="fact.image" alt="picture of this animal" />
    <p>{{fact.fact}}</p>
  </div>
</template>

<script>
export default {
  name: "AnimalCard",
  data: () => ({

  }),
  props: ["fact"]
}</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans');

  #AnimalCard {
    max-width: 550px;
  }

  #scientific-name {
    font-style: italic;
  }

  img {
    max-width: 500px;
    max-height: 400px;
  }

  h2 {
    font-weight: 400;
    font-size: 2rem;
    line-height: 1;
  }

  p {
    font-size: 1rem;
  }
</style>

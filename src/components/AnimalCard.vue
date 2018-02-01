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
</style>

<template>
  <div id="AnimalCard">
    <h2>{{fact.name}}</h2>
    <p id="scientific-name">{{fact.scientific_name}}</p>
    <img :src="fact.image" alt="picture of this animal" />
    <p id="fact-description">{{fact.fact}}</p>
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
    width: 100vw;
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  #scientific-name {
    font-style: italic;
  }

  img {
    max-width: 70vmin;
    max-height: 60vmin;
  }

  h2 {
    font-weight: 400;
    font-size: 2rem;
    line-height: 1;
  }

  p {
    font-size: 1rem;
    width: 70vmin;
    text-align: center;
  }
  @media screen and (max-width: 686px) {
    img {
      max-width: 95vmin;
      max-height: 90vmin;
    }
    p {
      width: 95vmin;
    }
  }

  #fact-description {
    margin-top: 7px;
  }
</style>

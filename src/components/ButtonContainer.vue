<template>
  <div id="ButtonContainer">
    <button type="button" name="addComment">Add a Comment</button>
    <button v-on:click.prevent="getFacts" type="button" id="new-fact" name="newFact">New Fact</button>
    <button type="button" name="button">Donate Now</button>
  </div>
</template>
<script>
export default {
  name: "ButtonContainer",
  props: ["getFacts"],
  data: () => ({

  }),
  methods: {

  }
}
</script>
<style scoped>

#ButtonContainer {
  margin: 10px 0 0 0;
}

button {
  width: 125px;
  height: 40px;
  background-color: rgb(230, 230, 230);
  border-radius: 5px;
  margin: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

button:hover {
  background-color: rgba(246, 193, 76, 0.6);
  cursor: pointer;
}

#new-fact {

}

</style>

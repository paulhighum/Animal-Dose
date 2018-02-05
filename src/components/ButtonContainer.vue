<template>
  <div id="ButtonContainer">
    <button v-on:click="commentToggle = !commentToggle" type="button" name="addComment">{{ commentToggle ? "Show Comments" : "Add a Comment" }}</button>
    <button v-on:click="getFacts" type="button" id="new-fact" name="newFact">New Fact</button>
    <button v-on:click="donateToggle = !donateToggle" type="button" name="button">{{ donateToggle ? "Donate Later" : "Donate Now" }}</button>
    <div class="dynamic-display-options">
      <CommentContainer :commentToggle="commentToggle" :currentComments="currentComments"/>
      <NewCommentForm :commentToggle="commentToggle" :cURL="commentURL" :animalFact="fact" :getComments="getComments"/>
    </div>
  </div>
</template>

<script>
import CommentContainer from "./CommentContainer"
import NewCommentForm from "./NewCommentForm"

export default {
  name: "ButtonContainer",
  props: ["getFacts", "commentURL", "fact", "currentComments", "getComments"],
  components: {
    CommentContainer,
    NewCommentForm,
  },
  data() {
    return {
      commentToggle: false,
      donateToggle: false,
    }
  }
}
</script>
<style scoped>

#ButtonContainer {
  margin: 10px 0 0 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

button {
  width: 150px;
  height: 50px;
  background-color: rgb(128, 188, 210);
  border-color: rgb(128, 188, 210);
  border-radius: 5px;
  margin: 5px;
  outline: none !important;
  font-size: .85rem;
}

button:hover {
  background-color: rgb(106, 203, 238);
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#new-fact {

}

</style>

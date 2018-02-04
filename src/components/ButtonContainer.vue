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

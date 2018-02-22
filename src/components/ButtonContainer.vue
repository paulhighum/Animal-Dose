<template>
  <div id="ButtonContainer">
    <button v-on:click="showAddCommentComponent" type="button" name="addComment">{{ showCommentsToggle ? "Add a Comment" : "Show Comments" }}</button>
    <button v-on:click="getFact" type="button" id="new-fact" name="newFact">New Fact</button>
    <button v-on:click="showDonationComponent" type="button" name="button">{{ donateToggle ? "Donate Later" : "Donate Now" }}</button>
    <div class="dynamic-display-options">
      <CommentContainer :commentToggle="commentToggle" :donateToggle="donateToggle" :deleteToggle="deleteToggle" :updateToggle="updateToggle" :currentComments="currentComments"/>
      <NewCommentForm :commentToggle="commentToggle" :apiURL="apiURL" :animalFact="fact" :getComments="getComments" :showAddCommentComponent="showAddCommentComponent"/>
      <Donation :donateToggle="donateToggle" :showCommentComponent="showCommentComponent" :apiURL="apiURL"/>
      <DeleteComment :deleteToggle="deleteToggle" :currentComments="currentComments" :getComments="getComments" :apiURL="apiURL" :showCommentComponent="showCommentComponent"/>
      <UpdateComment :updateToggle="updateToggle" :currentComments="currentComments" :getComments="getComments" :apiURL="apiURL" :showCommentComponent="showCommentComponent"/>
    </div>
    <button class="bottom-button" v-if="showCommentsToggle" v-on:click="showDeleteCommentComponent" type="button" id="delete-comment" name="button">Delete Comment</button>
    <button class="bottom-button" v-if="showCommentsToggle" v-on:click="showUpdateCommentComponent" type="button" id="update-comment" name="button">Update Comment</button>
  </div>
</template>

<script>
import CommentContainer from "./CommentContainer"
import NewCommentForm from "./NewCommentForm"
import Donation from "./Donation"
import DeleteComment from "./DeleteComment"
import UpdateComment from "./UpdateComment"

export default {
  name: "ButtonContainer",
  props: ["getFacts", "apiURL", "fact", "currentComments", "getComments"],
  components: {
    CommentContainer,
    NewCommentForm,
    Donation,
    DeleteComment,
    UpdateComment,
  },
  data() {
    return {
      commentToggle: false,
      donateToggle: false,
      deleteToggle: false,
      updateToggle: false,
      showCommentsToggle: true,
    }
  },
  methods: {
    getFact(){
      this.getFacts()
      this.showCommentComponent()
    },
    showCommentsOnButton() {
      if(!this.commentToggle && !this.donateToggle && !this.deleteToggle && !this.updateToggle){
        this.showCommentsToggle = true
      } else {
        this.showCommentsToggle = false
      }
    },
    showAddCommentComponent(){
      if(this.showCommentsToggle){
        this.commentToggle = !this.commentToggle
        this.showCommentsOnButton()
      } else {
        this.showCommentComponent()
      }
    },
    showCommentComponent(){
      this.commentToggle = false,
      this.donateToggle = false,
      this.deleteToggle = false,
      this.updateToggle = false,
      this.showCommentsOnButton()
    },
    showDonationComponent(){
      if(!this.commentToggle && !this.deleteToggle && !this.updateToggle){
        this.donateToggle = !this.donateToggle
        this.showCommentsOnButton()
      } else if (this.commentToggle){
        this.commentToggle = !this.commentToggle
        this.donateToggle = !this.donateToggle
        this.showCommentsOnButton()
      } else if (this.deleteToggle){
        this.deleteToggle = !this.deleteToggle
        this.donateToggle = !this.donateToggle
        this.showCommentsOnButton()
      } else if (this.updateToggle){
        this.updateToggle = !this.updateToggle
        this.donateToggle = !this.donateToggle
        this.showCommentsOnButton()
      }
    },
    showDeleteCommentComponent(){
      this.deleteToggle = !this.deleteToggle
      this.showCommentsOnButton()
    },
    showUpdateCommentComponent(){
      this.updateToggle = !this.updateToggle
      this.showCommentsOnButton()
    }
  }
}
</script>
<style scoped>

#ButtonContainer {
  margin: 10px 0 0 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.bottom-button {
  margin-bottom: 30px;
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

#delete-comment {
  background-color: rgb(231, 84, 69);
  border-color: rgb(231, 84, 69);
  font-size: .85rem;
}

#delete-comment:hover {
  background-color: rgb(252, 42, 42);
}

#update-comment {
  background-color: rgb(233, 207, 114);
  border-color: rgb(233, 207, 114);
  font-size: .85rem;
}

#update-comment:hover {
  background-color: rgb(242, 229, 59);
}

#new-fact {

}

</style>

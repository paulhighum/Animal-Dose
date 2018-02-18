<template>
  <div id="NewCommentForm" v-if="commentToggle">
    <form id="comment-input" v-on:submit.prevent="postComment">
        <label id="commenters-name">Commenter's Name: </label>
        <input v-model="commentObject.name" type="text" id="name" />
        <label>Comment: </label>
        <textarea v-model="commentObject.comment" id="new-comment"  rows="8" cols="100"></textarea>
        <input id="submit" type="submit" value="Submit" />
      </form>
  </div>
</template>
<script>

export default {
  name: "NewCommentForm",
  props: ["commentToggle", "apiURL", "animalFact", "getComments", "showAddCommentComponent"],
  data() {
    return {
      commentObject: {
        "name": "",
        "comment": "",
        "animal_id": undefined
      }
    }
  },
  methods: {
    postComment() {
      this.commentObject.animal_id = this.animalFact.animal_id
      if(event.target.name.value.length > 0 && event.target["new-comment"].value.length > 0){
        fetch(this.apiURL + "comments", {
          method: "POST",
          headers: new Headers({"Content-Type": "application/json"}),
          body: JSON.stringify(this.commentObject)
        })
          .then(res => res.json())
          .then(json => {
            this.getComments()
            this.showAddCommentComponent()
          })
      } else {
        console.log("please finish filling out the comment card")
      }
      this.commentObject.name = ""
      this.commentObject.comment = ""
      this.commentObject.animal_id = undefined
    },
  }
}
</script>

<style scoped>

#NewCommentForm {
  margin: 20px 0 30px 0;
  width: 550px;
}

form {
  display: flex;
  flex-flow: column;
  align-items: center;
}

label {
  margin: 10px 0;
}

input {
  border: solid black 1px;
  border-radius: 5px;
  outline: none !important;
  width: 550px;
  font-size: 1rem;
  /* text-align: center; */
}

textarea {
  border-radius: 5px;
  outline: none !important;
  width: 550px;
  font-size: 1rem !important;
}

#commenters-name{
  float: left;
}

#submit {
  margin: 13px 0 0 0;
  background-color: rgb(109, 194, 118);
  border-color: rgb(109, 194, 118);
  border-radius: 5px;
  width: 100px;
  height: 50px;
  outline: none !important;
  font-size: 1rem;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

#submit:hover {
  background-color: rgb(80, 215, 93);
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

</style>

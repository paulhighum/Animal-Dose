<template>
  <div id="NewCommentForm" v-if="commentToggle">
    <form id="comment-input" v-on:submit.prevent="postComment">
        <label>Commenter's Name: </label>
        <input type="text" id="name" />
        <label>Comment: </label>
        <textarea id="new-comment"  rows="8" cols="100"></textarea>
        <input id="submit" type="submit" value="Submit" />
      </form>
  </div>
</template>
<script>

export default {
  name: "NewCommentForm",
  props: ["commentToggle", "cURL", "animalFact", "getComments"],
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
      this.commentObject.name = event.target.name.value
      this.commentObject.comment = event.target["new-comment"].value
      this.commentObject.animal_id = this.animalFact.animal_id
      fetch(this.cURL, {
        method: "POST",
        headers: new Headers({"Content-Type": "application/json"}),
        body: JSON.stringify(this.commentObject)
      })
        .then(res => res.json())
        .then(json => {
          this.getComments
          console.log(json)
        })
      // console.log(this.commentObject, this.animalFact)
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
}

label {
  margin: 10px 0;
}

#submit {
  margin: 13px 0 0 0;
}

</style>

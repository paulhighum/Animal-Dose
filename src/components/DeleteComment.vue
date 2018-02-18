<template>
  <div id="DeleteComment" v-if="deleteToggle" >
    <form class="delete-form" v-on:submit.prevent="deleteThisComment">
      <ul>
        <li v-for="comment in currentComments">
          <h4>{{comment.name}}:</h4>
          <p>{{comment.comment}}</p>
          <small>{{comment.id}}</small>
          <input type="checkbox" name="check">
        </li>
      </ul>
      <input id="delete-checked" type="submit" value="Delete" />
      <button type="button" name="cancel">Cancel</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "DeleteComment",
  props: ["currentComments", "deleteToggle", "apiURL", "showAddCommentComponent", "getComments"],
  data() {
    return {
      comment_ids: undefined
    }
  },
  methods: {
    getIDs(){
      this.comment_ids = []
      let commentListObject = event.target.childNodes[0].childNodes
      for(let i = 0; i < commentListObject.length; i++){
        if(commentListObject[i].childNodes[6].checked){
          this.comment_ids.push(commentListObject[i].childNodes[4].innerText)
        }
      }
    },
    deleteThisComment() {
      this.getIDs()
      this.comment_ids.forEach(id => {
        console.log(id)
        fetch(this.apiURL + "comments/" + id, {
          method: "DELETE",
        })
        .then(value => {
          this.getComments()
          this.showAddCommentComponent()
        })
      })
    }
  }
}
</script>
<style scoped>

small {
  display: none;
}

button {
  width: 150px;
  height: 50px;
  background-color: rgb(233, 207, 114);
  border-color: rgb(233, 207, 114);
  border-radius: 5px;
  margin: 5px;
  outline: none !important;
  font-size: .85rem;
}

button:hover {
  background-color: rgb(242, 229, 59);
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#delete-checked {
  width: 150px;
  height: 50px;
  background-color: rgb(231, 84, 69);
  border-color: rgb(231, 84, 69);
  border-radius: 5px;
  margin: 5px;
  outline: none !important;
  font-size: .85rem;
}

#delete-checked:hover {
  background-color: rgb(252, 42, 42);
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

</style>

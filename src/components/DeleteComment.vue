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
      <button v-on:click="showCommentComponent" type="button" name="cancel">Cancel</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "DeleteComment",
  props: ["currentComments", "deleteToggle", "apiURL", "showCommentComponent", "getComments"],
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
        fetch(this.apiURL + "comments/" + id, {
          method: "DELETE",
        })
        .then(value => {
          this.getComments()
          this.showCommentComponent()
        })
      })
    }
  }
}
</script>
<style scoped>

ul {
  min-height: 100px;
  width: 540px;
  border-radius: 6px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  border: 1px solid darkgrey;
  text-align: left;
  margin: 30px 0;
  padding: 9px;
}

li {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

h4 {
  margin: 0 7px 0 7px;
}

p {
  margin: 0 5px 0 0;
}

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
  font-size: 1rem;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
  font-size: 1rem;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

#delete-checked:hover {
  background-color: rgb(252, 42, 42);
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

</style>

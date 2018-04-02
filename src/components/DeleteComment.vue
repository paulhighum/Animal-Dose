<template>
  <div id="DeleteComment" v-if="deleteToggle" >
    <form class="delete-form" v-on:submit.prevent="deleteThisComment">
      <ul>
        <li v-for="comment in currentComments" :id="comment.id">
          <h4>{{comment.name}}:</h4>
          <div class="for-delete-styling">
            <p>{{comment.comment}}</p>
            <label class="container">
              <input type="checkbox">
              <span class="checkmark"></span>
            </label>
          </div>
        </li>
      </ul>
      <input class="bottom-button" id="delete-checked" type="submit" value="Delete" />
      <button class="bottom-button" v-on:click="showCommentComponent" type="button" name="cancel">Cancel</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "DeleteComment",
  props: ["currentComments", "deleteToggle", "apiURL", "showCommentComponent", "getComments"],
  data() {
    return {
      commentIds: undefined
    }
  },
  methods: {
    getIDs(){
      this.commentIds = []
      let commentListObject = event.target.childNodes[0].childNodes
      for(let i = 0; i < commentListObject.length; i++){
        if(commentListObject[i].childNodes[2].childNodes[2].childNodes[0].checked){
          this.commentIds.push(commentListObject[i].id)
        }
      }
    },
    deleteThisComment() {
      this.getIDs()
      this.commentIds.forEach(id => {
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
  min-height: 15vh;
  width: 70vmin;
  border-radius: 6px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  border: 1px solid darkgrey;
  text-align: left;
  margin: 30px 0;
  padding: 9px;
}

.for-delete-styling {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

p {
  margin: 0 10px 0 20px;
}

small {
  display: none;
}

.container {
    align-self: center;
    display: flex;
    justify-content: center;
    position: relative;
    margin: 0 10px 8px 0;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.container input {
    opacity: 0;
    cursor: pointer;
}

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: rgb(238, 238, 238);
    border-radius: 5px;
}

.container:hover input ~ .checkmark {
    background-color: rgb(204, 204, 204);
}

.container input:checked ~ .checkmark {
    background-color: rgb(252, 42, 42);
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.container input:checked ~ .checkmark:after {
    display: block;
}

.container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

.bottom-button {
  margin-bottom: 30px;
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
  font-family: 'Montserrat', sans-serif;
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
  font-family: 'Montserrat', sans-serif;
}

#delete-checked:hover {
  background-color: rgb(252, 42, 42);
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

@media screen and (max-width: 686px) {
  ul {
    min-height: 30vh;
    width: 80vmin;
  }

  button {
    width: 30vmin;
  }

  #delete-checked {
    width: 30vmin;
  }
}

</style>

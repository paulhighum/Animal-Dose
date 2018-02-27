<template>
  <div id="UpdateComment" v-if="updateToggle">
    <form class="update-form" v-on:submit.prevent="toggleModalForSelectedComment">
      <ul>
        <li v-for="comment in currentComments" :id="comment.id">
          <h4>{{comment.name}}:</h4>
          <div class="for-update-styling">
            <p>{{comment.comment}}</p>
            <label class="container">
              <input v-on:change="checkForChecked" type="checkbox">
              <span class="checkmark"></span>
            </label>
          </div>
        </li>
      </ul>
      <input class="bottom-button" id="update-checked" type="submit" value="Update" v-if="!modalToggle" />
      <UpdateModal :modalToggle="modalToggle" :toggleModalForSelectedComment="toggleModalForSelectedComment" :commentId="commentId" :commentToUpdate="commentToUpdate" :getComments="getComments" :apiURL="apiURL" :putComment="putComment" :showCommentComponent="showCommentComponent"/>
      <button class="bottom-button" v-on:click="showCommentComponent" type="button" name="cancel" v-if="!modalToggle" >Cancel</button>
    </form>
  </div>
</template>

<script>
import UpdateModal from "./UpdateModal"

export default {
  name: "UpdateComment",
  props: ["updateToggle", "currentComments", "showCommentComponent", "getComments", "apiURL"],
  components: {
    UpdateModal,
  },
  data() {
    return {
      modalToggle: false,
      commentToUpdate: undefined,
      commentId: undefined,
      updateObject: {
        "name": undefined,
        "comment": undefined,
        "animal_id": undefined
      }
    }
  },
  methods: {
    checkForChecked(){
      let checkedID = event.target.parentNode.parentNode.parentNode.id
      let commentList = event.target.parentNode.parentNode.parentNode.parentNode.childNodes
      for(let i = 0; i < commentList.length; i++){
        if(commentList[i].id != checkedID){
          commentList[i].childNodes[2].childNodes[2].childNodes[0].checked = false
        }
      }
    },
    toggleModalForSelectedComment() {
      this.getID()
      if(this.commentId != undefined){
        this.commentToUpdate = this.currentComments.filter(comment => comment.id === Number(this.commentId))
        this.modalToggle = !this.modalToggle
      }
    },
    getID(){
      let commentListObject = event.target.childNodes[0].childNodes
      for(let i = 0; i < commentListObject.length; i++){
        if(commentListObject[i].childNodes[2].childNodes[2].childNodes[0].checked){
          this.commentId = commentListObject[i].id
        }
      }
    },
    putComment() {
      this.updateObject.animal_id = this.commentToUpdate[0].animal_id
      this.updateObject.name = event.target.name.value
      this.updateObject.comment = event.target["new-comment"].value
      if(event.target.name.value.length > 0 && event.target["new-comment"].value.length > 0){
        fetch(this.apiURL + "comments/" + this.commentId, {
          method: "PUT",
          headers: new Headers({"Content-Type": "application/json"}),
          body: JSON.stringify(this.updateObject)
        })
          .then(res => res.json())
          .then(json => {
            this.getComments()
            this.showCommentComponent()
          })
      }
      this.modalToggle = false,
      this.commentToUpdate = undefined,
      this.commentId = undefined,
      this.updateObject.name = ""
      this.updateObject.comment = ""
      this.updateObject.animal_id = undefined
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

.for-update-styling {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
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
    background-color: rgb(80, 215, 93);
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

button:hover {
  background-color: rgb(242, 229, 59);
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#update-checked {
  width: 150px;
  height: 50px;
  background-color: rgb(109, 194, 118);
  border-color: rgb(109, 194, 118);
  border-radius: 5px;
  margin: 5px;
  outline: none !important;
  font-size: 1rem;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

#update-checked:hover {
  background-color: rgb(80, 215, 93);
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

  #update-checked {
    width: 30vmin;
  }
}
</style>

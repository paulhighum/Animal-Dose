<template>
  <div id="DeleteComment" v-if="deleteToggle" >
    <form class="delete-form" v-on:submit.prevent="deleteThisComment">
      <ul>
        <li v-for="comment in currentComments">
          <h4>{{comment.name}}:</h4>
          <p>{{comment.comment}}</p>
          <small>{{comment.id}}</small>
          <label class="container">
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>
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
  align-items: baseline;
  margin: 10px 0 0 0;
}

h4 {

}

p {
  margin: 0 5px 0 20px;
}

small {
  display: none;
}

.container {
    /* float: right; */
    align-self: center;
    display: flex;
    justify-content: center;
    position: relative;
    margin-bottom: 8px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.container input {
    /* position: absolute; */
    opacity: 0;
    cursor: pointer;
}

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 5px;
}

.container:hover input ~ .checkmark {
    background-color: #ccc;
}

.container input:checked ~ .checkmark {
    background-color: rgb(252, 42, 42);
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
    display: block;
}

/* Style the checkmark/indicator */
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

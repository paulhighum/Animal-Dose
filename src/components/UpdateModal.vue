<template>
  <div id="UpdateModal" v-if="modalToggle">
    <div id="myModal" class="modal">
      <div class="modal-content">
        <form class="send-update" v-on:submit.prevent="putComment">
          <label id="commenters-name">Commenter's Name: </label>
          <input type="text" id="name" :value="commentToUpdate[0].name"/>
          <label>Comment: </label>
          <textarea id="new-comment"  rows="8" cols="100" :value="commentToUpdate[0].comment"></textarea>
          <div class="buttons">
            <input id="submit-update" type="submit" value="Update" />
            <button v-on:click="toggleModalForSelectedComment" type="button" name="cancel">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UpdateModal",
  props: ["modalToggle", "toggleModalForSelectedComment", "commentId", "commentToUpdate", "getComments", "apiURL", "putComment", "showCommentComponent"],
}
</script>
<style scoped>

.modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
}

.modal-content {
    background-color: rgb(254, 254, 254);
    margin: 30vmin auto;
    padding: 20px;
    border: 1px solid rgb(136, 136, 136);
    border-radius: 5px;
    width: 80%;
}

form {
  display: flex;
  flex-flow: column;
  align-items: center;
}

label {
  margin: 10px 0;
  font-family: 'Montserrat', sans-serif;
}

input {
  border: solid black 1px;
  border-radius: 5px;
  outline: none !important;
  width: 70vmin;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
}

textarea {
  border-radius: 5px;
  outline: none !important;
  width: 70vmin;
  font-size: 1rem !important;
  font-family: 'Montserrat', sans-serif;
}

button {
  width: 150px;
  height: 50px;
  background-color: rgb(233, 207, 114);
  border-color: rgb(233, 207, 114);
  border-radius: 5px;
  margin: 10px;
  outline: none !important;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
}

button:hover {
  background-color: rgb(242, 229, 59);
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#submit-update {
  width: 150px;
  height: 50px;
  background-color: rgb(109, 194, 118);
  border-color: rgb(109, 194, 118);
  border-radius: 5px;
  margin: 5px;
  outline: none !important;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
}

#submit-update:hover {
  background-color: rgb(80, 215, 93);
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

@media screen and (max-width: 686px) {
  button {
    width: 30vmin;
  }

  #submit-update {
    width: 30vmin;
  }
}
</style>

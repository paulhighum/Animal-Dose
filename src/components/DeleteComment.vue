<template>
  <div id="DeleteComment" v-if="deleteToggle" >
    <form class="" action="index.html" method="post">
      <ul>
        <li v-for="comment in currentComments">
          <h4>{{comment.name}}:</h4>
          <p>{{comment.comment}}</p>
          <input type="checkbox" name="" value="">
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
  props: ["currentComments", "deleteToggle", "apiURL"],
  methods: {
    deleteThisComment() {
      fetch(this.cURL, {
        method: "DELETE",
        headers: new Headers({"Content-Type": "application/json"}),
        body: JSON.stringify(this.commentObject)
      })
        .then(res => res.json())
        .then(json => {
          this.getComments()
        })

    }
  }
}
</script>
<style scoped>

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

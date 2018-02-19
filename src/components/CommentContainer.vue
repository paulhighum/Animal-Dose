<template>
  <section id="CommentContainer" v-if="!commentToggle && !donateToggle && !deleteToggle && !updateToggle">
    <ul>
      <li v-for="comment in currentComments">
        <h4>{{comment.name}}:</h4>
        <p>{{comment.comment}}</p>
        <small>{{comment.id}}</small>
      </li>
    </ul>
  </section>
</template>

<script>

export default {
  name: "CommentContainer",
  props: ["currentComments", "commentToggle", "donateToggle", "deleteToggle", "updateToggle"],
  methods: {
    deleteComment() {
      if(!this.deleteToggle){
        console.log(this.deleteToggle)
        this.deleteToggle = true
      }

    }
  }
}
</script>

<style scoped>

#CommentContainer {
  margin: 30px 0;
}

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

p {
  margin-left: 20px;
}

small {
  display: none;
}

input {
  float: right;
}

button {
  width: 130px;
  height: 50px;
  border-radius: 5px;
  margin: 5px;
  font-size: .85rem;
}

button:hover {
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

</style>

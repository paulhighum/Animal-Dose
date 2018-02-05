<template>
  <section id="CommentContainer" v-if="!commentToggle">
    <ul>
      <li v-for="comment in currentComments">
        <h4>{{comment.name}}:</h4>
        <p>{{comment.comment}}</p>
      </li>
    </ul>
    <button type="button" id="delete-comment" name="button">Delete Comment</button>
    <button type="button" id="update-comment" name="button">Update Comment</button>
  </section>
</template>

<script>
export default {
  name: "CommentContainer",
  props: ["currentComments", "commentToggle"],
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

#delete-comment {
  background-color: rgb(231, 84, 69);
  border-color: rgb(231, 84, 69);
}

#delete-comment:hover {
  background-color: rgb(252, 42, 42);
}

#update-comment {
  background-color: rgb(233, 207, 114);
  border-color: rgb(233, 207, 114);
}

#update-comment:hover {
  background-color: rgb(242, 229, 59);
}

</style>

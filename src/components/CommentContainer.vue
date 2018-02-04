<template>
  <section id="CommentContainer" v-if="!commentToggle">
    <ul>
      <li v-for="comment in currentComments">
        <h4>{{comment.name}}:</h4>
        <p>{{comment.comment}}</p>
      </li>
    </ul>
    <button type="button" name="button">Delete Comment</button>
    <button type="button" name="button">Update Comment</button>
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

button {
  width: 125px;
  height: 40px;
  background-color: rgb(230, 230, 230);
  border-radius: 5px;
  margin: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

button:hover {
  background-color: rgba(246, 193, 76, 0.6);
  cursor: pointer;
}

</style>

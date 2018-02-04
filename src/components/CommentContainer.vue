<template>
  <section id="CommentContainer" v-if="!commentToggle">
    <ul>
      <li v-for="comment in comments">
        <h4>{{comment.name}}</h4>
        <p>{{comment.comment}}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "CommentContainer",
  props: ["comments", "commentToggle"],
}
</script>

<style scoped>

#CommentContainer {
  min-height: 100px;
  width: 540px;
  border-radius: 6px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  border: 1px solid darkgrey;
  text-align: left;
  margin: 30px 0;
  padding: 9px;
}

</style>

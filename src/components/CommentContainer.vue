<template>
  <section id="CommentContainer">
    <ul>
      <li v-for="comment in comments"></li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "CommentContainer",
  props: ["comments"],
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
  margin: 60px 0;
  padding: 9px;
}

</style>

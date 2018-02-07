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
    </form>
  </div>
</template>
<script>
export default {
  name: "DeleteComment",
  props: ["currentComments", "deleteToggle"]
}
</script>
<style scoped>
</style>

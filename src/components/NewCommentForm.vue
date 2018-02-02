<template>
  <div id="NewCommentForm" class="hidden">
    <form id="comment-input">
        <label>Commenter's Name: </label>
        <input type="text" name="name" />
        <label>Comment: </label>
        <textarea id="new-comment" rows="8" cols="100"></textarea>
        <input id="submit" type="submit" value="Submit" />
      </form>
  </div>
</template>
<script>

export default {
  name: "NewCommentForm",
  methods: {
    postComment() {
      
    }
  }
}
</script>

<style scoped>

form {
  display: flex;
  flex-flow: column;
}

.hidden {
  display: none;
}

</style>

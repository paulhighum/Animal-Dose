<template>
  <div id="Footer">
    <p>© 2018, Paul Highum</p>
    <img src="../../static/animal-dose-footer-logo.png" alt="footer logo">
  </div>
</template>
<script>
export default {
  name: "Footer",
}
</script>
<style scoped>

#Footer {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  width: 100vw;
}

img {
  height: 7vh;
  padding: 0 2vw;
  align-self: center;
}

p {
  align-self: flex-end;
  padding: 0 2vw;
}
</style>

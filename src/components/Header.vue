<template>
  <div id="Header">
    <img src="../../static/animal-dose-logo.png" alt="logo">
    <p>Your daily dose of random animal facts!</p>
  </div>
</template>
<script>
export default {
  name: "Header",
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Averia+Serif+Libre');

  #Header {
    background-color: rgb(128, 188, 210);
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    width: 100vw;
    height: 8vh;
    margin-bottom: 4vh;
  }

  img {
    height: 7vh;
    padding: 0 2vw;
    align-self: center;
  }


  @media screen and (min-width: 687px) {
    p {
      font-size: 1.3rem;
      align-self: flex-end;
      line-height: normal;
      font-family: 'Averia Serif Libre', cursive;
      font-weight: 100;
      padding: 0 2vw;
    }
  }

  @media screen and (max-width: 686px) {
    p {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 544px) {
    #Header {
      height: 12vh;
      flex-flow: column;
      align-items: center;
      justify-content: center;
    }
  }
</style>

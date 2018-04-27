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

  #Header {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    width: 100vw;
    height: 12vh;
  }

  img {
    height: 7vh;
    padding: 0 2vw;
    align-self: center;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    padding-bottom: 2vh;
  }


  @media screen and (min-width: 703px) {
    p {
      font-size: 1.3rem;
      align-self: flex-end;
      line-height: normal;
      font-weight: 100;
      padding-right: 2vw;
    }
  }

  @media (min-width: 605px) and (max-width: 702px) {
    p {
      font-size: 1rem;
       align-self: flex-end;
      line-height: normal;
      font-weight: 100;
      padding-right: 2vw;
    }
  }

  @media screen and (max-width: 604px) {
    #Header {
      height: 13vh;
      flex-flow: column;
      align-items: center;
      justify-content: center;
    }

    p {
      padding: 1vh 0 0 0;
    }
  }
</style>

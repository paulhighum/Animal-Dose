<template>
  <div id="app">
    <img src="./assets/logo.png">
    <AnimalCard :factData="factData"/>
  </div>
</template>

<script>
import AnimalCard from "./components/AnimalCard"

export default {
  name: 'App',
  components: {
    AnimalCard
  },
  data() {
    return {
      apiURL: "https://animal-facts.herokuapp.com/facts",
      factData: [],
      currentFact: {},
      lastTenAnimals: [],
    }
  },
  mounted() {
    this.getFacts()
  },
  methods: {
    getFacts() {
      fetch(this.apiURL)
        .then(res => res.json())
        .then(res => {
          this.factData = res.facts
          return res
        })
        .then(res => {
          this.chooseRandomFact()
          console.log(this.lastTenAnimals)
          return res
        })
    },
    chooseRandomFact() {
      let tempNum = Math.floor(Math.random() * this.factData.length)
      if(this.lastTenAnimals.includes(tempNum)){
        chooseRandomFact()
      } else {
        this.lastTenAnimals.push(tempNum)
        this.currentFact = this.factData[tempNum]
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

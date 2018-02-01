<template>
  <div id="app">
    <AnimalCard :fact="currentFact"/>
    <ButtonContainer />
  </div>
</template>

<script>
import AnimalCard from "./components/AnimalCard"
import ButtonContainer from "./components/ButtonContainer"

export default {
  name: 'App',
  components: {
    AnimalCard,
    ButtonContainer
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
          console.log(this.currentFact)
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
        return this.lastTenAnimals
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  line-height: 1.6;
}
</style>

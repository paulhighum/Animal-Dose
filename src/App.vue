<template>
  <div id="app">
    <AnimalCard :fact="currentFact"/>
    <ButtonContainer :getFacts="getFacts"/>
    <CommentContainer />
  </div>
</template>

<script>
import AnimalCard from "./components/AnimalCard"
import ButtonContainer from "./components/ButtonContainer"
import CommentContainer from "./components/CommentContainer"

export default {
  name: 'App',
  components: {
    AnimalCard,
    ButtonContainer,
    CommentContainer
  },
  data() {
    return {
      factsURL: "https://animal-facts.herokuapp.com/facts",
      commentURL: "https://animal-facts.herokuapp.com/comments",
      comments: [],
      factData: [],
      currentFact: {},
      lastTenAnimals: [],
    }
  },
  mounted() {
    this.getFacts()
    this.getComments()
  },
  methods: {
    getFacts() {
      fetch(this.factsURL)
        .then(res => res.json())
        .then(res => {
          this.factData = res.facts
          this.chooseRandomFact()
          return res
        })
    },
    getComments() {
      fetch(this.commentURL)
        .then(res => res.json())
        .then(json => {
          console.log(json)
          return json
        })
    },
    chooseRandomFact() {
      let tempNum = Math.floor(Math.random() * this.factData.length)
      let animalId = this.factData[tempNum].animal_id
      if(this.lastTenAnimals.includes(animalId)){
        this.chooseRandomFact()
      } else {
        this.setLengthOfLastTenAnimals()
        this.lastTenAnimals.push(animalId)
        console.log(this.lastTenAnimals)
        this.currentFact = this.factData[tempNum]
        return this.lastTenAnimals
      }
    },
    setLengthOfLastTenAnimals() {
      if(this.lastTenAnimals.length > 10){
        this.lastTenAnimals.shift()
        this.setLengthOfLastTenAnimals()
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

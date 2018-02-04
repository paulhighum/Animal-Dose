<template>
  <div id="app">
    <AnimalCard :fact="currentFact"/>
    <ButtonContainer :getFacts="getFacts" :commentURL="commentURL" :fact="currentFact" :getComments="getComments"/>
  </div>
</template>

<script>
import AnimalCard from "./components/AnimalCard"
import ButtonContainer from "./components/ButtonContainer"

export default {
  name: 'App',
  components: {
    AnimalCard,
    ButtonContainer,
  },
  data() {
    return {
      factsURL: "https://animal-facts.herokuapp.com",
      commentURL: "https://animal-facts.herokuapp.com/comments",
      comments: [],
      factData: [],
      currentFact: {},
      currentComments: [],
      lastTenAnimals: [],
    }
  },
  mounted() {
    this.getFacts()
  },
  methods: {
    getFacts() {
      fetch(this.factsURL)
        .then(res => res.json())
        .then(res => {
          this.factData = res.facts
          this.chooseRandomFact()
          this.getComments()
          return res
        })
    },
    getComments() {
      fetch(this.commentURL)
        .then(res => res.json())
        .then(json => {
          this.comments = json.comments
          console.log(this.comments)
          return json
        })
    },
    chooseRandomFact() {
      let tempNum = Math.floor(Math.random() * this.factData.length)
      let animalId = this.factData[tempNum].animal_id
      if(this.lastTenAnimals.includes(animalId)){
        console.log("repeat", animalId)
        this.chooseRandomFact()
      } else {
        this.setLengthOfLastTenAnimals()
        this.lastTenAnimals.push(animalId)
        console.log(this.lastTenAnimals)
        this.currentFact = this.factData[tempNum]
        console.log(this.currentFact)
        return this.lastTenAnimals
      }
    },
    setLengthOfLastTenAnimals() {
      if(this.lastTenAnimals.length > 10){
        this.lastTenAnimals.shift()
        this.setLengthOfLastTenAnimals()
      }
    },
    getCommentsForCurrentAnimal() {

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 40px;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  line-height: 1.6;
}
</style>

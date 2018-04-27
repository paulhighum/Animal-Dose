<template>
  <div id="app">
    <Header />
    <main>
      <img src="../static/lion_outline_animated.svg" alt="lion outline" class="lion-anim">
      <div id="app-body">
        <AnimalCard :fact="currentFact"/>
        <ButtonContainer :getFacts="getFacts" :apiURL="apiURL" :fact="currentFact" :currentComments="currentComments" :getComments="getComments"/>
      </div>
      <img src="../static/lion_outline_animated.svg" alt="lion outline" class="lion-anim">
    </main>
    <Footer />
  </div>
</template>

<script>
import AnimalCard from "./components/AnimalCard"
import ButtonContainer from "./components/ButtonContainer"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default {
  name: 'App',
  components: {
    AnimalCard,
    ButtonContainer,
    Header,
    Footer,
  },
  data() {
    return {
      apiURL: "https://animal-facts.herokuapp.com/",
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
      fetch(this.apiURL)
        .then(res => res.json())
        .then(res => {
          this.factData = res.facts
          this.chooseRandomFact()
          this.getComments()
          return res
        })
    },
    getComments() {
      fetch(this.apiURL + "comments")
        .then(res => res.json())
        .then(json => {
          this.comments = json.comments
          this.getCommentsForCurrentAnimal()
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
        this.currentFact = this.factData[tempNum]
        return this.lastTenAnimals
      }
    },
    setLengthOfLastTenAnimals() {
      if(this.lastTenAnimals.length > 25){
        this.lastTenAnimals.shift()
        this.setLengthOfLastTenAnimals()
      }
    },
    getCommentsForCurrentAnimal() {
      return this.currentComments = this.comments.filter(comment => comment.animal_id === this.currentFact.animal_id)
    }
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Averia+Serif+Libre|Montserrat');

#app {
  text-align: center;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  line-height: 1.6;
  width: 100vw;
  min-height: 100vh;
}

main {
  display: flex;
  flex-flow: row;
}

.lion-anim {
  width: 20vw;
  align-self: flex-start;
  padding-top: 13vh;
}

#app-body {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

button {
  border-style: solid;
}
</style>

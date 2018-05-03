<template>
  <div id="app">
    <Header />
    <div v-if="loading" id="loading-div">
      <img :src=leftLion alt="lion outline" class="lion-anim" id="lion-left">
      <img :src=tigerOutline alt="tiger outline" id="tiger-outline">
      <div id="loading-button-div">
        <img @click="loading = !loading" :src=buttonOutline alt="" id="enter-btn">
      </div>
      <img @click="loading = !loading" :src=buttonOutline alt="" id="enter-btn-small">
      <img :src=rightLion alt="lion outline" class="lion-anim" id="lion-right">
    </div>
    <main v-else>
      <img :src=leftLion alt="lion outline" class="lion-anim" id="lion-left">
      <div id="app-body">
        <AnimalCard :fact="currentFact"/>
        <ButtonContainer :getFacts="getFacts" :apiURL="apiURL" :fact="currentFact" :currentComments="currentComments" :getComments="getComments"/>
      </div>
      <img :src=rightLion alt="lion outline" class="lion-anim" id="lion-right">
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
      leftLion: "../static/lion_outline_right_animated.svg",
      rightLion:"../static/lion_outline_animated.svg",
      tigerOutline:"../static/tiger_outline_animated.svg",
      buttonOutline: "",
      loading: true,
    }
  },
  mounted() {
    this.getFacts()
    setTimeout(this.changeLeftLionOutlineSrc, 3150)
    setTimeout(this.changeRightLionOutlineSrc, 3150)
    setTimeout(this.changeTigerOutlineSrc, 3250)
    setTimeout(this.setEnterBtnSrc, 3300)
    setTimeout(this.changeEnterBtnSrc, 6900)
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
    },
    changeLeftLionOutlineSrc() {
      this.leftLion = "../static/lion_silhouette_right.svg"
    },
    changeRightLionOutlineSrc() {
      this.rightLion = "../static/lion_silhouette_left.svg"
    },
    changeTigerOutlineSrc(){
      this.tigerOutline = "../static/tiger.svg"
    },
    setEnterBtnSrc() {
      this.buttonOutline = "../static/button_outline_animated.svg"
    },
    changeEnterBtnSrc() {
      this.buttonOutline = "../static/button_silhouette.svg"
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

#loading-div {
 width: 100vw;
 display: flex;
 justify-content: space-around;
 height: 81vh;
}

#loading-button-div {
  width: 630px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
}

#loading-button-div img {
  height: 20vh;
  cursor: pointer;
}

main {
  width: 100vw;
  display: flex;
  justify-content: space-around;
}

.lion-anim {
  width: 20vw;
  align-self: flex-start;
  padding: 13vh 0vw 0 0vw;
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

@media screen and (min-width: 1100px) {
    #tiger-outline {
      display: none;
    }

    #enter-btn-small {
      display: none;
    }
  }

 @media screen and (max-width: 1100px) {
    #loading-div {
      width: 100vw;
      display: flex;
      flex-flow: column;
      justify-content: flex-start;
      height: 81vh;
    }

    #tiger-outline {
      padding-top: 5vh;
      padding-left: 35vw;
      max-height: 40vh;
    }

    #enter-btn-small {
      position: absolute;
      left: 25vw;
      top: 42vh;
      max-width: 50vw;
      max-height: 20vh;
      cursor: pointer;
    }
   
    .lion-anim {
      display: none;
    }

    #loading-button-div {
      display: none;
    }

  }

  @media screen and (max-width: 745px) {
    #tiger-outline {
      padding-left: 28vw;
      max-height: 40vh;
    }

  }

  @media screen and (max-width: 604px) {
    #tiger-outline {
      padding-left: 10vw;
      max-height: 40vh;
      max-width: 80vw;
    }

    #enter-btn-small {
      left: 10vw;
      top: 60vh;
      max-width: 80vw;
      max-height: 20vh;
    }

  }

  @media screen and (max-width: 455px) {
  
    #enter-btn-small {
      left: 10vw;
      top: 50vh;
      max-width: 80vw;
      max-height: 20vh;
    }

  }
</style>

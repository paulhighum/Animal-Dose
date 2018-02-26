<template>
  <div id='Donation' v-if="donateToggle">
    <form v-if="!donationSuccess" class="stripe-form" method="post" @submit.prevent="pay">
      <p id="thanks">Thank you for considering a donation to protect and save these amazing animals.</p>
      <label>Please choose a donation amount:</label>
      <input v-model="chargeObject.amount" id="amount" type="number" min="0" name="amount">
      <label>Please provide your payment details:</label>
      <card class='stripe-card'
        :class='{ complete }'
        stripe='pk_test_OyBgyXyfWXrjeP5jQSgPlCDh'
        @change='complete = $event.complete'
      />
      <div class="buttons">
        <input type="submit" value="Donate" class='pay-with-stripe' :disabled='!complete'></input>
        <button v-on:click="exitDonationComponent" type="button" name="cancel">Cancel</button>
      </div>
    </form>
    <div class="modal" v-if="donationSuccess">
      <div class="donation-success">
        <p id="thanks-message">Thank you so much for your donation of ${{chargeObject.amount}}.00!</p>
        <p @click="exitDonationComponent" class="close">&times;</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Card, createToken } from "vue-stripe-elements"

export default {
  name: "Donation",
  props: ["donateToggle", "showCommentComponent", "apiURL"],
  data() {
    return {
      complete: false,
      donationSuccess: false,
      chargeObject: {
        token: undefined,
        amount: undefined,
        service: "a donation",
      },
      errorMessage: undefined,
    }
  },

  components: { Card },

  methods: {
    pay() {
      createToken()
        .then(data => {
          this.chargeObject.token = data.token.id
          fetch(this.apiURL + "charge", {
            method: "POST",
            headers: new Headers({"Content-Type": "application/json"}),
            body: JSON.stringify(this.chargeObject)
          })
            .then(res => res.json())
            .then(res => {
              if(res.charge){
                this.donationSuccess = !this.donationSuccess
              }
            })
            .catch(error => {
              this.errorMessage = error.message
            })
        })
    },
    exitDonationComponent(){
      this.chargeObject.amount = undefined
      this.complete = false
      this.chargeObject.token = undefined
      this.donationSuccess = false
      this.showCommentComponent()
    }
  }
}
</script>

<style scoped>

#thanks {
  margin: 10px 0;
}

form {
  display: flex;
  flex-flow: column;
  align-items: center;
}

form input {
  outline: none !important;
  border-radius: 5px;
  border: 1px solid grey;
  width: 80px;
  padding: 2px;
  font-size: .85rem;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

label {
  margin: 5px;
}

.stripe-card {
  width: 300px;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 2px;
  font-size: .85rem;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

.stripe-card.complete {
  border-color: rgb(80, 215, 93);
  background-color: rgba(80, 215, 93, .2);
}

.buttons {
  display: flex;
  flex-flow: row;
  align-items: center;
  margin: 10px 10px 30px 10px;
}

button {
  width: 150px;
  height: 50px;
  background-color: rgb(233, 207, 114);
  border-color: rgb(233, 207, 114);
  border-radius: 5px;
  margin: 5px;
  outline: none !important;
  font-size: 1rem;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

button:hover {
  background-color: rgb(242, 229, 59);
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.pay-with-stripe {
  background-color: rgb(109, 194, 118);
  border-color: rgb(109, 194, 118);
  border-radius: 5px;
  width: 150px;
  height: 50px;
  outline: none !important;
  font-size: 1rem;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: black;
}

.pay-with-stripe:hover {
  background-color: rgb(80, 215, 93);
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
}

.donation-success {
  background-color: rgb(254, 254, 254);
  margin: 40vmin auto;
  border: 1px solid rgb(136, 136, 136);
  border-radius: 5px;
  width: 80%;
  font-size: 1.5rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}

#thanks-message {
  padding: 2vmin;
}

.close {
    color: #aaaaaa;
    font-size: 2rem;
    font-weight: bold;
    align-self: flex-start;
    text-align: justify;
    line-height: 1;
    padding-right: 1vmin
}

.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}
</style>

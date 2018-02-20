<template>
  <div id='Donation' v-if="donateToggle">
    <form class="stripe-form" method="post">
      <p id="thanks">Thank you for considering a donation to protect and save these amazing animals.</p>
      <label>Please choose a donation amount:</label>
      <input type="number" min="0" name="amount">
      <label>Please provide your payment details:</label>
      <card class='stripe-card'
        :class='{ complete }'
        stripe='pk_test_XXXXXXXXXXXXXXXXXXXXXXXX'
        :options='stripeOptions'
        @change='complete = $event.complete'
      />
      <div class="buttons">
        <button class='pay-with-stripe' @click='pay' :disabled='!complete'>Donate</button>
        <button v-on:click="showCommentComponent" type="button" name="cancel">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
import { Card, createToken } from "vue-stripe-elements"

export default {
  name: "Donation",
  props: ["donateToggle", "showCommentComponent"],
  data() {
    return {
      complete: false,
      stripeOptions: {
        // see https://stripe.com/docs/stripe.js#element-options for details
      }
    }
  },

  components: { Card },

  methods: {
    pay() {
      // createToken returns a Promise which resolves in a result object with
      // either a token or an error key.
      // See https://stripe.com/docs/api#tokens for the token object.
      // See https://stripe.com/docs/api#errors for the error object.
      // More general https://stripe.com/docs/stripe.js#stripe-create-token.
      createToken().then(data => console.log(data.token))
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
  border-color: green;
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
</style>

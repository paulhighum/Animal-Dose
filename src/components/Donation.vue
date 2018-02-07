<template>
  <div id="Donation" v-if="donateToggle">
    <h2>Pay Your Bill</h2>
    <div class="form-wrapper">
        <form action="/charge" method="POST" id="payment-form">
            <p>Your outstanding balance is <strong>$387</strong>.</p>
            <input type="number" min="0" max="387" name="amount" id="amount" placeholder="Payment Amount" />
            <input type="hidden" name="service" value="consulting" />
            <div id="card-element"></div>
            <div id="card-errors" role="alert"></div>
            <input type="submit" value="Submit Payment" />
        </form>
    </div>
  </div>
</template>

<script>

export default {
  name: "Donation",
  props: ["donateToggle"]
}
</script>

<style scoped>

</style>

<template>
  <div id="AnimalCard">
    <li v-for="fact in factData">
        <h4>{{fact.name}}</h4>
      </li>
  </div>
</template>
<script>
export default {
  name: "AnimalCard",
  data: () => ({

  }),
  props: ["factData"]
}</script>
<style scoped>
</style>

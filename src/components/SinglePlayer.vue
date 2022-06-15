<template>
  <tr>
    <p class="name-field">{{ nameOfPlayer }}</p>
    <single-input
      v-for="hole in numberHoles"
      :key="hole"
      :holeNumber="hole"
      :playerNumber="playerNumber"
    ></single-input>
  </tr>
</template>

<script>
import SingleInput from "./SingleInput.vue";
export default {
  components: { SingleInput },
  props: ["playerNumber"],
  computed: {
    numberHoles() {
      return this.$store.getters["numberHoles"];
    },
    nameOfPlayer() {
      let bank = this.$store.getters["playerRecord"];
      return bank[this.playerNumber - 1].name;
    },
  },
};
</script>

<style scoped>
td {
  width: 6rem;
}

.name-field {
  background-color: rgb(175, 219, 125);
  border: 1px solid black;
  padding: 0.5rem;
  -webkit-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  min-height: 3.3rem;
}
</style>

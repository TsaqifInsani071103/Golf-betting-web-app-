<template>
  <th>
    <p>Hole {{ holeNumber }}</p>
    <p>{{ holePar }}</p>
  </th>
  <th v-if="threeResults">{{ resultsMention }}</th>
  <th v-if="nineResults">{{ nineResultsMention }}</th>
</template>

<script>
export default {
  props: ["holeNumber"],
  data() {
    return {};
  },
  computed: {
    threeResults() {
      if (this.holeNumber % 3 == 0) {
        return true;
      } else {
        return false;
      }
    },
    nineResults() {
      if (this.holeNumber % 9 == 0) {
        return true;
      } else {
        return false;
      }
    },
    resultsMention() {
      return `${this.holeNumber - 2} - ${this.holeNumber}`;
    },
    nineResultsMention() {
      return `${this.holeNumber - 8} - ${this.holeNumber}`;
    },
    holePar() {
      let bank = this.$store.getters["pars"];
      return bank[this.holeNumber - 1];
    },
  },
};
</script>

<style scoped>
th {
  border: 1px solid black;
  padding: 0.5rem;
  background-color: rgb(152, 219, 125);
}
</style>

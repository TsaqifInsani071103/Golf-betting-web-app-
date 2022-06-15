<template>
  <tr>
    <input
      class="name-field"
      type="text"
      placeholder="Name"
      :class="{ 'another-color': oddOrEven }"
      v-model="playerName"
      @input="setName"
    />
    <input-holes
      v-for="hole in numberHoles"
      :key="hole"
      :holeNumber="hole"
      :playerNumber="playerNumber"
    ></input-holes>
  </tr>
</template>

<script>
import InputHoles from "./InputHoles.vue";
export default {
  components: { InputHoles },
  props: ["playerNumber"],
  data() {
    return {
      playerName: null,
    };
  },
  computed: {
    oddOrEven() {
      if (this.playerNumber % 2 == 0) {
        return true;
      }
      return false;
    },
    numberHoles() {
      return this.$store.getters["numberHoles"];
    },
  },
  methods: {
    setName() {
      this.$store.dispatch("setName", {
        id: this.playerNumber - 1,
        value: this.playerName,
      });
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
  width: 10rem;
}
.name-field:focus {
  outline: none;
  -webkit-box-shadow: inset 0 0 0 2px #000000;
  box-shadow: inset 0 0 0 2px #000000;
}

.another-color {
  background-color: rgba(175, 219, 125, 0.733);
}
</style>

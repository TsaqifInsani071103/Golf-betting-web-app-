<template>
  <td class="input-td">
    <input
      type="number"
      class="number-field"
      placeholder="?"
      :class="{ 'another-color': oddOrEven }"
      v-model="result"
      @input="changeValue"
    />
  </td>
  <td
    v-if="threeResults"
    class="normal-td"
    :class="{ 'another-color': oddOrEven }"
  >
    {{ threeValues }}
  </td>
  <td
    v-if="nineResults"
    class="normal-td"
    :class="{ 'another-color': oddOrEven }"
  >
    {{ nineValues }}
  </td>
</template>

<script>
export default {
  props: ["playerNumber", "holeNumber"],
  data() {
    return {
      result: null,
      playerButtonToggled: this.$store.getters["togglePlayerRecord"],
    };
  },
  watch: {
    playerButtonToggled(value) {
      if (value == true) {
        this.changeValue();
        // now change it back to false
        this.$store.dispatch("togglePlayerRecord", false);
      }
    },
  },
  methods: {
    changeValue() {
      if (typeof this.result === "number") {
        this.$store.dispatch("changeValue", {
          id: this.playerNumber - 1,
          hole: this.holeNumber - 1,
          value: this.result,
        });
      } else {
        this.$store.dispatch("changeValue", {
          id: this.playerNumber - 1,
          hole: this.holeNumber - 1,
          value: null,
        });
      }

      console.log(this.$store.getters["playerRecord"]);
    },
  },
  computed: {
    oddOrEven() {
      if (this.playerNumber % 2 == 0) {
        return true;
      }
      return false;
    },
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
    threeValues() {
      let person = this.$store.getters["playerRecord"];
      let total = person[this.playerNumber - 1].allScores
        .slice(this.holeNumber - 3, this.holeNumber)
        .reduce((a, b) => a + b);
      return total;
    },
    nineValues() {
      let person = this.$store.getters["playerRecord"];
      let total = person[this.playerNumber - 1].allScores
        .slice(this.holeNumber - 9, this.holeNumber)
        .reduce((a, b) => a + b);
      return total;
    },
  },
};
</script>

<style scoped>
.input-td {
  width: 6rem;
}

.normal-td {
  background-color: rgb(175, 219, 125);
  border: 1px solid black;
  font-size: 1.4rem;
  color: rgb(175, 30, 30);
  font-weight: bold;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.number-field {
  background-color: rgb(175, 219, 125);
  border: 1px solid black;
  padding: 0.5rem;
  -webkit-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  width: 100%;
}

.number-field:focus {
  outline: none;
  -webkit-box-shadow: inset 0 0 0 2px #000000;
  box-shadow: inset 0 0 0 2px #000000;
}

.another-color {
  background-color: rgba(175, 219, 125, 0.733);
}
</style>

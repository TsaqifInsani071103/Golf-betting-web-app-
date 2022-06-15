<template>
  <th>
    <p>Hole {{ holeNumber }}</p>
    <input
      type="number"
      placeholder="par"
      class="par-input"
      v-model="parValue"
      @input="changePar"
    />
  </th>
  <th v-if="threeResults">{{ resultsMention }}</th>
  <th v-if="nineResults">{{ nineResultsMention }}</th>
</template>

<script>
export default {
  props: ["holeNumber"],
  data() {
    return {
      parValue: null,
    };
  },
  methods: {
    changePar() {
      if (typeof this.parValue === "number") {
        this.$store.dispatch("changePar", {
          holeNumber: this.holeNumber - 1,
          value: this.parValue,
        });
      } else {
        this.$store.dispatch("changePar", {
          holeNumber: this.holeNumber - 1,
          value: null,
        });
      }
    },
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
  },
};
</script>

<style scoped>
th {
  border: 1px solid black;
  padding: 0.5rem;
  background-color: rgb(152, 219, 125);
}

.par-input {
  background-color: rgb(175, 219, 125);
  border: 1px solid black;
  padding: 0.5rem;
  -webkit-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  width: 100%;
}

.par-input:focus {
  outline: none;
  -webkit-box-shadow: inset 0 0 0 2px #000000;
  box-shadow: inset 0 0 0 2px #000000;
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
</style>

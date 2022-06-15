<template>
  <td class="input-td">
    <p class="number-field" :class="{ 'another-color': oddOrEven }">
      {{ singleValues }}
    </p>
  </td>
  <td
    v-if="threeResults"
    class="normal-td"
    :class="{ 'another-color': oddOrEven }"
  >
    {{ threeValue }}
  </td>
  <td
    v-if="nineResults"
    class="normal-td"
    :class="{ 'another-color': oddOrEven }"
  >
    {{ nineValue }}
  </td>
</template>

<script>
export default {
  props: ["holeNumber", "playerNumber"],
  data() {
    return {};
  },
  computed: {
    gameSetting() {
      return this.$store.getters["getSettings"];
    },
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
    singleValues() {
      let bank = this.$store.getters["playerRecord"];
      let playerScore =
        bank[this.playerNumber - 1].allScores[this.holeNumber - 1];
      let par = this.$store.getters["pars"];
      let parValue = par[this.holeNumber - 1];
      let comparison = [];
      for (let player of bank) {
        let score = player.allScores[this.holeNumber - 1];
        comparison.push(score);
      }
      let min = Math.min(...comparison);
      if (min > 0) {
        return 0;
      }
      if (comparison.filter((value) => value == min).length !== 1) {
        return 0;
      } else {
        if (this.gameSetting == 351) {
          if (parValue == 4) {
            if (playerScore == min) {
              if (playerScore == 0) {
                return 9;
              } else if (playerScore == -1) {
                return 18;
              } else if (playerScore == -2) {
                return 45;
              } else if (playerScore == -3) {
                return 90;
              }
            } else {
              if (min == 0) {
                return -3;
              } else if (min == -1) {
                return -6;
              } else if (min == -2) {
                return -15;
              } else if (min == -3) {
                return -30;
              }
            }
          }
          if (parValue == 3) {
            if (playerScore == min) {
              if (playerScore == 0) {
                return 9;
              } else if (playerScore == -1) {
                return 18;
              } else if (playerScore == -2) {
                return 90;
              }
            } else {
              if (min == 0) {
                return -3;
              } else if (min == -1) {
                return -6;
              } else if (min == -2) {
                return -30;
              }
            }
          }
          if (parValue == 5) {
            if (playerScore == min) {
              if (playerScore == 0) {
                return 9;
              } else if (playerScore == -1) {
                return 18;
              } else if (playerScore == -2) {
                return 45;
              } else if (playerScore == -3) {
                return 63;
              } else if (playerScore == -4) {
                return 90;
              }
            } else {
              if (min == 0) {
                return -3;
              } else if (min == -1) {
                return -6;
              } else if (min == -2) {
                return -15;
              } else if (min == -3) {
                return -21;
              } else if (min == -4) {
                return -30;
              }
            }
          }
        } else if (this.gameSetting == 246) {
          if (parValue == 4) {
            if (playerScore == min) {
              if (playerScore == 0) {
                return 6;
              } else if (playerScore == -1) {
                return 12;
              } else if (playerScore == -2) {
                return 30;
              } else if (playerScore == -3) {
                return 60;
              }
            } else {
              if (min == 0) {
                return -2;
              } else if (min == -1) {
                return -4;
              } else if (min == -2) {
                return -10;
              } else if (min == -3) {
                return -20;
              }
            }
          }
          if (parValue == 3) {
            if (playerScore == min) {
              if (playerScore == 0) {
                return 6;
              } else if (playerScore == -1) {
                return 12;
              } else if (playerScore == -2) {
                return 60;
              }
            } else {
              if (min == 0) {
                return -2;
              } else if (min == -1) {
                return -4;
              } else if (min == -2) {
                return -20;
              }
            }
          }
          if (parValue == 5) {
            if (playerScore == min) {
              if (playerScore == 0) {
                return 6;
              } else if (playerScore == -1) {
                return 12;
              } else if (playerScore == -2) {
                return 30;
              } else if (playerScore == -3) {
                return 42;
              } else if (playerScore == -4) {
                return 60;
              }
            } else {
              if (min == 0) {
                return -2;
              } else if (min == -1) {
                return -4;
              } else if (min == -2) {
                return -10;
              } else if (min == -3) {
                return -14;
              } else if (min == -4) {
                return -20;
              }
            }
          }
        }
      }
      return null;
    },
    threeValue() {
      let bank = this.$store.getters["playerRecord"];
      let playerScore = bank[this.playerNumber - 1].allScores
        .slice(this.holeNumber - 3, this.holeNumber)
        .reduce((a, b) => a + b);
      let comparison = [];
      for (let player of bank) {
        let score = player.allScores
          .slice(this.holeNumber - 3, this.holeNumber)
          .reduce((a, b) => a + b);
        comparison.push(score);
      }
      let min = Math.min(...comparison);
      if (comparison.filter((value) => value == min).length !== 1) {
        return 0;
      } else {
        if (playerScore == min) {
          return this.gameSetting == 351 ? 15 : 12;
        } else {
          return this.gameSetting == 351 ? -5 : -4;
        }
      }
    },
    nineValue() {
      let bank = this.$store.getters["playerRecord"];
      let nines = [];
      let threes = [];
      for (let player of bank) {
        let poop = player.allScores
          .slice(this.holeNumber - 9, this.holeNumber)
          .reduce((a, b) => a + b);
        nines.push(poop);
        let dood = player.allScores
          .slice(this.holeNumber - 3, this.holeNumber)
          .reduce((a, b) => a + b);
        threes.push(dood);
      }
      let minNine = Math.min(...nines);
      let minThree = Math.min(...threes);
      let personWonNine = -10000;
      let personWonThree = -100;
      if (nines.filter((value) => value == minNine).length == 1) {
        personWonNine = nines.findIndex((value) => value == minNine);
      }
      if (threes.filter((value) => value == minThree).length == 1) {
        personWonThree = threes.findIndex((value) => value == minThree);
      }

      if (personWonNine == personWonThree) {
        return 0;
      } else {
        if (nines.filter((value) => value === minNine).length !== 1) {
          return 0;
        } else {
          if (
            bank[this.playerNumber - 1].allScores
              .slice(this.holeNumber - 9, this.holeNumber)
              .reduce((a, b) => a + b) == minNine
          ) {
            return this.gameSetting == 351 ? 30 : 18;
          } else {
            return this.gameSetting == 351 ? -10 : -6;
          }
        }
      }
    },
  },
};
</script>

<style scoped>
.number-field {
  background-color: rgb(175, 219, 125);
  border: 1px solid black;
  padding: 0.5rem;
  -webkit-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  width: 100%;
}

.another-color {
  background-color: rgba(175, 219, 125, 0.733);
}

.input-td {
  width: 6rem;
  color: black;
}

.normal-td {
  background-color: rgb(175, 219, 125);
  border: 1px solid black;
  font-size: 1.4rem;
  color: rgb(175, 30, 30);
  font-weight: bold;
}
</style>

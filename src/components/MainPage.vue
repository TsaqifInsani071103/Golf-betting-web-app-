<template>
  <div class="button-container">
    <button
      class="game-settings one"
      :class="{ active: activeButton == 351 }"
      @click="toggleSettings(351)"
    >
      351
    </button>
    <button
      class="game-settings two"
      :class="{ active: activeButton == 246 }"
      @click="toggleSettings(246)"
    >
      246
    </button>
  </div>
  <div class="hole-buttons">
    <button class="addHole" @click="incrementHole">add</button>
    <button class="removeHole" @click="deleteHole">delete</button>
  </div>
  <table>
    <tr>
      <th>Player Name</th>
      <hole-header
        v-for="hole in numberHoles"
        :key="hole"
        :holeNumber="hole"
      ></hole-header>
    </tr>
    <player-rows
      v-for="player in playerRecord"
      :key="player.id"
      :playerNumber="player.id"
    ></player-rows>
  </table>
  <div class="player-buttons">
    <button class="addPlayer" @click="incrementPlayer">add</button>
    <button class="removePlayer" @click="deletePlayer">delete</button>
  </div>
</template>

<script>
import HoleHeader from "./HoleHeader.vue";
import PlayerRows from "./PlayerRows.vue";
export default {
  components: { HoleHeader, PlayerRows },
  data() {
    return {};
  },
  methods: {
    incrementPlayer() {
      this.$store.dispatch("incrementPlayers", "add");
      this.$store.dispatch("togglePlayerRecord", true);
      console.log(this.$store.getters["numberPlayers"]);
    },
    deletePlayer() {
      this.$store.dispatch("incrementPlayers", "delete");
      console.log(this.$store.getters["numberPlayers"]);
    },
    incrementHole() {
      this.$store.dispatch("incrementHoles", "add");
      console.log(this.$store.getters["numberHoles"]);
    },
    deleteHole() {
      this.$store.dispatch("incrementHoles", "delete");
      console.log(this.$store.getters["numberHoles"]);
    },
    toggleSettings(setting) {
      this.$store.dispatch("toggleSettings", setting);
    },
  },
  computed: {
    numberHoles() {
      return this.$store.getters["numberHoles"];
    },
    numberPlayers() {
      return this.$store.getters["numberPlayers"];
    },
    playerRecord() {
      return this.$store.getters["playerRecord"];
    },
    activeButton() {
      return this.$store.getters["getSettings"];
    },
  },
};
</script>

<style scoped>
table {
  font-size: 1.5rem;
  background-color: green;
  margin-bottom: 5rem;
}

th {
  border: 1px solid black;
  padding: 0.5rem;
  background-color: rgb(152, 219, 125);
}

button {
  display: block;
  background: none;
  border: none;
  background-color: green;
  padding: 0.5rem;
  border-radius: 0.3rem;
  color: black;
  font-weight: bold;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

button:hover {
  border-radius: 1rem;
  color: #333;
}

.table-button {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.player-buttons {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 2rem;
  margin-bottom: 5rem;
}

.hole-buttons {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 2rem;
  margin-bottom: 5rem;
}

.button-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 5rem;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-bottom: 5rem;
}

.game-settings {
  width: 8rem;
  height: 5rem;
}

.one {
  background-color: rgb(238, 238, 57);
}

.two {
  background-color: rgb(72, 72, 223);
}

.active {
  border-radius: 25%;
}
</style>

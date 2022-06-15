<template>
  <table class="table-single">
    <tr>
      <th>Player Name</th>
      <single-hole
        v-for="hole in numberHoles"
        :key="hole"
        :holeNumber="hole"
      ></single-hole>
    </tr>
    <single-player
      v-for="player in playerRecord"
      :key="player.id"
      :playerNumber="player.id"
    ></single-player>
  </table>
</template>

<script>
import SinglePlayer from "./SinglePlayer.vue";
import SingleHole from "./SingleHole.vue";
export default {
  components: { SinglePlayer, SingleHole },
  data() {
    return {};
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
  },
};
</script>

<style scoped>
.table-single {
  font-size: 1.5rem;
  background-color: green;
  margin-bottom: 5rem;
}

th {
  border: 1px solid black;
  padding: 0.5rem;
  background-color: rgb(152, 219, 125);
}
</style>

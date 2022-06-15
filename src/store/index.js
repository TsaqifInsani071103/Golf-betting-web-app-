import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      gameSettings: 351,
      numberPlayers: 1,
      numberHoles: 9,
      pars: [null, null, null, null, null, null, null, null, null],
      playerRecord: [
        {
          name: null,
          id: 1,
          allScores: [null, null, null, null, null, null, null, null, null],
          threeScores: [null, null, null],
          nineScores: [null],
        },
      ],
      playerReset: false,
    };
  },

  mutations: {
    togglePlayerRecord(state, payload) {
      state.playerReset = payload;
    },
    toggleSettings(state, payload) {
      state.gameSettings = payload;
    },
    setName(state, payload) {
      state.playerRecord[payload.id].name = payload.value;
    },
    incrementPlayers(state, payload) {
      if (payload == "delete" && state.numberPlayers !== 1) {
        state.numberPlayers -= 1;
        state.playerRecord.pop();
      } else if (payload == "add" && state.numberPlayers !== 4) {
        state.numberPlayers += 1;
        let object = {
          name: null,
          id: state.numberPlayers,
          allScores: [],
          threeScores: [],
          nineScores: [],
        };
        for (let i of state.playerRecord[0].allScores) {
          console.log(i);
          object.allScores.push(null);
        }
        for (let i of state.playerRecord[0].threeScores) {
          console.log(i);
          object.threeScores.push(null);
        }
        for (let i of state.playerRecord[0].nineScores) {
          console.log(i);
          object.nineScores.push(null);
        }
        state.playerRecord.push(object);
        console.log(state.playerRecord);
      }
    },
    incrementHoles(state, payload) {
      if (payload == "delete" && state.numberHoles !== 1) {
        state.numberHoles -= 1;
        for (let i of state.playerRecord) {
          i.allScores.pop();
          if (state.numberHoles % 3 == 0) {
            i.threeScores.pop();
          }
          if (state.numberHoles % 9 == 0) {
            i.nineScores.pop();
          }
        }
      } else if (payload == "add" && state.numberHoles !== 18) {
        state.numberHoles += 1;
        for (let i of state.playerRecord) {
          i.allScores.push(null);
          if (state.numberHoles % 3 == 0) {
            i.threeScores.push(null);
          }
          if (state.numberHoles % 9 == 0) {
            i.nineScores.push(null);
          }
        }
        state.pars.push(null);
      }
    },
    changeValue(state, payload) {
      //change individual score
      state.playerRecord[payload.id].allScores[payload.hole] = payload.value;
      //change threeScore
      let index = Math.abs(Math.floor(payload.hole / 3));
      state.playerRecord[payload.id].threeScores[index] = state.playerRecord[
        payload.id
      ].allScores
        .slice(index * 3, index * 3 + 3)
        .reduce((a, b) => a + b);
      // change nine Score
      let indexNine = Math.abs(Math.floor(payload.hole / 9));
      state.playerRecord[payload.id].nineScores[indexNine] = state.playerRecord[
        payload.id
      ].allScores
        .slice(indexNine * 9, indexNine * 9 + 9)
        .reduce((a, b) => a + b);
    },
    changePar(state, payload) {
      state.pars[payload.holeNumber] = payload.value;
      console.log(state.pars);
    },
  },
  actions: {
    toggleSettings(context, payload) {
      context.commit("toggleSettings", payload);
    },
    incrementPlayers(context, payload) {
      context.commit("incrementPlayers", payload);
    },
    incrementHoles(context, payload) {
      context.commit("incrementHoles", payload);
    },
    changeValue(context, payload) {
      context.commit("changeValue", payload);
    },

    setName(context, payload) {
      context.commit("setName", payload);
    },
    changePar(context, payload) {
      context.commit("changePar", payload);
    },
    togglePlayerRecord(context, payload) {
      context.commit("togglePlayerRecord", payload);
    },
  },
  getters: {
    numberPlayers(state) {
      return state.numberPlayers;
    },
    numberHoles(state) {
      return state.numberHoles;
    },
    playerRecord(state) {
      return state.playerRecord;
    },
    pars(state) {
      return state.pars;
    },
    getSettings(state) {
      return state.gameSettings;
    },
    getNewRecord(state) {
      return state.togglePlayerRecord;
    },
  },
});

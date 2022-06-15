<template>
  <section class="App-section">
    <div class="App-container">
      <main-page></main-page>
      <single-main></single-main>
    </div>
  </section>
</template>

<script>
import MainPage from "./components/MainPage.vue";
import SingleMain from "./components/SingleMain.vue";
export default {
  name: "App",
  components: { MainPage, SingleMain },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

* {
  padding: 0;
  margin: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  background-color: #333;
}
html {
  font-size: 62.5%;
}

.App-section {
  margin-top: 20rem;
}

.App-container {
  max-width: 160rem;
  margin: 0 auto;
  padding: 0 0.2rem 0 0.2rem;
}

@media (max-width: 84em) {
  html {
    font-size: 56.25%;
  }
}
@media (max-width: 65em) {
  html {
    font-size: 50%;
  }

  input {
    font-size: 1.4rem;
  }
}
@media (max-width: 60em) {
  html {
    font-size: 45%;
  }
}

@media (max-width: 55em) {
  html {
    font-size: 40%;
  }

  button {
    font-size: 1.8rem;
  }
}
@media (max-width: 50em) {
  html {
    font-size: 35%;
  }

  .App-section {
    margin-top: 0 !important;
  }

  input {
    font-size: 1.2rem;
  }
}
@media (max-width: 44em) {
  html {
    font-size: 32.25%;
  }

  input {
    font-size: 1.2rem;
  }
}
@media (max-width: 41em) {
  html {
    font-size: 27.25%;
  }

  input {
    font-size: 1.2rem;
  }
}
@media (max-width: 36em) {
  html {
    font-size: 22.5%;
  }

  input {
    font-size: 1.2rem;
  }
}
@media (max-width: 31em) {
  html {
    font-size: 20.5%;
  }
}
@media (max-width: 29em) {
  html {
    font-size: 18.25%;
  }
}
</style>

<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  //font-family: "Raleway", sans-serif;
  font-weight: 400;
  text-decoration: none;
}
.app {
  background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url("/public/assets/bgnew.png");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 100vh;
  height: 100%;
  @media (min-width: 426px) {
    min-height: 100%;
    height: 100%;
  }
}
</style>
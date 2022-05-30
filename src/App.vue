<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
// import NavBar from "@/components/NavBar";
export default {
  name: "App",
  // components: {
  //   NavBar,
  // }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  text-decoration: none;
  color: white;
}
.app {
  //min-height: 100vh;
  height: 100vh;
  //position: ;
  background-image: url("/public/assets/background.jpg");;
  //background-color: #f5f0ed;

}
.container {
  //padding: 0 20px;
  //max-width: 1140px;
  margin: 0 auto;
}
</style>
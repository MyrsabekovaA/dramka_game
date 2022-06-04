<template>
  <header :class="{'scrolled-nav' : scrollPosition}">
    <nav>
        <router-link class="link" :to="{name: 'Home'}"><img src="assets/logo.svg"></router-link>
      <ul class="navigation">
        <li><router-link class="link" :to="{name: 'Home'}">О команде</router-link></li>
        <li><router-link class="link" :to="{name: 'Home'}">Инструкция</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      scrollPosition: null
    };
  },
};
</script>

<style lang="scss" scoped>
header{
  background-color: transparent;
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: white;

  nav{
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: .5s ease all;
    width: 90%;
    margin: 0 auto;

    ul, .link{
      font-weight: 500;
      color: #f1f1f1;
      list-style: none;
      text-decoration: none;
    }

    li{
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }

    .link{
      font-size: 14px;
      transition: .5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;

      &:hover{
        color: antiquewhite;
        border-color: sienna;
      }
    }

    img{
      display: flex;
      align-items: center;
        width: 60px;
    }

    .navigation{
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
    }
  }
}
@media (max-width: 500px) {
  header nav .link{
    font-size: 10px;
  }
  header nav li {
    padding: 4px;
    margin-left: 8px;
  }
}
</style>
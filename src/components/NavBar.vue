<template>
  <header :class="{'scrolled-nav' : scrollPosition}">
    <nav>
<!--      <router-link class="link" v-if="/dramkagame" :to="{name: 'Home'}"><img src="assets/logo.svg"></router-link>-->
      <a class="link" href="#container"><img src="assets/logo.svg"></a>
      <ul class="navigation">
        <li><a class="glitchy" data-glitch="О команде" href="#team">О команде</a></li>
        <li><a class="glitchy" data-glitch="Инструкция" href="#instructions">Инструкция</a></li>
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
    .glitchy{
      font: {
        size: 14px;
        family: 'Raleway', sans-serif;
      }
      text-decoration: none;
      text-transform: uppercase;
      position: relative;
      top: 50%;
      transform: translate(-50%, -50%);
      margin: 0;
      color: #fff;
      letter-spacing: 5px;
      &:before, &:after {
        display: block;
        content: attr(data-glitch);
        text-transform: uppercase;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        opacity: .8;
      }
      &:after {
        color: #f0f;
        z-index: -2;
      }
      &:before {
        color: #0ff;
        z-index: -1;
      }
      &:hover {
        &:before {
          animation: glitch .3s cubic-bezier(.25, .46, .45, .94) both 5
        }
        &:after {
          animation: glitch .3s cubic-bezier(.25, .46, .45, .94) reverse both 5
        }
      }
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
@keyframes glitch {
  0% {
    transform: translate(0)
  }
  20% {
    transform: translate(-5px, 5px)
  }
  40% {
    transform: translate(-5px, -5px)
  }
  60% {
    transform: translate(5px, 5px)
  }
  80% {
    transform: translate(5px, -5px)
  }
  to {
    transform: translate(0)
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
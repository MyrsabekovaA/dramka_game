<template>
  <header :class="{'scrolled-nav' : scrollPosition}">
    <nav>
      <a class="link" href="#container"><img src="assets/logo.svg"></a>
      <ul class="navigation" v-show="!mobile">
        <li><a class="glitchy" data-glitch="About" href="#about">About</a></li>
        <li><a class="glitchy" data-glitch="Instruction" href="#instructions">Instruction</a></li>
        <li><router-link class="glitchy" data-glitch="Characters" to="/achievements">Characters</router-link></li>
        <li class="player">
          <div class="player">
            <div class="player-controls">
              <div class="play">
                <button style="background-color: transparent; border: none" v-on:click.prevent="playing = !playing" :title="(playing) ? 'Pause' : 'Play'" href="#">
                  <i v-if="!playing" class="fa fa-volume-off" style="color: white"></i>
                  <i v-else class="fa fa-volume-up" style="color: white"></i>
                </button>
              </div>
              <audio :loop="looping" ref="audio" :src="'assets/music/music.mp3'" v-on:timeupdate="update" v-on:loadeddata="load" v-on:pause="playing = false" v-on:play="playing = true" preload="auto"></audio>
            </div>
          </div>
        </li>
      </ul>
      <div class="nav-icon">
        <i @click="toggleMobileNav" v-show="mobile" class="fa fa-bars" :class="{'icon-active': mobileNav}"></i>
      </div>
      <transition name="mobile-nav">
        <ul class="dropdown" v-show="mobileNav">
          <li><a class="glitchy" data-glitch="About" href="#about">About</a></li>
          <li><a class="glitchy" data-glitch="Instruction" href="#instructions">Instruction</a></li>
          <li><router-link class="glitchy" data-glitch="Characters" to="/achievements">Characters</router-link></li>
          <li class="player">
            <div class="player">
              <div class="player-controls">
                <div class="play">
                  <button style="background-color: transparent; border: none" v-on:click.prevent="playing = !playing" :title="(playing) ? 'Pause' : 'Play'" href="#">
                    <i v-if="!playing" class="fa fa-volume-off" style="color: white"></i>
                    <i v-else class="fa fa-volume-up" style="color: white"></i>
                  </button>
                </div>
                <audio :loop="looping" ref="audio" :src="'assets/music/music.mp3'" v-on:timeupdate="update" v-on:loadeddata="load" v-on:pause="playing = false" v-on:play="playing = true" preload="auto"></audio>
              </div>
            </div>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>

export default {
  name: "NavBar",
  data() {
    return {
      scrollPosition: null,
      audio: new Audio('assets/music/music.mp3'),
      loaded: false,
      looping: false,
      playing: false,
      mobile: null,
      mobileNav: null,
      windowWidth: null
    };
  },
  props: {
    file: {
      type: String,
      default: null
    },
  },
  watch: {
    playing(value) {
      if (value) { return this.$refs.audio.play(); }
      this.$refs.audio.pause();
    },
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
    load() {
      if (this.$refs.audio.readyState >= 2) {
        this.loaded = true;
        this.durationSeconds = parseInt(this.$refs.audio.duration);

        return this.playing = this.autoPlay;
      }

      throw new Error('Failed to load sound file.');
    },
    update() {
      this.currentSeconds = parseInt(this.$refs.audio.currentTime);
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    checkScreen () {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <=750){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    }
  },
};
</script>

<style lang="scss" scoped>
header{
  background-color: transparent;
  background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5));
  backdrop-filter: blur(2px);
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: white;
  nav{
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: .5s ease all;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 1140px) {
      max-width: 1140px;
    }
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
        family: 'Sofia Sans', sans-serif;
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
    .nav-icon{
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 24px;
      height: 100%;

      i{
        cursor: pointer;
        font-size: 24px;
        transition: 0.8s ease all;
      }
    }

    .icon-active{
      transform: rotate(180deg);
    }

    .dropdown{
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      align-items: center;
      background-color: transparent;
      background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5));
      backdrop-filter: blur(2px);
      top: 84px;
      right: 0;
      li{
        margin: 3px;

      }
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
</style>
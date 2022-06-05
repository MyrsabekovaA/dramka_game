<template>
  <header :class="{'scrolled-nav' : scrollPosition}">
    <nav>
      <a class="link" href="#container"><img src="assets/logo.svg"></a>
      <ul class="navigation">
        <li><a class="glitchy" data-glitch="О команде" href="#team">О команде</a></li>
        <li><a class="glitchy" data-glitch="Инструкция" href="#instructions">Инструкция</a></li>
        <li class="player">
          <button v-if="!isPlaying" @click="play">Музыка</button>
          <button v-else @click="pause">Музыка</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
// var music = new Audio('/public/assets/music.mp3')
export default {
  name: "NavBar",
  data() {
    return {
      current: {},
      index: 0,
      isPlaying: false,
      scrollPosition: null,
      songs: {src: require('/public/assets/music.mp3')},
      player: new Audio()
    };
  },
  // methods: {
  //   play (song){
  //   //   if (typeof song.src != "undefined") {
  //   //   }
  //   this.current = song;
  //   this.player.src = this.current.src;
  //
  //   this.player.play();
  //   this.player.addEventListener('ended', function () {
  //     this.index++;
  //     if (this.index > this.songs.length - 1) {
  //       this.index = 0;
  //     }
  //     this.current = this.songs[this.index];
  //     this.play(this.current);
  //   }.bind(this));
  //   this.isPlaying = true;
  // },
  // pause () {
  //   this.player.pause();
  //   this.isPlaying = false;
  // },
  // },
  // created () {
  //   this.current = this.songs[this.index];
  //   this.player.src = this.current.src;
  // }
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
<template>
  <div id="game">
    <SwipeableCards v-for="card in cards"
               :key="card.id"
               v-on:swipe="onSwipe"
               @move="onMove"
               :style="{
        position: 'absolute',
        height: '400px',
        width: '300px',
        backgroundColor: 'antiquewhite',
        borderRadius: '8px',
        boxShadow: '1px 1px 1px 1px #de1dde',
      }">
      <slot>
        <div class="card_body" v-if="cards.at(-1) == card">
          <h2><b>{{card.name}}</b></h2>
          <div class="card_img" style="height: 250px" :style="{backgroundImage: 'url(' + card.bg + ')'}">
            <div class="answer left" :style="{opacity: left_opacity}">
              {{ card.actions.left.answer }}
            </div>
            <div class="answer right" :style="{opacity: right_opacity}">
              {{ card.actions.right.answer }}
            </div>
            <img :src="`assets/instructions/${card.icon}`" style="width: 240px; align-items:center; margin-top: 30px">

          </div>
          <p>{{card.text}}</p>
        </div>
        <div class="unknown" v-else>
          ?
        </div>
      </slot>
    </SwipeableCards>

  </div>
</template>

<script>
import { SwipeableCards } from "../components/sw.js";

export default {
  name: "DramkaGame",
  components: { SwipeableCards },
  data() {
    return {
      cards: [{
        id: 1,
        name: 'Пример',
        text: 'Выберите ответ свайпом влево или вправо',
        icon: 'swipe.png',
        bg: 'assets/characters/3/wink.svg',
        actions: {
          right: {
            answer: "Да",
          },
          left: {
            answer: "Да",
          }
        }
      }],
      left_opacity: 0,
      right_opacity: 0,
    };
  },
  methods: {
    onSwipe(direction) {
      this.right_opacity = 0
      this.left_opacity = 0
      console.log(direction);
      setTimeout(() => {
        this.cards.pop();
        // this.cards.unshift({ id: Math.random(), color: getRandomColor() });
      }, 300);
    },
    onMove(params) {
      this.right_opacity = 0
      this.left_opacity = 0
      if (params.x > 0) {
        this.right_opacity = params.x / 100
      } else if (params.x < 0) {
        this.left_opacity = -params.x / 100
      }
    }
  },
};
</script>

<style>
body {
  margin: 0;
}
#game {
  /*display: flex;*/
  /*justify-content: center;*/
  /*align-items: center;*/
  /*height: 100vh;*/
  /*width: 100vw;*/
  /*padding-top: 50px;*/
  font-family: 'Caveat', cursive;
}

.card_body{
  padding: 20px 0;
  word-wrap: break-word;
  align-items: center;
  text-align: center;
}
.card_img{
  margin: 20px 0;
  padding: 0 30px;
  background-size: cover;
}
.card_img img {
  margin-top: 30px;
}
.answer {
  position: absolute;
  font-size: 18px;
  font-weight: bold;
}
.left {
  /*top: 1rem;*/
  right: 1rem;
  /*transform: rotate(10deg);*/
}

.right {
  /*top: 1rem;*/
  left: 1rem;
  /*transform: rotate(-10deg);*/
}

.unknown {
  background-color: #1f1f1f;
  text-align: center;
  vertical-align: center;
  padding: 210px 0;
  font-size: 80px;
  height: 100%;
  color: #f1f1f1;
}
</style>
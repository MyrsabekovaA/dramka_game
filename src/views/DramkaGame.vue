<template>
  <NavBar_game />
  <div id="game">
    <SwipeableCards v-for="card in cards"
               :key="card.id"
               v-on:swipe="onSwipe"
               @move="onMove"
               :style="{
        position: 'absolute',
        height: 'auto',
        width: '300px',
        backgroundColor: 'antiquewhite',
        borderRadius: '8px',
        boxShadow: '1px 1px 1px 1px #de1dde',
      }">
      <slot>
        <div class="card_body" v-if="cards.at(-1) == card">
          <h2><b>{{character(card.character_id).name}}</b></h2>
          <div class="card_img" :style="{backgroundImage: `url('/public/assets/backs/${card.back}')`}">
            <div class="answer left" :style="{opacity: left_opacity}">
              {{ card.actions.left.answer }}
            </div>
            <div class="answer right" :style="{opacity: right_opacity}">
              {{ card.actions.right.answer }}
            </div>
            <img :src="`assets/characters/${card.character_id}/${card.icon}`">

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
import NavBar_game from "@/components/NavBar_game";
import { SwipeableCards } from "../components/sw.js";
import cards from "@/database/cards";
import characters from "@/database/characters";

export default {
  name: "DramkaGame",
  components: { SwipeableCards, NavBar_game },
  data() {
    return {
      cards: [],
      src: require('/public/assets/characters/girl.svg'),
      left_opacity: 0,
      right_opacity: 0,
    };
  },
  mounted() {
    this.cards = cards;
    // this.cards.push({ id: Math.random(), color: getRandomColor() });
    // this.cards.push({ id: Math.random(), color: getRandomColor() });
  },
  methods: {
    character(id) {
      return characters.find(item => item.id === id)
    },
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
      console.log(params);
    }
  },
};
</script>

<style>
body {
  margin: 0;
}
.card {
  position: absolute;
  height: 400px;
  width: 300px;
  border-radius: 8px;
  /*background-color: antiquewhite;*/
  /*background-image: url("/public/assets/characters/girl.svg");*/
}
#game {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding-top: 50px;
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
  background-image: url("/public/78792.jpg");
  background-size: cover;
}
.card_img img {
  margin-top: 30px;
  width: 240px;
  align-items:center;
}
.answer {
  position: absolute;
  font-size: 18px;
  font-weight: bold;
}
.left {
  /*top: 1rem;*/
  left: 1rem;
  /*transform: rotate(10deg);*/
}

.right {
  /*top: 1rem;*/
  right: 1rem;
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
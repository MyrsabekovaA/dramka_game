<template>
  <NavBar_game />
  <div class="home">
      <div id="container">
        <div class="glitch">
          <router-link style="color: #fff;" @mouseover="text = 'ЛИЦА'" @mouseleave="text = 'ПЕРСОНАЖИ'" to="/dramkagame">
            <span aria-hidden="true">{{ text }}</span>
            <span>{{ text }}</span>
            <span aria-hidden="true">{{ text }}</span>
          </router-link>
        </div>
        <div class="quote">
          <p class="text quoted">
            Весь мир — театр.
            <br>
            В нем женщины, мужчины — все актеры.
            <br>
            У них есть выходы, уходы.
            <br>
            И каждый не одну играет роль.
          </p>
          <p class="author">Уильям Шекспир</p>
        </div>
      </div>
      <div id="about" v-for="character in characters" :key="character.id">
        <div class='row'>
          <div class='column'>
            <div class='about_theme'>
              <h2><b>{{character.name}}</b></h2>
              <br>
              <img height="600" :src="`assets/characters/${character.id}/regular.svg`">
            </div>
          </div>
          <div class='column'>
            <div class='about_text row'>
              <div v-for="(type, icon) in character.icons" :key="icon">
                <div class="column">
                  <img height="150" :src="`assets/characters/${character.id}/${icon}.${type}`" :title="icon">
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr>
      </div>
    </div>
  <footer-part></footer-part>
</template>

<script>
import NavBar_game from "../components/NavBar_game";
import FooterPart from "@/components/FooterPart";
import characters from "../database/characters";

export default {
  components: {FooterPart, NavBar_game},
  data() {
    return {
      text: 'Персонажи',
      characters,
    }
  },
  name: "HomePage",
};
</script>

<style lang="scss" scoped>

#container {
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  color: white;
  display: flex;
  //background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url("/public/assets/bgnew.png");
}

.glitch {
  font-size: 5rem;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
  0.025em 0.04em 0 #fffc00;
  animation: glitch 725ms infinite;
}

.glitch span {
  position: absolute;
  top: -2.5rem;
  left: -10.5rem;
}

.glitch span:first-child {
  animation: glitch 500ms infinite;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
  transform: translate(-0.04em, -0.03em);
  opacity: 0.75;
}

.glitch span:last-child {
  animation: glitch 375ms infinite;
  clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
  transform: translate(0.04em, 0.03em);
  opacity: 0.75;
}

@keyframes glitch {
  0% {
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
    0.025em 0.04em 0 #fffc00;
  }
  15% {
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
    0.025em 0.04em 0 #fffc00;
  }
  16% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
    -0.05em -0.05em 0 #fffc00;
  }
  49% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
    -0.05em -0.05em 0 #fffc00;
  }
  50% {
    text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
    0 -0.04em 0 #fffc00;
  }
  99% {
    text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
    0 -0.04em 0 #fffc00;
  }
  100% {
    text-shadow: -0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff,
    -0.04em -0.025em 0 #fffc00;
  }
}

@media (max-width: 500px) {
  .glitch {
    font-size: 4rem;
  }
  .glitch span {
    position: absolute;
    top: -2rem;
    left: -8rem;
  }
}
button, button:after{
  width: 360px;
  height: 35px;
  font-size: 36px;
}
.quote{
  position: absolute;
  bottom: 20%;
  p{
    font-family: 'Caveat', cursive;
  }
}
.quoted::before{
  content: "\201c";
  font-size: 30px;
  margin-bottom: -15px;
  margin-top: -20px;
}


#about{
  height: 100%;
  width: 100%;
}


.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  backdrop-filter: blur(3px);
}

.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  border: solid white;
  border-collapse: collapse;
}

.about_text{
  font-family: 'Caveat', cursive;
  color: white;
  text-align: center;
  font-size: 18px;
  padding: 2rem;


}

  h2 {
    font-size: 30px;
    color: white;
    text-align: center;
  }

  .about_theme {
    margin: 20px auto;
  }
</style>
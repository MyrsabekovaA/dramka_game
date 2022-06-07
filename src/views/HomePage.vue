<template>
  <NavBar />
  <div class="home">
      <div id="container">
        <div class="glitch">
          <router-link style="color: #fff;" @mouseover="text = 'НАЧАТЬ'" @mouseleave="text = 'DRAMKA'" to="/dramkagame">
            <span aria-hidden="true">{{ text }}</span>
            <span>{{ text }}</span>
            <span aria-hidden="true">{{ text }}</span>
          </router-link>
        </div>
        <div class="quote">
          <p class="text quoted">Ну как вы там, потомки? Высадились на марс?</p>
          <p class="author">Юрий Гагарин</p>
        </div>
      </div>
      <div id="about">
        <div class='row'>
          <div class='column1'>
            <div class='about_theme'>
              <MiniDramkaGame />
            </div>
          </div>
          <div class='column' style="vertical-align: middle;
    justify-content: center;
    align-items: center;
    ">
            <div class='about_text'>
              <b>DRAMKA</b> - это карточная игра симулятора президента.
              <br/>
              <br/>
              Действия происходят в нынешнее время. Как президент вымышленной страны,
              вы должны реагировать на события, которые предстанут перед вашим государством.
              Каждое решение влияет на исход дальнейших событий по-разному.
              Ваша цель состоит в том, чтобы управлять страной как можно больше лет.
              Как только ваше царствование закончится, вы продолжаете править; однако, уже как новый президент.
              В ваших руках судьба мира!
              <br/>
              Желаем удачи!
            </div>
          </div>
        </div>
      </div>
      <div id="instructions">
        <div class='row' style="display: block">
          <div class='column' style="padding-top: 0">
            <div class='instructions_text' style="color: white">
              <b>Инструкция</b>
              <br/>
              <br/>
              Все, что от тебя нужно - это свайпать влево или вправо
              <br/>
              Наведи на
              <b>DRAMKA</b>
              и начинай играть!
            </div>
          </div>
          </div>
      </div>
    </div>
  <footer-part></footer-part>
</template>

<script>
import NavBar from "../components/NavBar";
import FooterPart from "@/components/FooterPart";
import MiniDramkaGame from "@/components/MiniDramkaGame";
export default {
  components: {FooterPart, NavBar, MiniDramkaGame},
  data() {
    return {
      text: 'DRAMKA'
    }
  },
  name: "HomePage",
};
</script>

<style lang="scss" scoped>
.home{
  //min-height: 100%;
  height: 100%;
}
#container {
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  color: white;
  display: flex;
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
@media (min-width: 426px) {
  #about{
    min-height: 100%;
  }
}

.column1{
  display: flex;
  flex-direction: column;
  flex: 1;
  vertical-align: middle;
  align-items: center;
  padding-right: 260px;
  @media (max-width: 1025px) {
    padding-top: 50px;
  }
  @media (max-width: 769px) {
    padding-right: 0;
    padding-left: 60px;
    align-items: normal;
  }
  @media (max-width: 426px) {
    .about_text{
      display: block;
      padding-top: 20px;
    }
  }
  @media (max-width: 376px) {
    padding-left: 40px;
  }
}

.about_text{
  @media (max-width: 769px) {
    font-size: 14px;
  }
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
.author{
  text-align: right;
}
.author::before{
  content: "\2014\0020";
}

#about {
  width: 100%;
  @media (max-width: 2561px) {
    height: 405px;
  }
  @media (max-width: 1025px) {
    height: 550px;
    .about_theme {
      padding-top: 20px;
    }
  }
  @media (max-width: 426px) {
    height: 920px;
    //.about_theme {
    //  padding-top: 20px;
    //}
  }
  .row
{
  height: 100%;
}

}
#instructions{
  height: 100%;
  width: 100%;
  //@media (max-width: 426px) {
  //  padding-top: 10px;
  //}
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
}

.about_text{
  font-family: 'Caveat', cursive;
  color: white;
  text-align: center;
  font-size: 18px;
  padding: 2rem;

  h2 {
    margin-bottom: 2rem;
  }
  @media (max-width: 769px) {
    font-size: 16px;
  }
}

.about_theme{

}
.instructions_text{
    font-family: 'Caveat', cursive;
    color: white;
    text-align: center;
    font-size: 18px;
    padding: 2rem;

    h2 {
      margin-bottom: 2rem;
    }
    @media (max-width: 769px) {
      font-size: 16px;
    }
}
@media (max-width: 769px) {
  p{
    font-size: 16px;
  }
}
@media (max-width: 426px) {
  .row{
    display: block;
  }
  p{
    font-size: 14px;
  }
  .author{
    text-align: center;
  } }
@media (max-width: 426px) {
  .column{
    padding-top: 420px;
  }}



</style>
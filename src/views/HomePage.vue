<template>
  <NavBar/>
  <div class="home">
    <div id="container">
      <div class="glitch">
        <router-link style="color: #fff;" @mouseover="mouseover" @mouseleave="mouseleave" to="/dramkagame">
          <span aria-hidden="true">{{ text }}</span>
          <span>{{ text }}</span>
          <span aria-hidden="true">{{ text }}</span>
        </router-link>
      </div>
      <div class="quote">
        <p class="text quoted">Well, how are you, descendants? Landed on Mars?</p>
        <p class="author">Yuri Gagarin</p>
      </div>
    </div>
    <div id="about">
      <div class='row'>
        <div class='column1'>
          <div class='about_theme'>
            <figure>
              <img src="/assets/gif.gif">
            </figure>
          </div>
        </div>
        <div class='column' style="vertical-align: middle;
    justify-content: center;
    align-items: center;
    ">
          <div class='about_text'>
            <b>DRAMKA</b> - it is a president simulator card game.
            <br/>
            <br/>
            Actions are taking place at the present time. Like the president of a fictional country
            you must react to the events that will appear before your state.
            Each decision affects the outcome of further events in different ways.
            Your goal is to rule the country for as many years as possible.
            Once your reign is over, you continue to reign; however, already as a new president.
            The fate of the world is in your hands!
            <br/>
            Good Luck!
          </div>
        </div>
      </div>
    </div>
    <div id="instructions">
      <div class='row' style="display: block">
        <div class='column' style="padding-top: 0">
          <div class='instructions_text' style="color: white">
            <b>Instruction</b>
            <br/>
            <br/>
            All you have to do is swipe left or right
            <br/>
            Point to
            <b>DRAMKA</b>
            and start playing!
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

export default {
  components: {FooterPart, NavBar,},
  data() {
    return {
      replace: 'START',
      origin: 'DRAMKA',
      text: 'DRAMKA',
      interval_func: null,
    }
  },
  methods: {
    mouseover: function () {
      clearInterval(this.interval_func);
      this.text = this.replace;
    },
    mouseleave: function () {
      this.interval_func = setInterval(this.glitch_func, 1500);
      this.text = this.origin;
    },
    glitch_func: function () {
      this.text = this.replace;
      setTimeout(() => {
        this.text = this.origin;
      }, 500)
    },
  },
  mounted() {
    this.interval_func = setInterval(this.glitch_func, 1500);
  },
  name: "HomePage",
};
</script>

<style lang="scss" scoped>
.home {
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
  #about {
    min-height: 100%;
  }
}

img {
  width: 600px;
  height: 100%;
}


.column1 {
  display: flex;
  flex-direction: column;
  flex: 1;
  vertical-align: middle;
  align-items: center;
  @media (max-width: 1025px) {
    padding-top: 50px;
    padding-left: 20px;
  }
  @media (max-width: 769px) {
    padding-right: 0;
    padding-left: 60px;
    align-items: normal;
  }
  @media (max-width: 426px) {
    padding: 0 10px;
    img{
      width: 400px;
      height: 100%;
    }
    .about_text {
      display: block;
      padding-top: 20px;
    }
  }
  @media (max-width: 376px) {
    padding: 0 10px;
    img{
      width: 350px;
      height: 100%;
    }
  }
  @media (max-width: 376px) {
    img{
      width: 300px;
      height: 100%;
    }
  }
}

.about_text {
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

button, button:after {
  width: 360px;
  height: 35px;
  font-size: 36px;
}

.quote {
  position: absolute;
  bottom: 20%;

  p {
    font-family: 'Sofia Sans', sans-serif;
  }
}

.quoted::before {
  content: "\201c";
  font-size: 30px;
  margin-bottom: -15px;
  margin-top: -20px;
}

.quoted::after {
  content: "\201c";
}

.author {
  text-align: right;
}

.author::before {
  content: "\2014\0020";
}

#about {
  width: 100%;
  @media (max-width: 2561px) {
    height: 405px;
  }
  @media (max-width: 1025px) {
    height: 500px;
    .about_theme {
      padding-top: 20px;
    }
  }
  @media (max-width: 426px) {
    height: 500px;
    .about_theme {
      padding-top: 20px;
    }
  }
  @media (max-width: 321px) {
    height: 570px;
    .about_theme {
      padding-top: 20px;
    }
  }

  .row {
    height: 100%;
  }
}

#instructions {
  height: 100%;
  width: 100%;
  @media (max-width: 426px) {
    padding-top: 10px;
  }
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

.about_text {
  font-family: 'Sofia Sans', sans-serif;
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

.instructions_text {
  font-family: 'Sofia Sans', sans-serif;
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
  p {
    font-size: 16px;
  }
}

@media (max-width: 426px) {
  .row {
    display: block;
  }
  p {
    font-size: 14px;
  }
  .author {
    text-align: center;
  }
}

//@media (min-width: 426px) {
//  .column {
//    padding-top: 420px;
//  }
//}


</style>
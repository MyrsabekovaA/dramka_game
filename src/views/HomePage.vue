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
          <p class="text quoted">Ну как вы там потомки? Уже летаете на марс?</p>
          <p class="author">Юрий Гагарин</p>
        </div>
      </div>
      <div id="instructions">
        <div class='row'>
          <div class='column'>
            <div class='instructions_theme'>
              Some Text in Column One
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, asperiores autem cum deleniti doloremque dolorum eaque enim explicabo fugiat impedit ipsam ipsum necessitatibus nesciunt officia possimus, qui quo, rem repellendus similique soluta ullam vero. Accusantium ad adipisci alias aspernatur delectus deserunt dicta dolore ducimus eos est excepturi facere facilis fugit id illo inventore iusto laboriosam maiores neque obcaecati odit officia officiis placeat possimus quas, quisquam quod recusandae reprehenderit repudiandae rerum sequi sint tempore veniam veritatis vitae voluptas voluptates. Aspernatur doloribus inventore ipsa modi necessitatibus optio praesentium, suscipit veniam? Commodi culpa dolorum laborum rem suscipit. Accusantium ad animi architecto atque aut dolorum ea eos error explicabo facere illo magni maiores modi, nam nesciunt, officia perferendis perspiciatis, possimus quae quasi quibusdam repellendus sit soluta temporibus totam unde vero? Asperiores, assumenda commodi dolore eaque expedita fugiat harum labore modi nam obcaecati sed, sint voluptates? A ad asperiores earum et facere incidunt iure necessitatibus officiis tempora ut? Dignissimos dolorum ea perspiciatis quidem quis? Aspernatur distinctio, dolor eos exercitationem explicabo hic iste iure odit officia quod sed soluta totam voluptatum? Atque consectetur, culpa earum eos error expedita fugiat ipsa magnam nobis non odio placeat possimus quis recusandae saepe sed temporibus unde, vitae voluptate voluptatem.
              </p>
            </div>
          </div>
          <div class='column'>
            <div class='instructions_text'>
              Some Text in Column Two
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, asperiores autem cum deleniti doloremque dolorum eaque enim explicabo fugiat impedit ipsam ipsum necessitatibus nesciunt officia possimus, qui quo, rem repellendus similique soluta ullam vero. Accusantium ad adipisci alias aspernatur delectus deserunt dicta dolore ducimus eos est excepturi facere facilis fugit id illo inventore iusto laboriosam maiores neque obcaecati odit officia officiis placeat possimus quas, quisquam quod recusandae reprehenderit repudiandae rerum sequi sint tempore veniam veritatis vitae voluptas voluptates. Aspernatur doloribus inventore ipsa modi necessitatibus optio praesentium, suscipit veniam? Commodi culpa dolorum laborum rem suscipit. Accusantium ad animi architecto atque aut dolorum ea eos error explicabo facere illo magni maiores modi, nam nesciunt, officia perferendis perspiciatis, possimus quae quasi quibusdam repellendus sit soluta temporibus totam unde vero? Asperiores, assumenda commodi dolore eaque expedita fugiat harum labore modi nam obcaecati sed, sint voluptates? A ad asperiores earum et facere incidunt iure necessitatibus officiis tempora ut? Dignissimos dolorum ea perspiciatis quidem quis? Aspernatur distinctio, dolor eos exercitationem explicabo hic iste iure odit officia quod sed soluta totam voluptatum? Atque consectetur, culpa earum eos error expedita fugiat ipsa magnam nobis non odio placeat possimus quis recusandae saepe sed temporibus unde, vitae voluptate voluptatem.
              </p>
            </div>
          </div>
        </div>
      <div id="team">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis maxime quidem quo voluptatem. Accusantium adipisci animi asperiores, assumenda beatae blanditiis cumque deleniti deserunt dolore dolores fuga ipsa laboriosam maxime modi mollitia nam nihil nulla praesentium quae quis sapiente soluta tempora ut, velit veniam! Aliquam consectetur dolores doloribus ex neque tempora. A adipisci animi aspernatur aut consequuntur deleniti dolorem ea eum harum illo ipsam libero magnam magni nam nostrum omnis placeat praesentium, quam qui quia quis quo rem saepe similique sit sunt veritatis! Adipisci asperiores aspernatur deleniti error est fugiat mollitia natus necessitatibus officiis. Deserunt ducimus eum facilis nihil odit veritatis.</p>
      </div>
      </div>
  </div>
</template>

<script>
  import NavBar from "../components/NavBar";
export default {
  components: {NavBar},
  data() {
    return {
      text: 'DRAMKA'
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
  background-color: black;
  height: 100vh;
  color: white;
  display: flex;
  background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url("/public/assets/bgnew.png");
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
.author{
  text-align: right;
}
.author::before{
  content: "\2014\0020";
}
#instructions{
  height: 100%;
  width: 100%;
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
.instructions_theme{
  background-color: white;
  color: black;
}
</style>
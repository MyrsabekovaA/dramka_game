<template>
  <div class="home">
      <div class="container">
        <div class="glitch">
          <router-link style="color: #fff;" @mouseover="text = 'НАЧАТЬ'" @mouseleave="text = 'DRAMKA'" to="/dramkagame">
            <span aria-hidden="true">{{ text }}</span>
            <span>{{ text }}</span>
            <span aria-hidden="true">{{ text }}</span>
          </router-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'DRAMKA'
    }
  },
  name: "HomePage",
};
</script>

<style lang="scss" scoped>

.container {
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
  //filter: brightness(100%);
  //margin: 0 auto;
  //height: 100%;
  //width: 100%;
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
</style>
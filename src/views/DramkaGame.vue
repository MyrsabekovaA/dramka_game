<template>
  <div id="game">
    <GameCardStack
        :cards="visibleCards"
        @cardAccepted="handleCardAccepted"
        @cardRejected="handleCardRejected"
        @cardSkipped="handleCardSkipped"
        @hideCard="removeCardFromDeck"
    />
  </div>
</template>

<script>
import GameCardStack from "@/components/GameCardStack";
export default {
  name: "DramkaGame",
  components: {
    GameCardStack
  },
  data() {
    return {
      visibleCards: ["Карта 1", "Карта 2", "Карта 3", "Карта 4", "Карта 5", "Карта 6", "Карта 7", "Карта 8", "Карта 9", "Карта 10"]
    };
  },
  methods: {
    handleCardAccepted() {
      console.log("handleCardAccepted");
    },
    handleCardRejected() {
      console.log("handleCardRejected");
    },
    handleCardSkipped() {
      console.log("handleCardSkipped");
    },
    removeCardFromDeck() {
      this.visibleCards.shift();
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/mixins";

#game {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
}
.cards {
  margin: auto;
}

</style>
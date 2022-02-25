const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min)) + min

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100
    }
  },
  methods: {
    attackMonster() {
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      if (this.monsterHealth < 1) this.monsterHealth = 0;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      if (this.playerHealth < 1) this.playerHealth = 0;
    }
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + '%' }
    },
    playerBarStyles() {
      return { width: this.playerHealth + '%' }
    }
  }
});

app.mount('#game');
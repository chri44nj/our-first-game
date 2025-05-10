import { defineStore } from "pinia";

export const useEmpireStore = defineStore("empire", {
  state: () => ({
    money: 10,
    fame: 0,
    power: 0,
  }),
  actions: {
    increaseMoney(amount: number) {
      this.money += amount;
    },
    increaseFame(amount: number) {
      this.fame += amount;
    },
    increasePower(amount: number) {
      this.power += amount;
    },
  },
  getters: {
    getEmpireStatus: (state) => {
      return `Money: ${state.money}, Fame: ${state.fame}, Power: ${state.power}`;
    },
  },
});

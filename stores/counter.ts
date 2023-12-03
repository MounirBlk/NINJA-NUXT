import { defineStore } from 'pinia'

export interface ICounterState {
  count: number
}

export const useCounterStore = defineStore('counter', {
  state: (): ICounterState => ({
    count: 0,
  }),
  getters: {
    getCount: (state) => state.count,
  },
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    reset() {
      this.count = 0
    },
  },
})

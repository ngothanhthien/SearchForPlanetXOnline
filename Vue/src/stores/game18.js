import { defineStore } from 'pinia'

export const useGame18Store = defineStore({
  id: 'game18',
  state: () => ({
    timeNow: 1,
    map: {

    },
    mapName: 'XQH7',
    players:{
        "user1": {
            color:null,
            research:[],
            surveys:[],
            theories:['A','A','C','C','D','D','D','D','G','G'],
            point:0,
            notes:[],
            position:[1,1]
        },
    },
    isX1Reveal:false,
    isX2Reveal:false,
  }),
  actions: {
    increment() {
      this.counter++
    }
  }
})

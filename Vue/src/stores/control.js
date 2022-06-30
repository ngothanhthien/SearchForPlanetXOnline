import { defineStore } from 'pinia'

export const useControlStore = defineStore({
  id: 'control',
  state: () => ({
    fn:null,
    params:[],
  }),
})
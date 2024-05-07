import { defineStore } from 'pinia'

export const useWordStore = defineStore('word', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      data: [],
      name: 'Eduardo',
      isAdmin: true,
      items: [],
      hasChanged: true
    }
  }
})

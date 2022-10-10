import { defineStore } from 'pinia'

const useUser = defineStore("user", {
  state: () => ({
    name: "loveZero",
    age: 18,
  })
})

export default useUser

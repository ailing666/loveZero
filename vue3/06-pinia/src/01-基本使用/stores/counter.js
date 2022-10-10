// 定义关于counter的store
import { defineStore } from 'pinia'

import useUser from './user'

const useCounter = defineStore("counter", {
  state: () => ({
    count: 99,
  }),
})

export default useCounter

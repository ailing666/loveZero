import Cookies from 'js-cookie'

const tokenkey = 'carsAccountToken'
const usernamekey = 'carsAccountUsername'

// token
export const setToken = (value) => Cookies.set(tokenkey, value, { expires: 7 })
export const getToken = () => Cookies.get(tokenkey)
export const getTokenCars = () => Cookies.get(tokenkey)
export const removeToken = () => Cookies.remove(tokenkey)
// username
export const setUsername = (value) => Cookies.set(usernamekey, value, { expires: 7 })
export const getUsername = () => Cookies.get(usernamekey)
export const removeUsername = () => Cookies.remove(usernamekey)

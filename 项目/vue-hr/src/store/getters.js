const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  staffPhoto: state => state.user.userInfo.staffPhoto,
  name: state => state.user.userInfo.username,
  userId: state => state.user.userInfo.userId
}
export default getters

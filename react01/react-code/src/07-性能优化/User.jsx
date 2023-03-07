function User(props) {
	console.log('User render')
	return <div>User:{props.count}</div>
}
export default User

// import { memo } from 'react'

// const User = memo(function (props) {
// 	console.log('User render')
// 	return <div>User:{props.count}</div>
// })
// export default User

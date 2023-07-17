const User = ({name, lastName, ...rest}) => {
	return (
		<div>
			<h1>{name}</h1>
			<h2>{lastName}</h2>
			<h2>{JSON.stringify(rest)}</h2>
		</div>
	)
}

const Rest = () => {
	const user = {
		name: 'Viktor',
		lastName: 'Lukyanchenkov',
		age: 39,
		youtubeChannel: 'Viktorres',
		bestFriend: {
			name: 'Steeve',
			nickName: 'Sleeva'
		}
	}
	/*const {name, lastName} = user*/
	/*c*/
	/*rest syntax*/
	/*const [banana, orange, ...restFruits] = fruits*/
	/*spread*/
	/*const user2 = {
		/!*create copy of the object*!/
		...user
	}*/
	/*const user3 = {
		/!*create copy of the object*!/
		...user,
		bestFriend: {
			...user.bestFriend /!*copy of inner object*!/
		}
	}*/
	/*user2.youtubeChannel = 'Dance Gym'*/
	return (
		<div>
			{/*<div>{JSON.stringify(restFruits)}</div>
			<div>{JSON.stringify(user)}</div>
			<h2>New</h2>
			<div>{JSON.stringify(user2)}</div>*/}
			{/*<User name={user.name} lastName={user.youtubeChannel} />*/}
			<User {...user} />
		</div>
	);
};

export default Rest

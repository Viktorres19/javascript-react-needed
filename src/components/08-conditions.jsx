const User = () => {
	let name = 'Go'
	return name && <h1>{name}</h1>
}
const Conditions = () => {
	/*const user = {
		name: 'Viktor',
		lastName: 'Lukyanchenkov',
		age: 39,
		youtubeChannel: 'Viktorres',
		gender: 'male',
		bestFriend: {
			name: 'Steeve',
			nickName: 'Sleeva'
		}
	}*/
	/*if(user.name) {
		return (
			<div>
				Цей юзер має імя
			</div>
		);
	} else {
		return <h2>Немає інформації</h2>
	}*/
	/*if(!user.name) {
		return <h2>Немає інформації</h2>
	} else {
		return (
			<div>
				Цей юзер має імя
			</div>
		)
	}*/
	/*return !user.name ? (
		<h2>Немає інформації</h2>
	) : (
		<div>Цей юзер має імя</div>
	)*/
	/*let salut = `Привіт, ${user.gender === 'male' ? 'пан ' : 'пані '} ${user.name}`
	return (
		<div>{salut}</div>
	)*/
	return (
		<User name={name} />
	)
}

export default Conditions

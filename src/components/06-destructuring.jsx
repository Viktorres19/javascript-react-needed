const Destructuring = () => {
	const fruits = ['banana', 'orange']
	const user = {
		name: 'Viktor',
		lastName: 'Lukyanchenkov',
		age: 39,
		youtubeChannel: 'Viktorres',
		myFruits: fruits,
		bestFriend: {
			name: 'Steeve',
			nickName: 'Sleeva'
		}
	}
	const {name: name, lastName: lastName, age, youtubeChannel, bestFriend: {name: friendName}} = user
	const [babanana, oorange] = fruits
	return (
		<div>
			<div>
				{name} <hr/>
				{lastName} <hr/>
				{age} <hr/>
				{youtubeChannel}
			</div>
			<div>
				{friendName}
			</div>
		</div>
	);
};

export default Destructuring

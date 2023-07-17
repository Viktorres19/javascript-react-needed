const Objects = () => {
	const user = {
		name: 'Sym',
		age: '27',
		isYouTuber: true
	}
//об'єкти копіюються по посиланню
// змінні ні
	const user2 = user
	user.lastName = 'Last'
	user2.isYouTuber = false
	console.log(user2) // {name: 'Sym', age: '27', isYouTuber: false, lastName: 'Last'}
	console.log(user) // {name: 'Sym', age: '27', isYouTuber: false, lastName: 'Last'} в першому інформація буде повторювати другий
	return (
		<div>
			<div>{user.name}</div>
			{user.lastName}
		</div>
	);
};

export default Objects

/*Function declaration - не можна викликати до оголошення (винесе нове оголошення змінної, яка по дефолту undefined*/
function sum(a, b) {
	console.log(a, b)
	return a + b
}
/*Function expression - можна викликати до оголошення (вспливає)*/
const multiply = function (a, b) {
	return a * b
}
/*arrow function - також не вспливає*/
/*const sum2 = (a, b) => {
	return a + b
}*/
/*Другий спосіб без return. Також спрацює*/
const sum2 = (a, b) => a + b
/*Приклад:*/
const user = {
	name: 'Viktor',
	lastName: 'Lukyanchenkov',
	age: 39,
	youtubeChannel: 'Viktorres',
	myFruits: ['pear', 'apple', 'orange'],
	bestFriend: {
		name: 'Steeve',
		nickName: 'Sleeva'
	}
}
const myFruits = () => {
	let html = []
	for (let i = 0; i < fruites.length; i++) {
		html.push(<p>{i} - {fruites[i]}</p>)
	}
	return html
}
const Functions = () => {
	return (
		<div>
			<div>{ sum(2, 2) }</div>
			<div>{ sum2(3, 8) }</div>
			<div>{multiply(3, 3)}</div>
			<div>{myFruits()}</div>
		</div>
	);
};

export default Functions

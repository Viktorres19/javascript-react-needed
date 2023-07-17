/*дефолтний параметр працює тільки для undefined*/
const MyFruits = ({fruits} = ['banana', 'orange']) => {
	let html = []

	try {
		for (let i = 0; i < fruits.length; i++) {
			html.push(<p>{i} - {fruits[i]}</p>)
		}
	} catch(e) {
		console.error('New error: ', e)
		html.push(<h1>No fruits</h1>)
	}
	return html
}

/*const restFunction = (...rest) => {
	console.log(rest)
	let sum = 0
	for(let i = 0; i < rest.length; i++) {
		sum += rest[i]
	}
	return sum
}
console.log('restFunction: ', restFunction(2, 3, 4, 5, 6))*/ //restFunction:  20

const Errors = () => {
	const fruits = ['banana', 'orange']
	return (
		<div>
			<MyFruits fruits={fruits} />
		</div>
	);
};

export default Errors

const LoopFor = () => {
	/*let user = 'Boozer'
	for (let i = 0; i < 10; i++) {
		console.log(i + 1, user)
	}*/
	/*const fruits = ['banana', 'orange', 'apple', 'pear']
	for (let i = 0; i < fruits.length; i++) {
		console.log(i + 1, fruits[i])
	}*/
	const fruits = ['banana', 'orange', 'apple', 'pear']
	let html = []
	for (let i = 0; i < fruits.length; i++) {
		html.push(<p>{i} = {fruits[i]}</p>)
	}
	return (
		<div>
			{html}
		</div>
	);
};

export default LoopFor

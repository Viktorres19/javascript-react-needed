const Arrays = () => {
	const fruites = ['banana', 'orange', 'apple']
	fruites.push('mango')

	/*const fruitesPrep = fruites.map((fruit, index) => {
		return <div>`${fruit}`</div>
	})*/

	return (
		<div>
			{
				fruites.map((fruit, index) => {
					return <div key={index}>{fruit}</div>
				})
			}
		</div>
	);
};

export default Arrays

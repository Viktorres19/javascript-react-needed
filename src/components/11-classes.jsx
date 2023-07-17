class UserClass {
	constructor(name, age, nickName) {
		this.name = name
		this.age = age
		this.nickName = nickName
	}
	age = 27

	getName () {
		console.log(`This name ${this.name}`)
	}
}

class Admin extends UserClass {
	constructor(name, age, nickName, rights) {
		/*викликаємо конструктор батьківського класу*/
		super(name, age, nickName)
		this.rights = rights
	}
	getName () {
		console.log(`I am admin, my name is ${this.name}`)
	}
}

const MyClassComponent = () => {
	const viktor = new UserClass('Viktor', 39, 'Viktorres')
	const garkusha = new Admin('Gar', 19, 'Garkusha', 'write')
	console.log(viktor)
	viktor.getName()
	console.log(garkusha)
	garkusha.getName()
	return (
		<div>

		</div>
	);
};

export default MyClassComponent


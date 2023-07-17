import {Component} from 'react'
class MySecondClassComponent extends Component {
	// function binding
	constructor() {
		super()
		this.state = {
			name: 'Vivi'
		}
		this.setName = this.setName.bind(this)
	}

	setName () {
		console.log('onClick', this)
		this.setState({
			name: 'New user name'
		})
	}
	render() {
		return (
			<div>
				<h2>My second class component</h2>
				<p>{this.state.name}</p>
				<button onClick={this.setName}>Change name</button>
			</div>
		)
	}
}

export default MySecondClassComponent


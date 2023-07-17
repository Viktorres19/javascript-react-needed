import { useState } from 'react'

const FetchAxios = () => {
	const [fieldValue, setFieldValue] = useState('')
	const [task, setTask] = useState('')
	const id = '2'
	const [user, setUser] = useState({})
	const onSubmitHandler = (e) => {
		e.preventDefault()

		fetch(`https://swapi.dev/api/people/${id}`)
			.then(response => response.json())
			.then(data => {
				setUser(data)
			})
			.catch(error => {
				console.log(error)
			})

		console.log('onClick')
	}
	const onChangeHandler = (e) => {
		e.preventDefault()
		console.log(e.target.value)
		setFieldValue(e.target.value)
	}
	return (
		<div>
			{JSON.stringify(user)}
			<form onSubmit={onSubmitHandler}>
				<input
					onChange={onChangeHandler}
					value={fieldValue}
					name='firstName'
					type="text"
					placeholder='Put your name'
				/>
				<input
					onChange={e => setTask(e.target.value)}
					value={task}
					name='taskName'
					type="text"
					placeholder='Put some task'
				/>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default FetchAxios


import { useState } from 'react'

const Forms = () => {
	const [fieldValue, setFieldValue] = useState('');
	const [task, setTask] = useState('');
	const onSubmitHandler = (e) => {
		e.preventDefault()
		console.log('onClick')
	}
	const onChangeHandler = (e) => {
		e.preventDefault()
		console.log(e.target.value)
		setFieldValue(e.target.value)
	}
	return (
		<div>

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

export default Forms

import React, { useState, useEffect } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

const App = () => {
	const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	const handleFormSubmit = e => {
		e.preventDefault()

		setTodos([
			...todos,
			document.querySelector('form input[name=todo]').value
		])

		document.querySelector('form input[name=todo]').value = ''
	}

	const removeTodo = todo => {
		const newTodos = todos.filter(_todo => todo !== _todo)
		setTodos(newTodos)
	}

	return (
		<>
			<TaskInput submitHandler={handleFormSubmit}/>
			<TaskList todos={todos} removeHandler={removeTodo}/>
		</>
	)
}

export default App
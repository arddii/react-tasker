import React from 'react'

const TaskInput = props => {
	return (
		<form onSubmit={props.submitHandler}>
            <input type="text" name="todo" placeholder="Task title..."></input>
			<input type="submit"/>
        </form>
	)
}

export default TaskInput
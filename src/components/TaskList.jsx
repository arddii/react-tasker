import React from 'react'

const TaskList = props => {
	return (
		<ul>
            {props.todos.map((todo, i) => (
                <div key={i}>
                    <p>{todo} <button onClick={() => props.removeHandler(todo)}>X</button></p>
                </div>
            ))}
        </ul>
	)
}

export default TaskList
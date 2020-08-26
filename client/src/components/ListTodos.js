import React, { useEffect, useState } from "react";
import EditTodo from "./EditTodo";

const ListTodos = ({ todos, setTodos, getTodos }) => {
	useEffect(() => {
		getTodos();
	}, []);

	// delete todo function
	const deleteTodo = async (id) => {
		try {
			const res = await fetch(`http://localhost:5000/todos/${id}`, {
				method: "DELETE",
			});

			setTodos(todos.filter((todo) => todo.todo_id !== id));
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<>
			<table className="table mt-5">
				<thead>
					<tr>
						<th>Description</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{/* <tr>
						<td>John</td>
						<td>Doe</td>
						<td>john@example.com</td>
					</tr> */}

					{todos.map((todo) => {
						return (
							<tr key={todo.todo_id}>
								<td>{todo.description}</td>
								<td>
									<EditTodo todo={todo} />
								</td>
								<td>
									<button
										onClick={() => deleteTodo(todo.todo_id)}
										className="btn btn-danger"
									>
										Delete
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default ListTodos;

import React, { useState } from "react";

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
	const [todos, setTodos] = useState([]);

	async function getTodos() {
		const res = await fetch("http://localhost:5000/todos");

		const todoArray = await res.json();
		setTodos(todoArray);
		console.log(todoArray);
	}
	return (
		<div className="container">
			<InputTodo getTodos={getTodos} />
			<ListTodos todos={todos} setTodos={setTodos} getTodos={getTodos} />
		</div>
	);
}

export default App;

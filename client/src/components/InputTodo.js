import React, { useState } from "react";

const InputTodo = ({ getTodos }) => {
	const [description, setDescription] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const body = { description };
			const response = await fetch("http://localhost:5000/todos", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});
			setDescription("");
			getTodos();
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<>
			<h1 className="text-center my-5">Input Todo</h1>
			<form className="d-flex" onSubmit={handleSubmit}>
				<input
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					type="text"
					placeholder="add todo"
					className="form-control"
				/>
				<button className="btn btn-success">Add</button>
			</form>
		</>
	);
};

export default InputTodo;

import React, { useState } from "react";

const EditTodo = ({ todo }) => {
	const [description, setDescription] = useState(todo.description);

	const editText = async (id) => {
		try {
			const body = { description };

			//proxy

			const res = await fetch(`/todos/${id}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});
			// window.location = "/";
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<>
			<button
				type="button"
				className="btn btn-warning"
				data-toggle="modal"
				data-target={`#id${todo.todo_id}`}
			>
				Edit
			</button>

			<div className="modal" id={`id${todo.todo_id}`}>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">Edit Todo</h4>
							<button
								onClick={() => setDescription(todo.description)}
								type="button"
								className="close"
								data-dismiss="modal"
							>
								&times;
							</button>
						</div>

						<div className="modal-body">
							<input
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								type="text"
								className="form-control"
							/>
						</div>

						<div className="modal-footer">
							<button
								onClick={() => editText(todo.todo_id)}
								type="button"
								className="btn btn-warning"
								data-dismiss="modal"
							>
								Edit
							</button>
							<button
								onClick={() => setDescription(todo.description)}
								type="button"
								className="btn btn-danger"
								data-dismiss="modal"
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default EditTodo;

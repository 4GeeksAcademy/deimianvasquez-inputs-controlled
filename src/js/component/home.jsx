import React, { useState } from "react";


const initialState = {
	label: "",
	done: false
}

//create your first component
const Home = () => {
	//estado que guarda la tarea que estoy escribiendo
	const [task, setTask] = useState(initialState)

	//tareas que ya estan lista para agregarse a mi lista de tarea
	const [listTask, setListTask] = useState([])

	//maneja el error 
	const [error, setError] = useState(false)

	const handleChange = (event) => {

		setTask({
			label: event.target.value,
			done: false
		})

	}

	const handleSavetask = (event) => {

		if (event.key === "Enter") {
			if (task.label.trim() !== "") {
				setListTask([...listTask, task])
				setTask(initialState)
				setError(false)
			} else {
				console.log("Todos los campos son obligatorios")
				setError(true)
			}
		}
	}

	const deleteTask = (id) => {
		let newArr = listTask.filter((_, index) => index != id)

		setListTask(newArr)
	}

	return (
		<>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-6">
						<h1>Mi lista de tareas</h1>
						{error ? <div className="alert alert-danger">Todos los campos son obligatorios</div> : ""}
						<form onSubmit={(event) => event.preventDefault()}>
							<input
								type="text"
								name="label"
								className="form-control"
								placeholder="Agrega una tarea"
								value={task.label}
								onChange={handleChange}
								onKeyDown={handleSavetask}
							/>
						</form>
						<ul>
							{listTask.map((item, index) => {
								return (
									<li key={index} onClick={() => deleteTask(index)}>{item.label}</li>
								)
							})}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;


import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getUsers = () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				axios
					.get("http://localhost:3001/api/users")
					.then((res) => {
						resolve(res);
					})
					.catch((err) => {
						reject(err);
					});
			}, 3000);
		});
	};

	useEffect(() => {
		setIsLoading(true);
		getUsers()
			.then((res) => {
				setUsers(res.data);
			})
			.catch((e) => {
				console.log(e);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);
	return isLoading ? (
		<p>loading...</p>
	) : (
		<div>
			<h1>Users</h1>
			<ul>
				{users.map((user) => (
					<li key={user.id}> {user.name} </li>
				))}
			</ul>
		</div>
	);
}

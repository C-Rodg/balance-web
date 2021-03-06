import React, { Component } from 'react';

import { withFirebase } from '../Firebase';
import { withAuthorization } from '../Session';
import { AUTHENTICATED_USER } from '../../constants/roles.js';

// TODO: consider removing this or providing extra security.
class AdminPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			users: [],
		};
	}

	componentDidMount() {
		this.setState({ loading: true });

		this.props.firebase.users().on('value', (snapshot) => {
			const usersObject = snapshot.val();

			const usersList = Object.keys(usersObject).map((key) => ({
				...usersObject[key],
				uid: key,
			}));

			this.setState({
				users: usersList,
				loading: false,
			});
		});
	}

	componentWillUnmount() {
		this.props.firebase.users().off();
	}

	render() {
		const { users, loading } = this.state;
		return (
			<div className="admin-page">
				<h1>Admin Page</h1>
				{loading && <div>Loading ...</div>}

				<UserList users={users} />
			</div>
		);
	}
}

const UserList = ({ users }) => (
	<ul>
		{users.map((user) => (
			<li key={user.uid}>
				<span>
					<strong>ID:</strong> {user.uid}
				</span>
				<span>
					<strong>E-Mail:</strong> {user.email}
				</span>
				<span>
					<strong>Username:</strong> {user.username}
				</span>
			</li>
		))}
	</ul>
);

export default withAuthorization(AUTHENTICATED_USER)(withFirebase(AdminPage));

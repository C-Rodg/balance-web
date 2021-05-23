import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withAuthorization } from '../Session';
import { AUTHENTICATED_USER } from '../../constants/roles.js';
import * as ROUTES from '../../constants/routes';
import BackButton from '../BackButton';

const INITIAL_STATE = { amount: '' };

class NewExpensePage extends Component {
	constructor(props) {
		super(props);

		this.state = { ...INITIAL_STATE };
	}

	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	onSubmit = (event) => {
		event.preventDefault();
		// save to DB and navigate home
	};

	render() {
		const { amount } = this.state;
		return (
			<div className="new-expense-page">
				<h1>New Expense Page</h1>
				<Link to={ROUTES.SELECT_CATEGORY}>Select Category Page</Link>
				<BackButton />
				<form onSubmit={this.onSubmit}>
					<input
						name="amount"
						value={amount}
						onChange={this.onChange}
						type="text"
						placeholder="Amount"
					/>
				</form>
				<div>
					<div>Topbar - back, add expense text</div>
					<div>
						icon of category, choose/current category button, total budget is
						XXX text
					</div>
					<div>
						<div>Calculator</div>
						<div>input for amount</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withAuthorization(AUTHENTICATED_USER)(NewExpensePage);

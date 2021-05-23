import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { withAuthorization } from '../Session';
import { useHistory} from 'react-router-dom';
import { AUTHENTICATED_USER } from '../../constants/roles.js';
import * as ROUTES from '../../constants/routes';
import BackButton from '../BackButton';

const NewExpensePage = () => {
	// instantiate history
	let history = useHistory();

	// state via hooks
	const[amount, setAmount] = useState(0)

	// check if there was a value previously saved
	useEffect( () => {
		// if the value is saved in the location, set the amount 
		history.location.state !== undefined ? setAmount(history.location.state.expenseAmount) : console.log("no amount");

		// only want this on initial load, to have dependency array is inefficient
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const onChange = (e) => {
		// update state
		setAmount(e.target.value)

		// update the histories state
		history.replace ({ state: {expenseAmount: e.target.value}})
	};

	const onSubmit = (event) => {
		event.preventDefault();
		// save to DB and navigate home
	};

	return (
		<div className="new-expense-page">
			<h1>New Expense Page</h1>
			<Link to={ROUTES.SELECT_CATEGORY}>Select Category Page</Link>
			<BackButton />
			<form onSubmit={onSubmit}>
				<input
					name="amount"
					value={amount}
					onChange={onChange}
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

export default withAuthorization(AUTHENTICATED_USER)(NewExpensePage);

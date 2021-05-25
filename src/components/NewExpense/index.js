import React, { useState, useEffect, componentDidMount, componentWillUnmount } from 'react';
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
	const [amount, setAmount] = useState(0)
	const [categoryObj, setCategoryObj] = useState(null)
	const [categoryRender, setCategoryRender] = useState([])

	// check if there was a value previously saved
	useEffect( () => {
		// if the value is saved in the location, set the amount 
		history.location.state !== undefined ? setAmount(history.location.state.expenseAmount) : console.log("no amount");

		// check for localstorage from child component
		if (localStorage.getItem('category')) {
			// grab the item
			let category = JSON.parse(localStorage.getItem('category'))

			// set the category to state
			setCategoryObj(category)

			// map the object to the ui
			setCategoryRender(
				<div key={category.id}>
					<h3>{category.name}</h3>
				</div>
			)

			// clear the item from storage
			localStorage.removeItem('category')
		}

		// only want this on initial load, to have dependency array is inefficient
	}, [history])

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
			{categoryRender}
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

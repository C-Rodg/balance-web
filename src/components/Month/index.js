import React, { Component } from 'react';

import { withAuthorization } from '../Session';
import { AUTHENTICATED_USER } from '../../constants/roles.js';
import BackButton from '../BackButton';

const INITIAL_STATE = {
	amount: '',
	category: '',
	expenses: [],
	categories: [],
};

// TODO: right now used for testing database layer
class MonthPage extends Component {
	constructor(props) {
		super(props);

		this.state = { ...INITIAL_STATE };
	}

	componentDidMount() {
		this.props.firebase.expensesRef().on('value', (snapshot) => {
			const expensesObject = snapshot.val();
			if (expensesObject) {
				const expenses = Object.keys(expensesObject).map((key) => ({
					...expensesObject[key],
					id: key,
				}));
				console.log(expenses);
				this.setState({ expenses });
			}
		});
		this.props.firebase.categoriesRef().on('value', (snapshot) => {
			const categoriesObject = snapshot.val();
			if (categoriesObject) {
				const categories = Object.keys(categoriesObject).map((key) => ({
					...categoriesObject[key],
					id: key,
				}));
				console.log(categories);
				this.setState({ categories });
			}
		});
	}

	componentWillUnmount() {
		this.props.firebase.expensesRef().off();
		this.props.firebase.categoriesRef().off();
	}

	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	onSubmit = (event) => {
		event.preventDefault();
		// TEST: do nothing for now
	};

	onSaveExpense = async (event) => {
		const { amount } = this.state;
		await this.props.firebase.createNewExpense(amount);
	};

	onSaveNewCategory = async (event) => {
		const { category } = this.state;
		await this.props.firebase.createNewCategory(category);
		//await this.props.firebase.updateExpense('-MaMAFcTzkz74sZw_oCA', '666');
		//await this.props.firebase.deleteExpense('-MaMAFcTzkz74sZw_oCA');
	};

	render() {
		const { amount, category } = this.state;
		return (
			<div className="month-page">
				<h1>Month Page</h1>
				<BackButton />
				<div>
					<div>This is used for testing for now...</div>
					<form onSubmit={this.onSubmit}>
						<input
							name="amount"
							value={amount}
							onChange={this.onChange}
							type="text"
							placeholder="Amount"
						/>
						<input
							name="category"
							value={category}
							onChange={this.onChange}
							type="text"
							placeholder="Category"
						/>
						<button onClick={this.onSaveExpense}>Save Expense</button>
						<button onClick={this.onSaveNewCategory}>Save New Category</button>
					</form>
					<div>{JSON.stringify(this.state.expenses)}</div>
					<div>{JSON.stringify(this.state.categories)}</div>
				</div>
			</div>
		);
	}
}

export default withAuthorization(AUTHENTICATED_USER)(MonthPage);

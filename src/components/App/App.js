import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import AdminPage from '../Admin';
import AddExpensePage from '../AddExpense';
import BudgetsPage from '../Budgets';
import HomePage from '../Home';
import LandingPage from '../Landing';
import MonthPage from '../Month';
import NewBudgetPage from '../NewBudget';
import NewCategoryPage from '../NewCategory';
import PasswordForgetPage from '../PasswordForget';
import SelectCategoryPage from '../SelectCategory';
import SettingsPage from '../Settings';
import SignInPage from '../SignIn';
import SignUpPage from '../SignUp';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
	<Router>
		<div className="App">
			<Route exact path={ROUTES.LANDING} component={LandingPage} />
			<Route path={ROUTES.ADD_EXPENSE} component={AddExpensePage} />
			<Route path={ROUTES.BUDGETS} component={BudgetsPage} />
			<Route path={ROUTES.HOME} component={HomePage} />
			<Route path={ROUTES.MONTH} component={MonthPage} />
			<Route path={ROUTES.NEW_BUDGET} component={NewBudgetPage} />
			<Route path={ROUTES.NEW_CATEGORY} component={NewCategoryPage} />
			<Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
			<Route path={ROUTES.SELECT_CATEGORY} component={SelectCategoryPage} />
			<Route path={ROUTES.SETTINGS} component={SettingsPage} />
			<Route path={ROUTES.SIGN_IN} component={SignInPage} />
			<Route path={ROUTES.SIGN_UP} component={SignUpPage} />
			<Route path={ROUTES.ADMIN} component={AdminPage} />
		</div>
	</Router>
);

export default withAuthentication(App);

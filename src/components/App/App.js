import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import AddExpensePage from '../AddExpense/AddExpense.js';
import BudgetsPage from '../Budgets/Budgets.js';
import HomePage from '../Home/Home.js';
import LandingPage from '../Landing/Landing.js';
import MonthPage from '../Month/Month.js';
import NewBudgetPage from '../NewBudget/NewBudget.js';
import NewCategoryPage from '../NewCategory/NewCategory.js';
import PasswordForgetPage from '../PasswordForget/PasswordForget.js';
import SelectCategoryPage from '../SelectCategory/SelectCategory.js';
import SettingsPage from '../Settings/Settings.js';
import SignInPage from '../SignIn/SignIn.js';
import SignUpPage from '../SignUp/SignUp.js';
import * as ROUTES from '../../constants/routes';

function App() {
	return (
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
			</div>
		</Router>
	);
}

export default App;

import { Link } from 'react-router-dom';

import { withAuthorization } from '../Session';
import SignOutButton from '../SignOut';
import { AUTHENTICATED_USER } from '../../constants/roles.js';
import * as ROUTES from '../../constants/routes';

function HomePage() {
	return (
		<div className="home-page">
			<div>Home Page</div>
			<SignOutButton />
			<Link to={ROUTES.NEW_EXPENSE}>New Expense Page</Link>
			<Link to={ROUTES.MONTH}>Month Page</Link>
			<Link to={ROUTES.SETTINGS}>Settings Page</Link>
			<Link to={ROUTES.BUDGETS}>List Budgets Page</Link>
		</div>
	);
}

export default withAuthorization(AUTHENTICATED_USER)(HomePage);

import { Link } from 'react-router-dom';

import { withAuthorization } from '../Session';
import { AUTHENTICATED_USER } from '../../constants/roles.js';
import * as ROUTES from '../../constants/routes';

function NewExpensePage() {
	return (
		<div className="new-expense-page">
			<h1>New Expense Page</h1>
			<Link to={ROUTES.SELECT_CATEGORY}>Select Category Page</Link>
			<Link to={ROUTES.HOME}>Return Home Page</Link>
		</div>
	);
}

export default withAuthorization(AUTHENTICATED_USER)(NewExpensePage);

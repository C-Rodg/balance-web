import { Link } from 'react-router-dom';

import { withAuthorization } from '../Session';
import { AUTHENTICATED_USER } from '../../constants/roles.js';
import * as ROUTES from '../../constants/routes';

function NewBudgetPage() {
	return (
		<div className="new-budget-page">
			<h1>NewBudgetPage</h1>
			<Link to={ROUTES.BUDGETS}>Return Budgets Page</Link>
		</div>
	);
}

export default withAuthorization(AUTHENTICATED_USER)(NewBudgetPage);

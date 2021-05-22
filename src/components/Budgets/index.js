import { Link } from 'react-router-dom';

import { withAuthorization } from '../Session';
import { AUTHENTICATED_USER } from '../../constants/roles.js';
import * as ROUTES from '../../constants/routes';
import BackButton from '../BackButton';

function BudgetsPage() {
	return (
		<div className="budgets-page">
			<h1>Budgets Page</h1>
			<Link to={ROUTES.NEW_BUDGET}>New Budget Page</Link>
			<BackButton />
		</div>
	);
}

export default withAuthorization(AUTHENTICATED_USER)(BudgetsPage);

import { Link } from 'react-router-dom';

import { withAuthorization } from '../Session';
import { AUTHENTICATED_USER } from '../../constants/roles.js';
import BackButton from '../BackButton';

function NewBudgetPage() {
	return (
		<div className="new-budget-page">
			<h1>NewBudgetPage</h1>
			<BackButton />
		</div>
	);
}

export default withAuthorization(AUTHENTICATED_USER)(NewBudgetPage);

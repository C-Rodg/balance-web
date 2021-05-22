import { Link } from 'react-router-dom';

import { withAuthorization } from '../Session';
import { AUTHENTICATED_USER } from '../../constants/roles.js';
import * as ROUTES from '../../constants/routes';

function SelectCategoryPage() {
	return (
		<div className="select-category-page">
			<h1>SelectCategoryPage</h1>
			<Link to={ROUTES.NEW_CATEGORY}>New Category Page</Link>
			<Link to={ROUTES.NEW_EXPENSE}>Return New Expense Page</Link>
		</div>
	);
}

export default withAuthorization(AUTHENTICATED_USER)(SelectCategoryPage);

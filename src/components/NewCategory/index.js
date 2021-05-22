import { Link } from 'react-router-dom';

import { withAuthorization } from '../Session';
import { AUTHENTICATED_USER } from '../../constants/roles.js';
import * as ROUTES from '../../constants/routes';

function NewCategoryPage() {
	return (
		<div className="new-category-page">
			<h1>NewCategoryPage</h1>
			<Link to={ROUTES.SELECT_CATEGORY}>Return Select Category Page</Link>
			<div>
				<div>Select icon</div>
				<div>Set category name</div>
			</div>
		</div>
	);
}

export default withAuthorization(AUTHENTICATED_USER)(NewCategoryPage);

import { Link } from 'react-router-dom';

import { withAuthorization } from '../Session';
import { AUTHENTICATED_USER } from '../../constants/roles.js';
import BackButton from '../BackButton';

function NewCategoryPage() {
	return (
		<div className="new-category-page">
			<h1>NewCategoryPage</h1>
			<BackButton />
			<div>
				<div>Select icon</div>
				<div>Set category name</div>
			</div>
		</div>
	);
}

export default withAuthorization(AUTHENTICATED_USER)(NewCategoryPage);

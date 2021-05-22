import { withAuthorization } from '../Session';
import { AUTHENTICATED_USER } from '../../constants/roles.js';

function NewCategoryPage() {
	return <div className="new-category-page">NewCategoryPage</div>;
}

export default withAuthorization(AUTHENTICATED_USER)(NewCategoryPage);

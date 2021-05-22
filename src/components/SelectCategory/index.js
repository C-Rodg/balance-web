import { withAuthorization } from '../Session';
import { AUTHENTICATED_USER } from '../../constants/roles.js';

function SelectCategoryPage() {
	return <div className="select-category-page">SelectCategoryPage</div>;
}

export default withAuthorization(AUTHENTICATED_USER)(SelectCategoryPage);

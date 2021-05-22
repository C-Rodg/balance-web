import { withAuthorization } from '../Session';
import { AUTHENTICATED_USER } from '../../constants/roles.js';

function AddExpensePage() {
	return <div class="add-expense-page">AddExpensePage</div>;
}

export default withAuthorization(AUTHENTICATED_USER)(AddExpensePage);

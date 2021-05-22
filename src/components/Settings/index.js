import React from 'react';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { AuthUserContext, withAuthorization } from '../Session';
import SignOutButton from '../SignOut';
import { AUTHENTICATED_USER } from '../../constants/roles.js';

function SettingsPage() {
	return (
		<AuthUserContext.Consumer>
			{(authUser) => (
				<div className="settings-page">
					<div>Settings Page</div>
					<div>{authUser.email}</div>
					<PasswordForgetForm />
					<PasswordChangeForm />
					<SignOutButton />
				</div>
			)}
		</AuthUserContext.Consumer>
	);
}

export default withAuthorization(AUTHENTICATED_USER)(SettingsPage);

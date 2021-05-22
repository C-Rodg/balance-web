import React from 'react';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { AuthUserContext, withAuthorization } from '../Session';
import SignOutButton from '../SignOut';

function SettingsPage() {
	return (
		<AuthUserContext.Consumer>
			{(authUser) => (
				<div class="settings-page">
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

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(SettingsPage);

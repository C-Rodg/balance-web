import React from 'react';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

function SettingsPage() {
	return (
		<div class="settings-page">
			<div>Settings Page</div>
			<PasswordForgetForm />
			<PasswordChangeForm />
		</div>
	);
}

export default SettingsPage;

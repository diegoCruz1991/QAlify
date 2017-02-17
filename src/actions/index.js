import axios from 'axios';

export const FETCH_CONFIGURATION = 'FETCH_CONFIGURATION';

export function fetchConfiguration() {
	const request = {
		proyect: {
			name: "IQ Standalone"
		},
		user: {
			name: "Diego Cruz",
			type: "Admin"
		}
	}			

	return {
		type: FETCH_CONFIGURATION,
		payload: request
	};
}
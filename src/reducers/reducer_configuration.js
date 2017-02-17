import { FETCH_CONFIGURATION } from '../actions'

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_CONFIGURATION:
			return action.payload
	}
	return state;
}
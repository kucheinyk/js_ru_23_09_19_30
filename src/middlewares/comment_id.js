import { ADD_COMMENT } from '../constants';

export default store => next => action => {
	const { type, payload } = action

	switch (type) {
		case ADD_COMMENT: {
			let comments = store.getState().comments
			action.payload.id = Object.keys(comments).length
			break;
		}
	}

	next(action)
}
import { ADD_COMMENT } from '../constants'

export function addComment(comment) {
	return {
		type: ADD_COMMENT,
		payload: comment
	}
}
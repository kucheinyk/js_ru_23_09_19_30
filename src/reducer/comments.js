import { normalizedComments } from '../fixtures'
import { arrayToMap } from '../store/helpers'
import { ADD_COMMENT } from '../constants'
import { Record } from 'immutable'

const record = new Record({
    id : null,
    user : null,
    text: null
})

export default (comments = arrayToMap(normalizedComments, record), action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case ADD_COMMENT:
        {
            let newComment = {[payload.id]: new record(payload)}
            return {...comments, ...newComment}
        }
    }

    return comments
}
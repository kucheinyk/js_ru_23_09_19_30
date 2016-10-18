import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { arrayToMap } from '../store/helpers'
import { Record } from 'immutable'

let record = new Record({
    id: null,
    date: null,
    title: null,
    text: null,
    comments: null
})

export default (articles = arrayToMap(normalizedArticles, record), action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE: {
            return articles.filter(article => article.id != payload.id)
            break;
        }
        case ADD_COMMENT: {
            let { articleId, id } = payload
            articles[articleId].set('comments', articles[articleId].get('comments').push(id))
        }
    }

    return articles
}

//import store from './index'

export function getRelation(entity, relation, storeState) {
    if (!entity[relation] || !storeState[relation]) return []
    return entity[relation].map(id => storeState[relation][id])
}

export function arrayToMap(arr, Record) {
    return arr.reduce((acc, entity) => (
        {...acc, [entity.id]: new Record(entity)}
    ), {})
}
import { URL_UPDATE, PATH_UPDATE, REQ_HAL, REQ_HAL_SUCCESS, REQ_HAL_ERROR } from '../action/HalAction'

export function halReducer(state, action) {
    switch (action.type) {
        case URL_UPDATE:
            return handleUrlUpdate(state, action)
        case PATH_UPDATE:
            return handlePathUpdate(state, action)
        case REQ_HAL:
            return handleRequestHal(state, action)
        case REQ_HAL_SUCCESS:
            return handleRequestHalSuccess(state, action)
        case REQ_HAL_ERROR:
            return handleRequestHalError(state, action)
            
        default:
            return state
    }
}

function handleUrlUpdate(state, action) {
    return Object.assign({}, state, {url: action.url})
}

function handlePathUpdate(state, action) {
    return Object.assign({}, state, {path: action.path})
}

function handleRequestHal(state, action) {
    return Object.assign({}, state, {isBusy: true})
}

function handleRequestHalSuccess(state, action) {
    return Object.assign({}, state, {
        isBusy: false,
        resource: action.resource,
        err: undefined
    })
}

function handleRequestHalError(state, action) {
    return Object.assign({}, state, {
        isBusy: false,
        resource: null,
        err: action.err
    })
}
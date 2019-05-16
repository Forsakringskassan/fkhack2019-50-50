import { REQUEST_ACCOUNT, REQUEST_ACCOUNT_SUCCESS, REQUEST_ACCOUNT_ERROR } from '../action/AccountEntityAction'

export function accountEntityReducer(state = { isBusy: false, allIds: [] }, action) {
    switch (action.type) {
        case REQUEST_ACCOUNT:
            return handleRequestAccount(state, action)
        case REQUEST_ACCOUNT_SUCCESS:
            return handleRequestAccountSuccess(state, action)
        case REQUEST_ACCOUNT_ERROR:
            return handleRequestAccountError(state, action)
        default:
            return state
    }
}

function handleRequestAccount(state, action) {
    return Object.assign({}, state, { isBusy: true })
}

function handleRequestAccountSuccess(state, action) {
    return Object.assign({}, state, { isBusy: false })
}

function handleRequestAccountError(state, action) {
    return Object.assign({}, state, { isBusy: false })
}
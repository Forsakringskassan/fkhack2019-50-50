import { REQUEST_CUSTOMER, REQUEST_CUSTOMER_SUCCESS, REQUEST_CUSTOMER_ERROR, SELECT_CUSTOMER } from '../action/CustomerEntityAction'

export function customerEntityReducer(state = { isBusy: false, byId: {}, allIds: [], selectedCustomerId: null }, action) {
    switch (action.type) {
        case REQUEST_CUSTOMER:
            return handleRequestCustomer(state, action)
        case REQUEST_CUSTOMER_SUCCESS:
            return handleRequestCustomerSuccess(state, action)
        case REQUEST_CUSTOMER_ERROR:
            return handleRequestCustomerError(state, action)
        case SELECT_CUSTOMER:
            return handleSelectCustomer(state, action)
        default:
            return state
    }
}

function handleRequestCustomer(state, action) {
    return Object.assign({}, state, { isBusy: true })
}

function handleRequestCustomerSuccess(state, action) {
    const newstate = Object.assign({}, state, { isBusy: false })
    newstate.byId[action.customer.id] = action.customer

    return newstate
}

function handleRequestCustomerError(state, action) {
    return Object.assign({}, state, { isBusy: false })
}

function handleSelectCustomer(state, action) {
    return Object.assign({}, state, {selectedCustomerId: action.id})
}
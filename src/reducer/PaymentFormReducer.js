import {PAYMENT_FORM_UPDATED} from '../action/PaymentFormAction'

export function paymentFormReducer(state = {}, action) {
    switch (action.type) {
        case PAYMENT_FORM_UPDATED:
            return handlePaymentFormUpdated(state, action)
        default:
            return state
    }
}

function handlePaymentFormUpdated(state, action) {
    return Object.assign({}, state, action.data)
}
import { REQUEST_PAYMENT, REQUEST_PAYMENT_SUCCESS, REQUEST_PAYMENT_ERROR } from '../action/PaymentEntityAction'

export function paymentEntityReducer(state = { isBusy: false, byCustomerId: {}, allIds: [] }, action) {
    switch (action.type) {
        case REQUEST_PAYMENT:
            return handleRequestPayment(state, action)
        case REQUEST_PAYMENT_SUCCESS:
            return handleRequestPaymentSuccess(state, action)
        case REQUEST_PAYMENT_ERROR:
            return handleRequestPaymentError(state, action)
        default:
            return state
    }
}

function handleRequestPayment(state, action) {
    return Object.assign({}, state, { isBusy: true })
}

function handleRequestPaymentSuccess(state, action) {
    let newstate = Object.assign({}, state, { isBusy: false })
    action.payments._emdedded.forEach(payment => {
        const customerId = payment.to
        newstate.byCustomerId[customerId] = payment
    })

    return newstate
}

function handleRequestPaymentError(state, action) {
    return Object.assign({}, state, { isBusy: false })
}
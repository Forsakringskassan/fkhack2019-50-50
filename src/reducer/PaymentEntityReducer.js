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
    const newstate = Object.assign({}, state, { isBusy: false })

    if(!action.payments || !action.payments._embedded) {
        return newstate
    }
    
    action.payments._embedded['rel:payment'].forEach(payment => {
        const customerId = payment.payment_to

        if(!newstate.byCustomerId[customerId]) {
            newstate.byCustomerId[customerId] = []  
        }

        newstate.byCustomerId[customerId].push(payment)
    })

    return newstate
}

function handleRequestPaymentError(state, action) {
    return Object.assign({}, state, { isBusy: false })
}
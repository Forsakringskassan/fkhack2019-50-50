import React, { Component } from 'react';
import { Container, Form, Input, Header, Table, Modal, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchCustomer, selectCustomer } from '../action/CustomerEntityAction'
import { fetchPayment } from '../action/PaymentEntityAction'
import { updatePaymentForm, postPayment } from '../action/PaymentFormAction'



function NewPaymentModal(props) {

    return (
        <Modal trigger={<Button>New payment</Button>} size='small'>
            <Header icon='archive' content='Archive Old Messages' />
            <Modal.Content>
            <Form>
                <Form.Field>
                    <label>Payment Date</label>
                    <input type='text' value={props.paymentDate} onChange={(e) => props.onUpdate({payment_to: props.id, paymentDate: e.target.value})}></input>
                </Form.Field>
                <Form.Field>
                    <label>From</label>
                    <input type='text' value={props.from} onChange={(e) => props.onUpdate({payment_to: props.id, from: e.target.value})}></input>
                </Form.Field>
                <Form.Field>
                    <label>Amount</label>
                    <input type='text' value={props.amount} onChange={(e) => props.onUpdate({payment_to: props.id, amount: e.target.value})}></input>
                </Form.Field>
                <Form.Field>
                    <label>Currency</label>
                    <input type='text' value={props.currency} onChange={(e) => props.onUpdate({payment_to: props.id, currency: e.target.value})}></input>
                </Form.Field>
            </Form>
                
            </Modal.Content>
            <Modal.Actions>
                <Button basic color='red' inverted>
                    <Icon name='remove' /> No
                </Button>
                <Button color='green' inverted onClick={(e) => props.onSave(props.data)}>
                    <Icon name='checkmark' /> Yes
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

function Payments(props) {
    const payments = props.payments ? props.payments.map(p => {
        return (
            <Table.Row>
                <Table.Cell>{props.payment_date}</Table.Cell>
                <Table.Cell>{props.creation_date}</Table.Cell>
                <Table.Cell>{props.payment_from}</Table.Cell>
                <Table.Cell>{props.payment_to}</Table.Cell>
                <Table.Cell>{props.amount}</Table.Cell>
                <Table.Cell>{props.currency}</Table.Cell>
            </Table.Row>
        )
    }) : []

    return (
        < Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Payment Date</Table.HeaderCell>
                    <Table.HeaderCell>Creation Date</Table.HeaderCell>
                    <Table.HeaderCell>From</Table.HeaderCell>
                    <Table.HeaderCell>To</Table.HeaderCell>
                    <Table.HeaderCell>Amount</Table.HeaderCell>
                    <Table.HeaderCell>Currency</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {payments}
            </Table.Body>
        </Table >
    )
}

class Customer extends Component {

    componentDidMount() {
        this.props.fetchCustomer(this.props.id)
        this.props.selectCustomer(this.props.id)
        this.props.fetchPayment(this.props.id)
    }

    render() {
        return (
            <Container loading={this.props.isBusy.toString()}>
                <Header size='medium'>Customer</Header>
                <Form>
                    <Form.Field>
                        <label>Id</label>
                        <Input>{this.props.id}</Input>
                    </Form.Field>
                    <Form.Field>
                        <label>Name</label>
                        <Input>{this.props.name}</Input>
                    </Form.Field>
                    <Form.Field>
                        <label>Payment Method</label>
                        <Input>{this.props.paymentMethod}</Input>
                    </Form.Field>
                </Form>
                <NewPaymentModal id={this.props.id} data={this.props.paymentForm} onUpdate={this.props.updatePaymentForm} onSave={this.props.postPayment}></NewPaymentModal>
                <Payments payments={this.props.payments}></Payments>

            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    if (state.customers.isBusy || state.payments.isBusy || !state.customers.selectedCustomerId) {
        return {
            isBusy: true,
            name: null,
            paymentMethod: null,
            payments: [],
            paymentForm: null
        }
    }


    return {
        isBusy: true,
        name: state.customers.byId[state.customers.selectedCustomerId].name,
        paymentMethod: state.customers.byId[state.customers.selectedCustomerId].paymentMethod,
        payments: state.payments.byCustomerId[state.customers.selectedCustomerId],
        paymentForm: state.paymentForm
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCustomer: (id) => dispatch(fetchCustomer(id)),
        selectCustomer: (id) => dispatch(selectCustomer(id)),
        fetchPayment: (id) => dispatch(fetchPayment(id)),
        updatePaymentForm: (data) => dispatch(updatePaymentForm(data)),
        postPayment: (payment) => dispatch(postPayment(payment))
    }
}

export const CustomerContainer = connect(mapStateToProps, mapDispatchToProps)(Customer)
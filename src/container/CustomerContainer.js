import React, { Component } from 'react';
import { Container, Form, Input, Header, Table } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchCustomer, selectCustomer } from '../action/CustomerEntityAction'
import { fetchPayment } from '../action/PaymentEntityAction'

function Payments(props) {
    const payments = props.payments.map(p => {
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
    })

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
            payments: []
        }
    }


    return {
        isBusy: true,
        name: state.customers.byId[state.customers.selectedCustomerId].name,
        paymentMethod: state.customers.byId[state.customers.selectedCustomerId].paymentMethod,
        payments: state.payments.byCustomerId[state.customers.selectedCustomerId]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCustomer: (id) => dispatch(fetchCustomer(id)),
        selectCustomer: (id) => dispatch(selectCustomer(id)),
        fetchPayment: (id) => dispatch(fetchPayment(id))
    }
}

export const CustomerContainer = connect(mapStateToProps, mapDispatchToProps)(Customer)
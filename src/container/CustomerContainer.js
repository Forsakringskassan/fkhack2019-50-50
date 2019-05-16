import React, { Component } from 'react';
import { Container, Form, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchCustomer, selectCustomer } from '../action/CustomerEntityAction'

class Customer extends Component {

    componentDidMount() {
        this.props.fetchCustomer(this.props.id)
        this.props.selectCustomer(this.props.id)
    }

    render() {
        return (
            <Container loading={this.props.isBusy.toString()}>
                <Form>
                    <Form.Field>
                        <label>Id</label>
                        {/* <input readOnly={true} type='text' value={this.props.id}></input> */}
                        <Input>{this.props.id}</Input>
                    </Form.Field>
                    <Form.Field>
                        <label>Name</label>
                        {/* <input readOnly={true} type='text' value={this.props.name}></input> */}
                        <Input>{this.props.name}</Input>
                    </Form.Field>
                    <Form.Field>
                        <label>Payment Method</label>
                        {/* <input readOnly={true} type='text' value={this.props.paymentMethod}></input> */}
                        <Input>{this.props.paymentMethod}</Input>
                    </Form.Field>
                </Form>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isBusy: state.customers.isBusy,
        name: state.customers.selectedCustomerId ? state.customers.byId[state.customers.selectedCustomerId].name : null,
        paymentMethod: state.customers.selectedCustomerId ? state.customers.byId[state.customers.selectedCustomerId].paymentMethod : null,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCustomer: (id) => dispatch(fetchCustomer(id)),
        selectCustomer: (id) => dispatch(selectCustomer(id))
    }
}

export const CustomerContainer = connect(mapStateToProps, mapDispatchToProps)(Customer)
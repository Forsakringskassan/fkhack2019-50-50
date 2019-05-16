import React, { Component } from 'react';
import { connect } from 'react-redux'
import { urlUpdate, pathUpdate, fetchHal } from '../action/HalAction'
import { Button } from 'semantic-ui-react'

class Hal extends Component {
    constructor() {
        super()
    }

    render() {
        return (<div>
            <input type='text' onChange={(evt) => this.props.onUrlUpdated(evt.target.value)} ></input>
            <input type='text' onChange={(evt) => this.props.onPathUpdated(evt.target.value)}></input>
            <button>Fetch</button>
            <Button>Fetch</Button>
            <div>{JSON.stringify(this.props.resource)}</div>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        url: state.url,
        path: state.path,
        resource: state.resource
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onUrlUpdated: (url) => dispatch(urlUpdate(url)),
        onPathUpdated: (path) => dispatch(pathUpdate(path)),
        onFetch: (url, path) => dispatch(fetchHal(url, path))
    }
}

export const HalContainer = connect(mapStateToProps, mapDispatchToProps)(Hal)

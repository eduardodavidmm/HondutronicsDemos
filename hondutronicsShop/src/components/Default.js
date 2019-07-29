import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center pt-5">
                        <h1 className="display-3">404</h1>
                        <h1>Error</h1>
                        <h1>Página no encontrada</h1>

                        <h3>La URL {this.props.location.pathname}{" "} no existe o no pudo ser encontrada</h3>
                    </div>
                </div>
            </div>
        )
    }
}

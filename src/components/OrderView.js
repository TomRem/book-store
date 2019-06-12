import React, { Component } from 'react'

export class OrderView extends Component {
    render() {
        return (
            <div>
                <span>{this.props.book.name}</span>
                <button className="btn btn-danger" onClick={(event) => this.props.removeFromOrder(this.props.book.name)}>
                    Usuń</button>
                <hr />
            </div>
        )
    }
}

export default OrderView

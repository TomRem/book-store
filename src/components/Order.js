import React, { Component } from 'react'
import OrderView from './OrderView'

export class Order extends Component {
    render() {

        const orderedBooks = this.props.order.map(order => {
            return <OrderView book={order} removeFromOrder={this.props.removeFromOrder} />
        })

        return (
            <div className="order col-md-4">
                {orderedBooks}
            </div>
        )
    }
}

export default Order

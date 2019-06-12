import React, { Component } from 'react'
import BookView from './BookView';

export class Inventory extends Component {
    render() {

        let bookListing = this.props.books.map(book => {
            return <BookView book = {book} addToOrder = {this.props.addToOrder} />
        })

        return (
            <div className="inventory col-md-4">
                {bookListing}
            </div>
        )
    }
}

export default Inventory

import React, { Component } from 'react'

export class BookView extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.book.name}</h1>
                <img src={this.props.book.image} alt={this.props.book.name} />
                <h3>{this.props.book.description}</h3>
                <p>{this.props.book.author}</p>
                <button className="btn btn-primary" onClick={(event) => this.props.addToOrder(this.props.book)}>
                    Dodaj</button>
                <hr />
            </div>
        )
    }
}

export default BookView

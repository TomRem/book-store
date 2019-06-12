import React, { Component } from 'react'

export class AdminPanel extends Component {

    state = {
        book: {
            name: "",
            author: "",
            description: "",
            onStock: true,
            image: ""
        },
        books: []
    }

    handleChange = (event) => {
        let book;
        if (event.target.name === "onStock") {
            book = {
                ...this.state.book,
                [event.target.name]: event.target.checked
            }
        } else {
            book = {
                ...this.state.book,
                [event.target.name]: event.target.value
            }
        }
        this.setState({
            book,
        })
    }

    addNewBook = (event) => {
        event.preventDefault();

        let book = { ...this.state.book };
        
        this.props.addBook(book);

        this.setState({
            book: {
                name: "",
                author: "",
                description: "",
                onStock: true,
                image: ""
            }
        })
    }

    render() {
        return (
            <div className="adminPanel col-md-4">
                <form onSubmit={this.addNewBook}>
                    <div className="form-group">
                        <input type="text" placeholder="Moto name" id="name" name="name" className="form-control"
                            onChange={this.handleChange} value={this.state.book.name} />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Moto author" id="author" name="author" className="form-control"
                            onChange={this.handleChange} value={this.state.book.author} />
                    </div>
                    <div className="form-group">
                        <textarea type="text" placeholder="Moto description" id="description" name="description" className="form-control"
                            onChange={this.handleChange} value={this.state.book.description} />
                    </div>
                    <div className="form-group check">
                        <input type="checkbox" id="onStock" name="onStock" className="form-check-input"
                            onChange={this.handleChange} value={this.state.book.onStock} />
                        <label htmlFor="onStock" className="form-check-label">On stock</label>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Image" id="image" name="image" className="form-control"
                            onChange={this.handleChange} value={this.state.book.image} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default AdminPanel

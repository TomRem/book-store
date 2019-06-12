import React, { Component } from 'react'

export class Header extends Component {
    state = {
        bookStoreName: "Black Moto",
        isCLicked: true,
        textColor: "white",
        backgroundColor: "black"
    };

    handleCLick = () => {

        if (this.state.isCLicked) {
            this.setState({
                textColor: "black",
                backgroundColor: "white",
                bookStoreName: "White Moto"
            })
        }
        else {
            this.setState({
                bookStoreName: "Black Moto",
                textColor: "white",
                backgroundColor: "black"
            })
        }
        this.setState({
            isCLicked: !this.state.isCLicked,
        })
    }

    render() {

        let headerCss = {
            color: this.state.textColor,
            backgroundColor: this.state.backgroundColor
        }

        return (
            <div className="row header" >
                <div className="col" style={headerCss} onClick={this.handleCLick}>
                    <h1>{this.state.bookStoreName}</h1>
                </div>
            </div>

        )
    }

}

export default Header

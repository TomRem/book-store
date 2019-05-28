import React, { Component } from 'react';
import AdminPanel from './AdminPanel';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import '../index.css';

class App extends Component {

    render() {
        return (
            <div className="app container-fluid">
                <Header />
                <div className="row">
                    <Order />
                    <Inventory />
                    <AdminPanel />
                </div>
            </div>
        )
    }
}

export default App;
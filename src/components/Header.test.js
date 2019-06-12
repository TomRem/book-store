import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({
    adapter: new Adapter()
});

describe('Header tests', () => {

    it('Header renders without a problem', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('Header changes text according to state', () => {
        const wrapper = shallow(<Header/>);
        // console.log(wrapper.debug());
        expect(wrapper.find('h1').text()).toBe('Black Moto');
        wrapper.setState({
            bookStoreName: "White Moto"
        })
        expect(wrapper.find('h1').text()).toBe('White Moto');
    })

    it('Header state changes after handleClick' , () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper.state().bookStoreName).toBe('Black Moto');
        wrapper.find('.col').simulate('click');
        expect(wrapper.state().bookStoreName).toBe('White Moto');
    })

    it('Snapshot matches', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toMatchSnapshot();
    })
})
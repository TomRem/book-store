import React from 'react';
import ReactDOM from 'react-dom';
import OrderView from './OrderView';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({
    adapter: new Adapter()
});

describe('OrderView tests', () => {

    it('Snapshot matches', () => {
        const book = {
            name: 'Book Title'
        }
        const wrapper = shallow(<OrderView book={book} />);
        expect(wrapper).toMatchSnapshot();
    })

    it('Props and title of book is the same', () => {
        const book = {
            name: 'Book Title'
        }
        const wrapper = shallow(<OrderView book={book} />);
        expect(wrapper.find('div').find('span').text()).toBe(book.name);
    })
})
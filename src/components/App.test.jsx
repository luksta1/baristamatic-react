import App from './App';
import Beverage from './Beverage'
import { menu, inventory } from '../js/menu-inventory.js'

it('renders correctly', () => {
    const wrapper = shallow(
        <App />
    )

    expect(wrapper).toMatchSnapshot();
})

it('renders the menu on state correctly', () => {
    const wrapper = shallow(
        <App />
    )

    expect(JSON.stringify(wrapper.state().menu)).toBe(JSON.stringify({ ...menu }))
})

it('renders the inventory on state correctly', () => {
    const wrapper = shallow(
        <App />
    )

    expect(JSON.stringify(wrapper.state().inventory)).toBe(JSON.stringify({ ...inventory }))
})

it('renders the beverage component 6 times', () => {
    const wrapper = shallow(
        <App />
    )

    expect(wrapper.find(Beverage).length).toEqual(6);
})
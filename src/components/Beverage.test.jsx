import Beverage from './Beverage'
import { menu, inventory } from '../js/menu-inventory.js'

it('calls calculateStock on click', () => {
    const spy = sinon.spy();
    const wrapper = mount(
        <Beverage calculateStock={spy} beverage={menu.cappuccino} />
    );

    wrapper
        .find('.beverageCard')
        .first()
        .simulate('click');

    expect(spy.calledOnce).toBe(true)
})
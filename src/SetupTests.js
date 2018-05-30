import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';
import sinon from 'sinon';

// set the default serializer for Jest to be the one from enzyme-to-json
// this produces an easier to readserialized format
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

// react 16 enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// make enzyme functions available throughout all test files without importing
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.sinon = sinon;


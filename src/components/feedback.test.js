import React from 'react';
import {shallow} from 'enzyme';
 
import {Feedback} from "./feedback";

describe ('<Feedback />', () => {
    it('renders without crashing', () => {
        shallow(<Feedback />);
    });
});

it('renders feedback', () => {
    let test_feedback = "testing feedback";
    let wrapper = shallow(<Feedback feedback={test_feedback}/>);
    expect(wrapper.contains(test_feedback)).toEqual(true);
});
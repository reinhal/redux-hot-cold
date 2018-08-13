import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessForm} from './guess-form';
import { makeGuess } from '../actions';

describe('<GuessForm />', () => {
    it('should render without crashing', () => {
        shallow(<GuessForm />);
    });
});

it('should dispatch onMakeGuess when form is submitted', () => {
    const dispatch = jest.fn();
    const wrapper = mount(<GuessForm dispatch={dispatch} />);
    const value = '50';
    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.simulate('submit');
    expect(dispatch).toHaveBeenCalledWith(makeGuess(value));
});

it('should also reset input when form is submitted', () => {
    const wrapper = mount(<GuessForm dispatch={() => {}} />);
    const input = wrapper.find('input[type="number"]');
    input.instance().value = 50;
    wrapper.simulate('submit');
    expect(input.instance().value).toEqual('');
});

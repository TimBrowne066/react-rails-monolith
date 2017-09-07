import CerealsIndexContainer from '../../src/containers/CerealsIndexContainer';
import CerealTile from '../../src/components/CerealTile';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('CerealsIndexContainer', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(<CerealsIndexContainer />);
  });

  it('should should have the specified inital state', () => {
    expect(wrapper.state()).toEqual({ cereals: [] });
  });

  it('should render a Cereal Tile', () => {
    expect(wrapper.find(CerealTile)).toBePresent();
  });

});

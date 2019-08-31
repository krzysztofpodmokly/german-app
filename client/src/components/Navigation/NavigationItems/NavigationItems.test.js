import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({ adapter: new Adapter() });

describe('<NavigationItems />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });

  it('should render three <NavigationItem /> elements', () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });

  it('should render one <NavigationItem /> element', () => {
    expect(
      wrapper.contains(
        <NavigationItem link='/search-engine'>Search Engine</NavigationItem>
      )
    ).toEqual(true);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('CardComponent', () => {
  const app = shallow(<Card></Card>);


  it('expect to render Card component', () => {
    // 'shallow' nos permite testear componentes sin depender de sus sub-componentes (poco-profundo)
    expect(app).toMatchSnapshot();
  });
})

import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

describe('CardListComponent', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'Señor Pepe',
      username: 'SrPepe',
      email: 'srpepe@email.com',
    },
  ];
  const app = shallow(<CardList robots={mockRobots}></CardList>);


  it('expect to render CardList component', () => {
    
    // 'shallow' nos permite testear componentes sin depender de sus sub-componentes (poco-profundo)
    expect(app).toMatchSnapshot();
  });
})

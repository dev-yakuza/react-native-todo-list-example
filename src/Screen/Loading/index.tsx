import React, {useContext, useEffect} from 'react';
import Styled from 'styled-components/native';
import {NavigationScreenProp, NavigationState} from 'react-navigation';

import {TodoContext} from '~/Context/Todo';

const Container = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Label = Styled.Text`
    font-size: 18px;
`;

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

const Loading = ({navigation}: Props) => {
  const {isLoad} = useContext<ITodoContext>(TodoContext);

  useEffect(() => {
    if (isLoad) {
      setTimeout(() => {
        navigation.navigate('MainNavi');
      }, 2000);
    }
  }, [isLoad]);

  return (
    <Container>
      <Label>Loading...</Label>
    </Container>
  );
};

export default Loading;

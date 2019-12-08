import React, {useContext, useState} from 'react';
import {Keyboard} from 'react-native';
import Styled from 'styled-components/native';
import {NavigationScreenProp, NavigationState} from 'react-navigation';
import {NavigationStackScreenProps} from 'react-navigation-stack';

import {TodoContext} from '~/Context/Todo';

const Container = Styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  background-color: #E0E0E0;
`;
const TodoInput = Styled.TextInput`
  background-color: #FFFFFF;
  margin: 8px;
  font-size: 18px;
  padding: 8px;
  border-radius: 4px;
  border: 1px;
`;
const AddButton = Styled.TouchableOpacity`
  background-color: #212121;
  margin: 8px 8px 200px 8px;
  padding: 8px;
  border-radius: 4px;
`;
const ButtonLabel = Styled.Text`
  color: #FFFFFF;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

const AddTodo = ({navigation}: Props) => {
  const {addTodo} = useContext<ITodoContext>(TodoContext);
  const [todo, setTodo] = useState<string>('');

  return (
    <Container onPress={Keyboard.dismiss} activeOpacity={1}>
      <TodoInput
        onChangeText={text => {
          setTodo(text);
        }}
        value={todo}
      />
      <AddButton
        onPress={() => {
          if (todo) {
            addTodo(todo);
            setTodo('');
            navigation.goBack();
          }
        }}>
        <ButtonLabel>Add</ButtonLabel>
      </AddButton>
    </Container>
  );
};

AddTodo.navigationOptions = ({navigation}: NavigationStackScreenProps) => {
  return {
    title: 'Create New Todo',
  };
};

export default AddTodo;

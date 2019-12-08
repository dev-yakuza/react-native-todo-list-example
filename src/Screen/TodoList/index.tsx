import React, {useContext} from 'react';
import {FlatList, Button} from 'react-native';
import Styled from 'styled-components/native';
import {NavigationStackScreenProps} from 'react-navigation-stack';

import {TodoContext} from '~/Context/Todo';

import TodoItem from './TodoItem';

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #E0E0E0;
`;
const EmptyContainer = Styled.View`
  flex: 1;
  padding: 20px;
`;
const LabelContainer = Styled.View`
  flex: 1;
  background-color: #FFFFFF;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;
const Label = Styled.Text`
  font-size: 18px;
`;
const TodoList = () => {
  const {todoList, deleteTodo} = useContext<ITodoContext>(TodoContext);

  return (
    <Container>
      <FlatList
        data={todoList}
        keyExtractor={(todo: string, index: number) => `todo-${index}`}
        contentContainerStyle={todoList.length === 0 ? {flexGrow: 1} : null}
        renderItem={({item, index}) => (
          <TodoItem todo={item} onPress={() => deleteTodo(index)} />
        )}
        ListEmptyComponent={
          <EmptyContainer>
            <LabelContainer>
              <Label>Todo List is empty!</Label>
              <Label>Let's add new Todo</Label>
            </LabelContainer>
          </EmptyContainer>
        }
      />
    </Container>
  );
};

TodoList.navigationOptions = ({navigation}: NavigationStackScreenProps) => {
  return {
    title: 'TodoList',
    headerRight: (
      <Button title="+ Add" onPress={() => navigation.navigate('AddTodo')} />
    ),
  };
};

export default TodoList;

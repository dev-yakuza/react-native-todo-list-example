import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View``;
const TodoContainer = Styled.View`
  flex-direction: row;
  background-color: #FFFFFF;
  margin: 8px;
  padding: 8px 16px;
  border-radius: 4px;
  align-items: center;
`;
const TodoLabel = Styled.Text`
  flex: 1;
  font-size: 18px;
`;
const DeleteButton = Styled.TouchableOpacity`
  background-color: #E65100;
  padding: 8px 24px;
`;
const ButtonLabel = Styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #FFFFFF;
`;

interface Props {
  todo: string;
  onPress: () => void;
}
const TodoItem = ({todo, onPress}: Props) => {
  return (
    <Container>
      <TodoContainer>
        <TodoLabel>{todo}</TodoLabel>
        <DeleteButton onPress={onPress}>
          <ButtonLabel>DEL</ButtonLabel>
        </DeleteButton>
      </TodoContainer>
    </Container>
  );
};

export default TodoItem;

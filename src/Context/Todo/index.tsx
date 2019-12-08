import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const TodoContext = createContext<ITodoContext>({
  isLoad: false,
  todoList: [],
  addTodo: (todo: string) => {},
  deleteTodo: (index: number) => {},
});

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const TodoContextProvider = ({children}: Props) => {
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [todoList, setTodoList] = useState<Array<string>>([]);

  const addTodo = async (todo: string) => {
    const newTodoList = [...todoList, todo];
    setTodoList(newTodoList);
    await AsyncStorage.setItem('todoList', JSON.stringify(newTodoList));
  };

  const deleteTodo = async (index: number) => {
    let newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);

    await AsyncStorage.setItem('todoList', JSON.stringify(newTodoList));
  };

  useEffect(() => {
    AsyncStorage.getItem('todoList').then(result => {
      if (result) {
        setTodoList(JSON.parse(result));
      }
      setIsLoad(true);
    });
  }, []);

  return (
    <TodoContext.Provider value={{isLoad, todoList, addTodo, deleteTodo}}>
      {children}
    </TodoContext.Provider>
  );
};

export {TodoContextProvider, TodoContext};

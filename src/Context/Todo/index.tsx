import React, {createContext, useState} from 'react';

const TodoContext = createContext<ITodoContext>({
  todoList: [],
  addTodo: (todo: string) => {},
  deleteTodo: (index: number) => {},
});

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const TodoProvider = ({children}: Props) => {
  const [todoList, setTodoList] = useState<Array<string>>([]);

  const addTodo = (todo: string): void => {
    setTodoList([...todoList, todo]);
  };

  const deleteTodo = (index: number): void => {
    let tempList = [...todoList];
    tempList.splice(index, 1);
    setTodoList(tempList);
  };

  return (
    <TodoContext.Provider value={{todoList, addTodo, deleteTodo}}>
      {children}
    </TodoContext.Provider>
  );
};

export {TodoProvider, TodoContext};

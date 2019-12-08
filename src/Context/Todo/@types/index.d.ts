interface ITodoContext {
  todoList: Array<string>;
  addTodo: (todo: string) => void;
  deleteTodo: (index: number) => void;
}

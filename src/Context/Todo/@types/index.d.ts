interface ITodoContext {
  isLoad: boolean;
  todoList: Array<string>;
  addTodo: (todo: string) => void;
  deleteTodo: (index: number) => void;
}

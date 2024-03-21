export type State = {
  user: {
    authenticated: boolean;
  };
  todoList?: string[];
  message?: string;
};

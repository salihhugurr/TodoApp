interface Todo {
  info: string;
  completed: boolean;
  categories: string[];
  date: Date;
  startTime: Date;
  endTime: Date;
  description: string;
}

interface TodoState {
  todos: Todo[];
}

interface CategoryState {
  categories: string[];
}

interface PageProps {
}

interface TaskDetailProps {
  todo:Todo;
}
export interface Todo {
  toLowerCase(): unknown;
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

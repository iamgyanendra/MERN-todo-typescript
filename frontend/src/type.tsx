export default interface myTodo {
  _id?: any | null;
  name: string;
  description: string;
  status?: boolean;
}
export type TodoProps={
  todo:myTodo
}

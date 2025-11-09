import type { Todo } from "../App";

export default function TodoItem({
  todo,
  onToggle,
  onRemove,
}: {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />
      <span>
        {todo.done ? <s>{todo.text}</s> : todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>✕</button>
    </li>
  );
}

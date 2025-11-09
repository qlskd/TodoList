import { useState, type FormEvent, type ChangeEvent } from "react";

export default function TodoInsert({ onAdd }: { onAdd: (text: string) => void }) {
  const [value, setValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();// 페이지 새로고침 방지
    const text = value.trim();
    if (!text) return;
    onAdd(text);
    setValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={value}
        onChange={onChange}
        placeholder="할 일을 입력하고 Enter"
      />
      <button
        type="submit"
      >
        추가
      </button>
    </form>
  );
}

import {
  ChangeEvent,
  FC,
  FormEvent,
  useRef,
  useState,
} from "react";
import styles from "./CommentForm.module.css";

interface CommentFormProps {
  onAddComment: (
    author: string,
    email: string,
    text: string
  ) => void;
}

const CommentForm: FC<CommentFormProps> = ({
  onAddComment,
}) => {
  const [form, setForm] = useState({
    author: "",
    email: "",
    text: "",
  });
  const [error, setError] = useState("");
  const textRef = useRef<HTMLTextAreaElement>(null);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (
      !form.author.trim() ||
      !form.email.trim() ||
      !form.text.trim()
    ) {
      setError("Все поля должны быть заполнены.");
      return;
    }

    if (!validateEmail(form.email)) {
      setError("Введите корректный email.");
      return;
    }

    setError("");

    onAddComment(form.author, form.email, form.text);

    setForm({
      author: "",
      email: "",
      text: "",
    });

    textRef.current?.focus();
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      {error && <p className={styles.error}>{error}</p>}
      <input
        type="text"
        placeholder="Ваше имя"
        value={form.author}
        name="author"
        onChange={handleChange}
        className={styles.input}
      />
      <input
        type="email"
        placeholder="Ваш email"
        value={form.email}
        name="email"
        onChange={handleChange}
        className={styles.input}
      />
      <textarea
        ref={textRef}
        placeholder="Ваш комментарий"
        value={form.text}
        onChange={handleChange}
        name="text"
        className={styles.textarea}
      />
      <button
        type="submit"
        className={styles.button}
      >
        Отправить
      </button>
    </form>
  );
};

export default CommentForm;

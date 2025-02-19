import { useState } from "react";
import CommentForm from "./components/CommentForm/CommentForm";
import CommentList from "./components/CommentList/CommentList";
import { Comment } from "./types";
import styles from "./App.module.css";

function App() {
  const [comments, setComments] = useState<Comment[]>([]);

  const handleAddComment = (
    author: string,
    email: string,
    text: string
  ) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      avatar: `https://www.gravatar.com/avatar/${btoa(
        email
      )}?d=identicon`,
      author,
      text,
      timestamp: Date.now(),
      rating: 0,
    };

    setComments([newComment, ...comments]);
  };

  const handleRate = (id: string, delta: number) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === id ? { ...comment, rating: comment.rating + delta } : comment
      )
    );
  };

  return (
    <div className={styles.container}>
      <CommentForm onAddComment={handleAddComment} />
      <CommentList comments={comments} onRate={handleRate} />
    </div>
  );
}

export default App;

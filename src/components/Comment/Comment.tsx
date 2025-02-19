import { FC, useState } from "react";
import { Comment as CommentType } from "../../types";
import styles from "./Comment.module.css";

interface CommentProps {
  comment: CommentType;
  onRate: (id: string, delta: number) => void;
}

const Comment: FC<CommentProps> = ({ comment, onRate }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleRate = (delta: number) => {
    onRate(comment.id, delta);
  };

  return (
    <article className={styles.comment}>
    {comment.rating < -10 && isCollapsed ? (
      <button className={styles.showButton} onClick={() => setIsCollapsed(false)}>
        Открыть комментарий
      </button>
    ) : (
      <>
        <img src={comment.avatar} alt={comment.author} className={styles.avatar} />
        <div className={styles.content}>
          <p className={styles.author}>{comment.author}</p>
          <p className={styles.text}>{comment.text}</p>
          <div className={styles.footer}>
            <span className={styles.timestamp}>{comment.timestamp}</span>
            <div className={styles.ratingControls}>
              <button onClick={() => handleRate(1)} className={styles.rateButton}>+</button>
              <span className={styles.rating}>{comment.rating}</span>
              <button onClick={() => handleRate(-1)} className={styles.rateButton}>-</button>
            </div>
          </div>
        </div>
        {comment.rating < -10 && (
          <button className={styles.hideButton} onClick={() => setIsCollapsed(true)}>
            Скрыть комментарий
          </button>
        )}
      </>
    )}
  </article>
  );
};

export default Comment;

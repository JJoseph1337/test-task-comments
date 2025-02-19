import { FC } from "react";
import { Comment as CommentType } from "../../types";
import styles from "./Comment.module.css";

interface CommentProps {
  comment: CommentType;
}

const Comment: FC<CommentProps> = ({ comment }) => {
  return (
    <article className={styles.comment}>
      <img
        src={comment.avatar}
        alt={comment.author}
        className={styles.avatar}
      />
      <div className={styles.content}>
        <p className={styles.author}>{comment.author}</p>
        <p className={styles.text}>{comment.text}</p>
        <div className={styles.footer}>
          <span className={styles.timestamp}>
            {comment.timestamp}
          </span>
          <span className={styles.rating}>
            Рейтинг: {comment.rating}
          </span>
        </div>
      </div>
    </article>
  );
};

export default Comment;

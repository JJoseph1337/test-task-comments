import { FC } from "react";
import { Comment as ComentType } from "../../types";
import Comment from "../Comment/Comment";
import styles from "./CommentList.module.css";

interface CommentListProps {
  comments: ComentType[];
  onRate: (id: string, delta: number) => void;
}

const CommentList: FC<CommentListProps> = ({
  comments,
  onRate,
}) => {
  return (
    <div className={styles.commentList}>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            onRate={onRate}
          />
        ))
      ) : (
        <p className={styles.empty}>
          Комментариев пока нет.
        </p>
      )}
    </div>
  );
};

export default CommentList;

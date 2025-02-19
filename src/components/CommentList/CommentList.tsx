import { FC } from "react";
import { Comment as ComentType } from "../../types";
import Comment from "../Comment/Comment";
import styles from "./CommentList.module.css";

interface CommentListProps {
  comments: ComentType[];
}

const CommentList: FC<CommentListProps> = ({
  comments,
}) => {
  return (
    <div className={styles.commentList}>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
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

import React, { useState } from "react";
import * as S from "./style";
import { CommentsTypes } from "types/CommentsTypes";
import CommentsForm from "../CommentsForm";
import { useSelector } from "react-redux";
import { RootState } from "store/redusers";
import api from "api";
import Button from "components/Button";
import avatarDefault from "assets/img/avatar_default.png";

interface CommentsItemProps {
  comment: CommentsTypes;
  product_id: number;
  parent_comment_author?: string;
  changeList: () => void;
  depth?: number;
}

const CommentsItem = ({
  depth = 1,
  comment,
  changeList,
  parent_comment_author = "",
  product_id,
}: CommentsItemProps) => {
  const user = useSelector((state: RootState) => state.user.data);
  const canChangeComment = user?.id === +comment.user_id;

  const [formVisible, setFormVisible] = useState(false);
  const [isEditing, setisEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function hideFormAndChangeList() {
    setisEditing(false);
    setFormVisible(false);

    changeList();
  }

  async function destroyComment() {
    setIsLoading(true);
    await api.comments.deleteComment(comment.id);

    changeList();
    setIsLoading(false);
  }

  return (
    <>
      <S.CommentItem depth={depth}>
        {!isEditing && (
          <>
            <S.Comment>
              <S.Ava>
                <img src={avatarDefault} alt="avatar" />
              </S.Ava>
              <S.CommentMain>
                <S.CommentTop>
                  <h3>{comment.name}</h3>
                  <p>{comment.created_at}</p>
                </S.CommentTop>
                <S.CommentBody>
                  {parent_comment_author && (
                    <span>@ {parent_comment_author} </span>
                  )}
                  {comment.text}
                </S.CommentBody>
                <S.Actions>
                  <span onClick={() => setFormVisible(!formVisible)}>
                    Reply
                  </span>

                  {canChangeComment && (
                    <>
                      <Button
                        size="small"
                        color="warning"
                        onClick={() => setisEditing(true)}
                      >
                        Edit
                      </Button>
                      <Button
                        size="small"
                        color="danger"
                        isLoading={isLoading}
                        onClick={destroyComment}
                      >
                        Delete
                      </Button>
                    </>
                  )}
                </S.Actions>
              </S.CommentMain>
            </S.Comment>
            <CommentsForm
              size="small"
              onSubmit={hideFormAndChangeList}
              parent_id={comment.id}
              product_id={product_id}
              isVisible={formVisible}
            />
          </>
        )}

        {isEditing && (
          <CommentsForm
            size="small"
            onSubmit={hideFormAndChangeList}
            parent_id={comment.id}
            product_id={product_id}
            isVisible={true}
            editingText={comment.text}
            commentId={comment.id}
          />
        )}

        {comment.replies && comment.replies.length > 0 && (
          <S.CommentReplies>
            {comment.replies.map((reply) => {
              return (
                <CommentsItem
                  changeList={changeList}
                  depth={depth + 1}
                  key={reply.id}
                  comment={reply}
                  product_id={product_id}
                  parent_comment_author={comment.name}
                />
              );
            })}
          </S.CommentReplies>
        )}
      </S.CommentItem>
    </>
  );
};

export default CommentsItem;

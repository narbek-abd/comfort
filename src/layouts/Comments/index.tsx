import React, { useRef, useState, useEffect } from "react";
import * as G from "../../globalStyle";
import * as S from "./style";
import { CommentsTypes } from "../../types/CommentsTypes";
import useIntersection from "../../hooks/useIntersection";
import { getProductComments } from "../../api/Product";

import CommentsForm from "./CommentsForm";
import CommentsItem from "./CommentsItem";
import Spinner from "../../components/Spinner";

interface CommentsProps {
  product_id: number;
}

const Comments = ({ product_id }: CommentsProps) => {
  const [comments, setComments] = useState<CommentsTypes[]>(null);
  const [commentsLimit, setCommentsLimit] = useState(6);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (!hasMore) return;

    getComemnts();
  }, [commentsLimit]);

  const loadMoreElemRef = useRef(null);

  useIntersection(loadMoreElemRef, () =>
    setCommentsLimit((limit) => limit + limit)
  );

  function getComemnts() {
    getProductComments(product_id, commentsLimit).then((response) => {
      setHasMore(response.data.next_page_url !== null);

      setComments(response.data.data);
    });
  }

  return (
    <S.Comments>
      <G.Container>
        <h3>Comments</h3>
        <CommentsForm onSubmit={getComemnts} product_id={product_id} />

        <S.CommentsList>
          {comments && comments.length > 0 && (
            <>
              {comments.map((comment, index, arr) => {
                return (
                  <CommentsItem
                    changeList={getComemnts}
                    key={comment.id}
                    comment={comment}
                    product_id={product_id}
                  />
                );
              })}
            </>
          )}
        </S.CommentsList>
        <S.LoadMore ref={loadMoreElemRef}>{hasMore && <Spinner />}</S.LoadMore>
      </G.Container>
    </S.Comments>
  );
};

export default Comments;

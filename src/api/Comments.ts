import axiosClient from "./axiosClient";
import { CommentsFormTypes } from '../types/FormTypes';

const Comments = {
  createComment: (data: CommentsFormTypes) => axiosClient.post("/product/comments", data),
  updateComment: (id: number, data: CommentsFormTypes) => axiosClient.put(`/product/comments/${id}`, data),
  deleteComment: (id: number) => axiosClient.delete(`/product/comments/${id}`),
};

export default Comments;
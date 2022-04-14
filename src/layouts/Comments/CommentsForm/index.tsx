import React, { useState } from "react";
import * as S from "./style";
import * as G from "../../../globalStyle";
import { CommentsFormTypes } from "../../../types/FormTypes";
import {
  CommentsFormValidation,
  CommentsFormGuestValidation,
} from "../../../validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../../components/Button";
import api from "../../../api";
import Alert from "../../../components/Alert";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/redusers";

interface CommentsFormProps {
  product_id: number;
  onSubmit: () => void;
  editingText?: string;
  commentId?: number;
  parent_id?: number;
  size?: "large" | "small";
  isVisible?: boolean;
}

const CommentsForm = ({
  product_id,
  onSubmit,
  editingText = "",
  commentId = null,
  parent_id = 0,
  size = "large",
  isVisible = true,
}: CommentsFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const [alertMessage, setAlertMessage] = useState("");
  const [alertvariant, setAlertvariant] = useState("success");

  const user = useSelector((state: RootState) => state.user.data);

  const resolver = user
    ? yupResolver(CommentsFormValidation)
    : yupResolver(CommentsFormGuestValidation);

  const {
    register,
    setError,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentsFormTypes>({
    resolver: resolver,
  });

  const submit: SubmitHandler<CommentsFormTypes> = async (data) => {
    setIsLoading(true);

    try {
      editingText
        ? api.comments.updateComment(commentId, data)
        : api.comments.createComment(data);

      onSubmit();
      reset();
      setAlertMessage("Commentary was created successfully");
    } catch (e: any) {
      if (e.response.status === 422) {
        Object.keys(e.response.data.errors).forEach((key: any) => {
          setError(key, {
            type: "manual",
            message: e.response.data.errors[key],
          });
        });
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    isVisible && (
      <>
        {alertMessage && <Alert variant={alertvariant}>{alertMessage}</Alert>}

        <S.CommentsForm size={size} onSubmit={handleSubmit(submit)}>
          <input type="hidden" {...register("product_id")} value={product_id} />
          <input type="hidden" {...register("parent_id")} value={parent_id} />

          {!user && (
            <S.Horizontal>
              <S.Group>
                <input type="name" {...register("name")} placeholder="Name" />
                {errors.name && <G.Err>{errors.name.message}</G.Err>}
              </S.Group>

              <S.Group>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Email"
                />
                {errors.email && <G.Err>{errors.email.message}</G.Err>}
              </S.Group>
            </S.Horizontal>
          )}

          <S.Group>
            <textarea
              {...register("text")}
              placeholder="Message"
              defaultValue={editingText}
            ></textarea>
            {errors.text && <G.Err>{errors.text.message}</G.Err>}
          </S.Group>

          <S.Group>
            <Button size={size} isLoading={isLoading}>
              Submit
            </Button>
          </S.Group>
        </S.CommentsForm>
      </>
    )
  );
};

export default CommentsForm;

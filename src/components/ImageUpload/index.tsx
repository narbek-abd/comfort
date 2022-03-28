import React, { useState, useEffect } from "react";
import {
  UploadedImageTypes,
  InitialImagesTypes,
} from "../../types/UploadedImageTypes";
import * as S from "./style";
import * as G from "../../globalStyle";
import Icon from "../Icon";

interface ImageUploadProps {
  onUpload: (images: UploadedImageTypes[]) => void;
  initialImages?: InitialImagesTypes[];
  onRemoveInitialImage?: (id: number) => void;
  keyForReRender?: number;
}

const ImageUpload = ({
  onUpload,
  initialImages = null,
  onRemoveInitialImage,
  keyForReRender = 0,
}: ImageUploadProps) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [images, setImages] = useState<UploadedImageTypes[]>([]);
  const [errors, setErrors] = useState("");
  const maxImageCount = 6;

  // должны использовать useEffect для генераций objectUrl, чтобы была возможность удалить эти objectUrl при удалений компонента
  useEffect(() => {
    if (selectedImages.length === 0) return;
    let uploadingImages: UploadedImageTypes[] = [];

    let imgId = Math.max(...images.map((img) => img.id), 0);

    selectedImages.forEach((imgFile) => {
      imgId++;
      let imgUrl = URL.createObjectURL(imgFile);

      let img = { id: imgId, url: imgUrl, img: imgFile };

      uploadingImages.push(img);
    });

    if (images.length + uploadingImages.length >= maxImageCount) {
      setErrors("the maximum number of images is 6");
      return;
    }

    setImages(images.concat(uploadingImages));
    onUpload(images.concat(uploadingImages));
    setErrors("");

    return () => {
      clearUrlObjects();
    };
  }, [selectedImages]);

  function clearUrlObjects() {
    images.forEach((img) => URL.revokeObjectURL(img.url));
  }

  useEffect(() => {
    clearUrlObjects();
    setImages([]);
    setErrors("");
  }, [keyForReRender]);

  function addImg(e: React.ChangeEvent) {
    let inputFiles = Array.from((e.target as HTMLInputElement).files);

    if (inputFiles.length === 0) return;

    setSelectedImages(inputFiles);
  }

  function removeImg(e: React.MouseEvent) {
    e.preventDefault();
    let imageItem = e.currentTarget as HTMLButtonElement;
    imageItem.disabled = true;

    let filteredImages = images.filter(
      (image) => image.id !== +imageItem.dataset.imgId
    );

    setImages(filteredImages);
    onUpload(filteredImages);
  }

  function removeInitialImg(e: React.MouseEvent) {
    e.preventDefault();
    let imageItem = e.currentTarget as HTMLButtonElement;
    imageItem.disabled = true;

    onRemoveInitialImage(+imageItem.dataset.imgId);
  }

  return (
    <div>
      <S.Images>
        {/*Изображения с сервера*/}
        {initialImages &&
          initialImages.map((image) => {
            return (
              <S.Image key={image.id}>
                <img
                  src={"http://comfort.loc/storage/" + image.image}
                  alt="uploaded item"
                />

                <button onClick={removeInitialImg} data-img-id={image.id}>
                  X
                </button>
              </S.Image>
            );
          })}

        {/*Локальные изображения*/}
        {images.map((image) => {
          return (
            <S.Image key={image.id}>
              <img src={image.url} alt="uploaded item" />

              <button onClick={removeImg} data-img-id={image.id}>
                X
              </button>
            </S.Image>
          );
        })}

        <label htmlFor="images">
          <Icon name="search-plus" />
        </label>
        <input
          id="images"
          name="images"
          type="file"
          multiple
          onChange={addImg}
        />
      </S.Images>
      {errors && <G.Err>{errors}</G.Err>}
    </div>
  );
};

export default ImageUpload;

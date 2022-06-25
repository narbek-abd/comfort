import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import * as S from "./style";
import useOnClickOutside from "hooks/useOnClickOutside";

interface ModalProps {
  children?: React.ReactNode;
  isOpen: boolean;
  fullscreen?: boolean;
  onClose: () => void;
}

const Modal = ({
  isOpen,
  fullscreen = false,
  children,
  onClose,
}: ModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  let modalRoot = document.getElementById("app-modal");

  if (!modalRoot) {
    let rootElem = document.createElement("div");
    rootElem.setAttribute("id", "app-modal");

    document.body.append(rootElem);
    modalRoot = rootElem;
  }

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  const modalRef = useRef(null);

  useOnClickOutside(modalRef, () => {
    onClose();
  });

  return ReactDOM.createPortal(
    <>
      <S.Overlay isVisible={isVisible} fullscreen={fullscreen}>
        <S.Modal ref={modalRef}>{children}</S.Modal>
      </S.Overlay>{" "}
    </>,
    modalRoot
  );
};

export default Modal;

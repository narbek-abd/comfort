import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import * as S from "./style";

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

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  const el = useRef(null);

  useEffect(() => {
    function toggleClick(e: MouseEvent) {
      const modal = (e.target as HTMLElement).closest(".modal");
      if (!modal) {
        onClose();
      }
    }

    document.addEventListener("click", toggleClick);

    return () => {
      document.removeEventListener("click", toggleClick);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <S.Overlay isVisible={isVisible} fullscreen={fullscreen}>
        <S.Modal className="modal" ref={el}>
          {children}
        </S.Modal>
      </S.Overlay>{" "}
    </>,
    document.getElementById("app-modal")
  );
};

export default Modal;

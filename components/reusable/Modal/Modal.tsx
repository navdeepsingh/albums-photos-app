import React from "react";
import styles from "./modal.module.css";

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalContent}>{children}</div>
    </div>
  );
};

export default Modal;

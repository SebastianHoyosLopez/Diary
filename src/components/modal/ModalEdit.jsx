import React from "react";
import ReactModal from "react-modal";
import "./ModalConfirmacion.css";
import Form from "../form/Form";

function ModalEdit({ isOpen, onClose, data, set, db }) {
  const handleCloseModal = () => {
    onClose();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      className="ReactModal__Content"
      overlayClassName="ReactModal__Overlay"
      ariaHideApp={false}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Form
          order={data}
          setDb={set}
          db={db}
          handleCloseModal={handleCloseModal}
          onClose={onClose}
        />
      </div>
    </ReactModal>
  );
}

export default ModalEdit;

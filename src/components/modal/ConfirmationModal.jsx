import React from "react";
import ReactModal from "react-modal";
import "./ModalConfirmacion.css";

function ConfirmationModal({ isOpen, onClose, onConfirm }) {
  const handleCerrarModal = () => {
    onClose();
  };

  const handleConfirmarModal = () => {
    onConfirm();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleCerrarModal}
      className="ReactModal__Content"
      overlayClassName="ReactModal__Overlay"
      ariaHideApp={false}
    >
      <div className="ConfirmationModal">
        <h2>¿Está seguro que desea eliminar este elemento?</h2>
        <div className="ConfirmationModal__Buttons">
          <button onClick={handleCerrarModal}>Cancelar</button>
          <button onClick={handleConfirmarModal}>Eliminar</button>
        </div>
      </div>
    </ReactModal>
  );
}

export default ConfirmationModal;

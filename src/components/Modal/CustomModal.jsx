import React from 'react';
import Modal from 'react-modal';

const CustomModal = ({ isOpen, onRequestClose, content }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Redirected Page Modal"
    >
      <div className="p-4">
        <button className="float-right" onClick={onRequestClose}>
          Close
        </button>
        {content}
      </div>
    </Modal>
  );
};

export default CustomModal;

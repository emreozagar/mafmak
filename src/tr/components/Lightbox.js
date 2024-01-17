import React, { useState } from 'react';

import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for accessibility

const Lightbox = ({ isOpen, onClose, imageURL }) => {
  return (
    <Modal
      className='flex items-center justify-center my-40 mx-40'
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Lightbox"
    >
      <img className='w-4/5 h-4/5' src={imageURL} alt="Enlarged" />
      
    </Modal>
  );
};

export default Lightbox;
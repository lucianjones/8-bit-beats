import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UploadSong from './UploadSong';

function UploadSongModal() {
    const [showModal, setShowModal] = useState(false);

    return (       
    <>
      <button onClick={() => setShowModal(true)} className="btn blue% logsi" id="upload">Upload</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UploadSong setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
};

export default UploadSongModal;

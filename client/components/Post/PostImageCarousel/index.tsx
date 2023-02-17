import React, { useState } from 'react';
import { Modal, Carousel } from '@components/index';
import { useModal } from '@hooks/index';
import { createImagePath } from '@lib/utils';
import { modalName } from '@consts/modal';
import { ModalType } from '@lib/types';

interface Props {
  isShow: boolean;
  hideModal: () => void;
  modal: ModalType;
}

const PostImageCarousel = ({ isShow, hideModal, modal }: Props) => {
  return (
    <Modal.CustomFrame isOpen={isShow} handleCloseModal={hideModal}>
      <Carousel>
        {modal.images?.map((image) => (
          <img key={image.src} src={createImagePath(image.src)} />
        ))}
      </Carousel>
    </Modal.CustomFrame>
  );
};

export default PostImageCarousel;

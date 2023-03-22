import PropTypes from 'prop-types';
import { Overlay, ModalWindow } from './Modal.styled';

export const Modal = ({ image, tags, onClickClose }) => {
  return (
    <Overlay onClick={onClickClose}>
      <ModalWindow>
        <img src={image} alt={tags} />
      </ModalWindow>
    </Overlay>
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClickClose: PropTypes.func.isRequired,
};
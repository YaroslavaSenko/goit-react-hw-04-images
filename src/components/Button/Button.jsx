import PropTypes from 'prop-types';
import { LoadButton, Container} from './Button.styled';

export const Button = ({ onClickButton }) => {
  return (
    <Container>
    <LoadButton type="button" onClick={onClickButton}>
      Load more
    </LoadButton>
    </Container>
  );
};

Button.propTypes = {
  onClickButton: PropTypes.func.isRequired,
};
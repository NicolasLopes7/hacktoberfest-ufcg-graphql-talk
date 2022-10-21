import { MdArrowBack, MdEdit } from 'react-icons/md';
import { styled } from '../../styles/stitches.config';

const baseStyle = {
  position: 'absolute',
  opacity: 0.5,
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    opacity: 1,
  },
};

export const EditIcon = styled(MdEdit, {
  ...baseStyle,
  cursor: 'pointer',
  top: 10,
  right: 10,
});

export const ReturnIcon = styled(MdArrowBack, {
  ...baseStyle,
  cursor: 'pointer',
  top: 10,
  left: 10,
});

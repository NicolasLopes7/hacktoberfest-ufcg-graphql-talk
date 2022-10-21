import { styled } from '../../styles/stitches.config';
import { slateDarkA } from '@radix-ui/colors';
export const Input = styled('input', {
  width: 'fit-content',
  height: 'fit-content',
  fontFamily: '$mono',
  appearance: 'none',
  border: 'none',
  borderRadius: '$small',
  '&:hover': {
    cursor: 'text',
  },
  transition: 'all 0.2s ease-in-out',
  backgroundColor: slateDarkA.slateA4,

  defaultVariants: {
    color: 'primary',
    size: 'medium',
  },

  variants: {
    size: {
      small: {
        fontSize: '0.85rem',
        paddingBottom: '$2',
        paddingTop: '$2',
        paddingRight: '$2',
        paddingLeft: '$2',
      },
      medium: {
        fontSize: 'medium',
        paddingBottom: '$2',
        paddingTop: '$2',
        paddingRight: '$3',
        paddingLeft: '$3',
      },
      large: {
        fontSize: 'medium',
        paddingBottom: '$3',
        paddingTop: '$3',
        paddingRight: '$4',
        paddingLeft: '$4',
      },
    },
    color: {
      primary: {
        color: '$white',
        '&:hover': {
          backgroundColor: slateDarkA.slateA5,
        },
      },
    },
  },
});

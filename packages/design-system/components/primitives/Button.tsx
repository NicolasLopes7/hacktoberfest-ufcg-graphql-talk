import { styled } from '../../styles/stitches.config';

export const Button = styled('button', {
  width: 'fit-content',
  height: 'fit-content',
  fontFamily: '$mono',
  appearance: 'none',
  border: 'none',
  borderRadius: '$small',
  '&:hover': {
    cursor: 'pointer',
  },
  transition: 'all 0.2s ease-in-out',

  defaultVariants: {
    size: 'medium',
    color: 'primary',
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
        paddingBottom: '$3',
        paddingTop: '$3',
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
    type: {
      ghost: {
        height: 'fit-content',
        width: 'fit-content',
        backgroundColor: 'transparent',
        padding: 0,
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
      icon: {
        display: 'flex',
        alignItems: 'center',
        gap: '$2',
      },
    },
    color: {
      primary: {
        color: '$primary11',
        backgroundColor: '$primary5',
        '&:hover': {
          color: '$primary11',
          backgroundColor: '$primary6',
        },
      },
      neutral: {
        color: '$slate11',
        backgroundColor: '$slate5',
        '&:hover': {
          color: '$slate11',
          backgroundColor: '$slate7',
        },
      },
    },
  },

  compoundVariants: [
    {
      type: 'ghost',
      css: {
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  ],
});

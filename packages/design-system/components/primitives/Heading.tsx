import { styled } from '../../styles/stitches.config';

export const Heading = styled('h1', {
  fontFamily: '$mono',
  defaultVariants: {
    size: 'medium',
  },
  padding: 0,
  margin: 0,
  variants: {
    size: {
      small: {
        fontSize: 'x-large',
      },
      medium: {
        fontSize: 'xx-large',
      },
      large: {
        fontSize: 'xxx-large',
      },
    },
  },
});

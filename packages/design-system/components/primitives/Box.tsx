import { styled } from '../../styles/stitches.config';
import { slateDark } from '@radix-ui/colors';

export const Box = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  variants: {
    container: {
      true: {
        justifyContent: 'flex-start',
        width: '100%',
        height: '100vh',
        backgroundColor: slateDark.slate1,
        padding: '30px',
        color: 'white',
        textAlign: 'center',
      },
      false: {},
    },
  },
});

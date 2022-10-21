import { slateDarkA } from '@radix-ui/colors';
import { styled } from '../../styles/stitches.config';

export const Select = styled('select', {
  borderRadius: '$medium',
  padding: '$1',
  fontSize: 12,
  color: '$white',
  border: '1px solid $border',
  '&:focus': { boxShadow: '$focus' },
  backgroundColor: slateDarkA.slateA5,
});

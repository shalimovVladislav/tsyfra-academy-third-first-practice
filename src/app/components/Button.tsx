import { styled } from '@/../styled-system/jsx';
import { cva, type RecipeVariantProps } from '@/../styled-system/css';
 
const buttonStyle = cva({
    base: {
      bg: 'black',
      color: 'white',
      textAlign: 'center',
      px: '6',
      py: '3',
      borderRadius: 'xl',
      fontWeight: 'semibold',
      boxShadow: 'md',
      transition: 'all 0.3s ease-in-out',
      m: '4',
      _hover: {
        bg: 'gray.800',
        transform: 'scale(1.03)',
      },
      _active: {
        bg: 'gray.700',
        transform: 'scale(0.98)',
      },
    },
    variants: {
      size: {
        small: {
          fontSize: 'sm',
          px: '4',
          py: '2',
        },
        large: {
          fontSize: 'lg',
          px: '8',
          py: '4',
        },
      },
    },
  });
 
export type ButtonVariants = RecipeVariantProps<typeof buttonStyle> // { size?: 'small' | 'large' }
 
export const Button = styled('button', buttonStyle)
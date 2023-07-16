import { styled } from 'styled-components';

const Button = ({ children, onClick, variant, br, p }: ButtonProps) => {
  return (
    <SButton
      type="button"
      onClick={() => {
        if (onClick) onClick();
      }}
      $variant={variant}
      $br={br}
      $p={p}>
      {children}
    </SButton>
  );
};

Button.defaultProps = {
  variant: 'primary',
  br: 8,
  p: '8px 16px',
};

const variantMap = {
  primary: {
    bg: 'bg-white',
    ft: 'ft-black',
  },
  subtle: {
    bg: 'bg-blue',
    ft: 'ft-white',
  },
} as const;

const SButton = styled.button<ButtonStyleProps>`
  padding: ${props => props.$p};

  border: none;
  border-radius: ${props => props.$br && (props.$br === 'circle' ? '100%' : `${props.$br}px`)};

  background-color: ${props => props.theme.colors[variantMap[props.$variant].bg]};

  font-size: 16px;
  font-weight: 700;
  color: ${props => props.theme.colors[variantMap[props.$variant].ft]};

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant: 'primary' | 'subtle';
  br?: number | 'circle';
  p?: string;
};

type ButtonStyleProps = {
  [K in keyof Omit<ButtonProps, 'children' | 'onClick'> as `$${K & string}`]: ButtonProps[K];
};

export default Button;

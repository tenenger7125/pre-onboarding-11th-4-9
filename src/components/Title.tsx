import styled from 'styled-components';

const Title = ({ order, line, fz, display, p, children, srOnly }: TitleProps) => {
  const TitleOrder: keyof JSX.IntrinsicElements = `h${order}`;

  return (
    <STitle as={TitleOrder} $line={line} $fz={fz} $display={display} $p={p} $srOnly={srOnly}>
      {children}
    </STitle>
  );
};

Title.defaultProps = {
  order: 2,
  display: 'block',
  p: '0 0',
  srOnly: false,
};

const STitle = styled.div<TitleStyleProps>`
  display: ${props => props.$display};
  padding: ${props => props.$p};
  font-size: ${props => props.$fz && `${props.$fz}px`};
  font-weight: 700;

  ${props =>
    props.$line &&
    `
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${props.$line};
    overflow: hidden;
    text-overflow: ellipsis;
    `}

  ${props =>
    props.$srOnly &&
    `
    overflow: hidden;
    position: absolute;
    clip: rect(0, 0, 0, 0);
    clip-path: polygon(0 0, 0 0, 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    white-space: nowrap;
  `}
`;

type TitleProps = {
  children: React.ReactNode | string;
  order: 1 | 2 | 3 | 4 | 5 | 6;
  line?: number;
  fz?: number;
  display?: string;
  p?: string;
  srOnly?: boolean;
};

type TitleStyleProps = {
  [K in keyof Omit<TitleProps, 'order' | 'children'> as `$${K & string}`]: TitleProps[K];
};

export default Title;

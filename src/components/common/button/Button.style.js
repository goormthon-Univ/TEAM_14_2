import { styled, css } from 'styled-components';

const BUTTON_USAGE = {
  primary: css`
    color: var(--color-blue-50);
    background: var(--color-blue-500);
  `,
  disabled: css`
    color: var(--color-blue-50);
    background: var(--color-blue-100);
  `,
  grey: css`
    color: var(--color-grey-500);
    background: var(--color-grey-200);
  `,
  cta: css`
    color: var(--color-blue-50);
    background: var(--color-blue-500);
    position: absolute;
    bottom: 64px;
    width: calc(100% - 2 * var(--size-side-gap));
  `,
};

const CustomButton = styled.button`
  width: 100%;
  padding: 14px 0;
  border-radius: 6px;
  ${({ usage }) => BUTTON_USAGE[usage]}
`;

export default CustomButton;

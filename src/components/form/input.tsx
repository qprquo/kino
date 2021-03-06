import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { alpha } from '../../theme/utils';
import { useCombinedRefs } from '../../hooks';

const InputIcon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0;
  right: ${({ theme }) => `${theme.spaces[6]}px`};
  color: ${({ theme }) => theme.inputPlaceholderColor};
`;

type TInputInnerProps = {
  rows?: number;
  [name: string]: any;
}

const InputInner = React.forwardRef<HTMLInputElement, TInputInnerProps>(({
  rows,
  ...rest
}, ref) =>
  rows
    // @ts-ignore
    ? <textarea {...rest} rows={rows} ref={ref} />
    : <input  {...rest} ref={ref} />
);

const StyledInput = styled(InputInner)`
  width: 100%;
  line-height: 1.4;
  background-color: ${({ theme }) => theme.inputBgColor};
  border-radius: ${({ theme }) => theme.radius.tiny};
  font-size: ${({ theme }) => theme.font.sizes[1]}px;
  padding: ${({ theme }) => `${theme.spaces[4]}px ${theme.spaces[6]}px`};
  color: ${({ theme }) => theme.inputColor};
  border: 1px solid ${({ theme }) => theme.inputBorderColor};
  font-family: ${({ theme }) => theme.font.family};
  
  &:not(:placeholder-shown) + label{
    transform: translate(-3px, -30px) scale(0.9);
  }

  &::placeholder {
    opacity: 0;
  }

  transition: all .2s ease;
`;

const InputWrapper = styled.div<{ focus?: boolean; error?: boolean }>`
  position: relative;
  label {
    cursor: text;
    transition: all 0.2s;
    transform-origin: left bottom;
    display: inline-block;
    padding: 2px 3px;
    color: ${({ theme }) => theme.inputPlaceholderColor};
    font-family: ${({ theme }) => theme.font.family};
    position: absolute;
    left: ${({ theme }) => `${theme.spaces[6]}px`};
    top: ${({ theme }) => `${theme.spaces[4]}px`};
    color: ${({ theme }) => theme.inputPlaceholderColor};
    background-color: ${({ theme }) => theme.inputBgColor};
  }

  ${StyledInput} {
    ${({ theme, focus }) => focus && `
      border-color: ${alpha(theme.colors.primary.base, .6)};
      box-shadow: 0 0 0 4px ${alpha(theme.colors.primary.base, .1)};
    `}
    ${({ theme, error }) => error && `
      border-color: ${theme.colors.danger.base};
      box-shadow: 0 0 0 4px ${alpha(theme.colors.danger.base, .1)};
    `}
  }

  label {
    ${({ theme, focus }) => focus && `
        transform: translate(-3px, -30px) scale(0.9);
        color: ${theme.colors.primary.base};
    `}

    ${({ theme, error }) => error && `
      color: ${theme.colors.danger.base};
    `}
  }

  ${InputIcon} {
    ${({ theme, focus }) => focus && `
      color: ${theme.colors.primary.base};
    `}

    ${({ theme, error }) => error && `
      color: ${theme.colors.danger.base};
    `}
  }
`;

const Error = styled.div`
  font-size: ${({ theme }) => theme.font.sizes[0]};
  color: ${({ theme }) => theme.colors.danger.base};
  margin-top: 5px;
`;

export type TInputProps = {
  name: string;
  rows?: number;
  type?: 'text' | 'email' | 'password';
  placeholder: string;
  className?: string;
  icon?: React.ReactNode;
  error?: boolean;
  errorText?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onIconClick?: (e: React.SyntheticEvent) => void;
};

const Input = React.forwardRef<HTMLInputElement, TInputProps>(({
  icon,
  name,
  value,
  defaultValue,
  placeholder,
  className,
  onIconClick,
  onChange,
  onFocus,
  onBlur,
  error = false,
  errorText = 'Invalid property value',
  type = 'text',
  rows
}, forwardedRef) => {
  const [focus, setFocus] = useState(false);
  const innerRef = useRef<HTMLInputElement>(null);
  const ref = useCombinedRefs<HTMLInputElement>(innerRef, forwardedRef);

  const forceFocus = () => ref?.current?.focus();

  const handleFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFocus(true);
    if (onFocus) {
      onFocus(e);
    }
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFocus(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  const handleIconClick = (e: React.SyntheticEvent) => {
    if (onIconClick) {
      onIconClick(e);
    }
  }

  return (
    <div className={className}>
      <InputWrapper onClick={() => forceFocus()} focus={focus} error={error}>
        <StyledInput
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          rows={rows}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          {...(onChange && { onChange })}
          autoComplete="off"
        />
        <label>{placeholder}</label>
        {icon && (
          <InputIcon
            onClick={handleIconClick}
          >
            {icon}
          </InputIcon>
        )}
      </InputWrapper>
      {error && <Error>{errorText}</Error>}
    </div>
  );
});

export default Input;

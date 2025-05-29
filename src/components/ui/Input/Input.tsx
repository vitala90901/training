import React from 'react';
import styled, { css } from 'styled-components';

type InputType = "text" | "number" | "date" | "password";
type SizeType = "sm" | "md" | "lg";

interface InputProps {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: SizeType;
  type: InputType;
  placeholder: string;
  disabled?: boolean;
  error: string;
  required?: boolean;
  pattern: string;
  id: string;
  name: string;
};

const smSize = css`
  font-size: 14px;
  padding: 6px 10px;
  line-height: 28px;
`;
const mdSize = css`
  font-size: 16px;
  padding: 8px 12px;
  line-height: 36px;
`;
const lgSize = css`
  font-size: 18px;
  padding: 10px 16px;
  lin-height: 44px;
`;

const InputWrapper = styled.div<{
  $hasError: boolean;
}>`
  width: 100%;
  position: relative;
  margin-bottom: ${({ $hasError }) => ($hasError ? '4px' : '16px')};
`;

const StyledInput = styled.input<{
  $disabled: boolean;
  $placeholder: string;
  $type: InputType;
  $size: SizeType;
}>`
  width: 100%;
  border: 1px solid #1d1d41;
  transition: border-color 0.2s;
  placeholder: ${({ $placeholder }) => $placeholder};
  border-radius: 4px;

  ${({ $size }) => {
    switch($size) {
      case 'sm':
        return smSize;
      case 'md':
        return mdSize;
      case 'lg':
        return lgSize;
    }
  }}

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.backgroundDisabled};
    cursor: not-allowed;
  }
`;

const ErrorText = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: 12px;
`;

export const Input = ({
  value,
  onChange,
  placeholder,
  error,
  disabled = false,
  type = 'text',
  size = 'md',
  id,
  name,
}: InputProps) => {
  return (
    <InputWrapper $hasError={!!error}>
      <StyledInput
        value={value}
        onChange={onChange}
        $disabled={disabled}
        $placeholder={placeholder}
        $type={type}
        $size={size}
        id={id}
        name={name}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  );
};
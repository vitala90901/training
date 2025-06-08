import React from 'react';
import styled, { css } from 'styled-components';

export type ButtonVariant = "primary" | "danger" | "success" | "text";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	type?: ButtonType;
	size?: ButtonSize;
	variant?: ButtonVariant;
	disabled?: boolean;
	icon?: React.ReactElement;
  iconPosition?: 'left' | 'right';
	className: string;
};

const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $disabled: boolean;
  $type: string;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: left;
  gap: 8px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 250ms;
  font-family: ${({ theme }) => theme.typography.fontMain};
  line-height: 1;

  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'danger':
        return css`
          background-color: ${theme.colors.danger};
          color: white;
          &:hover {
            transform: translateY(2px);
          }
        `;
      case 'success':
        return css`
          background-color: ${theme.colors.success};
          color: white;
          &:hover {
            transform: translateY(2px);
          }
        `;
      case 'text':
        return css`
          background: transparent;
          color: ${theme.colors.text};
          padding: 0;
          width: 100%;
          &:hover {
            background-color: ${theme.colors.hoverBackground};
          }
        `;
      default:
        return css`
          background-color: ${theme.colors.primary};
          color: white;
          &:hover {
            transform: translateY(2px);
          }
        `;
    }
  }}

  ${({ $size }) => {
    switch ($size) {
      case 'sm':
        return css`
          padding: 6px 12px;
          font-size: 14px;
        `;
      case 'lg':
        return css`
          padding: 12px 24px;
          font-size: 18px;
        `;
      default:
        return css`
          padding: 8px 16px;
          font-size: 16px;
        `;
    }
  }}

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      &:hover {
        transform: none;
      }
    `
  }
  
`;

export const Button = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
	className,
}: ButtonProps) => {
  const content = (
    <>
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </>
  );

  return (
    <StyledButton
      onClick={onClick}
      $type={type}
      $variant={variant}
      $size={size}
      $disabled={disabled}
      className={className}
      disabled={disabled}
    >
      {content}
    </StyledButton>
  );
};
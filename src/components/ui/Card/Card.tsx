import React from 'react';
import styled, { css } from 'styled-components';

type CardSize = 'sm' | 'lg';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  size?: CardSize;
};

const StyledCard = styled.div<{ $size: CardSize }>`
  padding: 16px;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  background-color:rgb(124, 115, 255);
  font-family: ${({ theme }) => theme.typography.fontMain};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 20px;

  ${({ $size, theme }) => {
    switch($size) {
      case 'sm':
        return css`
          width: 290px;
          height: 100px;
          background-color: ${({ theme } ) => theme.colors.background};
          align-items: center;
        `;
      default:
        return css`
          width: 350px;
          height: 200px;
        `;
    }
  }}
`;

const StyledTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Card = ({ children, title, className, size='lg' }: CardProps) => {
  return (
    <StyledCard className={className} $size={size}>
      {title && <StyledTitle>{title}</StyledTitle>}
      {children}
    </StyledCard>
  );
};
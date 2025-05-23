import React from 'react';
import styled from 'styled-components';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
};

const StyledCard = styled.div`
  box-shadow: 0 2px 8px #1D1D41;
  cursor: pointer;
  border: 1px solid #6359E9;
  padding: 16px;
  margin: 0;
  width: 350px;
  height: 200px;
  background-color:rgb(124, 115, 255);
  font-family: ${({ theme }) => theme.typography.fontMain};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 20px;
  &:hover {
    box-shadow: 0 6px 24px #1D1D41;
  }
`;

const StyledTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Card = ({ children, title, className }: CardProps) => {
  return (
    <StyledCard className={className}>
      {title && <StyledTitle>{title}</StyledTitle>}
      {children}
    </StyledCard>
  );
};
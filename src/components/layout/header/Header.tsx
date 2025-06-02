import React from "react";
import styled from "styled-components";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
};

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = ({ children }: HeaderProps) => {
  return (
    <StyledHeader>
      {children}
    </StyledHeader>
  );
};

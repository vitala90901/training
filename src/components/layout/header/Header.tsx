import React from "react";
import styled from "styled-components";
import { Button } from "../../ui/Button/Button";
import { Icons } from "../../pictures/icons";
import { ButtonGroup } from "../../ui/Button/style";
import logo from "../../pictures/logo.svg";

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
};

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 4%;
  padding: 20px;
  height: 95%;
  margin 0;
`;

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.hoverBackground};
  font-family: ${({ theme }) => theme.typography.fontMain};
  text-align: center;
`;

const StyledBr = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #4B4B99;
`;

const LogoContainer = styled.div`
  margin-bottom: 30px;
  margin-top: 10px;
`;

export const Header = ({ children }: HeaderProps) => {
  return (
    <StyledHeader>

      <LogoContainer>
        <img src={logo} />
      </LogoContainer>

      <ButtonGroup>
        <Button className='header-button' variant='text' size='lg' icon={<Icons.Header.Dashboard />}>
          Дашборд
        </Button>

        <Button className='header-button' variant='text' size='lg' icon={<Icons.Header.Analytics />}>
          Аналитика
        </Button>

        <Button className='header-button' variant='text' size='lg' icon={<Icons.Header.Wallet />}>
          Мой кошелёк
        </Button>

        <Button className='header-button' variant='text' size='lg' icon={<Icons.Header.Account />}>
          Аккаунты
        </Button>

        <Button className='header-button' variant='text' size='lg' icon={<Icons.Header.Settings />}>
          Настройки
        </Button>
      </ButtonGroup>

      <StyledBr />

      <ButtonGroup>
        <Button className='header-button' variant='text' size='lg' icon={<Icons.Header.Security />}>
          Безопасность
        </Button>

        <Button className='header-button' variant='text' size='lg' icon={<Icons.Header.Help />}>
          Помощь
        </Button>
      </ButtonGroup>
    </StyledHeader>
  );
};

import React from 'react';
import styled, { css } from 'styled-components';
import { Header } from '../components/layout/header/Header';
import { Card } from '../components/ui/Card/Card';
import { Button } from '../components/ui/Button/Button';

const DashboardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.pageBackground};
  display: grid;
  grid-template-columns: 0.8fr 2.2fr 1fr;
  gap: 6px;
  height: 100%;
  width: 100%;
  margin: 0;
`;

export const Dashboard = () => {


  return (
    <DashboardWrapper className='dashboard'>
      <Header>
        <h1>Финансовый трекер</h1>
      </Header>

      <Card title='Общий баланс'>
        <p>100</p>
      </Card>

      <div className='actions'>
        <Button variant='success' className='income'>
          Доход
        </Button>
        <Button variant='danger' className='expenditure'>
          Расход
        </Button>
      </div>

      <Card title='Последние опереации'>
        <p>Список транзакций</p>
      </Card>
    </DashboardWrapper>
  );
};
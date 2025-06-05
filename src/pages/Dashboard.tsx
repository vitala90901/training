import React from 'react';
import styled, { css } from 'styled-components';
import { Header } from '../components/layout/header/Header';
import { Card } from '../components/ui/Card/Card';
import { Button } from '../components/ui/Button/Button';
import { AddTransictionModal } from '../components/modals/AddTransactionModal';

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

  const [isModalOpen, setIsModalOpen] = React.useState(false);

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
        <Button variant='danger' className='expense'>
          Расход
        </Button>
      </div>

      <Card title='Последние опереации'>
        <Button className='open-modal' onClick={() => setIsModalOpen(true)}>Добавить транзакцию</Button>
        <AddTransictionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}></AddTransictionModal>
      </Card>
    </DashboardWrapper>
  );
};
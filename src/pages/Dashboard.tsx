import React from 'react';
import styled, { css } from 'styled-components';
import { Header } from '../components/layout/header/Header';
import { Card } from '../components/ui/Card/Card';
import { Button } from '../components/ui/Button/Button';
import { AddTransactionModal } from '../components/modals/AddTransactionModal';
import { TransactionList } from '../components/transactions/TransactionList';

const DashboardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.pageBackground};
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas:
    "header . card"
    "header transactions card"
    "header transactions .";
  gap: 25px;
  pading: 20px
  width: 100vw;
  height: 100vh;
  margin: 0;
`;

const HeaderWrapper = styled.div`
  grid-area: header;
`;

const CardWrapper = styled.div`
  grid-area: card;
  margin-top: 10%;
`;

const TransactionsWrapper = styled.div`
  grid-area: transactions;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px;
  border-radius: 5%;
`;

export const Dashboard = () => {

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <DashboardWrapper className='dashboard'>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <TransactionsWrapper>
        <Button variant='success' className='income' size='lg'>
          Доход
        </Button>
        <Button variant='danger' className='expense' size='lg'>
          Расход
        </Button>
        <Button className='open-modal' onClick={() => setIsModalOpen(true)} size='lg'>Добавить транзакцию</Button>
        <AddTransactionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <TransactionList />
      </TransactionsWrapper>

      <CardWrapper>
        <Card title='Общий баланс'>
            <div>balanace</div>
        </Card>
      </CardWrapper>
    </DashboardWrapper>
  );
};
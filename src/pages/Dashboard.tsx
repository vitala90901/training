import React from 'react';
import styled, { css } from 'styled-components';
import { Header } from '../components/layout/header/Header';
import { Card } from '../components/ui/Card/Card';
import { Button } from '../components/ui/Button/Button';
import { AddTransactionModal } from '../components/modals/AddTransactionModal';
import { TransactionList } from '../components/transactions/TransactionList';
import { FinancialAnalisis } from '../components/financialAnalisis/FinancialAnalisis';

const DashboardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.pageBackground};
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas:
    "header greeting card"
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
  box-sizing: border-box;
  height: 100%;
`;

const GreetingWrapper = styled.div`
  grid-area: greeting;
`;

const BtnGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 230px;
`;

export const Dashboard = () => {

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <DashboardWrapper className='dashboard'>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <GreetingWrapper>
        <FinancialAnalisis />
      </GreetingWrapper>

      <TransactionsWrapper>
        <BtnGroup>

          <FilterButtons>
            <Button variant='success' className='income' size='lg'>
              Доход
            </Button>
            <Button variant='danger' className='expense' size='lg'>
              Расход
            </Button>
          </FilterButtons>

          <Button className='open-modal' onClick={() => setIsModalOpen(true)} size='lg'>Добавить транзакцию</Button>
          <AddTransactionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        </BtnGroup>

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
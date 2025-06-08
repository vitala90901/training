import React from "react";
import styled from "styled-components";
import { Card } from "../ui/Card/Card";
import { Icons } from "../pictures/icons";
import { useSelector } from 'react-redux';
import { selectAllTransactions } from "../../slices/transactionsSlice";

const MainWrapper = styled.div`
  font-family: ${({ theme }) => theme.typography.fontMain};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const IconWrapper = styled.div<{ $type: 'expense' | 'income' }>`
  background-color: ${({ $type, theme }) => $type === 'expense' ? theme.colors.danger : theme.colors.success};
  border-radius: 5px;
  box-sizing: border-box;
  padding: 10px;
  height: 45px;
  width: 45px;
  font-size: 25px
`;

const CardGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GreetingContainer = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;

const Greeting = styled.h1`
  margin-top: 50px;
  margin-bottom: 5px;
  font-size: 42px;
`;

const GreetingTitle = styled.p`
  margin: 0;
  font-size: 20px;
`;

const AmountWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AmountTitle = styled.p`
  margin: 0;
`;

const Amount = styled.h2`
  margin: 0;
`;

const getAmount = (trs, type) => {

  let result = 0;

  trs.map((tr) => {
    console.log(tr.expence);
    if (tr.type === type) {
      result+= tr.amount;
    }
  });

  return result;
};

export const FinancialAnalisis = () => {
  const transactions = useSelector(selectAllTransactions);
  console.log(transactions);

  return (
    <MainWrapper>

      <GreetingContainer>
        <Greeting>Добро пожаловать!</Greeting>
        <GreetingTitle>Вот что происходит с вашим операциями сегодня.</GreetingTitle>
      </GreetingContainer>

      <CardGroup>
        <Card size='sm'>
          <IconWrapper $type='income'>
            <Icons.Financial.Income />
          </IconWrapper>
          <AmountWrapper>
            <AmountTitle>Заработано</AmountTitle>
            <Amount>{getAmount(transactions, 'income')} руб</Amount>
          </AmountWrapper>
        </Card>

        <Card size='sm'>
          <IconWrapper $type='expense'>
            <Icons.Financial.Expense />
          </IconWrapper>
         <AmountWrapper>
            <AmountTitle>Потрачено</AmountTitle>
            <Amount>{getAmount(transactions, 'expense')} руб</Amount>
          </AmountWrapper> 
        </Card>
      </CardGroup>

    </MainWrapper>
  );
}
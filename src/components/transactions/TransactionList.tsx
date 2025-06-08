import React from "react";
import { useSelector } from 'react-redux';
import { selectAllTransactions } from "../../slices/transactionsSlice";
import { Transaction } from "./Transaction";
import styled from "styled-components";

const StyledList = styled.ul`
    padding: 0;
    overflow-y: auto;
    scrollbar-width: none;
`;

export const TransactionList = () => {
  const transactions = useSelector(selectAllTransactions);

  const renderTransactions = (trs) => {
    const result = trs.map((tr) => {

        return <Transaction key={tr.id} category={tr.category} amount={tr.amount} type={tr.type} date={tr.date} />
      });
    return result;
  }

  return (
    <StyledList>
      {renderTransactions(transactions)}
    </StyledList>
  )
};
import React from "react";
import { useSelector } from 'react-redux';
import { selectAllTransactions } from "../../slices/transactionsSlice";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const transactions = useSelector(selectAllTransactions);
  console.log(transactions);

  const renderTransactions = (trs) => {
    const result = trs.map((tr) => {
        return <Transaction key={tr.id} category={tr.category} amount={tr.amount} type={tr.type} />
      });
    return result;
  }

  return (
    <div>
      {renderTransactions(transactions)}
    </div>
  )
};
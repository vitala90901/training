import React from "react";
import styled, { css } from "styled-components";

interface TransactionProps {
  category: string;
  amount: number;
  type: string;
};

const StyledTransaction = styled.div<{ $category: string }>`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-radius: 5%;
  margin-bottom: 20px;

  ${({ $category }) => {
    switch($category) {
      case 'Еда':
        return css`
          border: 5px solid #ffc908;
        `;
      case 'Здоровье':
        return css`
          border: 5px solid #006e04;
        `;
      case 'Жильё':
        return css`
          border: 5px solid #03c4ff;
        `;
      case 'Транспорт':
        return css`
          border: 5px solid #323a3d;
        `;
      case 'Другое':
        return css`
          border: 5px solid #000000;
        `;
    }
  }};
`;
const StyledCategory = styled.p<{ $category: string }>`
  ${({ $category }) => {
    switch($category) {
      case 'Еда':
        return css`
          color: #ffc908;
        `;
      case 'Здоровье':
        return css`
          color: #006e04;
        `;
      case 'Жильё':
        return css`
          color: #03c4ff;
        `;
      case 'Транспорт':
        return css`
          color: #323a3d;
        `;
      case 'Другое':
        return css`
          color: #000000;
        `;
    }
  }};
`;
const StyledType = styled.p<{ $type: string }>`
  color: ${({ $type }) => {
    if ($type === 'expense') {
      return 'red';
    } else {
      return 'green';
    }
  }};
`;

export const Transaction = ({ category, amount, type }: TransactionProps) => {

  return (
    <StyledTransaction $category={category}>
      <StyledCategory $category={category}>
        {category}
      </StyledCategory>
      <StyledType $type={type}>
        {type === 'expense' ? 'Расход' : 'Доход'}
      </StyledType>
      <p>{`${amount} руб`}</p>
    </StyledTransaction>
  )
};
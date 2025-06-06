import React from "react";
import styled, { css } from "styled-components";
import { Icons } from "../pictures/icons";

interface TransactionProps {
  category: string;
  amount: number;
  type: string;
  date: string;
};

const StyledTransaction = styled.li<{ $type: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  color: #fff;
  margin-bottom: 20px;
  border: 2px solid #ffffff;
  border-radius: 1em;
  font-family: ${({ theme }) => theme.typography.fontMain};
  font-size: 18px;
  cursor: pointer;
  ${({ $type }) => {
    switch( $type ) {
      case 'expense':
        return css`
          border-color: #026f97;
          &:hover {
            background-color: #026f97;
          }
        `;
      default:
        return css`
          border-color: #6359E9;
          &:hover {
            background-color: #6359E9;
          }
        `;
    }
  }}
    
`;
const StyledCategory = styled.p<{ $category: string }>`
  display: flex;
  align-items: center;
  width: 120px;
  }};
`;
const StyledDate = styled.div`
  width: 80px;
  text-align: center;
  color: #fff;
`;

const StyledAmount = styled.p`
  width: 100px;
`;

const IconWrapper = styled.div`
  font-size: 25px;
  margin-right: 10px;
`;

const renderIcon = (cat: string) => {
  switch(cat) {
      case 'Еда':
        return <Icons.Transaction.Food />;
      case 'Здоровье':
        return <Icons.Transaction.Health />;
      case 'Жильё':
        return <Icons.Transaction.House />;
      case 'Транспорт':
        return <Icons.Transaction.Transport />;
      case 'Другое':
        return <Icons.Transaction.Other />;
      default:
        return <Icons.Transaction.Income />;
  };
};

export const Transaction = ({ category, amount, type, date }: TransactionProps) => {
  console.log(date);
  return (
    <StyledTransaction $type={type}>
      <StyledCategory $category={category}>
        <IconWrapper>
          {renderIcon(category)}
        </IconWrapper>
        {category}
      </StyledCategory>
      <StyledAmount>
        {`${amount} руб`}
      </StyledAmount>
      <StyledDate>
        {date.toString()}
      </StyledDate>
    </StyledTransaction>
  )
};
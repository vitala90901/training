import React from 'react';
import styled, { css } from 'styled-components';
import { TransactionForm } from '../transactions/TransactionForm';

interface AddTransictionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalWrapper = styled.div<{
  $isOpen: boolean;
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: auto;
  width: auto;
  ${({ $isOpen }) => {
    if ($isOpen) {
      return css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `
    } else {
      return css`display: none;`
    }
  }};
`;

const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 30px;
  font-weight: bold;
  color: #1d1d41;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const AddTransactionModal = ({ isOpen, onClose }: AddTransictionModalProps) => {
  return (
    <ModalWrapper $isOpen={isOpen}>
      <TransactionForm onSuccess={onClose}>
        <CloseBtn onClick={onClose}>X</CloseBtn>
      </TransactionForm>
    </ModalWrapper>
  );
};
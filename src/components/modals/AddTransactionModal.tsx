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
  height: 500px;
  width: 500px;
  background-color: black;
  padding: 40px;
  border-radius: 10%;
  transform: translate(-50%, -50%);
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

export const AddTransactionModal = ({ isOpen, onClose }: AddTransictionModalProps) => {
  return (
    <ModalWrapper $isOpen={isOpen}>
      <TransactionForm onSuccess={onClose} />
      <button onClick={onClose}>X</button>
    </ModalWrapper>
  );
};
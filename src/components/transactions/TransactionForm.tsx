import React from "react";
import styled from "styled-components"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { actions } from '../../slices/transactionsSlice';
import { categories } from '../../data/categories';
import { FaPlus, FaMinus, FaTimes } from 'react-icons/fa';

interface TransactionFormProps {
  onSuccess: () => void;
  children: React.ReactNode;
};

type FormData = {
  type: 'income' | 'expense';
  amount: number;
  category: string;
  date: string;
  description?: string;
};

const schema = yup.object({
  type: yup
    .string()
    .oneOf(['income', 'expense'], 'Выберите тип')
    .required('Обязательное поле'),
  amount: yup
    .number()
    .typeError('Должно быть число')
    .positive('Сумма > 0')
    .required('Введите сумму'),
  category: yup.string().required('Выберите категорию'),
  date: yup.date().default(() => new Date()),
  description: yup.string().max(50, 'Максимум 50 символов'),
});

const FormContainer = styled.div`
  width: 500px;
  margin: 0;
  padding: 50px;
  font-family: ${({ theme }) => theme.typography.fontMain};
  padding: 2rem;
  background: ${({ theme }) => theme.colors.hoverBackground};
  border-radius: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Input = styled.input`
  width: 94%;
  padding: 0.75rem;
  border: 3px solid ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.background};
  font-size: 1rem;
  transition: border-color 0.3s;
  background-color: transparent;

  &:focus {
    border-color: ${({ theme }) => theme.colors.background};
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.background};
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 3px solid ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.background};
  font-size: 1rem;
  background-color: transparent;

  &:active, &:focus {
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 94%;
  padding: 0.75rem;
  border: 3px solid ${({ theme }) => theme.colors.background};
  background-color: transparent;
  border-radius: 10px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;

  &:active, &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.background};
  }
`;

const ErrorMessage = styled.p`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
    cursor: not-allowed;
  }
`;

const TypeToggle = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const TypeButton = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: transparent;
  border: 3px solid ${({ theme }) => theme.colors.background};
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ active, theme }) => 
    active ? theme.colors.background : 'transperent'};
  color: ${({ active, theme }) => 
    active ? theme.colors.text : theme.colors.background};
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
`;

const ClosedBtn = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const TransactionForm = ({ onSuccess, children }: TransactionFormProps) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      type: 'expense',
      date: new Date().toISOString().split('T')[0]
    }
  });

  const transactionType = watch('type');

  const onSubmit = (data: any) => {
    const transaction = {
      ...data,
      id: Date.now().toString(),
    }

    dispatch( actions.addTransaction(transaction));

    reset();
    onSuccess();
  };

  const currentCategories = categories[transactionType];
  
  return (
    <FormContainer>

      <ClosedBtn>{children}</ClosedBtn>

      <FormTitle>Добавить транзакцию</FormTitle>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <TypeToggle>
          <TypeButton
            type="button"
            active={transactionType === 'expense'}
            onClick={() => reset({ ...watch(), type: 'expense' })}
          >
            <FaMinus /> Расход
          </TypeButton>
          <TypeButton
            type="button"
            active={transactionType === 'income'}
            onClick={() => reset({ ...watch(), type: 'income' })}
          >
            <FaPlus /> Доход
          </TypeButton>
        </TypeToggle>

        <FormGroup>
          <Label htmlFor="amount">Сумма *</Label>
          <Input
            id="amount"
            type="number"
            step="0.01"
            {...register('amount')}
            placeholder="0.00"
          />
          {errors.amount && <ErrorMessage>{errors.amount.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="category">Категория *</Label>
          <Select id="category" {...register('category')}>
            <option value="">Выберите категорию</option>
            {categories[transactionType].map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Select>
          {errors.category && <ErrorMessage>{errors.category.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="date">Дата *</Label>
          <Input
            id="date"
            type="date"
            {...register('date')}
          />
          {errors.date && <ErrorMessage>{errors.date.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="description">Описание</Label>
          <TextArea
            id="description"
            {...register('description')}
            placeholder="Необязательное описание"
          />
          {errors.description && <ErrorMessage>{errors.description.message}</ErrorMessage>}
        </FormGroup>

        <Button type="submit">
          Добавить транзакцию
        </Button>
      </form>
    </FormContainer>
  );
}

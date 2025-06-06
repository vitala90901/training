import React from "react";
import styled from "styled-components"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { actions } from '../../slices/transactionsSlice';
import { categories } from '../../data/categories';

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

const LabelWrapper = styled.div`
  display: flex;
  gap: 4px;
`;
const StyledLabel = styled.label`
  display: flex;
  align-items: center;
`;
const ErrorMessage = styled.p`
  color: red;
  font-weight: 500;
  font-size: 12px;
`;
const StyledGroup = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  width: 200px;
  height: 60px;
`;

const StyledForm = styled.form`
  border: 2px solid red;
  font-family: ${({ theme }) => theme.typography.fontMain};
  font-size: 30px;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
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
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {children}
      <StyledGroup>
        <LabelWrapper>
          Тип
          <StyledLabel>
            <input
              type="radio"
              value="income"
              {...register('type')}
              className="mr-2"
            />
            Доход
          </StyledLabel>
          <StyledLabel>
            <input
              type="radio"
              value="expense"
              {...register('type')}
              className="mr-2"
            />
            Расход
          </StyledLabel>
        </LabelWrapper>
        {errors.type && (
          <ErrorMessage>{errors.type.message}</ErrorMessage>
        )}
      </StyledGroup>
      <StyledGroup>
        <label htmlFor="category" className="block mb-1">
          Категория
        </label>
        <select
          id="category"
          {...register('category')}
          className="w-full p-2 border rounded"
        >
          <option value="">Выберите...</option>
          {currentCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-red-500 text-sm">{errors.category.message}</p>
        )}
      </StyledGroup>
      <StyledGroup>
        <label htmlFor="amount" className="block mb-1">
          Сумма
        </label>
        <input
          id="amount"
          type="number"
          step="0.01"
          {...register('amount')}
          className="w-full p-2 border rounded"
        />
        {errors.amount && (
          <p className="text-red-500 text-sm">{errors.amount.message}</p>
        )}
      </StyledGroup>
      <StyledGroup>
        <label htmlFor="date" className="block mb-1">
          Дата
        </label>
        <input
          id="date"
          type="date"
          {...register('date')}
          className="w-full p-2 border rounded"
        />
      </StyledGroup>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Добавить транзакцию
      </button>

    </StyledForm>
  );
}

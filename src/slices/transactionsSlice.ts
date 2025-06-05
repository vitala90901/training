import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

const transactionsAdapter = createEntityAdapter();

const initialState = transactionsAdapter.getInitialState();

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: transactionsAdapter.addOne,
    removeTransaction: (state, { payload }) => {
      transactionsAdapter.removeOne(state, payload);
    },
  },
})

export const { actions } = transactionsSlice;
export const {  
  selectAll: selectAllTransactions,
  selectById: selectTransactionById,
  selectIds: selectTransactionIds,
  selectEntities: selectTransactionEntities,
  selectTotal: selectTotalTransactions 
} = transactionsAdapter.getSelectors((state: RootState) => state.transactions);
export default transactionsSlice.reducer;
 import { createSelector } from 'reselect';
 

//Select the data state
const selectData = (state) => state.data;

// Memoized selector for items (products)
export const selectItems = createSelector(
  [selectData],
  (data) => data?.item || []
); 
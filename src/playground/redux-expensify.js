import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE

const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    expense: {
        id
    }
});

// EDIT_EXPENSE

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
  });

// SET_TEXT_FILTER

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
  });

// SORT_BY_DATE

const sortByDate = (sortBy = '') => ({
    type: 'SORT_BY_DATE',
    sortBy
  });

// SORT_BY_AMOUNT

const sortByAmount = (sortBy = '') => ({
    type: 'SORT_BY_AMOUNT',
    sortBy
  });

// SET_START_DATE

const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE

const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => {
                return id !== action.expense.id;
            });
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                };
            });
        default: 
            return state;
    }
};

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return { ...state,
                    text: action.text,
                    };
        case 'SORT_BY_DATE':
            return { ...state,
                    sortBy: 'date'
                    };
        case 'SORT_BY_AMOUNT':
            return { ...state,
                    sortBy: 'amount'
                    };
        case 'SET_START_DATE':
            return { ...state,
                    startDate: action.startDate
                    };
        case 'SET_END_DATE':
            return { ...state,
                    endDate: action.endDate
                    };
        default: 
        return state;
    }
};

// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
    );

store.subscribe(() => {
    console.log(store.getState());
});

/* const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 420 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 3 }));
store.dispatch(removeExpense({ id: expenseOne.expense.id }));
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 5 }));
store.dispatch(setTextFilter('rent'));
store.dispatch(sortByDate());
store.dispatch(sortByAmount()); */

store.dispatch(setStartDate(120));
store.dispatch(setStartDate());
store.dispatch(setEndDate(360));



/* const demoState = {
  expenses: [{
      id: 'some id',
      description: 'February Rent',
      note: 'My monthly rent',
      amount: 420,
      createdAt: 0
  }],
  filters: {
      text: 'rent',
      sortBy: 'amount', //date or amount
      startDate: undefined,
      endDate: undefined
  }
}; */

import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => {
    return (
        <div>
            <h1> Expense List </h1>
            {props.expenses.length}
            {[props.filters.text]}
        </div>
    )
};

export default connect((state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    };
})(ExpenseList);

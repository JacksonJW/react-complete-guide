import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import AddNewExpenseButton from "./AddNewExpenseButton";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [displayExpenseForm, setDisplayExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setDisplayExpenseForm(false);
  };

  const showExpenseForm = () => {
    setDisplayExpenseForm(true);
  };

  const hideExpenseForm = () => {
    setDisplayExpenseForm(false);
  };

  if (displayExpenseForm) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideExpenseForm}
        />
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <AddNewExpenseButton onButtonClick={showExpenseForm} />
      </div>
    );
  }
};

export default NewExpense;

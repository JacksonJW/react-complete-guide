import React from "react";
const AddNewExpenseButton = (props) => {
  const displayExpenseForm = () => {
    props.onButtonClick();
  };

  return (
    <div className="add-new-expense__actions">
      <button onClick={displayExpenseForm}>Add New Expense</button>
    </div>
  );
};
export default AddNewExpenseButton;

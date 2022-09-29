import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense() {
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData />
      {/* Call "OnXyz" to illustrate that  this function will be trigger when sth happens inside of this component*/}
    </div>
  );
}

export default NewExpense;

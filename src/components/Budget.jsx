import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, remainingBudget, setBudget } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    const inputBudget = event.target.value;

    // Check if the entered value is a valid number
    if (!isNaN(inputBudget)) {
      const newBudgetValue = parseFloat(inputBudget);

      // Check if the new budget exceeds the remaining budget
      if (newBudgetValue <= remainingBudget) {
        setNewBudget(newBudgetValue);
        setBudget(newBudgetValue); // Assuming you have a function to update the budget in your context
      } else {
        alert("The value should not exceed the remaining budget.");
      }
    } else {
      alert("Please enter a valid number for the budget.");
    }
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget:</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      />
    </div>
  );
};

export default Budget;
